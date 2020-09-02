<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-card style="max-width: 20rem;" class="mb-2">
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="h2 mb-0">
              <b-icon
                icon="plus-square-fill"
                class="clickable"
                @click="onAddClick()"
              ></b-icon>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-card>

      <Card v-for="card in cards" :key="card.uuid" :card="card" />
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Card from '../components/Card';

export default {
  name: 'CardList',
  components: { Card },
  computed: {
    ...mapState(['cards'])
  },
  methods: {
    onAddClick() {
      this.$router.push({ name: 'CreateCard' });
    }
  }
};
</script>
