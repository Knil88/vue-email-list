const {createApp} = Vue;
createApp({
    data(){
    return{
        email:'narducciyari@gmail.com',
    }
    },
    methods: {

    },
   

    

    
    mounted() { 
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')  
      .then((result)=>{
        console.log(result.data.response);
        this.email = result.data.response;
      })
    },

}).mount("#app") 