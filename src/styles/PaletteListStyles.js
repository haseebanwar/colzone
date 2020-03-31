import sizes from './sizes';
import bg from './bg.svg';
import { blue, red } from '@material-ui/core/colors';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    background: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#394bad',
    backgroundImage: `url(${bg})`,
    overflowY: 'auto'
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '1rem 0 2rem 0',
    zIndex: 10,
    [sizes.down('md')]: {
      width: '60%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)'
    }
  },
  avatarCheck: {
    backgroundColor: `${blue[100]}`,
    color: `${blue[600]}`
  },
  avatarClose: {
    backgroundColor: `${red[100]}`,
    color: `${red[600]}`
  }
};
