import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'


const NOTES_KEY = 'notesDB'

_createNotes()

export const noteService = {
    query,
    save,
    getEmptyNote,
    remove,
    get,
    getDefaultFilter
}


function query(filterBy = getDefaultFilter()) {
    console.log('filterBy: ser', filterBy)

    return storageService.query(NOTES_KEY).then((notes) => notes.reverse())
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.info.txt))
            }
            return notes
        })
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function getEmptyNote(type = 'note-txt', txt = '') {
    return {
        type,
        isPinned: false,
        info: {
            txt: txt,
        },
        style: {
            backgroundColor: "#ffffff"
        }
    }
}

function getDefaultFilter() {
    return { txt: '' }
}



function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Don't forget to call grandma before the holiday!"
                },
                style: {
                    backgroundColor: "#ffc7c7"
                }
            },
            {
                id: "n102",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Buy milk and bread"
                },
                style: {
                    backgroundColor: "#FFF5B3"
                }
            },
            {
                id: "n103",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "./assets/img/audi.jpg",
                    title: "My dream car",
                    txt: "I love this car"
                },
                style: {
                    backgroundColor: "#94daf0"
                }
            },
            {
                id: "n104",
                type: "note-todos",
                isPinned: false,
                info: {
                    txt: "ddd",
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null, id: storageService._makeId() },
                        { txt: "Coding power", doneAt: 187111111, id: storageService._makeId() }
                    ]
                },
                style: {
                    backgroundColor: "#a3f0a8"
                }
            },
            {
                id: "n105",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Add Bruno Mars's songs to spotify"
                },
                style: {
                    backgroundColor: "#FFFFFF"
                }
            }, {
                id: "n106",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: `"When you change your thoughts, remember to also change your world." —Norman Vincent Peale`
                },
                style: {
                    backgroundColor: "#FFF5B3"
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