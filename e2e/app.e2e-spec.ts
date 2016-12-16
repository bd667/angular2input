import { AnginputPage } from './app.po';

describe('anginput App', function() {
  let page: AnginputPage;

  beforeEach(() => {
    page = new AnginputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
