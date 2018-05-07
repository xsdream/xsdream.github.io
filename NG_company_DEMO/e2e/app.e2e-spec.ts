import { Angulardemo02Page } from './app.po';

describe('angulardemo02 App', () => {
  let page: Angulardemo02Page;

  beforeEach(() => {
    page = new Angulardemo02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
