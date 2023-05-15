<template>
  <!-- <ion-page> -->
  <ion-tabs class="footer-tab">
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/add-user">
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-label>Add New User</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>

  <!-- </ion-page> -->
</template>
  
<script lang="ts">

import { defineComponent } from "vue";
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/vue";

export default defineComponent({
  name: "bookingTab",
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon
  },
});
</script>
  
<style scoped></style>
  