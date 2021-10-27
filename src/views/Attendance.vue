<template>
  <div class="attendance">
    <div class="dropdown">
      <select name="year" id="years" v-model="year">
        <option value="1" selected>Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
        <option value="4">Year 4</option>
      </select>
    </div>

    <div class="details">
      <div
        class="sem1"
        @click="selected == 'sem1' ? (selected = '') : (selected = 'sem1')"
        :class="{ open: selected == 'sem1' }"
      >
        <div class="sem-details">
          <h2>SEM1</h2>
          <div class="atn">
            <div class="field">
              <div class="hd">Total</div>
              <p class="tot">26</p>
            </div>
            <div class="field">
              <div class="hd">Present</div>
              <p class="present">18</p>
            </div>
            <div class="field">
              <div class="hd">Absent</div>
              <p class="absent">8</p>
            </div>
          </div>
        </div>
        <ScrollCard v-if="selected == 'sem1'" />
      </div>
      <div class="sem2"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Calendar from "@/components/Calendar.vue";
import Calendar2 from "@/components/Calendar2.vue";
import ScrollCard from "@/components/ScrollCard.vue";
export default {
  components: {
    Calendar,
    Calendar2,
    ScrollCard,
  },
  setup() {
    const year = ref("");
    const selected = ref("");
    return {
      year,
      selected,
    };
  },
};
</script>

<style lang="less" scoped>
.dropdown {
  width: 90%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  select {
    font-size: 18px;
    height: 50px;
    width: 100%;
    border: none;
    outline: 0;
    text-align: center;
    background: #606060;
    color: white;

    border-radius: 25px;
  }
}

.attendance {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.sem1 {
  width: 90%;
  height: 50px;
  background: #949494;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  justify-content: space-around;

  .sem-details {
    height: 1;
    opacity: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    width: 90%;
    height: 80px;
  }

  .total {
    width: 90%;
    height: 30px;
    background: #ffffff;
    color: #141414;
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .atn {
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    color: #141414;
    border-radius: 25px;
    .field {
      width: 48%;
      height: 30px;
      background: #ffffff;
      border-radius: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
.open {
  height: 400px;
}
</style>
