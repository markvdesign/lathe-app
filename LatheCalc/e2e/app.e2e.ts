import { LatheCalcPage } from './app.po';

describe('lathe-calc App', function() {
  let page: LatheCalcPage;

  beforeEach(() => {
    page = new LatheCalcPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lathe-calc works!');
  });
});
