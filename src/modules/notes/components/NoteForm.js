import { CardHeader, Typography, Grid, Button } from '@material-ui/core';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';

import { useStyle } from '../../../style';
import { TextField } from '../../utility';
import { FormLayout } from '../../utility';
import { useHistory } from 'react-router-dom';

const schema = (requiredMessage) => {
  return Yup.object().shape({
    title: Yup.string().required(requiredMessage),
    text: Yup.string().required(requiredMessage),
  });
};

const NoteForm = (props) => {
  const classes = useStyle();
  const { data, cancel } = props;
  const history = useHistory();

  return (
    <div
      style={{
        margin: 16,
      }}
    >
      <Formik
        initialValues={{ title: data?.title ?? '', text: data?.text ?? '' }}
        onSubmit={(values, actions) => {
          props.submit(values);
          history.push('/');
        }}
        validationSchema={schema('Required')}
      >
        {(formikProps) => {
          return (
            <form>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.title}>
                    {props.title}
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <FormLayout formikProps={formikProps} handleCancel={cancel}>
                <Grid item xs={12} sm={6} className={classes.fieldSpacing}>
                  <TextField
                    code="title"
                    mandatory
                    disabled={Boolean(data?.code)}
                    labelText={'Title'}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.fieldSpacing}>
                  <TextField
                    code="text"
                    mandatory
                    textFieldProps={{ multiline: true, rows: 5 }}
                    labelText={'Text'}
                  />
                </Grid>
                <Grid
                  style={{
                    padding: '10px',
                  }}
                  container
                  justify="flex-end"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={formikProps.handleSubmit}
                      disabled={
                        formikProps.isSubmitting ||
                        !formikProps.dirty ||
                        !formikProps.isValid
                      }
                    >
                      Save
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        history.push('/');
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </FormLayout>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

NoteForm.defaultProps = {
  data: {},
};

NoteForm.propTypes = {
  data: PropTypes.object,
};

export default NoteForm;
