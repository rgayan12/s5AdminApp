<template>
  <myHeader title="My Bookings" ></myHeader>
  <!-- Content Block -->
  <ion-page class="body">
    <ion-content>
      <ion-card href="/view-booking" v-for="(item, index) in dataArray" :key="index">
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
            <ion-button href="/view-booking" size="small" color="warning"
              ><ion-icon name="eye-outline"></ion-icon
            ></ion-button>
          <ion-button size="small" color="secondary"
            ><ion-icon name="print-outline"></ion-icon
          ></ion-button>
          <ion-button size="small" @click="deleteBooking(index)" color="danger"
            ><ion-icon name="trash-outline"></ion-icon
          ></ion-button>
        </div>
      </ion-card>
    </ion-content>

    <!-- End Content Block-->
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myHeader from "@/views/shared/myHeader.vue";
import bookingTab from "@/views/booking/TabBar.vue";
import PageTwo from "@/views/booking/viewBooking.vue";

import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "myList",
  data() {
    return {
      dataArray: [],
    };
  },
  mounted() {
    this.dataArray = [
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
    ];
  },
  methods: {
    deleteBooking: function (index: number) {
      this.dataArray.splice(index, 1);
    },
  },
  components: {
    PageTwo,
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
  },
  setup(){
    const router = useRouter();
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
