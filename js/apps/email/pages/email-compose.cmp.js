export default {
    name: 'email',
    template: `
        <div class="email-compose flex column">
            <div class="compose-header flex space-between"> 
                <p> New Message </p> 
                <button @click="backToEmail"> X </button>
            </div>
            <div class="compose-to"> 
                <input type="email" name="composeTo" placeholder="To">    
            </div>
            <div class="compose-subject"> 
                <input type="text" name="composeSubject" placeholder="Subject">    
            </div>
            <div class="compose-body"> 
                <textarea rows="24" type="text" name="composeSubject"/>    
            </div>
        </div>
    `,
    methods: {
        backToEmail() {
            this.$router.back();
        }
    }
}