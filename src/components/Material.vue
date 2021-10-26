<template>
  <div class="material">
    <div class="sub-name">
      <div class="subject">
        {{ subject }}
      </div>
      <div class="code">
        {{ code }}
      </div>
    </div>
    <div class="content">
      <div class="description"> {{ description }} </div>
    </div>
    <button @click="download"><i class="fa fa-download"></i></button>
  </div>
</template>

<script>
export default {
  props: {
    subject: String,
    code: String,
    description: String,
  },
  setup() {
    const download = () => {
      console.log("download")
    }



    return {
      download
    };
  },
};
</script>

<style lang="less" scoped>
  .material {
    margin: 5px 0;
    width: 90%;
    min-height: 80px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    .sub-name {
      min-width: 70px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background: #263567;
      color: white;

      .subject {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        font-weight: 600;
        font-size: 23px;
      }
      .code {
        flex: 1;
      }
    }
    .content {
      width: calc(100% - 140px);
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background: #ffffff;

      .description {
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
    button {
      flex: 1;
      background: #263567;
      border: none;
      min-width: 70px;
      height: 100%;
      color: white;
      align-self: flex-end;
      font-size: 20px;
      
    }
  }
</style>
