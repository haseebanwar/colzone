import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFormat: 'hex'
    };
    this._shades = this.gatherShades(
      props.palette,
      this.props.match.params.colorId
    );
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeColorFormat(e) {
    this.setState({ colorFormat: e.target.value, isSnackbarOpen: true });
  }

  gatherShades(palette, colorToFindShadsOf) {
    const { colors } = palette;
    let shades = [];
    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter(color => color.id === colorToFindShadsOf)
      );
    }
    return shades.slice(1);
  }

  render() {
    const { colorFormat } = this.state;
    const { classes } = this.props;
    const { id, paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        color={color}
        colorFormat={colorFormat}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          changeColorFormat={this.changeColorFormat}
          colorFormat={colorFormat}
          showSlider={false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
