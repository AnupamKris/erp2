<template>
  <div class="profile-field"  :class="{big : big}">
    <span>{{label}}</span>
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    big: Boolean,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.profile-field {
  width: 80%;
  background: #ffffff;
  min-height: 70px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    width: 80%;
    text-align: left;
    font-size: 30px;
    margin: 5px 0;
  }
  span {
    width: 100%;
    font-size: 14px;
    text-align: left;
  }
  p {
    width: 100%;
    font-size: 24px;
    text-align: left;
  }
}

.big {
  min-height: auto;
  
}
</style>
