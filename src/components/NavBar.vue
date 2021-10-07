<template>
  <nav class="navbar">
    <div class="tools">
      <div class="logo">PECONNECT</div>
      <div class="nav-item" @click="goToRoute('home')">
        <p>HOME</p>
        <i class="fa fa-home"></i>
      </div>
      <div class="nav-item" @click="goToRoute('attendance')">
        <p>ATTENDANCE</p>
        <i class="fas fa-calendar-week"></i>
      </div>
      <div class="nav-item" @click="goToRoute('academics')">
        <p>ACADEMICS</p>
        <i class="fas fa-book-reader"></i>
      </div>
      <div class="nav-item" @click="goToRoute('materials')">
        <p>MATERIALS</p>
        <i class="fa fa-book"></i>
      </div>
    </div>
    <div class="settings">
      <div class="nav-item" @click="goToRoute('theme')">
        <p>THEME</p>
        <i class="fa fa-sun"></i>
      </div>
      <div class="nav-item" @click="goToRoute('settings')">
        <p>SETTINGS</p>
        <i class="fa fa-gear"></i>
      </div>
    </div>

    <!-- <div
      :class="{ selected: currentPage == item ? true : false }"
      class="items"
      v-for="(item, index) in routes"
      :key="index"
      @click="goToRoute(item)"
    >
      {{ item }}
    </div> -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    routes: Array,
    currentPage: String,
  },
  setup(props, { emit }) {
    const goToRoute = (item) => {
      emit("change-route", item);
    };

    return {
      goToRoute,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/global.less");

.navbar {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -150px;
  background: @background-primary;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.1s;
  &:hover {
    left: 0;
  }

  .tools,
  .settings {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .nav-item {
      transition: 0.1s;
      display: flex;
      justify-content: space-between;
      width: 100%;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.1s;
        padding-left: 25px;
        text-align: center;
        width: calc(100% - 30px);
      }
      i {
        transition: 0.1s;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        height: 50px;
      }
      &:hover {
        background: @background-primary-hover;
        color: @color-primary-hover;
      }
    }
  }
}

.selected {
  color: red;
}
</style>
