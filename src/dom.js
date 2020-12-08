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
        markNoteAsComplete(checkBox, noteContainer, noteList)
    }

    const markNoteAsComplete = (checkBox, noteContainer, noteList) => {
        let completedNoteList = document.getElementById('completedNoteList')

        checkBox.addEventListener('click', e => {
            if (e.target.parentNode.parentNode === noteList) {
                checkBox.classList.add('scale-in-center','checkedBox');
                checkBox.classList.remove('emptyCircle')
                noteContainer.classList.add('completedNote');
                noteContainer.classList.remove('newNoteContainer');
                noteContainer.append(createDeleteNote());

                completedNoteList.prepend(noteContainer);
            } else {
                checkBox.classList.add('emptyCircle');
                checkBox.classList.remove('checkedBox');
                noteContainer.classList.add('newNoteContainer');
                noteContainer.classList.remove('completedNote');

                noteList.append(noteContainer)
            }
        })
    }

    const createDeleteNote = () => {
        const deleteNote = document.createElement('img');
        deleteNote.src = "images/x-mark.svg"
        deleteNote.setAttribute('class', 'deleteNote');
        
        return deleteNote
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
        document.querySelector('#noteButton').addEventListener('click', formEvent);

        window.addEventListener('keypress', (event) => {
            if (event.code === 'Enter') 
                formEvent();
        })
    }

    const formEvent = () => {
        document.querySelector('#noteFormContainer').style.display = 'block';
        document.getElementById('newNote').focus();
    }

    const hideNoteForm = () => {
        document.querySelector('#noteFormContainer').style.display = 'none';
        newForm.reset();
    }
    
    return {displayNoteForm, createNewNoteButton, closeNoteForm}
})();