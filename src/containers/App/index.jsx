import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Client-ID c7fd9e46b4c809c',
      },
    };
    fetch('https://api.imgur.com/3/gallery/r/aww/hot/day/1', options)
      .then(response => response.json())
      .then((json) => {
        console.log('request succeeded with JSON response', json);
        this.setState({ items: json.data });
      })
      .catch((error) => {
        console.log('request failed', error);
      });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Theresa&apos;s boilerplate</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div>Items:</div>
          { this.state.items.map(item =>
            (<div>
              <div>{item.title}</div>
              <img className="app-image" alt={item.id} src={item.link} />)
             </div>))}
        </div>
      </div>
    );
  }
}

export default App;
