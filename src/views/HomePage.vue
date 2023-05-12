<template>
  <myHeader title="Home"></myHeader>
  <ion-page id="main-content">
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import myHeader from '@/views/shared/myHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'myList',
  data() {
    return {
      dataArray: [],
    }
  },
  components: {
    myHeader
  },
  setup(){
    const router = useRouter();
  }
});


</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
