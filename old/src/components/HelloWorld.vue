<template>
  <div>{{test}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Video} from "@/api/Types/Video";
import {strapiApi} from "@/main";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  test: unknown


  async mounted(){
    const blocks =await strapiApi.newsBlocks.getNewsBlocks({})
    this.test = blocks.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
