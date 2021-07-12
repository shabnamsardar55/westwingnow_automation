import { Given, When, Then } from '@cucumber/cucumber';
import homePage from './../pageobjects/home.page';
import productListPage from './../pageobjects/productlist.page';
import loginPage from './../pageobjects/login.page';
import config from '../../../lib/config';
import userhomePage from './../pageobjects/userhome.page';
import wishlistPage from './../pageobjects/wishlist.page'

/**
 * We can pass additional parameter environment e.g. qa or snd.
 * Configuration will be used as per environemnt
 */
const testEnv = process.env.TEST_ENV != null ? process.env.TEST_ENV : 'prod'; 

Given(/^I am on the WestwingNow home page$/, async () => {
    homePage.open(config[testEnv].baseUrl)
    let pageReady = await homePage.pageHasBeenLoaded()
    expect(pageReady).toStrictEqual(true)
});

When(/^I search for "(.*)"$/, async (productName) => {
    let title = await homePage.searchProduct(productName)
    expect(title.toLowerCase()).toMatch(productName.toLowerCase())
});

Then(/^I should see product listing page with a list of products$/, async () => {
    await loginPage.closeLoginRegisterOverLay()
    let numberOfProducts = await productListPage.getProductList()
    expect(numberOfProducts > 0).toStrictEqual(true)
});

When(/^I click on wishlist icon of the first found product$/, async () => {
    await productListPage.addFirtProductInWishList()
});

Then(/^I should see the login\/registration overlay$/, async () => {
    let header = await loginPage.getLoginPopupHeader()
    expect(header.toLowerCase()).toMatch('Neukunde?'.toLowerCase())
})

When(/^I switch to login form of the overlay$/, async () => {
    let header = await loginPage.switchTologinOverlay()
    expect(header.toLowerCase()).toMatch('Bereits registriert?'.toLowerCase())
})

When(/^I log in with registered test user$/, async () => {
    await loginPage.login(config[testEnv].username, config[testEnv].password)
    await userhomePage.waitForLoginComplete(config[testEnv].firstname)
    expect(userhomePage.userFirstnameText).toHaveTextContaining(config[testEnv].firstname)
})

Then(/^the product should be added to the wishlist$/, async () => {
    expect(await userhomePage. productNameText).toHaveTextContaining(global.wishProductName)
    expect(await userhomePage.getFirstProductFillProperty()).toHaveAttributeContaining("true")
    expect(await userhomePage.wishlistCounterText).toHaveTextContaining("1")
})

Then(/^I go to the wishlist page$/, async () => {
    await userhomePage.navigateToWishList()
    expect(await wishlistPage.wishlistHeaderText).toHaveTextContaining("Wunschliste")
})

Then(/^I delete the product from my wishlist$/, async () => {
    await wishlistPage.deleteWishListProduct()
    expect(await wishlistPage.getNoWishlistProductText()).toHaveTextContaining('Die Wunschliste ist momentan leer')
})