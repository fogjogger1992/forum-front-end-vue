<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong>
      收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in favoritedRestaurants"
        :key="restaurant.id"
        :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      >
        <img
          :src="restaurant.image"
          alt=""
          style="width: 60px; height: 60px"
          class="mr-2"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantsCard",
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>