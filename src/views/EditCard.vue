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
            :value="form.title"
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
          v-model="form.description"
          id="description"
          required
          placeholder="Description"
          rows="3"
          max-rows="6"
          :value="form.description"
        />

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" @click.prevent="onCancelClick">Cancel</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditCard',
  data() {
    return {
      form: this.resetForm()
    };
  },
  computed: {
    ...mapGetters(['getCard']),
    card() {
      return this.getCard(this.$route.params.uuid);
    }
  },
  mounted() {
    const { title, description } = this.card;
    this.form = { title, description };
  },
  methods: {
    onCancelClick() {
      this.form = this.resetForm();
      this.$router.push({ name: 'CardList' });
    },
    onSubmit() {
      const card = this.card;

      this.$store.commit('UPDATE_CARD', {
        uuid: card.uuid,
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
