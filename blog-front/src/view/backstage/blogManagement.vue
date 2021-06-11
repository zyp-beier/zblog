<template>
  <div>
    <backstage-title></backstage-title>
    <div class="createBlog">
      <el-button type="primary" @click="$router.push({name: 'createBlog'})">新建博客</el-button>
    </div>
    <div style="margin: 1rem">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          type="index">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="title"
          label="封面">
        </el-table-column>
        <el-table-column
          prop="label"
          label="标签">
        </el-table-column>
        <el-table-column
          prop="pageView"
          label="热度">
        </el-table-column>
        <el-table-column
          prop="create_at"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template #default="scoped">
            <el-button type="primary" @click="blogDetail(scoped.row)" size="small" plain>详情</el-button>
            <el-button type="warning" @click="blogEdit(scoped.row)" size="small" plain>更改</el-button>
            <el-button type="danger" @click="blogRemove(scoped.row)" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import backstageTitle from '@/components/backstageTitle.vue'
import { GET_BLOG_LIST } from '../../api/blog'
export default {
  components: { backstageTitle },
  name: "blogManagement",
  data() {
    return {
      tableData:[]
    }
  },
  created() {
    this.getBlogList()
  },
  methods: {
    getBlogList() {
      GET_BLOG_LIST().then(res => {
        console.log(res)
        this.tableData = res.result
      }).catch( err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .createBlog {
    padding: 0 1rem;

  }
</style>