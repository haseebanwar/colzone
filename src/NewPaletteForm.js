import React, { Component } from 'react';
import classnames from 'classnames';
import arrayMove from 'array-move';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedPalette from './seedPalette';
import styles, { drawerWidth } from './styles/NewPaletteFormStyles';
import { withStyles } from '@material-ui/core/styles';

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedPalette[0].colors
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  addNewColor(newColor) {
    this.setState(state => ({
      colors: [...state.colors, newColor]
    }));
  }

  handleChange(e) {
    const field = e.target.name;
    const fieldVal = e.target.value;
    this.setState({ [field]: fieldVal });
  }

  savePalette(newPalette) {
    newPalette = {
      ...newPalette,
      id: newPalette.paletteName.toLocaleLowerCase().replace(/ /g, '-'),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    // redirect to homepage
    this.props.history.push('/');
  }

  removeColor(colorToRemove) {
    this.setState(state => ({
      colors: state.colors.filter(({ name }) => name !== colorToRemove)
    }));
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  }

  clearPalette() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    let isNewColorNameDuplicate = true;
    const allColors = seedPalette.map(palette => palette.colors).flat();
    const checkDuplicate = color => color.name === randomColor.name;
    let randomColor;
    while (isNewColorNameDuplicate) {
      const rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isNewColorNameDuplicate = this.state.colors.some(checkDuplicate);
    }
    this.setState(({ colors }) => ({
      colors: [...colors, randomColor]
    }));
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          drawerWidth={drawerWidth}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContent}>
            <Typography variant="h6" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.btns}>
              <Button
                color="primary"
                variant="contained"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              colors={colors}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classnames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
