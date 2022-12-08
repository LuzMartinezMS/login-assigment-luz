<template>
<div>

  <div class="line"></div>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item><img src="../../Sryas_White.png" style="width:70px"></el-menu-item>
    <el-menu-item index="1">Data Table</el-menu-item>
    <el-menu-item index="4"><el-button type="text" @click="onSignOut()">Sign out</el-button></el-menu-item>
  </el-menu>
</div>
</template>
  <script>
    export default {
        name:'navBar',
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        onSignOut() {
          this.$router.push('/')
        }
      }
    }
  </script>

  <style scoped>
  .line{
    margin: 0px;
  padding: 0px;
  }
</style>