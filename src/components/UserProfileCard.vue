<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="userProfile.image | emptyImage"
          alt=""
          style="width: 300px; height: 300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ userProfile.name }}
          </h5>
          <p class="card-text">
            {{ userProfile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ userProfile.Comments.length }}</strong>
              已評論過餐廳
            </li>
            <li>
              <strong>{{ userProfile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ userProfile.Followings.length }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ userProfile.Followers.length }}</strong>
              followers (追隨者)
            </li>
          </ul>
          <template>
            <router-link
              v-if="isCurrentUser"
              :to="{
                name: 'user-edit',
                params: { id: userProfile.id },
              }"
            >
              <button type="submit" class="btn btn-primary">edit</button>
            </router-link>

            <button
              v-if="!isFollowed && !isCurrentUser"
              type="submit"
              class="btn btn-info"
              @click.stop.prevent="addFollowing(userProfile.id)"
            >
              追蹤
            </button>
            <button
              v-else-if="isFollowed && !isCurrentUser"
              type="submit"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(userProfile.id)"
            >
              取消追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    userProfile: {
      type: Object,
      requird: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.isFollowed = true;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>