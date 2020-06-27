import navBar from '../cmps/nav-bar.cmp.js'


export default {
    template: `
    <main>
          <nav-bar class="nav-bar"> </nav-bar>
          <section class="app-main home-page">
              <h1>Welcome to <span> Appsus </span> </h1>
              <p>Today a SUS, tomorrow APPSUS.</p>
          </section>
        </main>
      `,
      components: {
          navBar
      }
  }
  
  