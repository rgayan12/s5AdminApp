<template>
    <ion-page>

        
        <!--  Header Block -->
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>My List Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <!-- End Header Block -->
        <!-- Content Block -->
        <ion-content>

            <ion-list>
                <ion-item v-for="(item, index) in dataArray" :key="index">
                    <ion-checkbox slot="end"></ion-checkbox>
                    <ion-label>
                        <h1>{{ item.title }}</h1>
                        <ion-note>{{ item.userId }}</ion-note>
                        <ion-badge color="success" slot="start"> {{ item.completed }} </ion-badge>
                    </ion-label>
                </ion-item>
            </ion-list>


            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="addOne()">
                    <ion-icon icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
        <!-- End Content Block-->

    </ion-page>
</template>

<script>
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios'


export default defineComponent({
    name: 'myList',
    data() {
        return {
            dataArray: [],
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.dataArray = response.data
            })
            .error((error) => {
                console.log(error);
            })
    },
    methods: {
        addOne() {
            let newData = {
                "userId": 190,
                "id": 900,
                "title": "My Custom Input",
                "completed": true
            }
            this.dataArray.push(newData)
        }
    },components:{
        IonBackButton
    }
})

</script>

<style></style>