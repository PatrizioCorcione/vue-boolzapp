const { createApp } = Vue;
const {DateTime} = luxon;
import { contacts } from "./data.js";

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

    /*dove message e uguale a message nei data*/
    findLastMessage(index) {
      const {messages} = this.contacts[index];
      if (messages.length > 0) {
        return messages[messages.length - 1].message;
      }else{
        return 'Nessun messaggio';
      }
      
    },

    // sendMessage(){
    //     const messageDate = this.getMinut();
    //     this.contacts[this.counterChat].messages.push({
    //     date: messageDate, 
    //     message: this.newMessage,
    //     status: 'sent',
    //     });
    //     this.newMessage = '';
    //     setTimeout(() => {
    //       this.contacts[this.counterChat].messages.push({
    //         date: this.getMinut(),
    //         message: 'Tutto fatto!',
    //         status: 'received',
    //       });
    //     }, 2000);
    // },

    seeOption(index){
      const allMess = document.querySelectorAll('.func-mess');
      allMess[index].classList.toggle('d-none');
    },

    getMinutMsg(index) {
      const contact = this.contacts[index];
      if (contact && contact.messages.length > 0) {
        const lastMinDate = contact.messages[contact.messages.length - 1].date;
        const word = lastMinDate.split(' ');
        return word[1];
      } else {
        return 'Nessun messaggio';
      }
    },

    getMinut(){
      const date = DateTime.now().setLocale('it');
      console.log('Ora corrente:', date.toFormat('dd/MM/yyyy HH:mm:ss')); // Log dell'ora corrente
      return date.toFormat('dd/MM/yyyy HH:mm:ss');
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
      if (messages.length > 0) {
        return messages[messages.length - 1].date;
      }else{
        return 'Nessun messaggio';
      }
    },

  }
  
}).mount('#app');  

