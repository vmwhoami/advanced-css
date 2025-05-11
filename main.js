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
