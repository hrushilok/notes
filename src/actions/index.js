import { v4 as uuidv4 } from 'uuid';
import {
  CREATE_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
  LOGIN,
  FETCH_NOTE,
  EDIT_NOTE,
} from './types';

export const createNote = (formValues) => async (dispatch, getState) => {
  dispatch({ type: CREATE_NOTE, payload: { id: uuidv4(), ...formValues } });
};

export const fetchNotes = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_NOTES, payload: getState()?.notes });
};

export const deleteNote = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NOTE, payload: id });
};

export const login = (formValues) => async (dispatch, getState) => {
  dispatch({ type: LOGIN, payload: formValues });
};

export const fetchNote = (id) => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: FETCH_NOTE, payload: state?.notes[id] });
};

export const editNote = (id, formValues) => async (dispatch) => {
  dispatch({ type: EDIT_NOTE, payload: { id, ...formValues } });
};
