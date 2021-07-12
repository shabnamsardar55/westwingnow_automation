import Page from '../../../lib/page';

/**
 * This file contains selectors and methods for product list page
 */
class ProductListPage extends Page {
    get productList () { return $$('div[data-testid="plp-products-grid"] > div')}
    
     async getProductList () {
        await (await this.productList)[0].waitForDisplayed(this.waitObject)
        return (await this.productList).length
    }

    async addFirtProductInWishList () {
        let wishListIcon = await (await this.productList)[0].$('svg.ww-uikit_StyledHeartIcon-sc-1jh2r08')
        let selectedProductName = await (await this.productList)[0].$('h2[data-testid="product-title"]')
        global.wishProductName = await selectedProductName.getText()
        await (await wishListIcon).click()
    }
}

export default new ProductListPage();
