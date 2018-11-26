import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  // create a component container
  // pure component, if the props did not really change, dont rerender
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = { store: PropTypes.object };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    };
    state = this.usedState();

    onStoreChange = () => {
      if (this.subscription) {
        this.setState(this.usedState());
      }
    };
    componentDidMount() {
      this.subscription = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscription);
      this.subscription = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...extraProps(this.context.store, this.props)}
          store={this.context.store}
        />
      );
    }
  };
};

export default storeProvider;
