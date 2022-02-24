<template>
  <div>
    <backstage-title></backstage-title>
    <div class="create-page">
      <div style="margin-bottom: 1rem">
        <div v-if='!blogId'>
          新建博客
        </div>
        <div v-else>
          更新博客
        </div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入博客标题" style="width: 20rem"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="label">
          <el-select v-model="ruleForm.label" placeholder="请选择标签">
            <el-option v-for="item in labelList" :key="item.id" :value="item.id" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封面图" prop="coverImg">
          <!-- <input-file @callback='file'></input-file> -->
          <el-upload
            accept="image/*"
            list-type="picture-card"
            :show-file-list="false"
            :on-change="handleFileChange"
          >
            <img v-if="ruleForm.coverImg" :src="ruleForm.coverImg" class="avatar" />
            <el-icon><plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="博客内容" prop="blogContent">
          <rich-text ref="richText" :blogContent="ruleForm.content" @callback='richTextContent'></rich-text>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import backstageTitle from '../../components/backstageTitle.vue'
// import InputFile from '../../components/inputFile.vue';
import RichText from '../../components/richText.vue';
import { GET_LABEL_LIST } from '../../api/label'
import { CREATE_BLOG, GET_BLOG_DETAIL } from '../../api/blog'
export default {
  components: { backstageTitle, RichText },
  name: "createBlog",
  data() {
    return {
      blogId: '',
      labelList: [],
      ruleForm: {
        title: '',
        coverImg: null
      },
      rules: {
        title: [
          {required: true, message: '博客标题不能为空', trigger: 'blur'},
        ],
        label: [
          {required: true, message: '请选择标签', trigger: 'change'}
        ],
        blogContent: [
          {required: true, message: '博客内容不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  created() {
    this.getLabelList()
    this.blogId = this.$route.params.blogId || ''
    if (this.blogId) {
      this.getBlogDetails(this.blogId) 
    }
  },
  methods: {
    getBlogDetails(blogId) {
      GET_BLOG_DETAIL({blogId}).then(res => {
        this.ruleForm = res.result[0]
        this.ruleForm.label = Number(this.ruleForm.label)
      }).catch(err => {
        console.log(err)
      })
    },
    getLabelList() {
      GET_LABEL_LIST().then(res => {
        this.labelList = res.result
      }).catch(err => {
        console.log(err)
      })
    },
    handleFileChange(file) {
      let fileTip
      if (file.size > 1024 * 512 ) {
        fileTip = '文件大小不能超过0.5MB'
        console.log(fileTip)
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file.raw);
      reader.onload = () =>  {
        this.ruleForm.coverImg = reader.result
      }
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let {title, label, coverImg, blogContent} = this.ruleForm
            let formData = new FormData()
            formData.append('coverImg', coverImg);
            formData.append('title', title)
            formData.append('label', label)
            formData.append('blogContent', blogContent)
            CREATE_BLOG(formData).then(res => {
              console.log(res)
              if (res.status === 200) {
                this.$message.success(res.message)
                this.$router.back()
              }
            }).catch( err => {
              console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$refs.richText.clearContent()
    },
    richTextContent(data) {
      if(data){
        this.ruleForm.blogContent = data
        return
      }
      console.log('博客内容为空')
    }
  }
}
</script>

<style scoped>
  .create-page {
    margin: 0 1rem;
  }
 .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  max-width: 148px;
  max-height: 148px;
  display: block;
  margin: 0 auto;
}
</style>