const { I } = inject();

module.exports = {

  // insert your locators and methods here
  searchField: "//input[@name='q']",
  visibleOption: "(//span[./text()='valmez'])[1]",
  submitButton: "(//div[@class='sbtc'])[1]",

  enterString(string) {
    I.seeInTitle('Google')
    I.seeElement(this.searchField);
    I.fillField(this.searchField, string);
    I.click(this.visibleOption);
  }
}


