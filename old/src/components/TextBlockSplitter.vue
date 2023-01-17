<template>
  <div ref="textDiv" style="width: 900px; height: 100px;white-space: pre-line">{{splitText[number]}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {paginateByBoundingElement} from "@/components/splitText";

@Component
export default class TextBlockSplitter extends Vue {
  $refs!:{
    video: HTMLVideoElement,
    source: HTMLSourceElement,
    textDiv: HTMLDivElement,
    testDiv: HTMLDivElement
  }
  src: string = "file://C:\\Users\\thijs\\Documents\\Github\\kabelkrant\\test2.mp4"
  splitText: string[] =[]
  number: number = 0

  mounted(){
    const div = this.$refs.textDiv.cloneNode(true) as HTMLDivElement
    this.$refs.testDiv.appendChild(div)
    const paged = paginateByBoundingElement(div,0)("Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Ab accusantium \naperiam assumenda cumque cupiditate eaque earum eum ex excepturi libero minima, quae quaerat repellat sed similique sit soluta, ullam vitae. Dolor eum magnam quas voluptates! Deserunt dolorum, ea eaque earum et hic illum impedit ipsam itaque magnam porro rem sapiente, sunt tempore vel! Mollitia obcaecati odit quam sed? A accusamus asperiores aspernatur dolor doloremque ipsa magnam neque, pariatur ratione soluta. Dolorem, esse, incidunt. Alias dicta hic in inventore iusto labore libero rerum suscipit vero, voluptates. A accusantium alias aliquam animi aperiam cupiditate, deleniti dolore, ducimus error illo inventore iste magni, mollitia nesciunt omnis placeat quaerat quam quisquam quos repudiandae saepe tenetur totam unde velit voluptates. Accusamus aliquid asperiores atque beatae cum deserunt eveniet facilis id illo illum in, ipsam itaque iusto magnam minus nemo odio porro praesentium quae quia quidem reiciendis rem repellendus sunt tempore? Architecto blanditiis commodi consectetur, cum cumque cupiditate ea ex excepturi explicabo facilis incidunt ipsum iure, laudantium magni molestiae molestias necessitatibus nemo nisi nostrum nulla odio perferendis porro quo quos vero, voluptate voluptates! Amet assumenda consectetur debitis distinctio doloribus fugiat laudantium maiores minima molestias neque omnis, optio praesentium, quibusdam sapiente temporibus totam veritatis voluptatem, voluptatibus. Accusantium aspernatur assumenda aut autem consequatur debitis dolorum esse est excepturi facere harum illo in ipsa itaque, necessitatibus nostrum obcaecati perspiciatis qui quod sequi sit ullam vel vero vitae voluptas voluptate voluptatibus. A accusantium autem, consequuntur cum, dolores enim error excepturi facilis nam nisi repellat reprehenderit soluta totam unde ut. Adipisci animi aspernatur atque culpa, cum debitis delectus deleniti dicta dignissimos dolor dolore eaque earum enim et ex explicabo id illum itaque laborum libero maxime modi neque nesciunt nostrum odio omnis possimus quasi quidem quis quisquam ratione reiciendis tempora tenetur totam ullam, vel vero. Distinctio doloremque harum incidunt laboriosam libero maiores nesciunt odit, quis quo voluptate? Adipisci aliquam aliquid dignissimos et impedit incidunt iure magnam necessitatibus nostrum qui quia, quo reiciendis tempora temporibus unde? Adipisci culpa dolore doloribus error fuga laudantium libero molestiae mollitia necessitatibus nesciunt odio odit perferendis praesentium quae quam quasi qui quidem, quis quo soluta tempora vel veritatis voluptatum? Adipisci aperiam asperiores at atque blanditiis commodi dolores doloribus, ducimus, eius eum facere harum minima modi molestiae necessitatibus nobis non odio odit omnis possimus quaerat quia quibusdam ratione repellat saepe sint vel velit vitae voluptas voluptatum. Aliquid aspernatur, blanditiis corporis culpa distinctio dolore eos iure iusto modi non, provident quaerat quo recusandae saepe sequi sit tempore, vitae voluptas. Asperiores doloremque dolores illo molestiae nesciunt placeat voluptate. Alias aliquam architecto assumenda cupiditate debitis delectus dicta ducimus id magnam magni necessitatibus, nostrum quasi, ratione rem repellendus velit voluptatem? Aliquam aliquid amet assumenda autem consectetur, culpa cumque delectus deserunt dolor ducimus ea et eum explicabo facere ipsum, labore maiores mollitia nesciunt numquam officiis omnis pariatur perferendis quaerat quam quod repudiandae sequi tempora ut veritatis voluptatibus! Alias autem consectetur, consequuntur delectus dolor dolore eos explicabo harum hic inventore ipsa iusto laboriosam laudantium necessitatibus nihil possimus quis sequi temporibus ullam vero! Asperiores harum, voluptatibus?"  )
    this.$refs.testDiv.removeChild(div)
    this.splitText = paged
    console.log(paged)
  }
}
</script>

<style scoped lang="less">

</style>
    