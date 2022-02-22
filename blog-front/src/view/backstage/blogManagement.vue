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
          <template #default='scope'>
            {{parseTime(scope.row.create_at)}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template #default="scoped">
            <el-button type="primary" @click="blogDetail(scoped.row.id)" size="small" plain>详情</el-button>
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
import { GET_BLOG_LIST, REMOVE_BLOG } from '../../api/blog'
import { reactive, toRefs, onMounted} from 'vue'
import { parseTime } from '../../../utils/index'
import { useRouter } from 'vue-router'
export default {
  components: { backstageTitle },
  name: "blogManagement",
  setup() {
    const router = useRouter()   
    let state = reactive({
      tableData:[],
      parseTime,
    })
    onMounted(() => {
      getBlogList();
    })
    const getBlogList = () => {
      GET_BLOG_LIST().then(res => {
        state.tableData = res.result
      }).catch( err => {
        console.log(err)
      })
    };
    const blogRemove = (blog) => {
      let blogId = blog.id
      REMOVE_BLOG(blogId).then(res => {
        console.log(res)
        if (res.status === 200) {
          getBlogList()
        }
      }).catch(err => {
        console.log(err)
      })
    }
    const blogEdit = (blog) => {
      let {id: blogId} = blog
      router.push({
        name: 'createBlog',
        params: {
          blogId
        }
      })
    }
    const blogDetail = (blogId) => {
      router.push({
        name: 'blogDetail',
        params: {
          blogId,
        }
      })
    }
    return {
      ...toRefs(state),
      getBlogList,
      blogRemove,
      blogEdit,
      blogDetail,
      parseTime
    }
  }
}
</script>

<style scoped>
  .createBlog {
    padding: 0 1rem;

  }
</style>