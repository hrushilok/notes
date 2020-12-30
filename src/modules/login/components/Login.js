import {
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../../actions';

import { useStyle } from '../../../style';

import { TextField } from '../../utility';

const validationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });
};

const Login = (props) => {
  const classes = useStyle();
  const title = (
    <div style={{ marginTop: '16px' }}>
      <span className={classes.loginCardTitle}>
        <Typography variant="h4">Login</Typography>
      </span>
    </div>
  );

  const initialData = { username: 'admin', password: '12345' };
  return (
    <Formik
      initialValues={initialData}
      validationSchema={validationSchema()}
      onSubmit={(values, actions) => {
        props.login(values);
      }}
    >
      {(formikProps) => {
        return (
          <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <Card raised style={{ marginTop: '80px' }}>
                <form onSubmit={formikProps.handleSubmit}>
                  <CardHeader title={title} />
                  <CardContent className={classes.loginCardContent}>
                    <Grid
                      container
                      justify="center"
                      direction="column"
                      alignItems="center"
                      wrap="nowrap"
                      spacing={1}
                    >
                      <Grid item xs={12} className={classes.loginFieldSpacing}>
                        <TextField
                          code="username"
                          mandatory
                          labelText="Username"
                          disabled={false}
                          textFieldProps={{
                            className: classes.dataField,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.loginFieldSpacing}>
                        <TextField
                          code="password"
                          type="password"
                          mandatory
                          labelText="Password"
                          disabled={false}
                          textFieldProps={{
                            className: classes.dataField,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.loginFieldSpacing}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{ width: '60%', marginLeft: '20%' }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </form>
              </Card>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

Login.propTypes = {
  login: PropTypes.func,
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { login })(Login);
