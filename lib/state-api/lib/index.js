class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ''
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({
      searchTerm
    });
  };
}

export default StateApi;
