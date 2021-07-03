<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :user-profile="userProfile"
        :is-current-user="currentUser.id === userProfile.id"
        :initial-is-followed="isFollowed"
      />

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="userProfile.Followings" />

          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="userProfile.Followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="userProfile.Comments" />

          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="userProfile.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "user",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      userProfile: {
        id: -1,
        name: "",
        email: "",
        isAdmin: false,
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserProfile(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUserProfile(id);
    next();
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const {
          id,
          name,
          email,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile;

        this.userProfile = {
          id,
          name,
          email,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        };
        this.isFollowed = data.isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
