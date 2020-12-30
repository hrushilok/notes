import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useStyle } from '../../../style';

const FormLayout = (props) => {
  const { title, titleVariant = 'h6' } = props;
  const [collapse, setCollapse] = useState(true);
  const classes = useStyle();

  const getAction = () => {
    return collapse ? (
      <KeyboardArrowDownIcon className={classes.button} />
    ) : (
      <KeyboardArrowUpIcon className={classes.button} />
    );
  };

  return (
    <Collapse in={collapse} collapsedHeight={70}>
      <Card style={{ marginTop: '8px', overflow: 'visible' }}>
        <CardContent className={classes.cardContentInner}>
          <Grid container spacing={4}>
            <CardHeader
              title={
                <Typography variant={titleVariant} className={classes.title}>
                  {title ? title : 'Details'}
                </Typography>
              }
              className={classes.cardHeaderInner}
              action={getAction()}
              onClick={() => {
                setCollapse(!collapse);
              }}
            />
            <Grid container item xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Collapse>
  );
};

FormLayout.propTypes = {
  title: PropTypes.string,
};

export default FormLayout;
