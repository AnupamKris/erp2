<template>
  <div class="marks">
      <div class="mark-field" v-for="(item, key) in markData" :key="key">
          {{item.subcode}}
          {{item.name}}
          {{item.mark}}
          {{item.grade}}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        markData: Object,  
    },
    setup() {

    }
}
</script>

<style>

</style>
