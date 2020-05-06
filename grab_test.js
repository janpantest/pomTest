Feature('grabbing');

Scenario('test something', async (I, valmezAboutPage, valmezHomePage, googleResultsPage, googleHomePage) => {
    var assert = require('assert');
    I.amOnPage('https://google.cz');
    googleHomePage.enterString('valmez');
    assert.equal(await googleResultsPage.grabb(), 'adresy');
    googleResultsPage.clickChosenLink();
    I.seeInTitle('Valašské Meziříčí: Titulní stránka');
    valmezHomePage.clickValmezAbout();
    I.seeInTitle('Město Valašské Meziříčí: Valašské Meziříčí');
    valmezAboutPage.clickVedeni();
    assert.equal(await valmezAboutPage.grabContact(), 'Kontakty');
    // pause();
});
