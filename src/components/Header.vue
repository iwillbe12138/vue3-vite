<!--
 * @Description: header
 * @Author: iwillbe12138
 * @Date: 2021-06-18 10:10:32
 * @LastEditTime: 2021-06-18 15:52:09
 * @LastEditors: iwillbe12138
-->

<template>
  {{ content }}
  <a-button type="primary" @click="onClick">子传父</a-button>
  <a-button type="primary" @click="doRouterLink">路由跳转</a-button>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Header",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  emits: ["changed"],
  setup(props, context) {
    const state = reactive({});
    const router = useRouter();
    const onClick = () => {
      let x = 1;
      context.emit("changed", x);
    };
    const doRouterLink = () => {
      router.push({ path: "/test" });
    };
    return {
      ...toRefs(state),
      doRouterLink,
      onClick,
    };
  },
};
</script>
<style scoped></style>
