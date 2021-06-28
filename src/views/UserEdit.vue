<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="profile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="profile.image"
          :src="profile.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  profile: {
    id: 51,
    name: "Ryan",
    email: "123@gmail.com",
    password: "$2a$10$9uleePVR1Sizan2sYraSwufL9SKBx9UPaYkrvRM7UJ0Hbcb4VXtWu",
    isAdmin: false,
    image: "https://i.imgur.com/eVfTIsY.jpg",
    createdAt: "2021-06-26T09:22:30.000Z",
    updatedAt: "2021-06-26T09:22:30.000Z",
    Comments: [],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
        isAdmin: false,
        image: "https://i.imgur.com/eVfTIsY.jpg",
        createdAt: "2021-05-17T05:11:05.000Z",
        updatedAt: "2021-06-23T12:15:27.000Z",
        Followship: {
          followerId: 51,
          followingId: 1,
          createdAt: "2021-06-27T07:46:39.000Z",
          updatedAt: "2021-06-27T07:46:39.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser id:", userId);

      const { profile } = dummyUser;
      const { id, name, image } = profile;
      this.profile = {
        ...this.profile,
        id,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      // 使用者未選擇檔案
      if (files.length === 0) {
        this.profile.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.profile.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
