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
    },

    next(){
      if (this.click === 5) this.click = 1;
      else this.click++;
    },

    on(i) {
      this.click = i;
    },

    callTime() {
      this.click++
    },

    time() {
      setInterval(this.callTime, 3000)
    }
  },

  mounted() {
    this.time()
  }
}).mount('#app')