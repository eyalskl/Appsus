import { utilsService } from '../../../services/utils.service.js'

const EMAILS_KEY = 'emails'

export const emailService = {
    getEmails,
    removeEmail,
    updateEmailProp,
    getUnreadAmount,
    sendNewMail,
    clearPeeked,
    getById
}

var gEmails = createDefaultEmails();

function getEmails() {
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
            isSent: true,
            from: 'Wizz Air',
            fromEmail: 'wizzair@gmail.com',
            subject: 'Say YES to a discount', 
            body: `Your friends, family and dreams are awaiting! Say yes to flying today, and plan ahead up until Summer 2021! Here’s 30 off of all flights (yes, all of them), only available today, June 24th. Call your parents. Text your friends. Ask your partner. Share this opportunity with them, or surprise them. Book your ticket now with WIZZ!`, 
            isRead: true, 
            sentAt : 1592994373656,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            isSent: false,
            from: 'eBay' ,
            fromEmail: 'ebay@gmail.com',
            subject: 'Eyal, new discounts!', 
            body: `Also today in deals: Original Samsung Fast Charging Charger USB Type C Cable Galaxy S10 S9 S8 Plus`, 
            isRead: false, 
            sentAt : 1593067934570,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: true,
            isSent: false,
            from: 'Udacity' ,
            fromEmail: 'udacity@walla.com',
            subject: 'Use AWS Elasticache for data storage', 
            body: `Hi Eyal, Given the explosive growth of the cloud computing industry in the past several ye‍ars, companies of all sizes are in desperate need of professionals with cloud computing skills to fill a variety of roles from Cloud Developer to Cloud Dev Ops Engineer or Cloud Architect. Now is the time to break into the cloud computing field with Udacity!`, 
            isRead: false, 
            sentAt : 1592994373656,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            isSent: false,
            from: 'Shoes' ,
            fromEmail: 'shoesonline@gmail.com',
            subject: 'Say YES to a discount', 
            body: `הקיץ כבר כאן ☀ דגמים חדשים במבצע שאסור לפספס! | פרסומת ‎`, 
            isRead: false, 
            sentAt : 1593097934570,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            isSent: false,
            from: 'Netflix' ,
            fromEmail: 'netflix@netflix.net',
            subject: 'Eyal, The Politician Season 2 is now on Netflix', 
            body: `This message was mailed to [eyalskl18@gmail.com] by Netflix as part of your Netflix membership. SRC: 12182_en_IL`, 
            isRead: true, 
            sentAt : 1592994373656,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: true,
            isSent: false,
            from: 'Pornhub' ,
            fromEmail: 'pornhub@porn.com',
            subject: 'Hello Nadav, your golden membership is about to expire', 
            body: `Please renew, your are our top PORN WATHCER! we love you long time :)`, 
            isRead: true, 
            sentAt : 1593067134570,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: true,
            isSent: false,
            from: 'Google ' ,
            fromEmail: 'google@gmail.com',
            subject: 'Security alert', 
            body: `Your Google Account was just signed in to from a new Windows device. You're getting this email to make sure it was you. Check activity`, 
            isRead: false, 
            sentAt : 1592067134570,
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: false,
            isSent: false,
            from: 'TED' ,
            fromEmail: 'google@gmail.com',
            subject: 'Eyal, here’s why you should watch this talk...', 
            body: `Your kids might live on Mars. Here's how they'll survive, TED is all about visionary dreamers, and no talk is more visionary than this one. It's our destiny to go to Mars, no matter what the naysayers tell us. We must venture forth, explore, and invent!`, 
            isRead: false, 
            sentAt : Date.now(),
            isPeeked: false
        },
        {
            id: utilsService.getRandomId(),
            folder: 'inbox',
            isStarred: true,
            isSent: false,
            from: 'Coding Academy' ,
            fromEmail: 'codingacademy@gmail.com',
            subject: 'Wow your app is so amazing!', 
            body: `WOWWWWWW! This is such an amazing app, Nadav and Eyal are the best FULLSTACK! developers i know in the whole world, I'm having such a fun experience in your website!`, 
            isRead: true, 
            sentAt : 1591967134570,
            isPeeked: false
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
            if (email.folder === 'inbox' || email.folder === 'drafts') email.folder = 'trash';
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
        if (!email.isRead && email.folder !== 'trash' && email.folder !== 'drafts') count++
    })
    return count;
}

function sendNewMail(email, folder) {
    email.id = utilsService.getRandomId();
    if (folder === 'inbox') email.isSent = true;
    else email.isSent = false;
    email.folder = folder;
    email.isStarred = false;
    email.from = 'Eyal';
    email.isRead = false; 
    email.sentAt = Date.now();
    email.isPeeked = false;
    gEmails.unshift(email);
    utilsService.storeToStorage(EMAILS_KEY, gEmails);
}

function clearPeeked() {
    gEmails.forEach(mail => mail.isPeeked = false);
    utilsService.storeToStorage(EMAILS_KEY, gEmails);
}