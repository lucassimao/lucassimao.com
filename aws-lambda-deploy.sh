#!/bin/bash

rm -rf ./lambda.zip
zip -r lambda.zip node_modules/
zip -j lambda.zip mailer/*

aws lambda update-function-code --function-name send-email --zip-file fileb://lambda.zip
rm ./lambda.zip