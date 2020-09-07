<template>
  <section class="section">
    <div class="container">
      <CardForm :form="form" @submitted="onSubmit" />
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import CardForm from '../components/CardForm';
import formMixin from '../mixins/formMixin';
import { ADD_CARD } from '../store/mutation-types';

export default {
  name: 'CreateCard',
  mixins: [formMixin],
  components: { CardForm },
  methods: {
    ...mapMutations({
      addCard: ADD_CARD
    }),
    onSubmit() {
      this.addCard({
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
