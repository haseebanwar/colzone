import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    '&:hover button': {
      opacity: '1'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette ? '20%' : '33.333%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.color[props.colorFormat]).luminance() >= 0.7
        ? 'rgba(0,0,0,0.7)'
        : 'rgba(255,255,255,0.7)'
  },
  colorName: {
    color: props =>
      chroma(props.color[props.colorFormat]).luminance() <= 0.08
        ? 'rgba(255,255,255,0.7)'
        : 'rgba(0,0,0,0.7)'
  },
  seeMore: {
    color: props =>
      chroma(props.color[props.colorFormat]).luminance() >= 0.7
        ? 'rgba(0,0,0,0.7)'
        : 'rgba(255,255,255,0.7)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    background: 'rgba(255, 255, 255, 0.3)',
    padding: '0.2rem 0.4rem'
  },
  copyButton: {
    color: props =>
      chroma(props.color[props.colorFormat]).luminance() >= 0.7
        ? 'rgba(0,0,0,0.7)'
        : 'rgba(255,255,255,0.7)',
    width: '3rem',
    height: '1.5rem',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-1.5rem',
    marginTop: '-0.75rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    fontSize: 'inherit',
    lineHeight: '1.2rem',
    transition: '0.5s',
    textDecoration: 'none',
    opacity: '0'
  },
  boxContent: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '0.5rem',
    color: 'black',
    letterSpacing: '1px'
  },
  copyOverlay: {
    width: ' 100%',
    height: ' 100%',
    opacity: '0',
    zIndex: '0',
    transform: 'scale(0.1)',
    transition: 'transform 0.6s ease-in-out'
  },
  copyOverlayShow: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    transform: 'scale(0.1)',
    opacity: '0',
    zIndex: '-1',
    color: 'white',
    transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
    transitionDelay: '0.3s',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem'
    },
    '& p': {
      fontSize: '1.3rem',
      fontWeight: '100',
      textTransform: 'lowercase'
    }
  },
  copyMessageShow: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '10'
  }
};
