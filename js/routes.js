import homePage from "./pages/home-page.cmp.js";
import notesApp from "./apps/notes/pages/notes-app.cmp.js";
import emailApp from "./apps/email/pages/email-app.cmp.js";



const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/email',
        component: emailApp
    },
];


export const myRouter = new VueRouter({ routes: myRoutes })