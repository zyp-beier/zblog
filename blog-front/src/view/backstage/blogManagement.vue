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
          prop="pageviews"
          label="热度">
        </el-table-column>
        <el-table-column
          prop="createTime"
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
export default {
  components: { backstageTitle },
  name: "blogManagement",
  data() {
    return {
      tableData:[
        {
          id: 1,
          title: '这是一个标题',
          label: 'javascript',
          pageviews: 98,
          createTime: 1620705143
        },
        {
          id: 2,
          title: '这是一个标题2',
          label: 'javascript',
          pageviews: 98,
          createTime: 1620705143
        },
        {
          id: 3,
          title: '这是一个标题3',
          label: 'javascript',
          pageviews: 98,
          createTime: 1620705143
        }
      ]
    }
  }
}
</script>

<style scoped>
  .createBlog {
    padding: 0 1rem;

  }
</style>