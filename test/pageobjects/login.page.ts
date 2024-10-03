import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    /**
     * define selectors using getter methods
     */
    public get essentialCookies(){
        return $('//button[@aria-label="Essential cookies only"]');
    }

    public get learnMoreAboutSmartTV () {
        return $('//a[@data-test-id="card-1-cta-0"]');
    }

    public get skyGlassDeals () {
        return $('//*[@href="https://www.sky.com/glass/buy/personalise-sky-glass?sc=glass-small-48m&irct=glassHome-glass-hero-sizes-medium"]');
    }

    public get btnSubmit () {
        return $('(//button[@class="icon-button__Button-sc-1944ag5-0 iPWeZu"])[4]');
    }

    private get greenTVColor()
    {
        return $('//button[@data-test-id="configure-frame-selection-LLAMA_GREEN"]');
    }

    private get greenSpeaker()
    {
        return $('//button[@data-test-id="configure-speaker-selection-LLAMA_GREEN"]');
    }

    private get priceOfGreenSpeaker()
    {
        return $('(//p[@class="ColorSwatches__Label-sc-1k0kzcm-3 FuJgs"])[8]');
    }

    private get closepopUp()
    {
        return $('//*[@data-test-id="modal-dialog-close"])');
    }

    private get continueConfiguration()
    {
        return $('//button[@data-test-id="configure-continue"]');
    }

    private get continueSkyLive()
    {
        return $('//button[@data-test-id="sky-live-continue-cta"]');
    }

    private get continueNewUser()
    {
        return $('//button[@data-test-id="prospect-continue-button"]');
    }

    private get continueEntertainment()
    {
        return $('//button[@data-test-id="entertainment-cta"]');
    }

    private get continueExperienceContracts()
    {
        return $('//button[@data-test-id="experience-contracts-continue-cta"]');
    }

    private get houseNumber()
    {
        return $('//input[@data-test-id="house-number-lookup-field"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async enterHouseNumber(hNumber: string)
    {
        await (this.houseNumber.waitForExist());
        await (this.houseNumber.waitForDisplayed());
        await (this.houseNumber.waitForClickable());
        await (this.houseNumber).setValue(hNumber);
    }

    public async tapOnContinueExperienceContracts()
    {
        await (this.continueExperienceContracts.waitForExist());
        await (this.continueExperienceContracts.waitForDisplayed());
        await (this.continueExperienceContracts.waitForClickable());
        await (this.continueExperienceContracts.click());
    }

    public async tapOnContinueEntertainment()
    {
        await (this.continueEntertainment.waitForExist());
        await (this.continueEntertainment.waitForDisplayed());
        await (this.continueEntertainment.waitForClickable());
        await (this.continueEntertainment.click());
    }

    public async tapOnContinueNewUser()
    {
        await (this.continueNewUser.waitForExist());
        await (this.continueNewUser.waitForDisplayed());
        await (this.continueNewUser.waitForClickable());
        await (this.continueNewUser.click());
    }

    public async tapOnContinueSkyLive()
    {
        await (this.continueSkyLive.waitForExist());
        await (this.continueSkyLive.waitForDisplayed());
        await (this.continueSkyLive.waitForClickable());
        await (this.continueSkyLive.click());
    }

    public async tapOnContinueConfigurationButton()
    {
        await (this.continueConfiguration.waitForExist());
        await (this.continueConfiguration.waitForDisplayed());
        await (this.continueConfiguration.waitForClickable());
        await (this.continueConfiguration.click());
    }

    public async checkForModalDialog(){
        let modalPresent = await (this.closepopUp).isExisting();
        if(modalPresent)
        {
            await (this.closepopUp).click();
        }
    }

    public async selectGreenTV()
    {
        await (this.greenTVColor.waitForExist());
        await (this.greenTVColor.waitForDisplayed());
        await (this.greenTVColor.waitForClickable());
        await (this.greenTVColor.click());
    }

    public async selectGreenSpeaker()
    {
        await (this.greenSpeaker.waitForExist());
        await (this.greenSpeaker.waitForDisplayed());
        await (this.greenSpeaker.waitForClickable());
        await (this.greenSpeaker.click());
        await (this.priceOfGreenSpeaker.waitForExist());
        await (this.priceOfGreenSpeaker.waitForDisplayed());
    }

    public async getGreenSpeakerPrice()
    {
        await (this.priceOfGreenSpeaker.waitForDisplayed());
        await (this.priceOfGreenSpeaker.waitForStable());
        await console.log((this.greenSpeaker.getText()));
    }

    public async tapOnEssentialCookies()
    {
        await (this.essentialCookies.waitForExist());
        await (this.essentialCookies.waitForDisplayed());
        await (this.essentialCookies.waitForClickable());
        await (this.essentialCookies.click());
    }


    public async tapOnLearnAboutSmartTVButton(){
        await (this.learnMoreAboutSmartTV.waitForExist());
        await (this.learnMoreAboutSmartTV.waitForDisplayed());
        await (this.learnMoreAboutSmartTV.waitForClickable());
        await (this.learnMoreAboutSmartTV.click());
    }

    public async tapOnXButton(){
        await (this.btnSubmit.waitForExist());
        await (this.btnSubmit.waitForDisplayed());
        (expect (this.btnSubmit).not.toBeClickable());
        browser.back();
    }

    public async tapOnGetSkyGlassDeals(){
        await (this.skyGlassDeals.waitForExist());
        await (this.skyGlassDeals.waitForDisplayed());
        await (this.skyGlassDeals.waitForClickable());
        await (this.skyGlassDeals.click());
    }
}

export default new LoginPage();
