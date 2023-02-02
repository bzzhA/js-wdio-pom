import Page from "./page.js";

class CalculatorPage extends Page{
    get firstFrame(){return $('devsite-iframe>iframe')};
    get secondFrame(){return $('#myFrame')};
    get numberOfInstances() {return $("//input[contains(@ng-model, 'quantity')]");};
    get computeEngine() {return $('//md-tab-item[1]/div/div')};
    get operatingSystem() {return $('//md-select[@ng-model="listingCtrl.computeServer.os"]')};
    get VMclass() {return $('//md-select[@placeholder="VM Class"]')};
    get series() {return $('//md-select[@placeholder="Series"]')};
    get machineType() {return $('//md-select[@placeholder="Instance type"] ')};
    get checkBoxGPU() {return $$('//md-checkbox[@aria-label="Add GPUs"]')[0]};
    get GPUsType() {return $('//*[@placeholder="GPU type"]')};
    get numberGPUs() {return $('//*[@placeholder="Number of GPUs"]')};
    get localSSD() {return $$('//*[@placeholder="Local SSD"]')[0]};
    get datacenterLocation() {return $$('//md-select[@placeholder="Datacenter location"]')[0]};
    get commitedUsage() {return $$('//md-select[@placeholder="Committed usage"]')[0]};
    get estimateBtn() {return $$('//button[@aria-label="Add to Estimate"]')[0]};
    get estimateCard() {return $('#resultBlock')}
    choiceOperatingSystem(name) {
        const item = {
            free: '//div[contains(text(),"Free: Debian, CentOS, CoreOS, Ubuntu or BYOL")]'
        }
        return $$(item[name])[1]
    }
    choiseVMclass(name) {
        const item = {
            regular: '//div[contains(text(),"Regular")]'
        }
        return $$(item[name])[1]
    }
    choiseSeries(name) {
        const items = {
            n1: '//div[contains(text(),"N1")]',
        }
        return $$(items[name])[0]
    }
    choiseMachineType(name) {
        const items = {
            standard: '//div[contains(text(),"n1-standard-8")]'

        }
        return $$(items[name])[0]
    }
    choiseGPUtype(name) {
        const item = {
            NVIDIATeslaV100: '//div[contains(text(),"NVIDIA Tesla V100")]'
        }
        return $$(item[name])[0]
    }
    choiseNumberGPU(number) {
        const items = {
            1: '//div[@class="md-select-menu-container md-active md-clickable"]//md-option[2]/div'
        }
        return $(items[number])
    }
    choiseLocalSSD(name){
        const items = {
            '2x375': '//div[contains(text(),"2x375")]'
        }
        return $(items[name])
    }
    choiseLocation(name) {
        const items = {
            frankfurt: '//md-option[@value="europe-west3"]/div'
        }
        return $$(items[name])[2]
    }
    choiseUsage(name) {
        const items = {
            '1 Year': '//div[contains(text(),"1 Year")]'
        }
        return $$(items[name])[1]
    }
    async wait() {
        await browser.pause(1000)
    }

    async switchFrame() {
        await browser.switchToFrame(await this.firstFrame)
        await browser.switchToFrame(await this.secondFrame)
    }
    async valueOfInstance(value) {
        await this.numberOfInstances.setValue(value)
    }
    async selectComputeEngine() {
        await this.computeEngine.click()
    }
    async selectOperatingSystem() {
        await this.operatingSystem.click();
    }
    async selectVMclass() {
        await this.VMclass.click()
    }
    async selectMachineType() {
        await this.machineType.click()
    }
    async selectSeries() {
        await this.series.click()
    }
    async selectGPU() {
        await this.checkBoxGPU.click()
    }
    async selectGPUtype() {
        await this.GPUsType.click()
    }
    async selectGPUnumber() {
        await this.numberGPUs.click()
    }
    async selectLocalSSD() {
        await this.localSSD.click()
    }
    async selectDatacenterLocation() {
        await this.datacenterLocation.click()
    }
    async selectCommitedUsage() {
        await this.commitedUsage.click()
    }
    async clickEstimate() {
        await this.estimateBtn.click()
    }
    async waitAndClick(element, timeout) {
        await element.waitForDisplayed({timeout})
        await element.click()
    }
    async pauseAndRefresh() {
        await browser.pause(5000);
        await browser.refresh();
    }
    async pasteText() {
        await browser.keys(['Command', 'V'])
    }
    async newWindow(path) {
        await browser.newWindow(path);
    }
    async switchWindow(path) {
        await browser.switchWindow(path)
    }
}

export default new CalculatorPage()