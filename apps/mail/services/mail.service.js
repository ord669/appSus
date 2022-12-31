import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'


const MAILS_KEY = 'mailsDB'
_createMails()



export const mailService = {
    query,
    get,
    remove,
    save,
    getLoggedinUser,
    getCriteria,
    getNextMailId,
    getDefaultFilter,
    addNewMail,
    getEmptyMail,
    createNewMail,

}


function query(criteria = getDefaultFilter()) {
    console.log('criteria: ', criteria);
    
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (criteria.txt) {
                const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => regex.test(mail.subject.toLowerCase()) || regex.test(mail.body.toLowerCase()))
            }
            
            if (criteria.isRead) {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => mail.isRead )
            }
            if (criteria.isRead===false) {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => !mail.isRead )
            }
            if (criteria.isDate) {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.sort((objA, objB) => Number(objB.sentAt)- Number(objA.sentAt))
            }
            if (criteria.status === 'sent') {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => mail.from === getLoggedinUser().email )
            }
            if (criteria.status === 'inbox') {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => mail.from !== getLoggedinUser().email )
            }
            if (criteria.status === 'archive') {
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => mail.isArchive )
            }
            if (criteria.isStarred) {
                console.log('in:', 'in')
                // const regex = new RegExp(criteria.txt.toLowerCase(), 'i')
                mails = mails.filter(mail => mail.isStarred )
            }
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     mails = mails.filter(mail => ||)
            // }
            // if (filterBy.minSpeed) {
            //     cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            // }
            
                
            
            console.log('mails: ', mails);
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function getNextMailId(mailId) {
    return storageService.query(CAR_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            return mails[idx + 1].id
        })
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)

}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail)
    } else {
        return storageService.post(MAILS_KEY, mail)
    }
}


function getEmptyMail() {
    return {
        subject:'',
        body:'',
        isRead:false,
        sentAt: 1551133930594,
        removedAt: null,
        // inbox
        from: '',
        // sent
        to: ''
    }
}
// function save(mail) {
//     if (mail.id) {
//         return storageService.put(MAILS_KEY, mail)
//     } else {
//         return storageService.post(MAILS_KEY, mail)
//     }
// }


