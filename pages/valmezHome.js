const { I } = inject();

module.exports = {

  // insert your locators and methods here
  mestoVM: "//a[./text()='Město Valašské Meziříčí']",

  clickValmezAbout() {
    if (I.seeElement(this.mestoVM)){
      I.click(this.mestoVM);
    }
  }
}
