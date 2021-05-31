<template>
  <div>
    <backstage-title></backstage-title>
    <div class="create-page">
      <div style="margin-bottom: 1rem">
        <div v-if='true'>
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
            <el-option v-for="item in labelList" :key="item.id" :value="item.id" :label="item.title"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="博客内容" prop="blogContent">
          <rich-text ref="richText" @callback='richTextContent'></rich-text>
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
import RichText from '../../components/richText.vue';
export default {
  components: { backstageTitle, RichText },
  name: "createBlog",
  data() {
    return {
      labelList: [
        {
          id: 1,
          title: 'javascript',
        },
        {
          id: 2,
          title: 'css',
        },
        {
          id: 3,
          title: 'html',
        }
      ],
      ruleForm: {
        title: ''
      },
      rules: {
        title: [
          {required: true, message: '博客标题不能为空', trigger: 'blur'},
          {min: 3, max: 12, message: '长度在 3 到 5 个字符', trigger: 'blur'}
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
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
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
</style>