import Page from '../../../lib/page';

/**
 * This file contains selectors and for Login page
 */
class LoginPage extends Page {

    get usernameInput () { return $('input[data-testid="long-register-email-field"]') }
    get passwordInput () { return $('input[data-testid="long-register-password-field"]') }
    get submitButton () { return $('button[data-testid="login_reg_submit_btn"]') }
    get loginOnRegistrationButton () { return $('button[data-testid="login-button"]')}
    get closeLoginRegOverlayButton () { return $('button[data-identifier="LOGIN_AND_REGISTER"]')}
    get switchToLoginButton () { return $('button[data-testid="login_reg_switch_btn"]')}
    get loginTitleText () { return $('div[data-testid="login_and_register"] p.StyledTitle___default-sc-1x0c4zz-0')}

    async login (username, password) {
        await (await this.usernameInput).waitForDisplayed(this.waitObject)
        await this.enterText(this.usernameInput, username)
        
        await (await this.passwordInput).waitForDisplayed(this.waitObject)
        await this.enterText(this.passwordInput, password)

        await (await this.submitButton).waitForDisplayed(this.waitObject)
        return (await this.submitButton).click();
    }

    open () {
        return super.open('login');
    }

    async getLoginPopupHeader () {
        await (await this.loginTitleText).waitForDisplayed(this.waitObject)
        return (await this.loginTitleText).getText()
    }

    async switchToLoginPage () {
        await (await this.switchToLoginButton).waitForDisplayed(this.waitObject)
        expect(await this.switchToLoginButton).toHaveTextContaining('Hier einloggen')
        return (await this.switchToLoginButton).click()
    }

    async closeLoginRegisterOverLay() {
            await (await this.loginOnRegistrationButton).waitForDisplayed(this.waitObject)
            await (await this.loginOnRegistrationButton).click()
            await (await this.closeLoginRegOverlayButton).waitForDisplayed(this.waitObject)
            await (await this.closeLoginRegOverlayButton).click()
    }

    async switchTologinOverlay() {
        await (await this.switchToLoginButton).waitForDisplayed(this.waitObject)
        await (await this.switchToLoginButton).click()
        return (await this.loginTitleText).getText()
    }
}

export default new LoginPage();
