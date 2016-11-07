import { AngularTest0Page } from './app.po';

describe('angular-test0 App', function() {
  let page: AngularTest0Page;

  beforeEach(() => {
    page = new AngularTest0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
