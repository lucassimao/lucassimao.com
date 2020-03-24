const sgMail = require('@sendgrid/mail');


exports.handler = async function(event) {
    if (!process.env.SENDGRID_API_KEY){
        throw 'No SENDGRID_API_KEY env variable found'
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const requestBody = JSON.parse(event.body);
    const { from, text} = requestBody;

    const msg = {
        to: 'lsimaocosta@gmail.com',
        subject: 'You got a new message from your site!',
        from,
        text
    };
      
    return sgMail.send(msg);
}