import StateApi from 'state-api';
import { data } from '../testData';

const store = new StateApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = store.getState().articles;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    // expecting the articles to be an object, not an array
    expect(articles).toHaveProperty(articleId);
    // matching the title from the object to the title from the raw data
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorFirstName);
  });
});
