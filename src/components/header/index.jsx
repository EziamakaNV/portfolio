import React, { Component } from 'react';
import M from 'materialize-css';
import Markup from './header';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const sidenav = document.querySelector('#header-sidenav');
    M.Sidenav.init(sidenav);
  }

  render() {
    return (
      <Markup />
    );
  }
}
