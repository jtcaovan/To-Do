import {noteModule} from './note'

export const domModule = (() => {

    const createNewNoteButton = () => {
        let noteList = document.querySelector("#noteList");

        document.querySelector('#addNoteButton').addEventListener('click', e => {
            e.preventDefault();
            let note = document.getElementById("newNote").value;

            createNoteContainer(noteList,note);
            noteModule.pushNewNote(note);
            hideNoteForm();
        })
    }

    const createNoteContainer = (noteList, note) => {
        let noteContainer = document.createElement('div')
        noteContainer.classList.add("newNoteContainer");
        let checkBox = createCheckBox()

        noteContainer.append(checkBox,createNote(note))
        noteList.append(noteContainer)
        markNoteAsComplete(checkBox, noteContainer, note)
    }

    const markNoteAsComplete = (checkBox, noteContainer, note) => {
        let completedNoteList = document.getElementById('completedNoteList')

        checkBox.addEventListener('click', () => {
            checkBox.classList.add('scale-in-center','checkBox');
            noteContainer.classList.add('completedNote')

            completedNoteList.prepend(noteContainer);
            // noteModule.removeNote(note);
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
            document.getElementById('newNote').focus();
        })
    }

    const hideNoteForm = () => {
        document.querySelector('#noteFormContainer').style.display = 'none';
        newForm.reset();
    }
    
    return {displayNoteForm, createNewNoteButton, closeNoteForm}
})();