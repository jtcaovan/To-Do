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
        let newNoteContainer = document.createElement('div')
        newNoteContainer.classList.add("noteDiv");
        const emptyCircle = document.createElement('img');

        emptyCircle.src = "images/circle.svg"
        emptyCircle.setAttribute('class', 'emptyCircle')
        emptyCircle.addEventListener('click', () => {
            console.log('ghey');
        })

        newNoteContainer.append(emptyCircle, createNewNote(note))
        noteList.append(newNoteContainer);
    }

    const createNewNote = (note) => {
        let newNote = document.createElement('p');
        newNote.classList.add('Note')
        newNote.textContent = `${note}`;

        return newNote
    }

    const closeNoteForm = () => {
        document.querySelector('#closeNoteForm').addEventListener('click', e => {
            e.preventDefault();
            hideNoteForm();
        })
    }

    const displayNoteForm = () => {
        document.querySelector('#noteButton').addEventListener('click', () => {
            document.querySelector('#noteFormContainer').style.display = 'block';
        })
    }

    const hideNoteForm = () => {
        document.querySelector('#noteFormContainer').style.display = 'none';
        newForm.reset();
    }
    
    return {displayNoteForm, addNoteButton, closeNoteForm}
})();