const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {

    if (!process.env.SENDGRID_API_KEY) {
        throw 'No SENDGRID_API_KEY env variable found'
    }

    const { requestContext: { http: { method } } } = event;

    if (method == 'POST') {
        const data = JSON.parse(event.body);
        const { name, from, text } = data;
        const msg = {
            to: 'lsimaocosta@gmail.com',
            subject: `${name} just sent you a message!`,
            from,
            text
        };

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        return new Promise((resolve, reject) => {
            sgMail.send(msg)
                .then(resolve)
                .catch((error) => {
                    const { message, code, response: { body } } = error
                    resolve({
                        "isBase64Encoded": false,
                        "statusCode": code,
                        "headers": { "content-type": "application/json" },
                        "body": JSON.stringify({ message, code, body })
                    })
                })
        })
    }
}