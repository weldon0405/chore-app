import { ChoreAppPage } from './app.po';

describe('chore-app App', () => {
  let page: ChoreAppPage;

  beforeEach(() => {
    page = new ChoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
