    export default {
        name: 'nav-bar',
        template: `
        <nav class="app-header main-header flex align-center space-between">
            <div class="logo-container flex align-center">
                 <h1 class="logo"> #APPSUS </h1>
            </div>
            <div class="main-nav flex">
                <router-link to="/"> Home </router-link>
                <router-link to="/book"> Books </router-link>
                <router-link to="/email"> Email </router-link>
                <router-link to="/notes"> Notes </router-link>
                <router-link to="/about"> About </router-link>
            </div>
            <button class="btn-menu" @click.stop="toggleMenu"> ☰ </button>
        </nav>
        `,
        methods: {
            toggleMenu() {
                document.body.classList.toggle('menu-open'); 
            }
        },
        destroyed() {
            document.body.classList.remove('menu-open'); 
        }
    }