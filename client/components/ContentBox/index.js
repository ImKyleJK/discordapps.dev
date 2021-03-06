import React, { Component } from 'react';
import colours from '../../scss/colours.module.scss';
import styles from './index.module.scss';
import { Modesta } from '../../data/Styles';

class ContentBox extends Component {
  render() {
    return (
      <div {...this.props} className={`${Modesta.boxShadow} ${colours.container} ${styles.container} ${this.props.className ? this.props.className : ''}`}>
        {this.props.children}
      </div>
    )
  }
}

export default ContentBox;
