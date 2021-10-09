<template>
  <div class="subjects">
    <div class="dropdown">
      <select name="year" id="years" v-model="year">
        <option value="1" selected>Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
        <option value="4">Year 4</option>
      </select>
      <select name="sem" id="sems" v-model="sem">
        <option v-if="year == '1'" value="1">Sem 1</option>
        <option v-if="year == '1'" value="2">Sem 2</option>
        <option v-if="year == '2'" value="3">Sem 3</option>
        <option v-if="year == '2'" value="4">Sem 4</option>
        <option v-if="year == '3'" value="5">Sem 5</option>
        <option v-if="year == '3'" value="6">Sem 6</option>
        <option v-if="year == '4'" value="7">Sem 7</option>
        <option v-if="year == '4'" value="8">Sem 8</option>
      </select>
    </div>
    <Marks :markData="filtered"  v-if="filtered.length" :fields="['Subject Code', 'Subject Name']"/>
    <div class="noData" v-else>Sorry No data available</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Marks from "@/components/Marks.vue";
import { watchEffect } from "@vue/runtime-core";

export default {
  components: {
    Marks,
  },
  setup() {
    const year = ref("1");
    const sem = ref("1");
    
    const filtered = ref([]);
    const markData = [
      {
        subcode: "AD8302",
        name: "Fundamentals Of Data Science",
        
        year: "1",
        sem: "1",
      },
      {
        subcode: "AD8302",
        name: "Fundamentals Of Data Science",
        
        year: "1",
        sem: "1",
      },
      {
        subcode: "AD8302",
        name: "Fundamentals Of Data Science",
        
        year: "1",
        sem: "1",
      },
      {
        subcode: "AD8302",
        name: "Fundamentals Of Data Science",
        
        year: "1",
        sem: "1",
      },
      {
        subcode: "AD8302",
        name: "Fundamentals Of Data Science",
        
        year: "1",
        sem: "1",
      },
    ];

    watchEffect(() => {
      filtered.value = markData.filter((ele) => {
        return (
          ele.year == year.value &&
          ele.sem == sem.value
        );
      });
    });

    return {
      year,
      sem,
      markData,
      filtered,
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
    width: 50%;
    border: none;
    outline: 0;
    text-align: center;
    text-align-last: center;
  }
  select[name="year"] {
    border-radius: 25px 0 0 25px;
  }
  select[name="sem"] {
    border-radius: 0 25px 25px 0;
  }
}

.subjects {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(7, 50, 148);
  background: linear-gradient(
    60deg,
    rgba(7, 50, 148, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
