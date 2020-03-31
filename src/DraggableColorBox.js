import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';
import { withStyles } from '@material-ui/styles';

class DraggableColorBox extends Component {
  render() {
    const { color, classes, removeColor } = this.props;
    return (
      <div
        className={classes.DraggableColorBox}
        style={{ backgroundColor: color.color }}
      >
        <div className={classes.boxContent}>
          <span>{color.name}</span>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={removeColor.bind(this, color.name)}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
