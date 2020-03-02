<template>
  <div class="header">
    <div class="header-content">
      <el-menu :default-active="$route.path" mode="horizontal">
        <el-menu-item index="/">
          <a href="/">博客</a>
        </el-menu-item>
        <el-menu-item index="/aboutus">
          <a href="/aboutus">关于</a>
        </el-menu-item>
        <el-menu-item index="/folders">
          <a href="/folders">归档</a>
        </el-menu-item>
        <el-menu-item index="/messages">
          <a href="/messages">留言墙</a>
        </el-menu-item>
        <!-- <el-menu-item index="/favorites">我的收藏</el-menu-item> -->
      </el-menu>
    </div>
    <div class="weather-container">
      <client-only>
        <vue-weather
          class="weather"
          title
          :enableCredits="false"
          :forecast="[]"
          units="ca"
          :currentDay="currentDay"
        ></vue-weather>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    currentDay() {
      return this.$store.state.weather.currentDay
    }
  }
}
</script>

<style lang='less' scoped>
.header {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.header-content {
  display: flex;
  .theme-mode-wrapper {
    width: 30%;
  }

  .el-menu-item {
    font-size: 18px;
  }
}
.weather-container {
  .weather {
    font-size: 12px !important;
  }
}
</style>
<style>
.weather-container .weather #header {
  display: none;
}
</style>


