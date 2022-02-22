import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
import store from '@/store'
import { 
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElIcon,
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
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/lib/theme-chalk/index.css'

const plugins = [
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElIcon,
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

for(const iconName in ElIcons) {
  const item = ElIcons[iconName]
  app.component(iconName, item)
}

plugins.forEach(plugin => {
  app.use(plugin)
})

app.use(router).use(store).mount('#app')