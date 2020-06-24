import { utilsService } from '../../../services/utils.service.js'

const EMAILS_KEY = 'emails'

export const emailService = {
    createDefaultEmails,
    getDefaultEmails
}

var gEmails = createDefaultEmails();

function getDefaultEmails() {
    return Promise.resolve(gEmails);
}

function createDefaultEmails() {
    const emails = utilsService.loadFromStorage(EMAILS_KEY);
    if (emails) return emails;
    const defaultEmails = [
        {from: 'eyal' ,subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1592994373656},
        {from: 'eyal' ,subject: 'EIZE ABALE', body: 'just some text to test', isRead: true, sentAt : 1592994373656},
        {from: 'eyal' ,subject: 'Sprint 3 SUSIM', body: 'just some text to test', isRead: false, sentAt : 1592994373656},
        {from: 'eyal' ,subject: 'Hi there!', body: 'just some text to test', isRead: true, sentAt : 1592994373656},
        {from: 'eyal' ,subject: 'You are FIRED!', body: 'just some text to test', isRead: true, sentAt : 1592994373656},

    ];
    utilsService.storeToStorage(EMAILS_KEY, defaultEmails)
    return defaultEmails;
}