<template>
  <img
    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/frog.1dd7825.png"
  />
  <div>{{ data }}</div>
  <div>---</div>
  <div>{{ time }}</div>
</template>

<script>
import { getTime, getDate } from "./../src/utils/getTime";
export default {
  name: "App",
  data() {
    return {
      time: getTime(),
      data: getDate(),
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
    /**
     * 更新日期
     */
    renderData() {},
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
