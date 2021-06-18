<!--
 * @Description: 页面入口
 * @Author: iwillbe12138
 * @Date: 2021-06-18 09:57:25
 * @LastEditTime: 2021-06-18 17:09:50
 * @LastEditors: iwillbe12138
-->
<template>
  <a-button type="primary" @click="doChangeStore">改变store</a-button>
  <Header :content="content" @changed="onClick"></Header>
  <router-view />
</template>

<script>
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
export default {
  name: "index",
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      content: "father=>children",
    });
    const store = useStore();
    // console.log(store.state.count);
    const doChangeStore = () => {
      store.dispatch("increment");
    };
    // const content=ref("father=>children"),
    const onClick = (e) => {
      // this.content = "children=>father";
      state.content = "children=>father";
      console.log(e);
    };
    watch(
      () => state.content,
      () => {
        console.log("content改变了");
      }
    );
    watch(
      () => store.state.count,
      (newVal, oldVal) => {
        console.log("store.state.count改变了");
        console.log(newVal);
        console.log(oldVal);
      }
    );
    onMounted(() => {
      console.log("页面加载后....");
    });
    return {
      ...toRefs(state),
      onClick,
      doChangeStore,
    };
  },
};
</script>
<style scoped></style>
