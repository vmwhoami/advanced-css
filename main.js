// Grab the createApp function off the global Vue object:
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentDate: ''
    };
  },
  created() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('en-GB', {
      year: 'numeric',
    });
  }
})
.mount('#app');
