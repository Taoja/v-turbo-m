<template>
  <div>
    <img src="@a/logo.png">
    <img src="@/modules/base/main/page1/image/logo.png">
    <div class="abc">{{msg}}</div>
    <div>{{msg2}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: Global.host,
      msg2: ENV.static
    }
  },
  mounted() {
    console.log(Global, ENV)
  },
}
</script>
<style lang="stylus" scoped>
.abc
  color red
</style>
