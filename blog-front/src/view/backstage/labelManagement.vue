<template>
  <div>
    <backstage-title></backstage-title>
    <div class="createBlog">
      <el-button type="primary" @click="dialogLabel = true">新建标签</el-button>
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
          prop="label"
          label="标签">
        </el-table-column>
        <el-table-column
          prop="number"
          label="文章数量">
        </el-table-column>
        <el-table-column
          prop="icon"
          label="icon">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
          <template #default="scope">
            {{parseTime(scope.row.createTime)}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template #default="scoped">
            <el-button type="warning" @click="labelEdit(scoped.row)" size="small" plain>更改</el-button>
            <el-button type="danger" @click="labelRemove(scoped.$index)" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新建标签" v-model="dialogLabel" width='40%' center>
      <el-form :model="formLabel" label-width="80px" :rules="rules" ref="labelRef">
        <el-form-item label="标签名称" prop="name">
          <el-input v-model="formLabel.name"></el-input>
        </el-form-item>
        <el-form-item label="icon" prop="labelIcon">
          <input-file ref="inputFile" @callback='inputFileValue'></input-file>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogLabel = false" size="small">取 消</el-button>
          <el-button type="primary" @click="crateLabel('labelRef')" size="small">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import backstageTitle from '@/components/backstageTitle.vue'
import InputFile from '@/components/inputFile.vue';
import { GET_LABEL_LIST, CREATE_LABEL } from '../../api/label'
import {parseTime} from '../../../utils/index'
export default {
  components: { backstageTitle, InputFile },
  name: "labelManagement",
  data() {
    return {
      parseTime: null,
      tableData:[],
      dialogLabel: false,
      formLabel: {
        name: '',
        labelIcon: null
      },
      fileList: [],
      rules: {
        name: [
          {required: true, message: '标签名称不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  watch: {
    dialogLabel(newVal) {
      if (!newVal) {
        // console.log(this.$refs.inputFile)
        this.$refs.inputFile.clearImg()
        this.formLabel = {
          name: '',
          labelIcon: null
        }
      }
    }
  },
  created(){
    this.parseTime = parseTime
    this.getLabelList()
  },
  methods: {
    getLabelList() {
      GET_LABEL_LIST().then(res => {
        // console.log(res)
        this.tableData = res.result
      }).catch(err => {
        console.log(err)
      })
    },
    labelEdit (data) {
      console.log(data)
      this.dialogLabel = true
    },
    labelRemove(index) {
      this.tableData.splice(index, 1)
    },
    inputFileValue(file) {
      this.formLabel.labelIcon = file
    },
    crateLabel(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.formLabel.labelIcon) {
            this.$message('Icon不能为空')
          } else {
            let {name, labelIcon} = this.formLabel
            let formData = new FormData()
            formData.append('name', name)
            formData.append('labelIcon', labelIcon)
            console.log(formData)
            CREATE_LABEL(formData).then(res => {
              console.log(res)
            }).catch( err => {
              console.log(err)
            })
          }
        } else {
          console.log('err')
        }
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