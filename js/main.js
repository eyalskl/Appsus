// SERVICES
import { utilsService } from './services/utils.service.js';
import { eventBus } from './services/event-bus.service.js';
//ROUTER
import { myRouter } from "./routes.js";
// COMPONENTS
import navBar from './cmps/nav-bar.cmp.js';

import userMsg from './cmps/user-msg.cmp.js';



new Vue({
    name: 'appsus',
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <user-msg :msgData="userMsgData" />
            <main class="app-main">
                <router-view />
            </main>
        </div>
        `,
    data: {
        userMsgData: {
            isVisible: false,
            txt: '',   
            type:'' 
        }
    },
    computed: {
    
    },
    methods: {
    
    },
    created() {
        eventBus.$on('show-msg', (data) => {
            this.userMsgData = data;
        });
    },
    components: {
        navBar,

        userMsg
    },
})