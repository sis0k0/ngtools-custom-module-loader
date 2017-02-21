import { WebpacktestPage } from './app.po';

describe('webpacktest App', () => {
  let page: WebpacktestPage;

  beforeEach(() => {
    page = new WebpacktestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
