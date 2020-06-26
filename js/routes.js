import homePage from "./pages/home-page.cmp.js";
import noteApp from "./apps/notes/pages/note-app.cmp.js";
import emailApp from "./apps/email/pages/email-app.cmp.js";
import emailCompose from "./apps/email/pages/email-compose.cmp.js";
import emailDesc from "./apps/email/pages/email-desc.cmp.js";



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
        component: emailApp,
        children: [

            {
                path: '/compose',
                component: emailCompose
            },
        ]
    },
    {
        path: '/email/:emailId',
        component: emailDesc
    },

];


export const myRouter = new VueRouter({ routes: myRoutes })