import {noteModule} from './note'

export const domModule = (() => {

    const createNewNoteButton = () => {
        let noteList = document.querySelector("#noteList");

        document.querySelector('#addNoteButton').addEventListener('click', e => {
            e.preventDefault();
            let note = document.getElementById("newNote").value;

                let newNoteContainer = document.createElement('div')
                newNoteContainer.classList.add("newNoteContainer");
                newNoteContainer.append(createCheckBox(), createNote(note))
                noteList.append(newNoteContainer)

            noteModule.pushNewNote(note);
            hideNoteForm();
        })
    }

    const createCheckBox = () => {
        const emptyCircle = document.createElement('img');
        emptyCircle.src = "images/circle.svg"
        emptyCircle.setAttribute('class', 'emptyCircle');

        return emptyCircle
    }

    const createNote = (note) => {
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
    
    return {displayNoteForm, createNewNoteButton, closeNoteForm}
})();