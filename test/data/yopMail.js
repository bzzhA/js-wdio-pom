class spamEmail {
    get copyBtn() {return $('//button[@id="cprnd"]')};
    get message() {return $('//*[@class="nw"]/button[2]//span')};
    get mailHeader () {return $('//header/div[3]/div[1]')};
    get mailFrame () {return $('//*[@id="ifmail"]')};
    get totalEstimateOnEmail () {return $$('//div[@id="mail"]//h3') [1]};
    async switchEmailFrame() {
        await browser.switchToFrame(await this.mailFrame)
    }
}

export default new spamEmail()