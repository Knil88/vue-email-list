const {createApp} = Vue;
createApp({
    data(){
    return{
        emails:[],
        email:'',
    }
    },
    methods: {
        getEmails(){
            for(i=0;i<10;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')  
                .then((result)=>{
                 this.email = result.data.response;
                 console.log(this.email);
                 this.emails.push(this.email)
                })
             }
        }
    },
   

    

    
    mounted() { 
    this.getEmails();
    },

}).mount("#app") 