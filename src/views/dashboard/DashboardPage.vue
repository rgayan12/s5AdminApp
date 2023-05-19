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
                <!-- <h5>Completed Jobs</h5> -->
                <ion-card-subtitle
                  >Completed<br />
                  Jobs</ion-card-subtitle
                >
                <ion-card-title>
                  <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                  10
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <!-- <h5>Verified</h5> -->
                <ion-card-subtitle
                  >Completed<br />
                  Job Amount</ion-card-subtitle
                >
                <ion-card-title>
                  <ion-icon name="diamond-outline"></ion-icon>
                  £ 3
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <!-- <h5>Bookings</h5> -->
                <ion-card-subtitle>Bookings</ion-card-subtitle>
                <ion-card-title>
                  <ion-icon name="checkbox-outline"></ion-icon> 0
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <!-- <h5>Pending</h5> -->
                <ion-card-subtitle>Potential Income</ion-card-subtitle>
                <ion-card-title>
                  <ion-icon name="trending-up-outline"></ion-icon> £ 3
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <h5>Bookings</h5>
          </ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div>
            <apexchart
              width="100%"
              height="200"
              type="bar"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <h5>
              <ion-icon name="trending-up-outline"></ion-icon> Best Selling
            </h5>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label>Monday</ion-label>
            <ion-label></ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Wednesday</ion-label>
            <ion-label></ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <h5>
              <ion-icon name="trending-down-outline"></ion-icon> Selling Lowest
              Selling
            </h5>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label>Saturday</ion-label>
            <ion-label></ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Sunday</ion-label>
            <ion-label></ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

export default defineComponent({
  name: "Users",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow,
    IonItem,
    IonLabel,
    IonIcon,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          height: 200,
        },
        xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Bookings",
          data: [20, 40, 30, 5, 25, 10, 35],
        },
      ],
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
.text-center {
  text-align: center;
}
</style>
