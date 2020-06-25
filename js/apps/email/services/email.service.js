import { utilsService } from '../../../services/utils.service.js'

const EMAILS_KEY = 'emails'

export const emailService = {
    createDefaultEmails,
    getDefaultEmails,
    removeEmail,
    updateEmailProp,
    getUnreadAmount
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
            fromEmail: 'puki@gmail.com',
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
            fromEmail: 'puki@gmail.com',
            subject: 'Eyal, new discounts up to 56%!', 
            body: `Also today in deals: Original Samsung Fast Charging Charger USB Type C Cable Galaxy S10 S9 S8 Plus`, 
            isRead: false, 
            sentAt : 1593067934570
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Udacity' ,
            fromEmail: 'puki@gmail.com',
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
            fromEmail: 'puki@gmail.com',
            subject: 'Say YES to a 30% discount', 
            body: `הקיץ כבר כאן ☀ דגמים חדשים במבצע שאסור לפספס! | פרסומת ‎`, 
            isRead: false, 
            sentAt : 1593097934570
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            from: 'Netflix' ,
            fromEmail: 'puki@gmail.com',
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
            fromEmail: 'puki@gmail.com',
            subject: 'Hello Nadav, your golden membership is about to expire', 
            body: `Please renew, your are our top PORN WATHCER! we love you long time :)`, 
            isRead: true, 
            sentAt : 1593067134570
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

function updateEmailProp(emailId, prop, value) {
    let emailToEdit;
    getById(emailId)
        .then(email => {
            emailToEdit = email
            emailToEdit[prop] = value;
            utilsService.storeToStorage(EMAILS_KEY, gEmails);
        })
}

function getUnreadAmount() {
    var count = 0;
    gEmails.forEach(email => {
        if (!email.isRead && email.folder !== 'trash') count++
    })
    return count;
}