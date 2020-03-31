import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSnackbarOpen: false
    };
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.colorFormat !== this.props.colorFormat) {
      this.setState({ isSnackbarOpen: true });
    }
  }

  closeSnackbar() {
    this.setState({ isSnackbarOpen: false });
  }
  render() {
    const { isSnackbarOpen } = this.state;
    const {
      showSlider,
      level,
      changeLevel,
      colorFormat,
      changeColorFormat,
      classes
    } = this.props;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">Colzone</Link>
        </div>
        <div className={classes.navContainer}>
          {showSlider && (
            <div>
              <span>Level {level}</span>
              <div className={classes.slider}>
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  step={100}
                  onAfterChange={changeLevel}
                />
              </div>
            </div>
          )}
          <div className={classes.selectContainer}>
            <Select value={colorFormat} onChange={changeColorFormat}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
            </Select>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isSnackbarOpen}
          autoHideDuration={1500}
          onClose={this.closeSnackbar}
          message={`Format changed to ${colorFormat.toUpperCase()}`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.closeSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
