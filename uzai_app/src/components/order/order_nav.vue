<template>
  <li>
    <i class="iconfont icon-shuxian" style="position: relative;top: 3px;color:#ea1a56"></i>
    {{item}}
  </li>
</template>

<script>
export default {
  props:["item"]
}
</script>

<style scoped>
.iconfont{
  font-size:26px;
}
</style>