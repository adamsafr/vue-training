<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-card
        v-for="card in cards"
        :title="card.title"
        :key="card.id"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>{{ card.description }}</b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CardList',
  computed: {
    ...mapState(['cards'])
  }
};
</script>
