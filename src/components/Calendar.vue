<template>
  <div class="calendar">
    <div class="topbar">
      <i @click="monthsub" class="fa fa-arrow-left"></i>
      <span>{{ months[month] }}</span>
      <i @click="monthadd" class="fa fa-arrow-right"></i>
    </div>
    <div class="dates">
      <div class="weeks" v-for="(week, index) in 'SMTWTFS'" :key="index">
        {{ week }}
      </div>
      <div class="date" v-for="(date, index) in dates" :key="index">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "@vue/runtime-core";
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

    const daysNum = {
      0: 31,
      1: 28,
      2: 31,
      3: 30,
      4: 31,
      5: 30,
      6: 31,
      7: 31,
      8: 30,
      9: 31,
      10: 30,
      11: 31,
    };

    const monthadd = () => {
      month.value != 11 ? month.value++ : (month.value = 0);
      setDates();
    };

    const monthsub = () => {
      month.value != 0 ? month.value-- : (month.value = 11);
      setDates();
    };

    const getDates = (offset, monthsq, year) => {
      if (month.value != 1) {
        var lastDay = daysNum[month.value];
      } else {
        var lastDay =
          (year.value % 4 == 0 && year.value % 100 != 0) ||
          year.value % 400 == 0
            ? 29
            : 28;
      }
      offset = offset == 7 || offset == -1 ? 0 : offset;
      console.log(offset, "offset");
      let rawDates = " ".repeat(offset).split(" ");
      for (var i = 1; i <= lastDay; i++) {
        rawDates.push(i);
      }
      console.log(rawDates);
      return rawDates;
    };

    const setDates = () => {
      var date = new Date(month.value + 1 + "/01/2021");
      var offset = date.getDay();
      dates.value = getDates(offset - 1, 1, 1);
    };

    // watchEffect(() => {
    //   var date = new Date(month.value + "/01/2021");
    //   var offset = date.getDay();
    //   dates.value = getDates(offset, 1, 1);
    // });
    let date = new Date(new Date().getMonth() + 1 + "/01/2021");
    let offset = date.getDay();

    const month = ref(date.getMonth());
    const year = ref(date.getYear());
    const dates = ref(getDates(offset, 1, 1));

    console.log(date.getDay(), date, "asd", year.value);

    return {
      month,
      months,
      year,
      dates,
      monthsub,
      monthadd,
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
    justify-items: center;
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
