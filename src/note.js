export const noteModule = (() => {
    let notes = [];

    const Note = (title) => {
        const getTitle = () => title;
        const getInfo = () => info;
        const getDueDate = () => dueDate;
        const getFolder = () => folder;

        return {title, getTitle}
    }
    
    const pushNewNote = (note) => {
        let newNote = Note(note);
        notes.push(newNote.title)
        console.log(notes);
    }

    return {pushNewNote, notes}
})();
