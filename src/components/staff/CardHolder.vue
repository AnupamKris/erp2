<template>
  <div class="card-holder">
    <div className="arrow left"><i class="fa fa-chevron-left"></i></div>
    <div class="cards">
      <slot></slot>
    </div>
    <div className="arrow right"><i class="fa fa-chevron-right"></i></div>
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
.card-holder {
  display: flex;
  overflow: auto;
  position: relative;
  .arrow {
    position: absolute;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
}
</style>
