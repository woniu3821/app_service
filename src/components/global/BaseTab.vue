<template>
  <div class="base-tab">
      <slot v-if="show"></slot>
  </div>
</template>
<script>
import {  } from "@api/service";

import { findComponentUpward } from "@utils/assist"
export default {
  components: {},
  name: "BaseTab",
  props: {
      label:{
          type:[Number,String],
          required:true
      }
  },
  data() {
    return {
    };
  },
  computed: {
      show(){
        //   const parent =findComponentUpward(this,'BaseTabs')
        //   return this.label===parent.active
        return true;
      }
  },
  methods: {},
  mounted() {}

}
</script>
<style lang="stylus" scoped>
.base-tab{}
</style>