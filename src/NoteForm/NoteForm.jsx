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