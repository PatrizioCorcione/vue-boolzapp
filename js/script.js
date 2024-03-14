import { contacts } from "./data.js";

// Milestone 1

const { createApp } = Vue;

createApp({
  data () {
    return {
      contacts,
      counterChat: 0,
      
      
    }

  },
  methods: {
    
    findLastMessage(index) {
      const {messages} = this.contacts[index];
      
      return messages[messages.length - 1].message;
      
    },

  },


}).mount('#app');  

