import Page from './page.js';
class StartPage extends Page {
    get findInput() {return $('//input[@aria-label="Search"]');}
    async enterTextAndSend(value) {
        await this.findInput.click()
        await this.findInput.setValue(value)
        await browser.keys(['Enter'])
    }
    async open () {
        await super.open('https://cloud.google.com/');
        await browser.maximizeWindow()
    }
}

export default new StartPage();
