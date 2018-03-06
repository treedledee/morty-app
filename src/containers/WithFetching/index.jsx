import React, { Component } from 'react';

const withFetching = (url, options) => Comp =>
  class Fetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoaded: false,
        error: null,
      };
    }

    componentDidMount() {
      fetch(url, options)
        .then((response) => {
          response.json();
        })
        // .then((result) => {
        //   this.setState({ data: result, isLoaded: false });
        // })
        // .catch(error => this.setState({ error, isLoaded: false }));
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              data,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          },
        );
    }

    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };

export default withFetching;
