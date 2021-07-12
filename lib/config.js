/**
* This file contains environment test data.
*/
module.exports = {
    "prod": {
        //Assumption that configuration given for Production
        browserName: 'chrome',
        baseUrl: 'https://www.westwingnow.de/',
        logLevel: 'info',
        maxInstance: 5,
        username: 'shabnamsardar55@gmail.com',
        password: 'Password1',
        timeout: 10000,
        bail:0,
        firstname: 'Shabnam'    
    },
    "qa": {
        //QA Configuration go here
    },
    "snd": {
        //Sandbox Configuration go here
    },
}