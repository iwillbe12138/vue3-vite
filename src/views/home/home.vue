<!--
 * @Description: home
 * @Author: iwillbe12138
 * @Date: 2021-06-18 10:09:23
 * @LastEditTime: 2021-06-18 15:19:52
 * @LastEditors: iwillbe12138
-->
<template>
  <div>it is home</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "home",
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
