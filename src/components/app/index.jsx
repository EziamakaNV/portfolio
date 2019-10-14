import React, { Component } from 'react';
import M from 'materialize-css';
import Markup from './app';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Markup />
    );
  }
}
