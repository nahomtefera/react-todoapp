import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import DB_CONFIG from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';


class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);      
    this.remNote = this.remNote.bind(this);  

    // Initialize Firebase
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');


    // We are going to set up the React state of our component
    this.state = {
      notes: [
      ],
    }    
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })

      this.setState({
        notes: previousNotes
      })    

    });

    this.database.on('child_removed', snap => {
      for(var i = 0; i <previousNotes.length; i++) {
        if(previousNotes[i].id === snap.key ) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      });
    });


  }

  addNote(note) {
    this.database.push().set({noteContent: note})
  }

  remNote(noteId) {
    console.log("yo, it's fine, look what I got: " + noteId);
    this.database.child(noteId).remove();
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
                  <Note className="note fade-in" 
                  remNote={this.remNote} 
                  noteContent={note.noteContent} 
                  noteId={note.id} 
                  key={note.id}/>
                )
              })
            }
          </div>
        </div>
        <div className="notes-footer">
            <NoteForm addNote = {this.addNote} />
        </div>        
      </div>
    );
  }
}

export default App;
