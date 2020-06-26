

export default {
    template:`
        <nav class="app-header main-header flex align-center space-between">
            <div class="logo-container flex align-center">
                 <img src="imgs/misslogo.png" /> 
                 <h1 class="logo"> Miss Books </h1>
            </div>
            <div class="main-nav flex">
                <router-link to="/"> Home </router-link>
                <router-link to="/book"> my Books </router-link>
                
                <router-link to="/about"> About </router-link>
            </div>
        </nav>
        `,
}