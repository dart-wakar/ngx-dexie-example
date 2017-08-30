import { NgDexieAppPage } from './app.po';

describe('ng-dexie-app App', () => {
  let page: NgDexieAppPage;

  beforeEach(() => {
    page = new NgDexieAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
