const {createApp} = Vue;

createApp({
  data(){
    return{
      counter: 5,
    }
  },

  methods: {
    prev(){
      this.counter--;
    },

    next(){
      this.counter++;
    }
  },

  mounted() {
    console.log(this.counter)
  }
}).mount('#app')