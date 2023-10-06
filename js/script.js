const {createApp} = Vue;

createApp({
    data(){
        return{
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            emails:[]
        }
    },
    mounted(){
        
        axios.get(this.url)
        .then((risposta)=>{
            const email = risposta.data.response;
            this.emails.push(email)
            console.log(email)
        })
        
    }
}).mount('#app')