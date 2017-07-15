import { TransformersPage } from './app.po';

describe('transformers App', () => {
  let page: TransformersPage;

  beforeEach(() => {
    page = new TransformersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
