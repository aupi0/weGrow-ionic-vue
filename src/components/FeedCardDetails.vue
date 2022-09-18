<template>
  <ion-card>
    <!-- Supposed to show User profile -->
    <ion-item>
      <ion-avatar slot="start">
        <img :src="feedPost.image" />
      </ion-avatar>
      <ion-label> 
        <h2>{{ feedPost.author }}</h2>
        <ion-note>{{ feedPost.location }}</ion-note>
      </ion-label>
    </ion-item>
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
      <h2>
        {{ feedPost.description }}
      </h2>
      <!-- <ion-item>
                    <ion-button fill="solid">Like</ion-button>
                    <ion-icon :icon="heart" slot="end"></ion-icon>
                    <ion-icon :icon="share" slot="end"></ion-icon>
                    </ion-item> -->
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent } from "vue";
import {
  IonAvatar,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
} from "@ionic/vue";

export default defineComponent({
  name: "FeedCardDetails",
  props: ["feedPost"],
  components: {
    IonAvatar,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonImg,
    IonItem,
    IonLabel,
    IonNote,
    IonRow,
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
ion-card {
  width: 100%;
  height: 100%;
  margin: 0px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19);
}
ion-card-content {
  padding-top: 0.3rem;
}
ion-img {
  max-width: 100%;
  max-height: 50%;
  object-fit: contain;
}
</style>
