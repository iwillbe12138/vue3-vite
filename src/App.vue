<template>
  <a-button type="primary" @click="doGetTest">测试接口</a-button>
  <router-view />
</template>

<script>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

import { reactive, toRefs } from "vue";
import {
  getTest,
  getTestPost,
  getTestPut,
  getTestPatch,
  getTestDelete,
  getTestGetById,
} from "./api/test/user";
export default {
  name: "index",
  setup() {
    const state = reactive({
      x: 1,
    });
    const doGetTest = () => {
      console.log(11);
      // getTest()
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      getTestDelete(state.x)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      ...toRefs(state),
      doGetTest,
    };
  },
};
</script>

<style></style>
