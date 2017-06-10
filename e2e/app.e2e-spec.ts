import { AngularCalcPage } from './app.po';

describe('angular-calc App', () => {
  let page: AngularCalcPage;

  beforeEach(() => {
    page = new AngularCalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
