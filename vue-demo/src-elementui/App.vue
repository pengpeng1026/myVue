<template>
  <div>
    <el-button type="warning">警告按钮</el-button>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      value:true,
      value3:30,
      active:0
    }
  },
  methods:{
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>

<style scoped>

</style>
