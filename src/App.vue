<template>
  <img
    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/frog.1dd7825.png"
  />
  <div>{{ time }}</div>
</template>

<script>
import { getTime } from "./../src/utils/getTime";
export default {
  name: "App",
  data() {
    return {
      time: getTime(),
    };
  },
  mounted() {
    this.renderTimeInterval();
  },
  methods: {
    /**
     * @description 每1秒获取一次时间
     */
    renderTimeInterval() {
      setInterval(() => (this.time = getTime()), 1000);
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #767;

  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
