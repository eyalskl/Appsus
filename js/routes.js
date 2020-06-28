import homePage from "./pages/home-page.cmp.js"
import noteApp from "./apps/notes/pages/note-app.cmp.js";
import emailApp from "./apps/email/pages/email-app.cmp.js";
import emailCompose from "./apps/email/pages/email-compose.cmp.js";
import emailDesc from "./apps/email/pages/email-desc.cmp.js";
import bookApp from "./apps/books/pages/book-app.cmp.js"
import addBook from "./apps/books/pages/add-book.cmp.js"
import bookDetails from "./apps/books/pages/book-details.cmp.js"



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
        path: '/book',
        component: bookApp
    },
    {
        path: '/add-book',
        component: addBook
    },
    {
        path: '/book/:bookId',
        component: bookDetails
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