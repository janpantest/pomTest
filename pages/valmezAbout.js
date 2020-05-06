const { I } = inject();

module.exports = {

  // insert your locators and methods here
  valmezAbout: "//a[./text()='Město Valašské Meziříčí']",
  vedeni: "(//a[./text()='Vedení města'])[3]",
  vedeniMesta: "(//li/a)[14]",
  kontakty: "//dl/dt",

  clickValmezAbout() {
    if (I.seeElement(this.valmezAbout)){
      I.click(this.valmezAbout);
    }
  },

  clickVedeni() {
    if (I.seeElement(this.vedeni)) {
      I.click(this.vedeni);
    }
    I.seeElement(this.vedeniMesta);
    I.click(this.vedeniMesta);
  },

  async grabContact() {
    let contact = await I.grabTextFrom(this.kontakty);
    console.log(`tohle je splitovany vysledek: ${contact}`)
    console.log(`hledany text je >>> ${contact} <<<`)
    return contact;
  }

}
