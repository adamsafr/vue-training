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
      <template v-if="$v.form.title.$error">
        <p class="help is-danger" v-if="!$v.form.title.required">
          This title is empty
        </p>
      </template>
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
      <template v-if="$v.form.description.$error">
        <p class="help is-danger" v-if="!$v.form.description.required">
          Description is empty
        </p>
      </template>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" :disabled="$v.$anyError">Submit</button>
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
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CardForm',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  validations: {
    form: {
      title: { required },
      description: { required }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

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
