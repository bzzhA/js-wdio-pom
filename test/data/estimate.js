class Estimate{
    get region() {return $('//div[contains(text(),"Region")]')}
    get provisioningModel() {return $('//div[contains(text(),"Provisioning model")]')}
    get commitmentTerm() {return $('//div[contains(text(),"Commitment term")]')}
    get instanceType() {return $('//div[contains(text(),"Instance type")]')}
    get localSSD() {return $('//div[contains(text(),"Local SSD:")]')}
    get totalEstimatedCost() {return $('//b[contains(text(),"Total Estimated Cost")]')}
    get emailBtn() {return $('//button[@title="Email Estimate"]')}
    get estimateEmail() {return $('//form[@name="emailForm"]/md-content/div[3]//input')}
    get sendEmailEstimate() {return $('//button[@aria-label="Send Email"]')}
}

export default new Estimate();