const email = [
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false, sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
]

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    

    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('Miss you!', 'Would love to catch up sometimes', false,false,true))
        mails.push(_createMail('Miss you!', 'Would love to catch up sometimes', false,false,false))
        mails.push(_createMail('Miss you!', 'Would love to catch up sometimes', false,false,false))
        mails.push(_createMail('3-2-1: Happiness, the value of risk, and the importance of ambition in poetry (and in life)', 'Atomic Habits is currently on sale at the lowest price Ive seen: 56% off in the US and heavily discounted in the UK and Australia as well. A great way to start the New Year', false,false,true))
        mails.push(_createMail('Your job post is about to expire', 'This email confirms that your job post for App development will expire in 5 days due to inactivity.If you are still hiring, edit the post to automatically extend the expiration date. To edit your job, click the Jobs tab, locate the job in your Open Jobs, and then click Edit Posting in the Actions menu.', false,false,false))
        mails.push(_createMail('🙏 The market gap in faith-based apps', 'Last year, VCs invested $175m into faith-based apps (a ~360% YOY increase). Some relatively simple ones like Bible meditation app Abide have amassed huge user bases', true,false,false))
        mails.push(_createMail('How Your Thoughts Determine Your Success with Mary Morrisey', 'Do you ever feel stuck and overwhelmed, with no idea where to begin to make things better? Or maybe you know exactly what you want to do but need help bringing a specific dream to life?', false,false,false))
        mails.push(_createMail('3-2-1: Happiness, the value of risk, and the importance of ambition in poetry (and in life)', 'Atomic Habits is currently on sale at the lowest price Ive seen: 56% off in the US and heavily discounted in the UK and Australia as well. A great way to start the New Year', false,false,false))
        mails.push(_createMail('Your job post is about to expire', 'This email confirms that your job post for App development will expire in 5 days due to inactivity.If you are still hiring, edit the post to automatically extend the expiration date. To edit your job, click the Jobs tab, locate the job in your Open Jobs, and then click Edit Posting in the Actions menu.', false,false,false))
        mails.push(_createMail('🙏 The market gap in faith-based apps', 'Last year, VCs invested $175m into faith-based apps (a ~360% YOY increase). Some relatively simple ones like Bible meditation app Abide have amassed huge user bases', true,false,false))
        mails.push(_createMail('How Your Thoughts Determine Your Success with Mary Morrisey', 'Do you ever feel stuck and overwhelmed, with no idea where to begin to make things better? Or maybe you know exactly what you want to do but need help bringing a specific dream to life?', false,false,true))
        mails.push(_createMail('How Your Thoughts Determine Your Success with Mary Morrisey', 'Do you ever feel stuck and overwhelmed, with no idea where to begin to make things better? Or maybe you know exactly what you want to do but need help bringing a specific dream to life?', false,false,false))
        mails.push(_createMail('3-2-1: Happiness, the value of risk, and the importance of ambition in poetry (and in life)', 'Atomic Habits is currently on sale at the lowest price Ive seen: 56% off in the US and heavily discounted in the UK and Australia as well. A great way to start the New Year', false,false,true))
        mails.push(_createMail('Your job post is about to expire', 'This email confirms that your job post for App development will expire in 5 days due to inactivity.If you are still hiring, edit the post to automatically extend the expiration date. To edit your job, click the Jobs tab, locate the job in your Open Jobs, and then click Edit Posting in the Actions menu.', false,false,false))
        mails.push(_createMail('🙏 The market gap in faith-based apps', 'Last year, VCs invested $175m into faith-based apps (a ~360% YOY increase). Some relatively simple ones like Bible meditation app Abide have amassed huge user bases', true,true,false))
        mails.push(_createMail('How Your Thoughts Determine Your Success with Mary Morrisey', 'Do you ever feel stuck and overwhelmed, with no idea where to begin to make things better? Or maybe you know exactly what you want to do but need help bringing a specific dream to life?', false,false,false))
        mails.push(_createMail('3-2-1: Happiness, the value of risk, and the importance of ambition in poetry (and in life)', 'Atomic Habits is currently on sale at the lowest price Ive seen: 56% off in the US and heavily discounted in the UK and Australia as well. A great way to start the New Year', false,true,false))
        mails.push(_createMail('Your job post is about to expire', 'This email confirms that your job post for App development will expire in 5 days due to inactivity.If you are still hiring, edit the post to automatically extend the expiration date. To edit your job, click the Jobs tab, locate the job in your Open Jobs, and then click Edit Posting in the Actions menu.', false,false,false))
        mails.push(_createMail('🙏 The market gap in faith-based apps', 'Last year, VCs invested $175m into faith-based apps (a ~360% YOY increase). Some relatively simple ones like Bible meditation app Abide have amassed huge user bases', true,false,false))
        mails.push(_createMail('How Your Thoughts Determine Your Success with Mary Morrisey', 'Do you ever feel stuck and overwhelmed, with no idea where to begin to make things better? Or maybe you know exactly what you want to do but need help bringing a specific dream to life?', false,true,true))

        utilService.saveToStorage(MAILS_KEY, mails)
    }
}

function _createMail(subject, body, isRead,isStarred,isArchive) {
    return {
        id: storageService._makeId(),
        subject,
        body,
        isRead,
        isStarred,
        sentAt: 1551133930594,
        removedAt: null,
        // inbox
        from: 'momo@momo.com',
        // sent
        to: 'user@appsus.com',
        isArchive,
    }
}


function addNewMail(subject, body, isRead,from = 'momo@momo.com',to = 'user@appsus.com'  ) {
    return {
        subject,
        body,
        isRead,
        sentAt,
        removedAt: null,
        // inbox
        from,
        // sent
        to,
        isArchive:false,
    }
}

function createNewMail(mailToEdit){
    const {email:from} = getLoggedinUser()
    mailToEdit['from'] = from
    mailToEdit['sentAt'] = Date.now()
    return {...mailToEdit}
}



const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


const criteria = {
    status: 'inbox',
    txt: '', // no need to support complex text search 
    isRead: false, // (optional property, if missing: show all) 
    isStarred: null, // (optional property, if missing: show all) 
    lables: ['important', 'romantic'] // has any of the labels 
}




function getLoggedinUser() {
    return loggedinUser
}

function getCriteria() {
    return criteria
}


function getDefaultFilter() {
    return criteria
}