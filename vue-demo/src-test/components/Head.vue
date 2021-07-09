<template>
  <div>{{ info }}</div>
</template>

<script>
export default {
  name: "Head",
  props: {
    info: {
      type: String,
      required: true,
    },
  },
  /* created() {
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用选择
      document.onselectstart = new Function("event.returnValue=false");
    });
  }, */
};
</script>

<style scoped>
div {
  color: teal;
}
</style>
