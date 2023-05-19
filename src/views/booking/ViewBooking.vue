<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button :default-href="'/dashboard/Dashboard'">Back</ion-back-button>
        </ion-buttons>
        <ion-title>View Booking</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <br />
      <ion-item class="title">
        <ion-label
          ><h2><strong>Customer Details</strong></h2></ion-label
        >
      </ion-item>
      <ion-item>
        <ion-label>Name: </ion-label>
        <ion-label>John Doe</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Email: </ion-label>
        <ion-label>john@s5.com</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Contact No.: </ion-label>
        <ion-label>+001234567</ion-label>
      </ion-item>

      <br />
      <ion-item>
        <ion-label
          ><h2><strong>Service Details</strong></h2></ion-label
        >
      </ion-item>

      <ion-item>
        <ion-label>
          <h5>Property Type</h5>
          <p>Office</p>
        </ion-label>
        <ion-label>
          <h5>Amount</h5>
          <p>£ 2317.00</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h5>Required Service</h5>
          <p>Post Building Work Cleaning</p>
        </ion-label>
        <ion-label>
          <h5>Amount</h5>
          <p>£ 150.00</p>
        </ion-label>
      </ion-item>
      <br />
      <ion-item>
        <ion-label
          ><h2><strong>Room Types</strong></h2></ion-label
        >
      </ion-item>
      <ion-item>
        <ion-label>
          <h5>Bedroom</h5>
          <p>Unit price: £ 0.00</p>
          <p>Qty: 1</p>
        </ion-label>
        <ion-label>
          <h5>Net Amount</h5>
          <p>£ 00.00</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h5>Kitchen</h5>
          <p>Unit price: £ 0.00</p>
          <p>Qty: 1</p>
        </ion-label>
        <ion-label>
          <h5>Net Amount</h5>
          <p>£ 00.00</p>
        </ion-label>
      </ion-item>

      <br />
      <ion-item>
        <ion-label>
          <h2><strong>Additional Information:</strong></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugiat
            provident inventore pariatur aliquid, omnis veniam placeat labore
            saepe vero repellat nisi! Ratione laboriosam nobis, odio optio atque
            deserunt inventore!
          </p>
        </ion-label>
      </ion-item>
      <br />
      <ion-item>
        <ion-label
          ><h2><strong>Total Amount:</strong></h2></ion-label
        >
        <ion-label
          ><h2><strong>£ 0.00</strong></h2></ion-label
        >
      </ion-item>
      <br />
      <ion-item>
        <ion-label
          ><h2><strong>Price Edit History</strong></h2></ion-label
        >
      </ion-item>
      <ion-item>
        <ion-label>
          <h5>Edited by: John Doo</h5>
          <p></p>
          <p>Reason</p>
        </ion-label>
        <ion-label>
          <p>Old Amount: £ 2,517.00</p>
          <p>New Amount: £ 2,500.00</p>
        </ion-label>
      </ion-item>
      <br />
      <br />
      <br />
    </ion-content>
    <!-- End Content Block-->
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { addOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ViewBooking",
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonPage,
  },
  data() {
    return {
      dataArray: [],
    };
  },
  mounted() {},
  methods: {},
});
</script>

<style>
ion-back-button {
  /* display: block; */
}
</style>
