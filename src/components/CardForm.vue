<template>
  <form @submit.prevent="onSubmit">
    <div class="field">
      <label class="label" for="title">Title</label>
      <div class="control">
        <input
          v-model="form.title"
          id="title"
          class="input"
          type="text"
          placeholder="Enter title"
        />
      </div>
    </div>

    <div class="field">
      <label class="label" for="description">Description</label>
      <div class="control">
        <textarea
          v-model="form.description"
          id="description"
          class="textarea"
          placeholder="Enter description"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button @click.prevent="onCancelClick" class="button is-link is-light">
          Cancel
        </button>
      </div>
    </div>
  </form>
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
