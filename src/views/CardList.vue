<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <NewCardItem />

        <CardItem v-for="card in cards" :key="card.uuid" :card="card" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CardItem from '@/components/CardItem';
import NewCardItem from '@/components/NewCardItem';

export default {
  name: 'CardList',
  components: { CardItem, NewCardItem },
  computed: {
    ...mapGetters(['cards'])
  }
};
</script>
