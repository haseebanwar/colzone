import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      stage: 'form'
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // palette validators
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange(e) {
    const field = e.target.name;
    const fieldVal = e.target.value;
    this.setState({ [field]: fieldVal });
  }

  showEmojiPicker() {
    this.setState({ stage: 'emoji' });
  }

  handleSubmit(emoji) {
    const { newPaletteName } = this.state;
    const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
    this.props.savePalette(newPalette);
    this.setState({ stage: '' });
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { showingForm, hideForm } = this.props;
    return (
      <div>
        <Dialog
          open={showingForm && stage === 'emoji'}
          aria-labelledby="choose-palette-emoji"
        >
          <DialogTitle id="choose-palette-emoji">
            Choose Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.handleSubmit} />
        </Dialog>
        <Dialog
          open={showingForm && stage === 'form'}
          onClose={hideForm}
          aria-labelledby="choose-palette-name"
          fullWidth
        >
          <DialogTitle id="choose-palette-name">
            Choose Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please choose a name for your new Palette
              </DialogContentText>
              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Palette name is required',
                  'Palette name is taken'
                ]}
                margin="normal"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                SAVE PALETTE
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteInfoForm;
