<template>
  <ion-page>
    <!-- <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>S5 Cleaners</ion-title>
            </ion-toolbar>
    </ion-header> -->

    <ion-content class="ion-justify-content-center">
      <center>
            <img
              src="https://s5cleaners.com/frontend/assets/images/logo-new.png"
              id="logo"
              alt=""
            />
          </center>
      <ion-card>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <h1 class="logo">Login</h1>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
          </ion-list>

          <ion-button expand="block" @click="login()">Login</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import myHeader from "@/views/shared/myHeader.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    myHeader,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Add your login logic here
    },
  },
});
</script>

<style scoped>

ion-label,
.logo {
  color: gray !important;
}
#logo {
  width: 20%;
  margin-top: 40%;
}
ion-card{
  
  border-radius: 15px;
  border: 1px solid #3881ff3f;
}
</style>
