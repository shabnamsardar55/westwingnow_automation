/**
* This file contains common page methods and object.
*/
export default class Page {

    async enterText(element, text) {
        await (await element).clearValue()
        await (await element).setValue(text)        
    }

    async waitUntilTextPresentInElement(element, text) {
        try {
            await (await element).waitUntil(function () {
                return this.getText() == text
            }, {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s',
                interval: 500
            });
                
        } catch (error) {
            console.log('----Maybe we caught timeout')            
        }
        return (await element).getText()
    }

    waitObject = {timeout:10000, interval:200};

    open (appUrl) {
        browser.url(appUrl)
        browser.maximizeWindow();
    }
}