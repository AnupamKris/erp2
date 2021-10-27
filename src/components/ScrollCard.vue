<template>
  <button @click="previous">previous</button>
  <button @click="next">next</button>
  <div class="cards">
    <div
      class="card"
      v-for="(card,index) in cards"
      :key="card.id"
      :class="{
        previous :   card.id < currentCard ? true : false,
        next :   card.id > currentCard ? true : false
      }"
    >
      {{ card.id }} -- {{ card.data }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currentCard = ref(2);
    const next = () => {
      if (currentCard.value != 3)
      currentCard.value++
    }
    const previous = () => {
      if (currentCard.value != 1)
      currentCard.value--
    }
    const cards = ref([
      {
        id: 1,
        data: "card1",
      },
      {
        id: 2,
        data: "card2",
      },
      {
        id: 3,
        data: "card3",
      },
    ]);
    return {
      cards,
      currentCard,
      next,
      previous
    };
  },
};
</script>

<style lang="less" scoped>
.cards {
  width: 300px;
  height: 300px;
  position: relative;
}
.card {
  transition: 0.3s;
  width: 300px;
  height: 300px;
  background: #131313;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.previous {
  transform: scale(0.6);
  left: -150px;
}
.next {
  transform: scale(0.6);
  right: -150px;
}
</style>
