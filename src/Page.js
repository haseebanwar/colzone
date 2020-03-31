import React, { Component } from 'react';
import './styles/Page.css';

class Page extends Component {
  render() {
    return <section className="Page">{this.props.children}</section>;
  }
}

export default Page;
