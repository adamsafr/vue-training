<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="title-group" label="Title:" label-for="title">
      <b-form-input
        v-model="form.title"
        id="title"
        type="text"
        required
        placeholder="Enter title"
        :value="form.title"
      ></b-form-input>
    </b-form-group>

    <b-form-textarea
      v-model="form.description"
      id="description"
      required
      placeholder="Enter description"
      rows="3"
      max-rows="6"
      :value="form.description"
    />

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger" @click.prevent="onCancelClick"
      >Cancel</b-button
    >
  </b-form>
</template>

<script>
export default {
  name: 'CardForm',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submitted', {
        ...this.form
      });
    },
    onCancelClick() {
      this.$router.push({ name: 'CardList' });
    }
  }
};
</script>

<style scoped></style>
