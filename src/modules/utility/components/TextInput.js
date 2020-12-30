import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const TextInput = (props) => {
  const { values, setFieldValue } = useFormikContext();
  const { mandatory, code, disabled, labelText, textFieldProps, value } = props;
  const newProps = {
    required: mandatory,
    name: code,
    id: code,
    disabled,
    label: labelText,
  };
  const handleChange = (event) => {
    setFieldValue(code, event.target.value);
  };

  const [field, meta] = useField(newProps);
  const { error } = meta;
  const errors = { error: Boolean(error), helperText: error };
  return (
    <TextField
      type="text"
      {...field}
      {...newProps}
      {...textFieldProps}
      onChange={handleChange}
      value={value || values[code]}
      fullWidth
      variant="outlined"
      {...errors}
    />
  );
};

TextInput.propTypes = {
  mandatory: PropTypes.bool,
  code: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  textFieldProps: PropTypes.any,
};

TextInput.defaultProps = {
  mandatory: false,
  disabled: false,
  textFieldProps: {},
};

export default TextInput;
