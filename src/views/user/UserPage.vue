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
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <h5>Users</h5>
                <ion-card-title>
                  <ion-icon name="person-outline"></ion-icon>
                  10
                </ion-card-title>
                <ion-card-subtitle>Total Users</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <h5>Verified</h5>
                <ion-card-title>
                  <ion-icon name="person-add-outline"></ion-icon>
                  3
                </ion-card-title>
                <ion-card-subtitle>Recent analytics</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <h5>Duplicate</h5>
                <ion-card-title>
                  <ion-icon name="people-outline"></ion-icon> 0
                </ion-card-title>
                <ion-card-subtitle>Recent analytics</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <h5>Pending</h5>
                <ion-card-title>
                  <ion-icon name="alarm-outline"></ion-icon> 3
                </ion-card-title>
                <ion-card-subtitle>Recent analytics</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card v-for="(item, index) in dataArray" :key="index">
        <ion-card-header class="rmv-p-b">
          <ion-card-title>
            {{ item.customerName }}
            <ion-icon
              v-if="item.status !== 'active'"
              name="close-circle"
              style="font-size: 14px"
              color="danger"
            ></ion-icon>
          </ion-card-title>
          <ion-card-subtitle>{{ item.email }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content class="rmv-p-b">
          {{ item.role }}
        </ion-card-content>
        <div class="acn-btn">
          <ion-button
            size="small"
            :color="item.status === 'active' ? 'success' : 'danger'"
          >
            <ion-icon name="shield-checkmark-outline"></ion-icon>
          </ion-button>
          <ion-button size="small" color="warning">
            <ion-icon name="create-outline"></ion-icon>
          </ion-button>
          <ion-button size="small" color="secondary">
            <ion-icon name="shield-outline"></ion-icon>
          </ion-button>
          <ion-button
            size="small"
            @click.prevent="showDeleteConfirmation(index)"
            color="danger"
          >
            <ion-icon name="trash-outline"></ion-icon>
          </ion-button>
        </div>
      </ion-card>
    </ion-content>

    <ion-alert
        :is-open="showAlert"
        header="Delete Confirmation"
        message="Are you sure you want to delete this user?"
        :buttons="alertButtons"
        @didDismiss="showAlert = false">
    </ion-alert>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";

import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonAlert
} from "@ionic/vue";

export default defineComponent({
  name: "Users",
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonAlert
  },
  data() {
    return {
      dataArray: [],
    };
  },
  methods: {
    showDeleteConfirmation(index: number) {
      this.selectedIndex = index;
      this.showAlert = true;
    },
    viewBooking: function () {
      this.$router.push("/view-booking");
    },
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
        role: "Admin",
        status: "active",
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
        role: "Client",
        status: "deactive",
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
        role: "N/A",
        status: "active",
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

ion-card-title {
  display: flex;
  align-items: center;
}

ion-card-title ion-icon {
  margin-right: 8px;
}
</style>
