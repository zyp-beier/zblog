<template>
  <div>
    <div id="richText"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: "richText",
  props:{
    height: {
      // type: 'Number',
      default: 500
    }
  },
  data() {
    return {
    editor: null
    }
  },
  mounted() {
    const editor = new E('#richText')
    this.editor = editor
    // editor.config = {
    //   height: this.height,
    //   placeholder: '请输入博客内容'
    // }
    editor.config.placeholder = '请输入博客内容'
    editor.config.zIndex = 0
    editor.create()
    editor.config.onchange = (data) => {
      this.$emit('callback', data)
    }
    editor.config.onchangeTimeout = 500 
    editor.config.onblur = (data) => {
      if(!data) this.$emit('callback', data)
    }
  },
  methods: {
    clearContent() {
      this.editor.txt.clear()
    },
  },
  beforeUnmount() {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style scoped>

</style>