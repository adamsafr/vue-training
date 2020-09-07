<template>
  <section class="section">
    <div class="container">
      <CardForm :form="form" @submitted="onSubmit" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import CardForm from '../components/CardForm';
import formMixin from '../mixins/formMixin';
import { UPDATE_CARD } from '../store/mutation-types';

export default {
  name: 'EditCard',
  mixins: [formMixin],
  components: { CardForm },
  computed: {
    ...mapGetters({
      getCard: 'getCard'
    }),
    card() {
      return this.getCard(this.$route.params.uuid);
    }
  },
  mounted() {
    const { title, description } = this.card;
    this.form = { title, description };
  },
  methods: {
    ...mapMutations({
      updateCard: UPDATE_CARD
    }),
    onSubmit() {
      const card = this.card;

      this.updateCard({
        uuid: card.uuid,
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
