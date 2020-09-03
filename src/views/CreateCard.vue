<template>
  <section class="section">
    <div class="container">
      <CardForm :form="form" @submitted="onSubmit" />
    </div>
  </section>
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
