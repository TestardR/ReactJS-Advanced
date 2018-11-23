class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  // array mapped into an object
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      // we want to change the acc using the curr.id and assign it to the curr
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
