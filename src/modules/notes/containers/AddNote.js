import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createNote } from '../../../actions';
import NoteForm from '../components/NoteForm';

const AddNote = (props) => {
  const history = useHistory();
  const { createNote } = props;

  const handleSubmit = async (noteDetails) => {
    try {
      createNote(noteDetails);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <NoteForm title="Add note" submit={handleSubmit} />;
};

export default connect(null, { createNote })(AddNote);
