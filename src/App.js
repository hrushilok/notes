import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../src/modules/layout/components/Header';
import { AddNote, EditNote, NotesList } from './modules/notes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={NotesList} />
          <Route path="/note/new" exact component={AddNote} />
          <Route path="/note/edit/:id" exact component={EditNote} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
