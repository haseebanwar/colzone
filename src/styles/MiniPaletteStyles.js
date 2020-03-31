export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    border: '1px solid blue',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  colors: {
    backgroundColor: 'grey',
    height: '100px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColorBoxes: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    marginBottom: '-4px'
  },
  deleteIcon: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: '20px',
    height: '20px',
    color: 'white',
    backgroundColor: 'red',
    padding: '0.2rem',
    borderTopRightRadius: '5px',
    opacity: 0,
    zIndex: 10,
    transition: 'all 0.3s ease-in-out'
  }
};
