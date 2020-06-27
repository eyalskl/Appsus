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
//   <nav>
//         <a href="#">Appsus</a>
//         <div class="bla">
//         <a href="#">Books</a>
//         <a href="#">Notes</a>
//         <a href="#">Email</a>
//     </div>
//     </nav>
//     <div class="container">
//         <h1>"Today a SUS , Tomorrow Appsus"</h1>
        
//         <div class="bird-container bird-container--one">
//             <div class="bird bird--one"></div>
//         </div>
        
//         <div class="bird-container bird-container--two">
//             <div class="bird bird--two"></div>
//         </div>
        
//         <div class="bird-container bird-container--three">
//             <div class="bird bird--three"></div>
//         </div>
        
//         <div class="bird-container bird-container--four">
//             <div class="bird bird--four"></div>
//         </div>
        
//     </div>  
  