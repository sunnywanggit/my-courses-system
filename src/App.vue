<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {Component,Vue} from 'vue-property-decorator'
  import {State, Getter, Mutation, Action} from "vuex-class";


  @Component({
    components: {}
  })
  export default class App extends Vue{
    //存储用户信息
    @Action('setUser') setUser:any;

    created(): void {
      this.setUser(localStorage.tsToken)
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
