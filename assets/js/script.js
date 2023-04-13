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