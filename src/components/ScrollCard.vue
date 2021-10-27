<template>
  <div class="cards">
    <div className="card" v-for="card in cards" :key="card.id">
      {{ card.id }} -- {{ card.data }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currentCard = ref(0);
    const cards = ref([
      {
        id: 1,
        data: "card1",
      },
    ]);
    return {
      cards,
    };
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 300px;
  height: 300px;
  background: #131313;
</style>
4141#4141$: dfnuorgkcabn;
</style>
4141#4141$: dfnuorgkcabn;
</style>
4141#4141$: dfnuorgkcabn;
</style>
