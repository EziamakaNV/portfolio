import React, { Component } from 'react';
import M from 'materialize-css';
import Markup from './experience';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  }

  render() {
    return (
      <Markup />
    );
  }
}
