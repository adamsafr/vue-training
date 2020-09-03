<template>
  <b-container class="bv-example-row">
    <b-row>
      <NewCardItem />

      <CardItem v-for="card in cards" :key="card.uuid" :card="card" />
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import CardItem from '../components/CardItem';
import NewCardItem from '../components/NewCardItem';

export default {
  name: 'CardList',
  components: { CardItem, NewCardItem },
  computed: {
    ...mapState(['cards'])
  }
};
</script>
