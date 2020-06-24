// SERVICES
import { utilsService } from './services/utils.service.js'
import { eventBus } from './services/event-bus.service.js'
//ROUTER
import { myRouter } from "./routes.js";
// COMPONENTS
import navBar from './cmps/nav-bar.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'



new Vue({
    name: 'appsus',
    el: '#app',
    router: myRouter,
    template: `
        <div>
        
        <nav-bar class="nav-bar"> </nav-bar>

        <main class="app-main">
            <router-view />
        </main>
        
        <app-footer class="main-footer"></app-footer>

        </div>
        `,
    data() {
        return {
    
        };
    },
    computed: {
    
    },
    methods: {
    
    },
    created() {
    
    },
    components: {
        navBar,
        appFooter
    },
})