<template>
  <ion-list lines="none">
    <feed-card
      v-for="feedPost in feed"
      :key="feedPost.id"
      :feedPost="feedPost"
    ></feed-card>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonList } from "@ionic/vue";

import FeedCard from "./FeedCard.vue";

export default defineComponent({
  name: "FeedList",
  // props: {
  //   name: String,
  //   feed,
  // },
  props: ["feed"],
  components: { IonList, FeedCard },
});
</script>

<style scoped>
</style>
