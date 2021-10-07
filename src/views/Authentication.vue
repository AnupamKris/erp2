<template>
  <div class="auth">
    <div class="login-box">
    <div class="cover" @click="toggleType" :class="{toggle : type ? true : false}"></div>
      <div class="staff">
        <InputField id="username" label="UserName"/>
        <InputField id="password" label="Password"/>
      </div>  
      <div class="student">
        <InputField id="regno" label="Register Number"/>
        <InputField id="password" label="password" type="password"/>
        <InputField id="test5" label="test5!"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import InputField from '@/components/InputField' 
export default {
  components: {
    InputField
  },
  setup() {
    const type = ref(false)

    const toggleType  = () => {
      type.value = !type.value;
    }

    return {
      type,
      toggleType
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/global.less");

.auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: @background-secondary ;
}

.cover {
  position: absolute;
  transition: 0.3s;
  width: 50%;
  height: 401px;
  left: 0;
  top: 0;
  border-radius: 15px 0 0 15px;
  background: @utility-primary;
  z-index: 5;
}

.toggle {
  left: 50%;
  border-radius: 0 15px 15px 0;
}

.login-box {
  position: relative;
  width: 700px;
  height: 400px;
  border: 2px solid @background-primary;
  overflow: hidden;
  border-radius: 20px;
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-self: center;
  .staff {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .student {
    width: 50%; 

  }
}
</style>
