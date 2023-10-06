const {createApp} = Vue;

createApp({
    data(){
        return{
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            emails:[]
        }
    },
    methods: {

        getApi(){
            let i = 0;
            while(i < 10) {
    
            axios.get(this.url)
            .then((risposta)=>{
                this.emails.push(risposta.data.response)
                
            });
    
            i ++ 
    
            }   
        }

    },
    mounted(){

        this.getApi()
 
    }
}).mount('#app')