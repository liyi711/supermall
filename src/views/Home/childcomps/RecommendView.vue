<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-view">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommend-view {
  flex: 1;
}
.recommend-view img {
  width: 70xp;
  height: 70px;
  margin: 10px;
}
</style>
