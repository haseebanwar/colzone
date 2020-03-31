import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.onColorCopy = this.onColorCopy.bind(this);
  }

  onColorCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const {
      color,
      colorFormat,
      showingFullPalette,
      moreURL,
      classes
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color[colorFormat]} onCopy={this.onColorCopy}>
        <div
          className={classes.ColorBox}
          style={{ backgroundColor: color[colorFormat] }}
        >
          <div
            className={classnames(classes.copyOverlay, {
              [classes.copyOverlayShow]: copied
            })}
            style={{ backgroundColor: color[colorFormat] }}
          />
          <div
            className={classnames(classes.copyMessage, {
              [classes.copyMessageShow]: copied
            })}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{color[colorFormat]}</p>
          </div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{color.name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
          {showingFullPalette && (
            <Link to={moreURL} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
