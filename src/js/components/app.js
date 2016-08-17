import React from 'react';

import {Form} from './form';
import {List} from './list';

class App extends React.Component {

  constructor () {
    super();
    this.state = { whiskeys: [] };
  }

  addWhiskey (whiskey) {
    this.state.whiskeys.push(whiskey);
    this.setState({ whiskeys: this.state.whiskeys });
  }

  render () {
    return (
      <div className="main">
        <h2 className="title">Whiskey List</h2>
        <Form add={ this.addWhiskey.bind(this) } />
        <hr />
        <List whiskeys={ this.state.whiskeys } />
      </div>
    );
  }

}

export {App};