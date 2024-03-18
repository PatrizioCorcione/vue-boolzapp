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

    sendMessage(){
        this.contacts[this.counterChat].messages.push({
        date: this.getMinut(), 
        message: this.newMessage,
        status: 'sent',
        });
        this.newMessage = '';
        setTimeout(() => {
          this.contacts[this.counterChat].messages.push({
            date: this.getMinut(),
            message: 'Tutto fatto!',
            status: 'received',
          });
        }, 2000);
    },

    seeOption(index){
      const allMess = document.querySelectorAll('.func-mess');
      allMess[index].classList.toggle('d-none');
    },

    getMinutChat(index) {
      if (this.contacts[index].messages.length > 0) {
      const lastMinDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
      const word = lastMinDate.split(' ');
      return word[1];
      } else {
      return 'Nessun messaggio';
      }
    },
    getMinutMsg(messageIndex) {
      const messages = this.contacts[this.counterChat].messages;
      if (messages && messages.length > messageIndex && messageIndex >= 0) {
        const lastMinDate = messages[messageIndex].date;
        const word = lastMinDate.split(' ');
        return word[1];
      } else {
        return 'Nessun messaggio';
      }
    },

    getMinut(){
      const date = DateTime.now().setLocale('it');
      
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

const darkMode = document.querySelector('.fa-circle-notch')

darkMode.addEventListener('click', ()=>{

  document.querySelector('body').classList.toggle('dark')

});

