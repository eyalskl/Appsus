export default {
    name: 'side-bar',
    template: `
        <nav class="side-bar flex column">
            <router-link title="Home" class="side-home" to="/"> <i class="fas fa-home"></i> </router-link>
            <router-link title="Books" class="side-books" to="/book"> <i class="fas fa-book"></i> </router-link>
            <router-link  title="Email" class="side-email" to="/email"> <i class="fas fa-envelope"></i> </router-link>
            <router-link  title="Notes" class="side-notes" to="/notes"> <i class="fas fa-sticky-note"></i> </router-link>
        </nav>
    `,
}