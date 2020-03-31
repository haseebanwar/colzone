import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import styles from './styles/ColorPickerFormStyles';
import { withStyles } from '@material-ui/core/styles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: 'teal',
      newColorName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNewColor = this.updateNewColor.bind(this);
  }

  componentDidMount() {
    // color validators
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', value => {
      return this.props.colors.every(
        color => color.color !== this.state.currentColor
      );
    });
  }

  handleChange(e) {
    const field = e.target.name;
    const fieldVal = e.target.value;
    this.setState({ [field]: fieldVal });
  }

  handleSubmit() {
    const { newColor, newColorName } = this.state;
    this.props.addNewColor({ name: newColorName, color: newColor });
    this.setState({ newColorName: '' });
  }

  updateNewColor(newColor) {
    this.setState({ newColor: newColor.hex });
  }

  render() {
    const { newColor, newColorName } = this.state;
    const { isPaletteFull, classes } = this.props;
    return (
      <div className={classes.root}>
        <ChromePicker
          color={newColor}
          onChangeComplete={this.updateNewColor}
          className={classes.colorPicker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <div>
            <TextValidator
              label="Color Name"
              onChange={this.handleChange}
              name="newColorName"
              value={newColorName}
              variant="filled"
              className={classes.newColorName}
              margin="normal"
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={[
                'Color name is required',
                'Color name is taken',
                'Color is already in the Palette'
              ]}
            />
          </div>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            size="large"
            style={{ backgroundColor: !isPaletteFull && newColor }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
