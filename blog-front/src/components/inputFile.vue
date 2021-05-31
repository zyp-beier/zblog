<template>
  <div>
    <a href="javascript:;" class="file">
      选择文件
      <input type="file" id="input" @change="handleFileChange" name="file">
    </a>
    <div class='fileTip' id="fileTip"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      
    }
  },
  methods: {
    handleFileChange(e) {
      const input = document.getElementById('input')
      const files = e.target.files
      let file = files && files[0]
      let fileTip = document.getElementById('fileTip')
      fileTip.innerHTML = ''
      if(file.size > 1024 * 512 ){
          fileTip.innerHTML = '文件大小不能超过0.5MB'
          input.value = ''
          return false
        } else {
          const reader = new FileReader()
          reader.onload = (e) => {
            let img = document.createElement('img')
            img.setAttribute('src', e.target.result)
            img.style.height = '100%'
            fileTip.appendChild(img)
          }
          reader.readAsDataURL(file);
          this.$emit('callback', file)
        }
    },
    clearImg () {
      const fileTip = document.getElementById('fileTip')
      const input = document.getElementById('input')
      fileTip.innerHTML = ''
      input.value = ''
    }
  }
}
</script>

<style scoped>
  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    font-size: .8rem;
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
.fileTip {
  font-size: .5rem;
  color: #666;
  height: 50px;
}
</style> 