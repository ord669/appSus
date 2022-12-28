import { storageService } from '../../../services/async-storage.service.js'


const NOTES_KEY = 'notesDB'

_createNotes()

export const noteService = {
    query,
    save,
    getEmptyNote
}


function query() {
    return storageService.query(NOTES_KEY)
}

function save(note) {
    console.log('he:')

    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}

function getEmptyNote(type = 'note-txt', txt = '') {
    return {
        type,
        isPinned: false,
        info: {
            txt,
        }
    }
}



function _createNotes() {
    console.log('hi:')

    let notes = query()
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "../../../assets/img/audi.jpg",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null, id: storageService._makeId() },
                        { txt: "Coding power", doneAt: 187111111, id: storageService._makeId() }
                    ]
                }
            }
        ]
    }
    storageService._save(NOTES_KEY, notes)
}



// const notes = [
//     {
//         id: "n101",
//         type: "note-txt",
//         isPinned: true,
//         info: {
//             txt: "Fullstack Me Baby!"
//         }
//     },
//     {
//         id: "n102",
//         type: "note-img",
//         info: {
//             url: "http://some-img/me",
//             title: "Bobi and Me"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: "n103",
//         type: "note-todos",
//         info: {
//             label: "Get my stuff together",
//             todos: [
//                 { txt: "Driving liscence", doneAt: null },
//                 { txt: "Coding power", doneAt: 187111111 }
//             ]
//         }
//     }
// ];