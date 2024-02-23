import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get email () {
        return $('#email');
    }

    public get nextButton () {
        return $('#nextButton');
    }

    public get password () {
        return $('#password');
    }

    public get signInButton () {
        return $('#signInButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.email.setValue(email);
        (await this.nextButton).click;
        await this.password.setValue(password);
        await this.signInButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();
