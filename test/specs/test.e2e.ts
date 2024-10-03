import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', function() {
    this.retries(3);

    it('should login with valid credentials', async () => {
        await browser.url('https://www.sky.com/');

  //      await LoginPage.asynctapOnEssentialCookies();
        await LoginPage.tapOnLearnAboutSmartTVButton();
   //     await LoginPage.tapOnGetSkyGlassDeals();
        await LoginPage.selectGreenTV();

        await LoginPage.selectGreenSpeaker();
        await LoginPage.selectGreenSpeaker();
        await LoginPage.getGreenSpeakerPrice();
        await LoginPage.tapOnContinueConfigurationButton();

        await LoginPage.tapOnContinueSkyLive();
        await LoginPage.tapOnContinueNewUser();
        await LoginPage.tapOnContinueEntertainment();

        await LoginPage.tapOnContinueExperienceContracts();
        await LoginPage.enterHouseNumber('12/1');
    })
})

