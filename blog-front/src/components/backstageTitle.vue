<template>
  <div class="backstage-title">
    <div class="backstage-title-left">
      <div class="blog-backstage-management">博客后台管理</div>
      <div class="backstage-nav-list">
        <div v-for="item in navigationList" :key="item.id" @click="$router.push({name: item.router})" class="backstage-nav-item">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="backstage-title-right">
      <div class="user-info">
        <div class="user-avatar">
          <img src="../assets/img/overViewBg.jpg" alt="">
        </div>
        <el-dropdown>
          <span class="el-dropdown-link user-name">
            {{userInfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item divided @click="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="message">
       <i class="el-icon-bell"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {removeToken} from '../../utils/auth'
export default {
  name: "backstageTitle",
  data() {
    return {
      userInfo: {},
      navigationList: [
        {
          id: 1,
          title: '博客管理',
          router: 'blogManagement'
        },
        {
          id: 2,
          title: '标签管理',
          router: 'labelManagement'
        },
        {
          id: 3,
          title: '博客设置',
          router: 'blogSettings'
        }
      ]
    }
  },
  created() {
    let info = window.sessionStorage.getItem('userInfo') || ''
    this.userInfo = JSON.parse(info)
  },
  methods: {
    logOut() {
      this.$router.replace({name: 'login'})
      removeToken()
    }
  }
}
</script>

<style scoped>
  .backstage-title {
    border-bottom: 1px solid rgb(204, 204, 204);
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 1rem auto;
    padding: 5px 1rem;
  }
  .backstage-title-left {
    display: flex;
    align-items: center;
  }
  .blog-backstage-management {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  .backstage-nav-list {
    display: flex;
  }
  .backstage-nav-item {
    margin-right: 1rem;
    font-size: .9rem;
    color: #666;
    cursor: pointer;
  }
  .backstage-title-right {
    display: flex;
    align-items: center;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-avatar {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
  .user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .user-name {
    font-size: .9rem;
    color: #666;
    margin-right: 1rem;
  }
  .message {
    color: #666;
  }
</style>