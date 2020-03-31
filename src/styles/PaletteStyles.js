import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      width: '3.5rem',
      height: '1.5rem',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-1.75rem',
      marginTop: '-0.75rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      color: 'white',
      border: 'none',
      fontSize: 'inherit',
      lineHeight: '1.4rem',
      transition: '0.5s',
      textDecoration: 'none'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.333% !important'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20% !important'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10% !important'
    }
  }
};
