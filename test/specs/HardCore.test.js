import StartPage from '../pageobjects/start.page.js';
import SearchPage from "../pageobjects/search.page.js";
import CalculatorPage from "../pageobjects/calculator.page.js";
import MinuteMail from "../data/yopMail.js"
import Estimate from "../data/estimate.js";

describe('Google cloud calculator test ```HardCore```', () => {
    const text = 'Google Cloud Platform Pricing Calculator';
    const instances = 4;
    const email = 'https://yopmail.com/en/email-generator';
    const calc = 'https://cloud.google.com/products/calculator';
    it('Open cloud search page and check', async () => {
        await StartPage.open();
        await StartPage.enterTextAndSend(text);

        await expect(StartPage.findInput).toHaveValue(text);
        await expect(browser).toHaveTitleContaining('Search results for');
    });
    it('Search target should be found and opened', async () => {
        await expect(SearchPage.SearchLink).toHaveTextContaining('Google Cloud Pricing Calculator');
        await SearchPage.SearchLinkClick();
        await expect(browser).toHaveTitle('Google Cloud Pricing Calculator');
    });
    it('Add data on a machine in cloud calculator ', async () => {
        await CalculatorPage.switchFrame();
        await CalculatorPage.selectComputeEngine();
        await CalculatorPage.valueOfInstance(instances);
        await CalculatorPage.selectOperatingSystem();
        await CalculatorPage.waitAndClick(CalculatorPage.choiceOperatingSystem('free'), 3000);
        await CalculatorPage.selectVMclass();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseVMclass('regular'), 3000);
        await CalculatorPage.selectSeries();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseSeries('n1'), 3000);
        await CalculatorPage.selectMachineType();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseMachineType('standard'), 3000);
        await CalculatorPage.selectGPU();
        await CalculatorPage.selectGPUtype();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseGPUtype('NVIDIATeslaV100'), 3000);
        await CalculatorPage.selectGPUnumber();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseNumberGPU(1), 3000);
        await CalculatorPage.selectLocalSSD();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseLocalSSD('2x375'), 3000);
        await CalculatorPage.selectDatacenterLocation();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseLocation('frankfurt'), 3000);
        await CalculatorPage.selectCommitedUsage();
        await CalculatorPage.waitAndClick(CalculatorPage.choiseUsage('1 Year'), 3000)
        await CalculatorPage.clickEstimate();

        await expect(CalculatorPage.estimateCard).toBeDisplayed()
    });
    it('Check button email on Estimate block', async () => {
        await expect(Estimate.emailBtn).toBeDisplayed();
        await expect(Estimate.emailBtn).toBeClickable();
        await CalculatorPage.wait();
    });
    it('Switch window on YOPmail email and copy Email', async () => {
        await CalculatorPage.newWindow(email);
        await expect(browser).toHaveTitleContaining('Email generator');
        await CalculatorPage.waitAndClick(MinuteMail.copyBtn, 3000);
        await CalculatorPage.wait();
    });
    it('Switch window on Calculator, click email button and paste Email', async () => {
        await CalculatorPage.switchWindow(calc);
        await CalculatorPage.switchFrame();
        await CalculatorPage.waitAndClick(Estimate.emailBtn, 3000);
        await CalculatorPage.wait();
        await CalculatorPage.waitAndClick(Estimate.estimateEmail, 3000);
        await CalculatorPage.wait();
        await CalculatorPage.pasteText();
        await CalculatorPage.wait();
        await expect(Estimate.sendEmailEstimate).toBeDisplayed();
        await expect(Estimate.sendEmailEstimate).toBeClickable();
    });
    it('Send email and check', async () => {
        await CalculatorPage.wait();
        await CalculatorPage.waitAndClick(Estimate.sendEmailEstimate, 3000);
        await CalculatorPage.wait();
        await CalculatorPage.switchWindow(email);
        await CalculatorPage.pauseAndRefresh();
        await CalculatorPage.waitAndClick(MinuteMail.message, 3000);
        await MinuteMail.switchEmailFrame();
        await expect(MinuteMail.mailHeader).toHaveText('Google Cloud Price Estimate');
    });
    it('Compare the cost in the Estimate block and the cost in the Email', async () => {
        await expect(MinuteMail.totalEstimateOnEmail).toHaveText('USD 1,081.20');
    });
});