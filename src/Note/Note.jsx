import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;

        this.removeNote = this.removeNote.bind(this);
    }


    
    removeNote(something) {
        console.log(something.props.noteId);
        
        this.props.remNote(something.props.noteId);
    }

    render(props) {
        return(
            <div className="note fade-in">
                <i className="fa fa-times remove-note" onClick={() => {this.removeNote(this)}} aria-hidden="true"></i>
                <p className="note-content"> {this.noteContent} </p>
            </div>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;