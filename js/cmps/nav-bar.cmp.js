    export default {
        name: 'nav-bar',
        template: `
        <nav class="app-header main-header flex align-center space-between">
            <div class="logo-container flex align-center">
                 <h1 class="logo"> Appsus </h1>
            </div>
            <div class="main-nav flex">
                <router-link to="/"> Home </router-link>
                <!-- <router-link to="/books"> Book Shop </router-link> -->
                <router-link to="/email"> Email </router-link>
                <router-link to="/notes"> Notes </router-link>
            </div>
        </nav>
        `
    }