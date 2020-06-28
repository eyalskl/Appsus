    export default {
        name: 'nav-bar',
        template: `
        <nav class="app-header main-header flex align-center space-between">
            <div class="logo-container flex align-center">
                 <h1 class="logo"> #APPSUS </h1>
            </div>
            <div class="main-nav flex">
                <router-link @click.native="toggleMenu" to="/"> Home </router-link>
                <router-link @click.native="toggleMenu" to="/book"> Books </router-link>
                <router-link @click.native="toggleMenu" to="/email"> Email </router-link>
                <router-link @click.native="toggleMenu" to="/notes"> Notes </router-link>
                <router-link @click.native="toggleMenu" to="/about"> About </router-link>
            </div>
            <button class="btn-menu" @click="toggleMenu"> ☰ </button>
        </nav>
        `,
        methods: {
            toggleMenu() {
                document.body.classList.toggle('menu-open'); 
            }
        }
    }