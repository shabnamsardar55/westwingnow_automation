import Page from '../../../lib/page';
/**
 * This file contains selectors and methods for home page
 */
class HomePage extends Page {

    get acceptCookiesButton () { return $('#onetrust-accept-btn-handler')}
    get westwingnowLogo () { return $('svg.kfsNAz[aria-labelledby="title"]') }
    get productSearch () { return $('input[data-testid="search-input"]')} 
    get firstSuggestionItem () {return $('div[data-testid="suggestions"]>div:nth-child(1) span')}
    get productSearchButton () { return $('svg[data-testid="header-search-icon"]')}
    get productTitle () { return $('header > div h1.RegularTitle__StyledPageTitle-zjo017-0')}
        
    async pageHasBeenLoaded () {
        await (await this.acceptCookiesButton).waitForExist(this.waitObject)
        await (await this.acceptCookiesButton).click()
        await (await this.westwingnowLogo).waitForExist(this.waitObject)
        let isDisplayed = await (await this.westwingnowLogo).isDisplayed()
        return isDisplayed
    }

    async searchProduct (productName) {
        await (await this.productSearch).waitForClickable(this.waitObject)
        await this.enterText(this.productSearch, productName)
        await (await this.firstSuggestionItem).waitForExist(this.waitObject)
        await (await this.firstSuggestionItem).click()
        await (await this.productTitle).waitForExist(this.waitObject)
        return this.waitUntilTextPresentInElement(await this.productTitle, productName)
    }

    open (appUrl) {
        return super.open(appUrl);
    }
}

export default new HomePage();
