export class LatheCalcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lathe-calc-app h1')).getText();
  }
}
