import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

class DraggableColorList extends Component {
  render() {
    const { colors, removeColor } = this.props;
    return (
      <div style={{ height: '100%' }}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color}
            removeColor={removeColor}
          />
        ))}
      </div>
    );
  }
}

export default SortableContainer(DraggableColorList);
