import { CountUpDemoPage } from './app.po';

describe('count-up-demo App', () => {
  let page: CountUpDemoPage;

  beforeEach(() => {
    page = new CountUpDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
