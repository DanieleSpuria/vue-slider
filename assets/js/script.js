const {createApp} = Vue;

createApp({
  data(){
    return{
      counter: 5,
      click: 1
    }
  },

  methods: {
    prev(){
      if (this.click === 1) this.click = 5;
      else this.click--;
      console.log('click', this.click);
    },

    next(){
      if (this.click === 5) this.click = 1;
      else this.click++;
      console.log('click', this.click);
    },

    on() {
      
    }
  }
}).mount('#app')