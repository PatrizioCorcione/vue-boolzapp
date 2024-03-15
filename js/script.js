import { contacts } from "./data.js";



const { createApp } = Vue;
const {DateTime} = luxon;

createApp({
  data () {
    return {

      contacts,
      counterChat: 0,
      newMessage: '',
      searchUtente: '',
      
      
      
    }

  },
  methods: {
    
    findLastMessage(index) {
      const {messages} = this.contacts[index];
      if (messages.length > 0) {

        return messages[messages.length - 1].message;
        
      }else{
        return 'Nessun messaggio';
      }
      
    },

    sendMessage(index){
        this.contacts[index].messages.push({
        date: this.getData(index), 
        message: this.newMessage,
        status: 'sent',
        });
        this.newMessage = '';
        setTimeout(() => {
          this.accessoUtente = this.getData(index);
          this.contacts[index].messages.push({
            date: this.accessoUtente,
            message: 'Tutto fatto!',
            status: 'received',
          });
        }, 1000);
    },

    seeOption( index){
      const allMess = document.querySelectorAll('.func-mess');
      
      allMess[index].classList.toggle('d-none');
    
    },

    getMinut(){
    const date = DateTime.now().setLocale('it');
    return date.toFormat('hh:mm');
    },

    getData(){
      const date = DateTime.now().setLocale('it');
      return date.toFormat('dd/MM/yyyy HH:mm');
    },

    

  },

  
  computed: {
    notAfilter() {
      this.contacts.forEach(contact => {
        if (contact.name.toLowerCase().includes(this.searchUtente.toLowerCase())) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
        
      });
      return this.contacts;
    },

    lastDate(){
      const {messages} = this.contacts[this.counterChat];
      return messages[messages.length - 1].date;

    }

    
    
  },

  
   

}).mount('#app');  

