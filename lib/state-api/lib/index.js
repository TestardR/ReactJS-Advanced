class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
  }

  // array mapped into an object
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      // we want to change the acc using the curr.id and assign it to the curr
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  };

  getState = () => {
    return this.data;
  };
}

export default StateApi;
