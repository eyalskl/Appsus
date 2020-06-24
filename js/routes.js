import homePage from "./pages/home-page.cmp.js";
import noteApp from "./apps/notes/pages/note-app.cmp.js";
import emailApp from "./apps/email/pages/email-app.cmp.js";



const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/notes',
        component: noteApp
    },
    {
        path: '/email',
        component: emailApp
    },
];


export const myRouter = new VueRouter({ routes: myRoutes })