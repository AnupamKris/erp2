<template>
  <div class="materials">
    <div class="dropdown">
      <select name="year" id="years" v-model="year">
        <option value="Year 1">Year 1</option>
        <option value="Year 2">Year 2</option>
        <option value="Year 3">Year 3</option>
        <option value="Year 4">Year 4</option>
      </select>
      <select name="sem" id="sems" v-model="sem">
        <option v-if="year == 'Year 1'" value="1">Sem 1</option>
        <option v-if="year == 'Year 1'" value="2">Sem 2</option>
        <option v-if="year == 'Year 2'" value="3">Sem 3</option>
        <option v-if="year == 'Year 2'" value="4">Sem 4</option>
        <option v-if="year == 'Year 3'" value="5">Sem 5</option>
        <option v-if="year == 'Year 3'" value="6">Sem 6</option>
        <option v-if="year == 'Year 4'" value="7">Sem 7</option>
        <option v-if="year == 'Year 4'" value="8">Sem 8</option>
      </select>
      <div class="input">
        <input type="text" v-model="query" />
        <i class="fa fa-lens"></i>
      </div>
    </div>

    <Material
      :subject="item.subject"
      :code="item.code"
      :description="item.description"
      v-for="(item, index) in searchResults"
      :key="index"
    />
  </div>
</template>

<script>
import Material from "@/components/Material.vue";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
export default {
  components: {
    Material,
  },
  setup() {
    const query = ref("");
    const searchResults = ref([]);
    const year = ref("");
    const sem = ref("");
    const materials = ref([
      {
        subject: "OS",
        code: "AD8301",
        description: "Unit 1 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "FODS",
        code: "AD8351",
        description: "Unit 2 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "MA",
        code: "MA8655",
        description: "Linear Algebra",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "GIS",
        code: "GE8654",
        description: "Geo Info Sys",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "OS",
        code: "AD8301",
        description: "Unit 1 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "FODS",
        code: "AD8351",
        description: "Unit 2 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "MA",
        code: "MA8655",
        description: "Linear Algebra",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "GIS",
        code: "GE8654",
        description: "Geo Info Sys",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "OS",
        code: "AD8301",
        description: "Unit 1 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "FODS",
        code: "AD8351",
        description: "Unit 2 Notes",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "MA",
        code: "MA8655",
        description: "Linear Algebra",
        year: "Year 1",
        sem: "1",
      },
      {
        subject: "GIS",
        code: "GE8654",
        description: "Geo Info Sys",
        year: "Year 1",
        sem: "1",
      },
    ]);

    watchEffect(() => {
      console.log(year.value);
      if (query.value == "") {
        searchResults.value = materials.value.filter((ele) => {
          return ele.year == year.value && ele.sem == sem.value;
        });
      } else {
        searchResults.value = materials.value.filter((ele) => {
          return (
            (ele.subject.toLowerCase().includes(query.value.toLowerCase()) ||
              ele.description
                .toLowerCase()
                .includes(query.value.toLowerCase()) ||
              ele.code.toLowerCase().includes(query.value.toLowerCase())) &&
            year.value == ele.year &&
            sem.value == ele.sem
          );
        });
      }
    });

    return {
      query,
      materials,
      year,
      searchResults,
      sem,
    };
  },
};
</script>

<style lang="less" scoped>
.materials {
  width: 100%;
  height: 100%;
  background: rgb(14, 0, 255);
  background: linear-gradient(
    45deg,
    rgba(14, 0, 255, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .dropdown {
    width: 90%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    select {
      height: 50px;
      width: 15%;
      border-radius: 5px;
      outline: 0;
    }
  }
  .input {
    width: 70%;
    min-height: 50px;
    
    input {
      height: 100%;
      width: 100%;
      border: none;
      border-radius: 5px;
      outline: none;
      text-align: center;
    }
  }
}
</style>
