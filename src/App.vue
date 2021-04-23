<template>
  <div id="app">
   <div id="message">{{message}}</div>
    <router-view/>
  </div>
</template>
<script>
export default { 
  data() {
    return {
      message : "旧手机"
    }
  },
  mounted() {
    this.em()
  },
  updated() {
    console.log("更新完成")
  },
  methods: {
    em(){
      this.message="新手机"
      console.log(this.message==='旧手机',this.$el.textContext)
      this.$nextTick(()=>{
        console.log('nextTick',this.message==='旧手机',this.$el.innerText)
      })
      setTimeout(() => {
        console.log('timer',this.message==='旧手机',this.$el.innerText)
      }, 0);
    }
  },
}
</script>
<style lang="scss">
</style>
