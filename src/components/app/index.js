import React, { Component } from 'react';
import Markup from './App.jsx';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

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
