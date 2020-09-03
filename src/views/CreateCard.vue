<template>
  <b-container class="bv-example-row">
    <b-row>
      <CardForm :form="form" @submitted="onSubmit" />
    </b-row>
  </b-container>
</template>

<script>
import CardForm from '../components/CardForm';
import formMixin from '../mixins/formMixin';

export default {
  name: 'CreateCard',
  mixins: [formMixin],
  components: { CardForm },
  methods: {
    onSubmit() {
      this.$store.commit('ADD_CARD', {
        title: this.form.title,
        description: this.form.description
      });

      this.resetForm();

      this.$router.push({ name: 'CardList' });
    }
  }
};
</script>

<style scoped></style>
