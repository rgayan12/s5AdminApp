<template>
    <myHeader title="My Quotations"></myHeader>
    
    <ion-page class="body">
        <!-- Content Block -->
        <ion-content>
            <ion-card v-for="(item, index) in dataArray" :key="index">
                <ion-card-header class="rmv-p-b">
                    <ion-card-title class="cus-title">{{ item.customerName }}</ion-card-title>
                    <ion-card-subtitle>{{ item.id }}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content class="rmv-p-b"> {{ item.description }} </ion-card-content>
                <div class="acn-btn">
                    <ion-button size="small" color="warning"><ion-icon name="eye-outline"></ion-icon></ion-button>
                    <ion-button size="small" color="medium"><ion-icon name="calendar-outline"></ion-icon></ion-button>
                    <ion-button size="small" color="secondary"><ion-icon name="cash-outline"></ion-icon></ion-button>
                    <ion-button size="small" color="light"><ion-icon name="create-outline"></ion-icon></ion-button>
                    <ion-button size="small" color="tertiary"><ion-icon name="print-outline"></ion-icon></ion-button>
                    <ion-button size="small" color="danger"><ion-icon name="trash-outline"></ion-icon></ion-button>
                </div>
            </ion-card>
        </ion-content>
        <!-- End Content Block-->
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import myHeader from "@/views/shared/myHeader.vue";
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

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
  mounted() {
    this.dataArray = [
      {
        "id": 101001,
        "customerName": "David Kim",
        "companyName": "Acme Co.",
        "email": "david.kim@acme.com",
        "amount": 500.00,
        "isComplete": false,
        "createDate": "2023-05-10",
        "description": "Installation of new air conditioning unit",
        "services": {
            "serviceName": "HVAC Service",
            "price": 500.00,
            "description": "Includes installation of new AC unit"
        },
        "roomType": {
            "roomName": "Conference Room",
            "price": 50.00,
            "qty": 1
        }
      },
      {
        "id": 101002,
        "customerName": "Emily Wilson",
        "companyName": "",
        "email": "emily.wilson@gmail.com",
        "amount": 80.00,
        "isComplete": true,
        "createDate": "2023-05-02",
        "description": "Painting of living room",
        "services": {
            "serviceName": "Painting Service",
            "price": 80.00,
            "description": "Includes painting of walls and trim"
        },
        "roomType": {
            "roomName": "Living Room",
            "price": 40.00,
            "qty": 2
        }
      },
      {
        "id": 101003,
        "customerName": "Mark Johnson",
        "companyName": "Johnson Corp.",
        "email": "mark.johnson@johnsoncorp.com",
        "amount": 1500.00,
        "isComplete": false,
        "createDate": "2023-05-05",
        "description": "Kitchen remodel",
        "services": [
            {
                "serviceName": "Carpentry Service",
                "price": 1000.00,
                "description": "Custom cabinetry and countertops"
            },
            {
                "serviceName": "Electrical Service",
                "price": 500.00,
                "description": "Installation of new lighting fixtures and outlets"
            }
        ],
        "roomType": {
        "roomName": "Kitchen",
        "price": 90.00,
        "qty": 1
        }
      },
      {
        "id": 101004,
        "customerName": "Linda Garcia",
        "companyName": "Garcia & Sons",
        "email": "linda.garcia@garciaandsons.com",
        "amount": 500.00,
        "isComplete": false,
        "createDate": "2023-05-09",
        "description": "Deep cleaning of hotel room",
        "services": {
            "serviceName": "Hotel Cleaning",
            "price": 500.00,
            "description": "Includes cleaning of all surfaces and changing of linens"
        },
        "roomType": {
            "roomName": "Deluxe Suite",
            "price": 50.00,
            "qty": 1
        }
      },
      {
        "id": 101005,
        "customerName": "John Lee",
        "companyName": "",
        "email": "john.lee@gmail.com",
        "amount": 65.00,
        "isComplete": true,
        "createDate": "2023-05-01",
        "description": "Window cleaning for apartment",
        "services": {
            "serviceName": "Window Cleaning",
            "price": 65.00,
            "description": "Includes cleaning of exterior and interior windows"
        },
        "roomType": {
            "roomName": "Apartment",
            "price": 10.00,
            "qty": 2
        }
      },
      {
        "id": 101006,
        "customerName": "Mary Brown",
        "companyName": "Brown & Associates",
        "email": "mary.brown@brownandassociates.com",
        "amount": 1200.00,
        "isComplete": false,
        "createDate": "2023-05-04",
        "description": "Installation of new carpeting",
        "services": {
            "serviceName": "Carpet Installation",
            "price": 1200.00,
            "description": "Includes removal of old carpeting and installation of new carpeting"
        },
        "roomType": {
            "roomName": "Living Room and Bedrooms",
            "price": 25.00,
            "qty": 1
        }
      },
      {
        "id": 101007,
        "customerName": "David Kim",
        "companyName": "Kim Enterprises",
        "email": "david.kim@kiment.com",
        "amount": 950.00,
        "isComplete": false,
        "createDate": "2023-05-06",
        "description": "Bathroom renovation",
        "services": [
        {
            "serviceName": "Plumbing Service",
            "price": 550.00,
            "description": "Installation of new sink, toilet, and shower fixtures"
        },
        {
            "serviceName": "Tile Installation",
            "price": 400.00,
            "description": "Installation of new floor and wall tiles"
        }
        ],
        "roomType": {
            "roomName": "Bathroom",
            "price": 100.00,
            "qty": 1
        }
      },
      {
        "id": 101008,
        "customerName": "Susan Johnson",
        "companyName": "",
        "email": "susan.johnson@gmail.com",
        "amount": 75.00,
        "isComplete": true,
        "createDate": "2023-05-10",
        "description": "One-time cleaning of apartment",
        "services": {
            "serviceName": "Apartment Cleaning",
            "price": 75.00,
            "description": "Includes cleaning of all surfaces and floors"
        },
        "roomType": {
            "roomName": "Apartment",
            "price": 70.00,
            "qty": 1
        }
      }
    ]
  },
  methods: {},
  components: {
    myHeader,
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
  setup() {

  }
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
</style>