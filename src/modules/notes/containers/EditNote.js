import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { fetchNote, editNote } from '../../../actions';
import NoteForm from '../components/NoteForm';

const EditNote = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const { fetchNote, editNote } = props;
  useEffect(() => {
    fetchNote(id);
  }, []);

  const handleSubmit = async (noteDetails) => {
    try {
      editNote(id, noteDetails);
      history.push('/countries');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteForm
      title="Edit note"
      data={props?.note ?? {}}
      submit={handleSubmit}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchNote, editNote })(EditNote);
