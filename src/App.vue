<template>
  <NavBar :routes="['Home','About']" :currentPage="currentPage" @change-route="changeRoute"/>  
  <router-view/>
</template>

<script>  
import NavBar from "@/components/NavBar.vue"
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"

export default {
  components: {
    NavBar
  },
  setup() {
    const router = useRouter()
    const currentPage = ref("Home")
    const changeRoute = (item) => {
      currentPage.value = item
      router.push("/"+item.toLowerCase())
    }
    return {
      currentPage,
      changeRoute
    }
  },
}
</script>

<style lang="less">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 50px;
  height: 100%;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
