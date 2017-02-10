import { browser, element, by } from 'protractor';

export class FinalProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fp-root h1')).getText();
  }
}
