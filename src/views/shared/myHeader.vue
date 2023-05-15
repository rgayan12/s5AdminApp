<template>
  <!-- Side Menu Begins-->
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>S5 Cleaners</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item href="/home">
        <ion-label>
          <code>HOME</code>
        </ion-label>
      </ion-item>
      <ion-item href="/booking">
        <ion-label>
          <code>BOOKING</code>
        </ion-label>
      </ion-item>
      <ion-item href="/quote">
        <ion-label>
          <code>QUOTATION</code>
        </ion-label>
      </ion-item>
      <ion-item href="/user">
        <ion-label>
          <code>USERS</code>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>
  <!-- Side Menu End-->

  <!-- Header begin -->
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" v-if="!isEnableBack">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="start" v-if="isEnableBack">
          <ion-back-button @click="goBack()" v-bind:defaultHref="'/home'"
            >Back</ion-back-button
          >
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
  <!-- Header End -->
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "myCustomHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    isEnableBack: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
