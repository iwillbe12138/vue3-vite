<!--
 * @Description: 
 * @Author: iwillbe12138
 * @Date: 2021-06-18 15:35:05
 * @LastEditTime: 2021-06-18 15:35:18
 * @LastEditors: iwillbe12138
-->
<template>it is test</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "test",
  components: {},
  setup() {
    const state = reactive({
      content: "0",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped></style>
