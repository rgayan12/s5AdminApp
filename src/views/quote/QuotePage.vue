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
      <ion-card @click="viewQuote()" v-for="(item, index) in dataArray" :key="index">
        <ion-card-header class="rmv-p-b">
          <ion-card-title class="cus-title">{{
            item.customerName
          }}</ion-card-title>
          <ion-card-subtitle>{{ item.id }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="rmv-p-b">
          {{ item.description }}
        </ion-card-content>
        <div class="acn-btn">
          <ion-button size="small" color="warning"
            ><ion-icon name="eye-outline"></ion-icon
          ></ion-button>
          <ion-button size="small" color="medium"
            ><ion-icon name="calendar-outline"></ion-icon
          ></ion-button>
          <ion-button size="small" color="secondary"
            ><ion-icon name="cash-outline"></ion-icon
          ></ion-button>
          <ion-button size="small" color="light"
            ><ion-icon name="create-outline"></ion-icon
          ></ion-button>
          <!-- <ion-button size="small" color="danger"
            ><ion-icon name="trash-outline"></ion-icon
          ></ion-button> -->
          <ion-button id="delete-quote"
            size="small"
            @click.stop="showDeleteConfirmation(index)"
            color="danger"
            ><ion-icon name="trash-outline"></ion-icon
          ></ion-button>
        </div>
      </ion-card>
    </ion-content>
    <!-- End Content Block-->

    <!-- Start Delete Confirmation Alert -->
    <ion-alert
        :is-open="showAlert"
        header="Delete Confirmation"
        message="Are you sure you want to delete this quote?"
        :buttons="alertButtons"
        @didDismiss="showAlert = false">
    </ion-alert>
    <!-- End Delete Confirmation Alert -->
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
  name: "MyQuotes",
  data() {
    return {
      dataArray: [],
    };
  },
  methods: {
    viewQuote: function () {
      this.$router.push("/view-quotes");
    },
    showDeleteConfirmation(index: number) {
      this.selectedIndex = index;
      this.showAlert = true;
    }
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
        id: 101001,
        customerName: "David Kim",
        companyName: "Acme Co.",
        email: "david.kim@acme.com",
        amount: 500.0,
        isComplete: false,
        createDate: "2023-05-10",
        description: "Installation of new air conditioning unit",
        services: {
          serviceName: "HVAC Service",
          price: 500.0,
          description: "Includes installation of new AC unit",
        },
        roomType: {
          roomName: "Conference Room",
          price: 50.0,
          qty: 1,
        },
      },
      {
        id: 101002,
        customerName: "Emily Wilson",
        companyName: "",
        email: "emily.wilson@gmail.com",
        amount: 80.0,
        isComplete: true,
        createDate: "2023-05-02",
        description: "Painting of living room",
        services: {
          serviceName: "Painting Service",
          price: 80.0,
          description: "Includes painting of walls and trim",
        },
        roomType: {
          roomName: "Living Room",
          price: 40.0,
          qty: 2,
        },
      },
      {
        id: 101003,
        customerName: "Mark Johnson",
        companyName: "Johnson Corp.",
        email: "mark.johnson@johnsoncorp.com",
        amount: 1500.0,
        isComplete: false,
        createDate: "2023-05-05",
        description: "Kitchen remodel",
        services: [
          {
            serviceName: "Carpentry Service",
            price: 1000.0,
            description: "Custom cabinetry and countertops",
          },
          {
            serviceName: "Electrical Service",
            price: 500.0,
            description: "Installation of new lighting fixtures and outlets",
          },
        ],
        roomType: {
          roomName: "Kitchen",
          price: 90.0,
          qty: 1,
        },
      },
      {
        id: 101004,
        customerName: "Linda Garcia",
        companyName: "Garcia & Sons",
        email: "linda.garcia@garciaandsons.com",
        amount: 500.0,
        isComplete: false,
        createDate: "2023-05-09",
        description: "Deep cleaning of hotel room",
        services: {
          serviceName: "Hotel Cleaning",
          price: 500.0,
          description:
            "Includes cleaning of all surfaces and changing of linens",
        },
        roomType: {
          roomName: "Deluxe Suite",
          price: 50.0,
          qty: 1,
        },
      },
      {
        id: 101005,
        customerName: "John Lee",
        companyName: "",
        email: "john.lee@gmail.com",
        amount: 65.0,
        isComplete: true,
        createDate: "2023-05-01",
        description: "Window cleaning for apartment",
        services: {
          serviceName: "Window Cleaning",
          price: 65.0,
          description: "Includes cleaning of exterior and interior windows",
        },
        roomType: {
          roomName: "Apartment",
          price: 10.0,
          qty: 2,
        },
      },
      {
        id: 101006,
        customerName: "Mary Brown",
        companyName: "Brown & Associates",
        email: "mary.brown@brownandassociates.com",
        amount: 1200.0,
        isComplete: false,
        createDate: "2023-05-04",
        description: "Installation of new carpeting",
        services: {
          serviceName: "Carpet Installation",
          price: 1200.0,
          description:
            "Includes removal of old carpeting and installation of new carpeting",
        },
        roomType: {
          roomName: "Living Room and Bedrooms",
          price: 25.0,
          qty: 1,
        },
      },
      {
        id: 101007,
        customerName: "David Kim",
        companyName: "Kim Enterprises",
        email: "david.kim@kiment.com",
        amount: 950.0,
        isComplete: false,
        createDate: "2023-05-06",
        description: "Bathroom renovation",
        services: [
          {
            serviceName: "Plumbing Service",
            price: 550.0,
            description:
              "Installation of new sink, toilet, and shower fixtures",
          },
          {
            serviceName: "Tile Installation",
            price: 400.0,
            description: "Installation of new floor and wall tiles",
          },
        ],
        roomType: {
          roomName: "Bathroom",
          price: 100.0,
          qty: 1,
        },
      },
      {
        id: 101008,
        customerName: "Susan Johnson",
        companyName: "",
        email: "susan.johnson@gmail.com",
        amount: 75.0,
        isComplete: true,
        createDate: "2023-05-10",
        description: "One-time cleaning of apartment",
        services: {
          serviceName: "Apartment Cleaning",
          price: 75.0,
          description: "Includes cleaning of all surfaces and floors",
        },
        roomType: {
          roomName: "Apartment",
          price: 70.0,
          qty: 1,
        },
      },
    ]);
    const selectedIndex = ref(-1);
    const showAlert = ref(false);

    const deleteQuote = (index) => {
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
          deleteQuote(selectedIndex.value); 
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
  padding-top: 15px;
  padding-bottom: 12px;
}

.rmv-p-b {
  padding-top: 8px;
  padding-bottom: 0px !important;
}

.cus-title {
  padding-top: 12px;
}

.body {
  margin-top: 40px;
}

.ion-content-custom {
  height: calc(100vh - 56px); /* Set the desired height (subtracting header height) */
  overflow-y: auto; /* Enable scrolling */
}

</style>
