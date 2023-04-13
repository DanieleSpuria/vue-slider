const {createApp} = Vue;

createApp({
  data(){
    return{
      counter: 5,
      img: [
        'assets/img/01.webp',
        'assets/img/02.webp',
        'assets/img/03.webp',
        'assets/img/04.webp',
        'assets/img/05.webp'
      ]
    }
  },

  methods: {
    prev(){
      if (this.counter === 1) this.counter = 5;
      else this.counter--;
      console.log(this.counter)
    },

    next(){
      if (this.counter === 5) this.counter = 0;
      this.counter++;
      console.log(this.counter)
    }
  },

  mounted() {
    
  }
}).mount('#app')