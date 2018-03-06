import React, { Component } from 'react';
import { IMAGES_API } from '../../constants';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(IMAGES_API.IMAGES_URL, IMAGES_API.IMAGES_OPTIONS)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Theresa&apos;s boilerplate</h1>
        </header>
        <ul>
          { items.map(item => (
            <div key={item.id}>
              <div>{item.title}</div>
              <img className="app-image" alt={item.id} src={item.link} />
            </div>))
          }
        </ul>
      </div>
    );
  }
}

export default App;
