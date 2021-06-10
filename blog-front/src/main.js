import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
import store from '@/store'
import { 
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElInput,
  ElPagination,
  ElTimeline,
  ElTimelineItem,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
  ElOption,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDialog,
  ElUpload,
  ElMessage
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

const plugins = [
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElInput,
  ElPagination,
  ElTimeline,
  ElTimelineItem,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
  ElOption,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDialog,
  ElUpload,
  ElMessage
]
const app = createApp(App)


plugins.forEach(plugin => {
  app.use(plugin)
})

app.use(router).use(store).mount('#app')