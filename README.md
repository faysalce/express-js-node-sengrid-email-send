# SkyAds

# SkyAds Express Server Start Guide 

# Environment vars
This project uses the following environment variables (.env file indide this project) please change required value:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|SENDGRID_API_KEY           | This key you have to get from sengrid webapi and platform nodejs     | "*"      |
|TO_EMAIL           | This key you can set here where email will go           | "*"      |
|FROM_EMAIL           | This key you can set here from email it will be sendgrid Sender Authentication > Single Sender Verification  email        | "*"      |
|EMAIL_SUBJECT           | This key you can set here email subject          | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version latest stable


# Getting started
- Clone the repository
```
git clone  https://github.com/zack686/SkyAds.git
```
- Install dependencies
```
cd SkyAds
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3010`

-  endpoints

  email sending end point Endpoint : http://localhost:3010/sendmail/



# Additional advice
If you want to alive express server always even your server restart you need to use a additional node packedge pm2 below for ubuntu server how you mentioned pm2 install process.

please go to application folder with cd command then 

- sudo npm install pm2 -g
- sudo pm2 start --name=SkyAds npm -- start


