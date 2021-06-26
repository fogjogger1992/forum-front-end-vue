<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#"> {{ comment.Restaurant.name }} </a>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <a href="#"> {{ comment.User.name }} </a>
        {{ comment.User.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

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
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>