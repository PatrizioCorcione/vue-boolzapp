import { contacts } from "./data.js";

// Milestone 1

const { createApp } = Vue;

createApp({
  data () {
    return {

      contacts,
      counterChat: 0,
      newMessage: '',
      
    }

  },
  methods: {
    
        findLastMessage(index) {

          const {messages} = this.contacts[index];
          
          return messages[messages.length - 1].message;
          
        },
        sendMessage(index){
          
            this.contacts[index].messages.push({
            date: '10/01/2020 15:50:00',
            message: this.newMessage,
            status: 'sent'
            });
            setTimeout(() => {
              this.contacts[index].messages.push({
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
              });
            }, 1000);

        }

      },


    }).mount('#app');  

