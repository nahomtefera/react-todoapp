import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNoteContent: ' ',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value
        })
    }

    writeNote() {
        // we call the method that will add the input value to
        // a new note
        this.props.addNote(this.state.newNoteContent);
        // we set the value of the input to an empty string again
        this.setState({
            newNoteContent: ' ',
        })
    }

    render() {
        return (   
            <div className="form-wrapper">
                <input className="note-input" 
                placeholder="Write your note" 
                value= {this.state.newNoteContent}
                onChange = {this.handleUserInput}
                />
                
                <button className="note-button"
                onClick = {this.writeNote}
                >Add to list</button>
            </div>
        )
    }
}

export default NoteForm;