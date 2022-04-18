<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <video ref="video">
      <source ref="source" :src="src" type="video/mp4">
    </video>
    <p>Hello</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import * as path from "path";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  $refs!:{
    video: HTMLVideoElement,
    source: HTMLSourceElement
  }
  src: string = "file://C:\\Users\\thijs\\Documents\\Github\\kabelkrant\\test2.mp4"

  mounted(){
    console.log("hi start")
    console.log(this.$refs.video)
    this.$refs.video.play()
    setTimeout(()=>{
      console.log('new Source')
      const newFile = path.resolve('../test.mp4')
      this.src = path.resolve("file://C:/Users/thijs/Documents/Github/kabelkrant/"+newFile)
      this.$refs.video.load()
      this.$refs.video.play()
    },2000)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
