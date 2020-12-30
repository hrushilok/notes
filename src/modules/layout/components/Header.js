import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Notes
          </Typography>
          {props?.auth ? (
            <Button onClick={() => history.push('/note/new')} color="inherit">
              Create new
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

Header.propTypes = {
  auth: PropTypes.object,
};

export default connect(mapStateToProps)(Header);
