<template>
  <b-container class="bv-example-row">
    <b-row>
      <CardForm :form="form" @submitted="onSubmit" />
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CardForm from '../components/CardForm';
import formMixin from '../mixins/formMixin';

export default {
  name: 'EditCard',
  mixins: [formMixin],
  components: { CardForm },
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
    onSubmit() {
      const card = this.card;

      this.$store.commit('UPDATE_CARD', {
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
