const { I } = inject();

module.exports = {

  // insert your locators and methods here

  checkPage(string) {
    I.amOnPage(string);
  }
}
