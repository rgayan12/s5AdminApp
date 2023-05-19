<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-y="true" class="ion-content-custom">
      <ion-card
        @click="viewBooking()"
        v-for="(item, index) in dataArray"
        :key="index"
      >
        <ion-card-header class="rmv-p-b">
          <ion-card-title>{{ item.customerName }}</ion-card-title>
          <ion-card-subtitle>{{ item.id }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content class="rmv-p-b">
          {{ item.description }}
        </ion-card-content>
        <div class="acn-btn">
          <ion-button size="small" color="success"
            ><ion-icon name="checkmark-circle-outline"></ion-icon
          ></ion-button>
          <!-- <router-link to="view-booking">
            <ion-button size="small" color="warning"
              ><ion-icon name="eye-outline"></ion-icon
            ></ion-button>
          </router-link> -->
          <!-- <ion-button size="small" color="secondary"
            ><ion-icon name="print-outline"></ion-icon
          ></ion-button> -->
          <ion-button id="delete-booking"
            size="small"
            @click.stop="showDeleteConfirmation(index)"
            color="danger"
            ><ion-icon name="trash-outline"></ion-icon
          ></ion-button>
        </div>
      </ion-card>
    </ion-content>

    <ion-alert
        :is-open="showAlert"
        header="Delete Confirmation"
        message="Are you sure you want to delete this booking?"
        :buttons="alertButtons"
        @didDismiss="showAlert = false">
    </ion-alert>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent, CustomEvent, ref } from "vue";
import TabBar from '@/views/booking/TabBar.vue';

import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonAlert
} from "@ionic/vue";

export default defineComponent({
  name: "MyBoking",
  data() {
    return {
      dataArray: [],
  
    };
  },
  methods: {
    viewBooking: function () {
      this.$router.push("/view-booking");
    },
    showDeleteConfirmation(index: number) {
      this.selectedIndex = index;
      this.showAlert = true;
    },
  },
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
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    TabBar,
    IonAlert
  },
  setup() {
    const dataArray = ref([
      {
        id: 100001,
        customerName: "Alice Smith",
        companyName: "XYZ Inc.",
        email: "alice.smith@xyz.com",
        amount: 120.0,
        isComplete: false,
        createDate: "2023-05-08",
        description: "Reservation for a bedroom",
        services: {
          serviceName: "General Cleaning",
          price: 25.0,
          description: "Includes dusting, vacuuming, and wiping surfaces",
        },
        roomType: {
          roomName: "Master Bedroom",
          price: 95.0,
          qty: 1,
        },
      },
      {
        id: 100002,
        customerName: "Bob Johnson",
        companyName: "ABC Co.",
        email: "bob.johnson@abc.com",
        amount: 75.0,
        isComplete: true,
        createDate: "2023-05-07",
        description: "Reservation for a living room",
        services: {
          serviceName: "Carpet Cleaning",
          price: 50.0,
          description: "Deep cleaning of carpets to remove dirt and stains",
        },
        roomType: {
          roomName: "Living Room",
          price: 25.0,
          qty: 1,
        },
      },
      {
        id: 100003,
        customerName: "Charlie Brown",
        companyName: "DEF Corp.",
        email: "charlie.brown@def.com",
        amount: 35.0,
        isComplete: true,
        createDate: "2023-05-06",
        description: "Reservation for a bathroom",
        services: {
          serviceName: "Tile and Grout Cleaning",
          price: 35.0,
          description:
            "Cleaning and scrubbing of tile and grout to remove dirt and grime",
        },
        roomType: {
          roomName: "Bathroom",
          price: 0.0,
          qty: 1,
        },
      },
      {
        id: 100004,
        customerName: "David Lee",
        companyName: "GHI LLC",
        email: "david.lee@ghi.com",
        amount: 90.0,
        isComplete: false,
        createDate: "2023-05-05",
        description: "Reservation for a dining room",
        services: {
          serviceName: "Upholstery Cleaning",
          price: 40.0,
          description: "Cleaning of upholstered chairs and sofas",
        },
        roomType: {
          roomName: "Dining Room",
          price: 50.0,
          qty: 1,
        },
      },
      {
        id: 100006,
        customerName: "David Lee",
        companyName: "GHI LLC",
        email: "david.lee@ghi.com",
        amount: 90.0,
        isComplete: false,
        createDate: "2023-05-05",
        description: "Reservation for a dining room",
        services: {
          serviceName: "Upholstery Cleaning",
          price: 40.0,
          description: "Cleaning of upholstered chairs and sofas",
        },
        roomType: {
          roomName: "Dining Room",
          price: 50.0,
          qty: 1,
        },
      },
      {
        id: 100008,
        customerName: "David Lee",
        companyName: "GHI LLC",
        email: "david.lee@ghi.com",
        amount: 90.0,
        isComplete: false,
        createDate: "2023-05-05",
        description: "Reservation for a dining room",
        services: {
          serviceName: "Upholstery Cleaning",
          price: 40.0,
          description: "Cleaning of upholstered chairs and sofas",
        },
        roomType: {
          roomName: "Dining Room",
          price: 50.0,
          qty: 1,
        },
      },
    ]);
    const selectedIndex = ref(-1);
    const showAlert = ref(false);

    const deleteBooking = (index) => {
      dataArray.value.splice(index, 1);
    };

    const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {},
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          deleteBooking(selectedIndex.value); 
        },
      },
    ];

    return {
      dataArray,
      showAlert,
      selectedIndex,
      alertButtons,
    };
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

.ion-content-custom {
  height: calc(100vh - 56px); /* Set the desired height (subtracting header height) */
  overflow-y: auto; /* Enable scrolling */
}
</style>
