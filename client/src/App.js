import React, { Component } from 'react';

import config from './config';
import ListItem from './ListItem';

const axios = require('axios');



class App extends Component {
  constructor(props) {
    super(props);

    axios.get(`${config.endpoint}`).then((response) => {
      console.log(response.data);
      this.setState({
        data: response.data
      });
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
        <h1>All Blog Posts</h1>
        </header>

        <main>
          {this.state && this.state.data && this.state.data.map((item) => {
            return <ListItem item={item} />;
          })}
        </main>
      </div>
    );
  }
}

export default App;
