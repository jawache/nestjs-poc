var app = new Vue({
  el: '#app',
  data: {
    file: '',
  },
  methods: {
    submitFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);

      let formData = new FormData();
      formData.append('file', this.file);
      axios
        .post('/mojify/upload-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function() {
          console.log('SUCCESS!!');
        })
        .catch(function() {
          console.log('FAILURE!!');
        });
    },
  },
});
