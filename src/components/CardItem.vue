<template>
  <b-card :title="card.title" style="max-width: 20rem;" class="mb-2">
    <b-card-text>{{ card.description }}</b-card-text>

    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>{{ card.createdAt | date }}</b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="h2 mb-0">
          <b-icon
            icon="trash"
            class="clickable"
            @click="onDeleteClick(card.uuid)"
          ></b-icon>
        </div>
      </b-col>
      <b-col>
        <div class="h2 mb-0">
          <b-icon
            icon="pencil-square"
            class="clickable"
            @click="onEditClick(card.uuid)"
          ></b-icon>
        </div>
      </b-col>
      <b-col>
        <div class="h2 mb-0">
          <b-icon
            :icon="card.liked ? 'heart-fill' : 'heart'"
            @click="onHeartClick(card.uuid)"
            class="clickable"
          ></b-icon>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDeleteClick(uuid) {
      this.$store.commit('DELETE_CARD', { uuid });
    },
    onHeartClick(uuid) {
      this.$store.commit('TOGGLE_CARD_LIKE', { uuid });
    },
    onEditClick(uuid) {
      this.$router.push({ name: 'EditCard', params: { uuid } });
    }
  }
};
</script>

<style lang="css" scoped>
.clickable:hover {
  cursor: pointer;
}
</style>
