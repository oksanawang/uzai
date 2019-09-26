<template>
  <div>
    <h1>这是一个数据库测试借口</h1>
    <button @click="test"> 你戳我试试》》？？</button>
  </div>
</template>
<script>
export default {
  methods: {
    test(){
      var url ="user/test";
      this.axios.get(url).then(res=>{
        console.log(res)
        
      })
    },








  },
}
</script>
