import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  DraggableColorBox: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '-6px',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: '0',
    left: '0',
    padding: '0.5rem',
    textTransform: 'uppercase',
    color: props =>
      chroma(props.color.color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.7)'
        : 'rgba(0,0,0,0.7)'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};
