<template>
  <div class="column is-one-third">
    <div class="card bm--card-equal-height">
      <div class="card-content">
        <div class="content">
          <h1 class="title is-size-4">{{ card.title }}</h1>
          <p class="is-size-5">{{ card.description }}</p>
          <p class="is-pulled-right">{{ card.createdAt | date }}</p>
        </div>
      </div>

      <footer class="card-footer">
        <div class="card-footer-item">
          <font-awesome-icon
            icon="trash-alt"
            class="clickable"
            title="Delete"
            @click="onDeleteClick(card.uuid)"
          />
        </div>

        <div class="card-footer-item">
          <font-awesome-icon
            icon="edit"
            class="clickable"
            title="Edit"
            @click="onEditClick(card.uuid)"
          />
        </div>

        <div class="card-footer-item">
          <font-awesome-icon
            icon="heart"
            class="clickable"
            :title="card.liked ? 'Unlike' : 'Like'"
            :style="heartStyle"
            @click="onHeartClick(card.uuid)"
          />
        </div>
      </footer>
    </div>
  </div>
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
  },
  computed: {
    heartStyle() {
      return this.card.liked ? { color: 'red' } : {};
    }
  }
};
</script>

<style lang="css" scoped>
.clickable:hover {
  cursor: pointer;
}
</style>
