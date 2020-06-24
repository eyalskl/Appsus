import { utilsService } from '../../../services/utils.service.js'

const EMAILS_KEY = 'emails'

export const emailService = {
    createDefaultEmails,
    getDefaultEmails,
    removeEmail,
    updateEmailReadStatus
}

var gEmails = createDefaultEmails();

function getDefaultEmails() {
    return Promise.resolve(gEmails);
}

function createDefaultEmails() {
    const emails = utilsService.loadFromStorage(EMAILS_KEY);
    if (emails) return emails;
    const defaultEmails = [
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Wizz Air' ,
            subject: 'Say YES to a 30% discount', 
            body: `Your friends, family and dreams are awaiting! Say yes to flying today, and plan ahead up until Summer 2021! Here’s 30% off of all flights (yes, all of them), only available today, June 24th. Call your parents. Text your friends. Ask your partner. Share this opportunity with them, or surprise them. Book your ticket now with WIZZ!`, 
            isRead: true, 
            sentAt : 1592994373656
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'eBay' ,
            subject: 'Eyal, new discounts up to 56%!', 
            body: `Also today in deals: Original Samsung Fast Charging Charger USB Type C Cable Galaxy S10 S9 S8 Plus`, 
            isRead: false, 
            sentAt : 1592994373656
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Udacity' ,
            subject: 'Use AWS Elasticache for data storage', 
            body: `Hi Eyal,

            Given the explosive growth of the cloud computing industry in the past several ye‍ars, companies of all sizes are in desperate need of professionals with cloud computing skills to fill a variety of roles from Cloud Developer to Cloud Dev Ops Engineer or Cloud Architect. Now is the time to break into the cloud computing field with Udacity!`, 
            isRead: false, 
            sentAt : 1592994373656
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Shoesonline' ,
            subject: 'Say YES to a 30% discount', 
            body: `הקיץ כבר כאן ☀ דגמים חדשים במבצע שאסור לפספס! | פרסומת ‎`, 
            isRead: false, 
            sentAt : 1592994373656
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Netflix' ,
            subject: 'Eyal, The Politician Season 2 is now on Netflix', 
            body: `This message was mailed to [eyalskl18@gmail.com] by Netflix as part of your Netflix membership. SRC: 12182_en_IL`, 
            isRead: true, 
            sentAt : 1592994373656
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Pornhub' ,
            subject: 'Hello Nadav, your golden membership is about to expire', 
            body: `Please renew, your are our top PORN WATHCER! we love you long time :)`, 
            isRead: true, 
            sentAt : 1592994373656
        },

    ];
    utilsService.storeToStorage(EMAILS_KEY, defaultEmails)
    return defaultEmails;
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function removeEmail(emailId) {
    getById(emailId)
        .then(email => {
            if (email.folder === 'inbox') email.folder = 'trash';
            else if (email.folder === 'trash') {
                const emailIdx = gEmails.findIndex(email => email.id === emailId);
                gEmails.splice(emailIdx, 1);
            }
            utilsService.storeToStorage(EMAILS_KEY, gEmails);
        })
}

function updateEmailReadStatus(emailId, isRead) {
    let emailToEdit;
    getById(emailId)
        .then(email => {
            emailToEdit = email
            emailToEdit.isRead = isRead;
            utilsService.storeToStorage(EMAILS_KEY, gEmails);
        })

}