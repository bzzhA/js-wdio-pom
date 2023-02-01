import StartPage from '../pageobjects/start.page.js';
import SearchPage from "../pageobjects/search.page.js";
import CalculatorPage from "../pageobjects/calculator.page.js";
import Machine from "../data/machine.js";
import Estimate from "../data/estimate.js";

describe('Google cloud calculator test ```Hurt Me Plenty```', () => {
    const text = 'Google Cloud Platform Pricing Calculator';
    const instances = 4;
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
        await CalculatorPage.waitAndClick(CalculatorPage.choiceOperatingSystem('free'),3000);
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
    it('Check data of Estimate card', async () => {
        await expect(Estimate.region).toHaveTextContaining(Machine.region);
        await expect(Estimate.provisioningModel).toHaveTextContaining(Machine.provisioningModel);
        await expect(Estimate.localSSD).toHaveTextContaining(Machine.localSSD);
        await expect(Estimate.instanceType).toHaveTextContaining(Machine.instanceType);
        await expect(Estimate.commitmentTerm).toHaveTextContaining(Machine.commitmentTerm);

        await expect(Estimate.totalEstimatedCost).toHaveTextContaining(Machine.totalEstimatedCost);
    });
});


