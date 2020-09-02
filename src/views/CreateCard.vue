<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Title:"
          label-for="title"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            v-model="form.title"
            id="title"
            type="text"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
          v-model="form.description"
          id="description"
          required
          placeholder="Description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CreateCard',
  data() {
    return {
      form: this.resetForm()
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);

      this.$store.commit('ADD_CARD', {
        title: this.form.title,
        description: this.form.description
      });
      this.form = this.resetForm();
      this.$router.push({ name: 'CardList' });
    },
    resetForm() {
      return {
        title: '',
        description: ''
      };
    }
  }
};
</script>

<style scoped></style>
