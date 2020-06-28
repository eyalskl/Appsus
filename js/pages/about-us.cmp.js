import navBar from '../cmps/nav-bar.cmp.js';

export default {
    template: `
    <main class="about-container flex justify-center">  
        <nav-bar class="nav-bar"> </nav-bar>
        <div class="members-container">
            <div class="team-member flex column align-center">
                <img class="member-img" src="imgs/nadav.jpg" alt="profile-pic">
                <div class="about-description">
                    <h2>Meet Nadav</h2>
                    <p>
                    Nadav Frank is from Tel-Aviv , 24 years old.
                    He is currenly learning how to code , and he is looking
                    forward to work in the Hi-Tech industry.
                    In his spare time , he is a gamer , playing a competitive game called League Of Legends - and he plays for the Israeli national team.
                    His dream is to take a share in a good gaming startup
                    </p>
                </div>
            </div>
            <div class="team-member flex column align-center">
                <img class="member-img" src="imgs/eyal.jpg" alt="profile-pic">
                <div class="about-description">
                    <h2>Meet Eyal</h2>
                    <p>
                    Eyal Barkai is from Rishon Le Zion, 29 years old.
                    He studied Software Engineering in High School and since then he didn't really touch any code, in early 2020 he searched for a new direction so he explored the coding world a bit again and fell in love!
                    he started a Coding Bootcamp in May 2020 at Coding Academy
                    </p>
                </div>
            </div>
        </div>

      </main>
      `,
components:{
    navBar
}
  }