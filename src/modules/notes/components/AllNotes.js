import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchNotes, deleteNote } from '../../../actions';
import { Login } from '../../login';
import { useHistory } from 'react-router-dom';

const AllNotes = (props) => {
  const { auth } = props;
  const history = useHistory();
  useEffect(() => {
    props.fetchNotes();
  }, [auth]);

  return (
    <div
      style={{
        margin: 16,
      }}
    >
      {props?.auth ? (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {props.notes?.length === 0 ? (
            <div>No notes</div>
          ) : (
            props.notes.map((note) => (
              <Grid key={note.id} item xs={12} sm={4} lg={3}>
                <Card key={note.id}>
                  <CardHeader
                    avatar={<Avatar aria-label="NoteTitle">N</Avatar>}
                    title={note.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {note.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        history.push(`/note/edit/${note.id}`);
                      }}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        props?.deleteNote(note.id);
                      }}
                      size="small"
                      color="primary"
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes),
    auth: state.auth,
  };
};

AllNotes.propTypes = {
  notes: PropTypes.array,
  auth: PropTypes.object,
};

export default connect(mapStateToProps, { fetchNotes, deleteNote })(AllNotes);
