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
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        }),
        axios.get(this.url)
        .then((risposta)=>{
            this.emails.push(risposta.data.response)
            
        })
 
    }
}).mount('#app')