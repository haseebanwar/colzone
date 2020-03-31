import React, { Component } from 'react';
import styles from './styles/FooterStyles';
import { withStyles } from '@material-ui/styles';

class Footer extends Component {
  render() {
    const { paletteName, emoji, classes } = this.props;
    return (
      <footer className={classes.Footer}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
