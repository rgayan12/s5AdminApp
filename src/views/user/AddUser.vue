<template>
  <myHeader title="Add User" isEnableBack="true"></myHeader>
  <!-- Content Block -->
  <ion-page class="body"
    ><br />
    <ion-content>
      <ion-item>
        <ion-input label="Full Name: " placeholder="John Doe"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          label="Email: "
          placeholder="john.doe@example.com"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Contact: " placeholder="+00123456789"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Select Role:</ion-label>
        <ion-select>
          <ion-select-option value="Client">Client</ion-select-option>
          <ion-select-option value="Admin">Admin</ion-select-option>
          <ion-select-option value="Manager">Manager</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Select Company:</ion-label>
        <ion-select>
          <ion-select-option value="Client">Company 1</ion-select-option>
          <ion-select-option value="Admin">Company 2</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button style="float: right;margin-right: 10px;" full color="primary">Add User</ion-button>
    </ion-content>

    <!-- End Content Block-->
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myHeader from "@/views/shared/myHeader.vue";
import bookingTab from "@/views/booking/TabBar.vue";

import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonSelectOption,
} from "@ionic/vue";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

export default defineComponent({
  name: "myList",
  data() {
    return {
      dataArray: [],
    };
  },
  mounted() {},
  methods: {},
  components: {
    myHeader,
    bookingTab,
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
    IonIcon,
    IonSelectOption,
  },
});
</script>

<style scoped>
.acn-btn {
  padding-left: 18px;
  padding-bottom: 10px;
}

.rmv-p-b {
  padding-bottom: 0px !important;
}

.body {
  margin-top: 40px;
}
</style>
