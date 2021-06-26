// ./src/components/NewestRestaurants.vue
<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>

<script>
import moment from "moment";

export default {
  filters: {
    fromNow(value) {
      if (!value) {
        return "-";
      }
      // 使用 moment 取得 fromNow 的時間
      return moment(value).fromNow();
    },
  },
  // props: can view; cannot edit
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>
