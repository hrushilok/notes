import { makeStyles } from '@material-ui/styles';

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContentInner: {
    margin: '0px 0px 0px 0px',
    display: 'flex',
    alignItems: 'center',
  },
  loginCardTitle: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  cardHeaderInner: {
    width: '100%',
    background: '#EEEEEE',
    padding: '10px',
    height: '100%',
  },
  cardHeader: {
    width: '100%',
    height: '40px',
  },
  fieldSpacing: { padding: '10px' },
  title: { margin: '0px', padding: '0px' },
}));
