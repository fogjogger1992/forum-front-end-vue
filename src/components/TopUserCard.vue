<template>
  <div class="col-3">
    <router-link :to="{ name: 'users-top' }">
      <img :src="user.image" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="unfollow"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="follow"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    follow() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    unfollow() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>
