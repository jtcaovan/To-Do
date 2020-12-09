import {noteModule} from './note'

export const domModule = (() => {

    const createNewNoteButton = () => {
        let noteList = document.querySelector("#noteList");

        document.querySelector('#addNoteButton').addEventListener('click', e => {
            e.preventDefault();
            let note = document.getElementById("newNote").value;

            createNoteDiv(noteList,note);
            noteModule.pushNewNote(note);
            hideNoteForm();
        })
    }

    const createNoteDiv = (noteList, note) => {
        let noteDiv = document.createElement('div')
        noteDiv.classList.add("noteDiv");
        let checkBox = createCheckBox()

        noteDiv.append(checkBox,createNote(note))
        noteList.append(noteDiv)

        showNoteDetails(noteDiv);
        markNoteAsComplete(checkBox, noteDiv, noteList)
    }

    const markNoteAsComplete = (checkBox, noteDiv, noteList) => {
        let completedNoteList = document.getElementById('completedNoteList')

        checkBox.addEventListener('click', e => {
            if (e.target.parentNode.parentNode === noteList) {
                checkBox.classList.add('scale-in-center','checkedBox');
                checkBox.classList.remove('emptyCircle')
                noteDiv.classList.add('completedNote');
                completedNoteList.prepend(noteDiv);
            } else {
                checkBox.classList.add('emptyCircle');
                checkBox.classList.remove('checkedBox');
                noteDiv.classList.remove('completedNote');
                noteList.append(noteDiv)
            }
        })
    }


    const showNoteDetails = (noteDiv) => {
        let editIcon = createEditIcon();
        let deleteIcon = createDeleteIcon();

        noteDiv.append(editIcon, deleteIcon);

        noteDiv.addEventListener('mouseover', () => {
            editIcon.style.display = 'block';
        })
        noteDiv.addEventListener('mouseout', () => {
            editIcon.style.display = 'none';
        })

        noteDiv.addEventListener('mouseover', () => {
            deleteIcon.style.display = 'block';
        })
        noteDiv.addEventListener('mouseout', () => {
            deleteIcon.style.display = 'none';
        })

    }

    const createEditIcon = () => {
        const editIcon = document.createElement('img');
        editIcon.src = 'images/edit.svg';
        editIcon.setAttribute('class', 'editIcon')

        return editIcon
    }


    const createDeleteIcon = () => {
        const deleteNote = document.createElement('img');
        deleteNote.src = "images/trash.svg"
        deleteNote.setAttribute('class', 'deleteNote');

        return deleteNote
    }

    const createCheckBox = () => {
        const emptyCircle = document.createElement('img');
        emptyCircle.src = "images/circle.svg";
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