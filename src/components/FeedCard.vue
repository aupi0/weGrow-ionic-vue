<template>
  <!-- <ion-item :router-link="`/feed/${feedPost.id}`"> -->
  <ion-item>
    <!-- <ion-card button="true" id="open-post"> -->
    <ion-card class="feed-cards" button="true" @click="setOpen(true)">
      <!-- <ion-card-title> {{ feedPost.author }} </ion-card-title> -->
      <ion-img :src="feedPost.image"></ion-img>
      <ion-card-content>
        <ion-grid>
          <ion-row class="ion-justify-content-between">
            <ion-card-subtitle class="ion-float-start">
              {{ feedPost.plantName }}
            </ion-card-subtitle>
            <ion-card-subtitle class="ion-float-end">
              {{ formatDate(feedPost.created) }}
            </ion-card-subtitle>
          </ion-row>
        </ion-grid>
        <!-- Supposed to show User profile -->
        <ion-item class="ion-no-padding">
          <ion-avatar slot="start">
            <img :src="feedPost.image" />
          </ion-avatar>
          <ion-label> {{ feedPost.author }} </ion-label>
        </ion-item>
        <!-- <ion-item>
          <ion-button fill="solid">Like</ion-button>
          <ion-icon :icon="heart" slot="end"></ion-icon>
          <ion-icon :icon="share" slot="end"></ion-icon>
        </ion-item> -->
        <!-- <ion-img :src="feedPost.image"></ion-img> -->
        <!-- <feed-card-details :feedPost="feedPost"></feed-card-details> -->
        <!-- </ion-modal> -->
      </ion-card-content>
    </ion-card>
  </ion-item>
  <!-- <ion-modal ref="feed-card-details" :feedPost="feedPost" trigger="open-post"/> -->
  <ion-modal
    :is-open="isOpenRef"
    css-class="my-custom-class"
    @didDismiss="setOpen(false)"
  >
    <!-- <ion-content>
      <ion-img :src="feedPost.image"></ion-img>
    </ion-content> -->
    <feed-card-details :feedPost="feedPost"></feed-card-details>
  </ion-modal>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, ref } from "vue";
import {
  IonAvatar,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
} from "@ionic/vue";

import FeedCardDetails from "./FeedCardDetails.vue";

export default defineComponent({
  name: "FeedCard",
  props: ["feedPost"],
  components: {
    IonAvatar,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    // IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonModal,
    IonRow,
    FeedCardDetails,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    const data = { content: "new Content" };
    return { isOpenRef, setOpen, data };
  },
  computed: {
    formatDate() {
      return (dateString: string) => {
        return moment(String(dateString)).format("DD/MM/YYYY");
      };
    },
  },
});
</script>

<style scoped>
.feed-cards {
  /* min-width: 80%; */
  /* height: 300px; */
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19);
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
ion-card-content {
  padding-top: 0.3rem;
}
ion-card-title {
  /* font-size: 16px; */
  padding: 10px;
}
ion-img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}
ion-modal {
  --height: auto;
  --max-height: 90%;
  --min-width: 80%;
  --max-width: 90%;
  --border-radius: 16px;
  --box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19);
}
ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}
</style>
