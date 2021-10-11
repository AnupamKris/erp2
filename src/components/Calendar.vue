<template>
  <div class="calendar">
    <div class="topbar">
      <i class="fa fa-arrow-left"></i>
      <span>{{ months[month] }}</span>
      <i class="fa fa-arrow-right"></i>
    </div>
    <div class="dates">
      <div class="weeks" v-for="(week, index) in 'SMTWTFS'" :key="index">
        {{ week }}
      </div>
      <div class="date" v-for="date in dates" :key="date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const getDates = (month, year) => {
      let rawDates = ['','','',];
      for (var i = 1; i <= 31; i++) {
        rawDates.push(i);
      }
      return rawDates;
    };
    let date = new Date();
    const month = ref(date.getMonth());
    const year = ref(date.getYear());
    const dates = ref(getDates(1, 1));
    return {
      month,
      months,
      year,
      dates,
    };
  },
};
</script>

<style lang="less" scoped>
.calendar {
  width: 300px;
  height: 330px;
  background: #1d1d1d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .dates {
    height: 260px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    .date {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #d1d1d1;
      border-radius: 50%;
      &:hover {
        background: #0088ff;
      }
    }
  }
  .weeks {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #808080;
    border-radius: 50%;
  }
}

.topbar {
  height: 40px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    &:hover {
      background: #0088ff;
    }
  }
  span {
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:hover {
      background: #0088ff;
    }
  }
}
</style>
