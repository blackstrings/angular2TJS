import { MythreePage } from './app.po';

describe('mythree App', () => {
  let page: MythreePage;

  beforeEach(() => {
    page = new MythreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
