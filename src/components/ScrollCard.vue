<template>
  <div class="cards" v-touch:swipe.right="previous" v-touch:swipe.left="next">
    <div class="arrow arrow-left" @click.stop="previous">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="arrow arrow-right" @click.stop="next">
      <i class="fa fa-chevron-right"></i>
    </div>
    <div
      class="card"
      v-for="(card, index) in cards"
      :key="card.id"
      :class="{
        previous: card.id < currentCard ? true : false,
        next: card.id > currentCard ? true : false,
      }"
    >
      {{ card.id }} -- {{ card.data }}
      asd asd as dasd ad
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currentCard = ref(2);
    const next = () => {
      if (currentCard.value != cards.value.length) currentCard.value++;
    };
    const previous = () => {
      if (currentCard.value != 1) currentCard.value--;
    };
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
      {
        id: 4,
        data: "card4",
      },
      {
        id: 5,
        data: "card5",
      },
      {
        id: 6,
        data: "card6",
      },
    ]);
    return {
      cards,
      currentCard,
      next,
      previous,
    };
  },
};
</script>

<style lang="less" scoped>
.arrow {
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-left {
  left: -150px;
}

.arrow-right {
  right: -150px;
}
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
  z-index: 2;
}
.previous {
  transform: scale(0.6);
  left: -150px;
  z-index: 1;
}
.next {
  transform: scale(0.6);
  right: -150px;
  z-index: 1;
}
</style>
