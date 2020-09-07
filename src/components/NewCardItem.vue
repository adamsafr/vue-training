<template>
  <div class="column is-one-third">
    <div class="card bm--card-equal-height">
      <div class="card-content has-icon-centered">
        <div class="centered-icon">
          <router-link :to="{ name: 'CreateCard' }">
            <font-awesome-icon icon="plus-square" size="3x" class="clickable" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCardItem'
};
</script>

<style lang="scss" scoped>
.clickable:hover {
  cursor: pointer;
}
.has-icon-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .centered-icon {
    max-width: 50%;
  }
}
</style>
