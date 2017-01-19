import { ZheWebsitePage } from './app.po';

describe('zhe-website App', function() {
  let page: ZheWebsitePage;

  beforeEach(() => {
    page = new ZheWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
