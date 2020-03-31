import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteInfoForm from './PaletteInfoForm';
import styles from './styles/PaletteFormNavStyles';
import { withStyles } from '@material-ui/core/styles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForm: false
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ showingForm: true });
  }

  hideForm() {
    this.setState({ showingForm: false });
  }

  render() {
    const { showingForm } = this.state;
    const {
      open,
      classes,
      savePalette,
      palettes,
      handleDrawerOpen
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classnames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classnames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
            <PaletteInfoForm
              showingForm={showingForm}
              hideForm={this.hideForm}
              palettes={palettes}
              savePalette={savePalette}
            />
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
