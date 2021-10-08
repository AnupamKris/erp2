<template>
  <div class="attendance">
    <div class="dropdown">
      <select name="year" id="years" v-model="year">
        <option value="Year 1" selected>Year 1</option>
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
        <input type="text" v-model="query" placeholder="Search" />
        <i class="fa fa-search" style="color: black"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  setup() {
    return {};
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
    width: 15%;
    border: none;
    outline: 0;
    text-align: center;
  }
  select[name="year"] {
    border-radius: 25px 0 0 25px;
  }
}
.input {
  width: 70%;
  min-height: 50px;
  position: relative;
  input {
    height: 100%;
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 0 25px 25px 0;
    outline: none;
    text-align: center;
  }
  i {
    position: absolute;
    right: 15px;
    font-size: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
