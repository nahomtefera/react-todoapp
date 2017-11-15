import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm'

class App extends Component {

  constructor(props) {
    super(props);

    // We are going to set up the React state of our component
    this.state = {
      notes: [
        {id: 1, noteContent: "what's up "},
        {id: 2, noteContent: " duuude"}
      ],

    }
  }

  render() {
    return (
      <div>
        <div className="notes-wrapper">

          <div className="notes-header">
            <div className="heading"> React and Firebase </div>
          </div>

          <div className="notes-body">
            {
              this.state.notes.map((note)=>{
                return (
                  <Note 
                    className="note fade-in"
                    noteContent = {note.noteContent}
                    noteId = {note.id}
                    key = {note.id}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="notes-footer">
            <NoteForm />
        </div>        
      </div>
    );
  }
}

export default App;
