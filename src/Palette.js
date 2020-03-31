import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      colorFormat: 'hex'
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeColorFormat(e) {
    this.setState({ colorFormat: e.target.value, isSnackbarOpen: true });
  }

  render() {
    const { level, colorFormat } = this.state;
    const { id, colors, paletteName, emoji } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        color={color}
        colorFormat={colorFormat}
        showingFullPalette
        moreURL={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeColorFormat={this.changeColorFormat}
          colorFormat={colorFormat}
          showSlider
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
