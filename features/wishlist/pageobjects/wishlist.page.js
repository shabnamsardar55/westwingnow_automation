import Page from '../../../lib/page';

/**
 * This file contains selectors and methods for Wishlist page
 */
class WishListPage extends Page {
    get wishlistHeaderText () { return $('div.wishlistContainers a.moodBoard__switchHeaderButton--wishlist')}
    get deleteProductButton () { return $('button.blockListProduct__delete')}
    get noWishlistProductText () { return $('div.wishlistNoProducts__info')}

    async deleteWishListProduct () {
        await (await this.deleteProductButton).waitForDisplayed(this.waitObject)
        return (await this.deleteProductButton).click()         
     }

    async getNoWishlistProductText () {
        await (await this.noWishlistProductText).waitForDisplayed(this.waitObject)
        return (await this.noWishlistProductText).getText()
    }
}

export default new WishListPage();