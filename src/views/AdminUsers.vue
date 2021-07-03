<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-show="user.isAdmin">admin</td>
          <td v-show="!user.isAdmin">user</td>
          <td>
            <button
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              v-show="user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              v-show="!user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { users } = data;
        this.users = users;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法更新使用者身分，請稍後再試",
        });
      }
    },
  },
};
</script>
