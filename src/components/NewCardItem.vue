<template>
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
</template>

<script>
export default {
  name: 'NewCardItem',
  methods: {
    onAddClick() {
      this.$router.push({ name: 'CreateCard' });
    }
  }
};
</script>

<style scoped></style>
