import {noteModule} from './note'

export const domModule = (() => {

    const createNewNoteButton = () => {
        let noteList = document.querySelector("#noteList");

        document.querySelector('#newForm').addEventListener('keypress', e => {
            if (e.code === 'Enter') {
                e.preventDefault();
                let note = document.getElementById("newNote").value;
    
                createNoteDiv(noteList,note);
                noteModule.pushNewNote(note);
                clearForm();
            }
        })
    }

    const createNoteDiv = (noteList, note) => {
        let noteDiv = document.createElement('div')
        noteDiv.classList.add("noteDiv");
        let checkBox = createCheckBox()

        noteDiv.append(checkBox,createNote(note))
        noteList.append(noteDiv)

        markNoteAsComplete(checkBox, noteDiv, noteList)
        showNoteIcons(noteDiv);
    }

    const markNoteAsComplete = (checkBox, noteDiv, noteList) => {
        let completedNoteList = document.getElementById('completedNoteList')

        checkBox.addEventListener('click', e => {
            if (e.target.parentNode.parentNode === noteList) {
                checkBox.classList.add('scale-in-center','checkedBox');
                checkBox.classList.remove('emptyCircle');
                noteDiv.classList.add('completedNote');
                completedNoteList.prepend(noteDiv);
            } else {
                checkBox.classList.add('emptyCircle');
                checkBox.classList.remove('checkedBox');
                noteDiv.classList.remove('completedNote');
                noteList.append(noteDiv);
            }
        })
    }


    const showNoteIcons = (noteDiv) => {
        let editIcon = createEditIcon();
        let deleteIcon = createDeleteIcon();

        noteDiv.append(editIcon, deleteIcon);

        noteDiv.addEventListener('mouseover', e => {
            deleteIcon.style.display = 'block';
            editIcon.style.display = 'block';
        })
        noteDiv.addEventListener('mouseout', () => {
            deleteIcon.style.display = 'none';
            editIcon.style.display = 'none';
        })

    }

    const createEditIcon = () => {
        const editIcon = document.createElement('img');
        editIcon.src = 'images/edit.svg';
        editIcon.setAttribute('class', 'editIcon')

        return editIcon
    }

    const createDeleteIcon = () => {
        const deleteIcon = document.createElement('img');
        deleteIcon.src = "images/trash-can.svg"
        deleteIcon.setAttribute('class', 'deleteIcon');

        deleteNote(deleteIcon);

        return deleteIcon
    }

    const deleteNote = (deleteIcon) => {
        deleteIcon.addEventListener('click', e => {
            e.target.parentNode.remove();
        })
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

    const clearForm = () => {
        newForm.reset();
    }
    
    return {createNewNoteButton}
})();