const { I } = inject();

module.exports = {

  // insert your locators and methods here
  footer: "(//span[@id])[12]",
  chosenLink: "//h3[./text()='Valašské Meziříčí: Titulní stránka']",

  async grabb() {
    I.seeInTitle('Googlem');
    let slovo = await I.grabTextFrom(this.footer);
    slovo = slovo.split(' ');
    console.log(`tohle je splitovany vysledek: ${slovo}`)
    slovo = slovo[2];
    console.log(`hledany text je >>> ${slovo} <<<`)
    return slovo;
  },

  clickChosenLink() {
    I.waitForElement(this.chosenLink);
    I.click(this.chosenLink);
  }
  
}
