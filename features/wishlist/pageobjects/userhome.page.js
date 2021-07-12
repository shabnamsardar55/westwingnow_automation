import Page from '../../../lib/page';
import productListPage from './productlist.page'

/**
 * This file contains selectors and methods for user home page after login.
 * Its a page appear after login
 */
class UserHomePage extends Page {
    
     get userFirstnameText () { return $('div[data-testid="one-header-icon-my-account"]')}
     get productNameText () { return $('div[data-testid="plp-products-grid"] > div:nth-child(1) h2[data-testid="product-title"]')}
     get wishlistCounterText () { return $('span[data-testid="wishlist-counter"]')}

     async waitForLoginComplete (firstname) {
         return this.waitUntilTextPresentInElement(await this.userFirstnameText, firstname)
     }

     async getFirstProductFillProperty () {
        let wishListIcon = await (await productListPage.productList)[0].$('svg.ww-uikit_StyledHeartIcon-sc-1jh2r08')
        return wishListIcon.getAttribute('data-is-selected')
     }

     async navigateToWishList () {
        return (await this.wishlistCounterText).click()         
     }
}

export default new UserHomePage();