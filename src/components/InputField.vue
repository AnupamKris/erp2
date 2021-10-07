<template>
  <div class="input-field">
    <input :type="type" :id="id" placeholder=" " />
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: {
        type: String,
        default: "text",
    }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/global.less");
.input-field {
  position: relative;
  width: 80%;
  height: 44px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: 2px solid @utility-primary;
    outline: none;
    &:not(:placeholder-shown) + label,
    &:focus + label {
      background: @utility-primary;
      margin: 0;
      width: 75px;
      border-radius: 15px 0 0 15px;
      transition: 0.3s;
      color: @color-primary;
    }
  }
  label {
    position: absolute;
    transition: 0.3s;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #141414;
    width: 60px;
  }
}
</style>
