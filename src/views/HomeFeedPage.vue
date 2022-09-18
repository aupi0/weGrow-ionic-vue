<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Feed</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Feed</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <feed-card name="card here"/> -->
      <feed-list :feed="feed" name="feed list"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

// import FeedCard from '@/components/FeedCard.vue';
import FeedList from "@/components/FeedList.vue";

export default defineComponent({
  name: "HomeFeedPage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, FeedList },
  computed: {
    feed() {
      // console.log("store dispatch = ", this.$store.getters['feed/getFeed']);
      // console.log("getters get feed = ", this.$store.getters.getFeed)
      return this.$store.getters.getFeed;
    },
  },
});
</script>
