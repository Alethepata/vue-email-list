const {createApp} = Vue;

createApp({
    data(){
        return{
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            email:[]
        }
    },
    mounted(){
        axios.get(this.url)
    }
}).mount('#id')