import { contacts } from "./data.js";



const { createApp } = Vue;

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
        date: '10/01/2020 15:50:00',
        message: this.newMessage,
        status: 'sent',
        });
        this.newMessage = '';
        setTimeout(() => {
          this.contacts[index].messages.push({
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          });
        }, 1000);
    },

    seeOption( index){
      const allMess = document.querySelectorAll('.func-mess');
      
      allMess[index].classList.toggle('d-none');
    
    }
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
    }
    
  }
   

}).mount('#app');  

