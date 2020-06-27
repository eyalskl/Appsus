import navBar from '../cmps/nav-bar.cmp.js';
import appFooter from '../cmps/app-footer.cmp.js';

export default {
    template: `
    <main>
      <section class="app-main home-page">
        <div class="container">
              <nav-bar class="nav-bar"> </nav-bar>
              <h1> - A new way to connect and share. </h1>
              <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
              </div>
              <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
              </div>
              <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
              </div>
              <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
              </div>
              <app-footer class="main-footer"> </app-footer>
            </div>  
        </section>
      </main>
      `,
      components: {
          navBar,
          appFooter
      }
  }
