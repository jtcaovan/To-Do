import {noteModule} from './note'

export const domModule = (() => {

    const addNoteButton = () => {
        document.querySelector('#addNoteButton').addEventListener('click', e => {
            e.preventDefault();

            let note = document.getElementById("newNote").value;

            noteModule.pushNewNote(note);
            displayNewNote(note)

            hideNoteForm();
        })
    }

    const displayNewNote = (note) => {
        let noteList = document.querySelector("#noteList");
        let newNote = document.createElement('p');
        newNote.classList.add('note')
        newNote.textContent = note
        
        noteList.append(newNote);
    }

    const noteForm = () => {
        document.querySelector('#noteButton').addEventListener('click', () => {
            displayNoteForm();
        })
    }

    const displayNoteForm = () => {
        document.querySelector('#noteFormModal').style.display = 'block';
        document.querySelector('#noteFormContainer').style.display = 'block';
    }

    const hideNoteForm = () => {
        document.querySelector('#noteFormModal').style.display = 'none';
        document.querySelector('#noteFormContainer').style.display = 'none';
    }
    
    return {noteForm, addNoteButton}
})();