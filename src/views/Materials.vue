<template>
  <div class="materials">
    {{query}}
    <input type="text" v-model="query">
    <Material subject="OS" code="AD8301" description="Unit  1 Notes"/>
    <Material subject="FODS" code="AD8351" description="Unit  1 Notes"/>
    <Material subject="OS" code="AD8301" description="Unit  2 Notes"/>
  </div>
</template>

<script>
  import Material from "@/components/Material.vue"
  import ref from "vue"
  export default {
    components: {
      Material,   
    },
    setup() {
      const query = ref("")
      return {
        query
      }
    }
  }
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

}
</style>
