
<template>
  <div id="app">
    <el-container style="border: 1px solid #eee">
      <el-aside style="width:200px;background-color: white">
        <el-menu :default-openeds="['1','2','3']">
          <el-menu-item class="left-top">
            <span class="left-top">AM流量计费系统</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>管理
            </template>
            <el-submenu index="1-1">
              <template slot="title">管理员</template>
              <el-menu-item index="1-1-1"><router-link to="/admin">管理员列表</router-link></el-menu-item>
              <el-menu-item index="1-1-2"><router-link to="/build">新建管理员</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
                <template slot="title">用户</template>
                <el-menu-item index="1-2-1">用户列表</el-menu-item>
                <el-menu-item index="1-2-2">查找用户</el-menu-item>
                <el-menu-item index="1-2-3">新建用户</el-menu-item>
              </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>报告
            </template>
            <el-submenu index="2-1">
              <template slot="title">流量</template>
              <el-menu-item index="2-1-1">流量报告</el-menu-item>
              <el-menu-item index="2-1-2">查找流量数据</el-menu-item>
              <el-menu-item index="2-1-3">流量摘要</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">日志</template>
              <el-menu-item index="2-2-1">最后系统日志</el-menu-item>
              <el-menu-item index="2-2-2">浏览日志</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>NAS
            </template>
            <el-menu-item index="3-1">NAS列表</el-menu-item>
            <el-menu-item index="3-2">新建NAS</el-menu-item>
          </el-submenu>
          
          <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>卡片系统
              </template>
              <el-submenu index="4-1">
                <template slot="title">充值卡</template>
                <el-menu-item index="4-1-1">列出卡系列</el-menu-item>
                <el-menu-item index="4-1-2">查找充值卡</el-menu-item>
                <el-menu-item index="4-1-3">生成卡片</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-menu"></i>工具
                </template>
                <el-submenu index="5-1">
                  <template slot="title">开启/关闭服务</template>
                  <el-menu-item index="5-1-1">radius服务</el-menu-item>
                  <el-menu-item index="5-1-2">DHCP服务</el-menu-item>
                </el-submenu>
            </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="height: 56px;text-align: right; font-size: 12px">
          <el-dropdown>
            <span>关于&nbsp;&nbsp;AM</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的信息</el-dropdown-item>
              <el-dropdown-item>版本</el-dropdown-item>
              <el-dropdown-item>时间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
a {
   text-decoration: none;
   color:#333;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
