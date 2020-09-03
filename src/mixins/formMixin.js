export default {
  data() {
    return {
      form: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    resetForm() {
      this.form = {
        title: '',
        description: ''
      };
    }
  }
};
