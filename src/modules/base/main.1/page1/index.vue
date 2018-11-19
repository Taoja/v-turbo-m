<template>
  <div>
    <div>{{msg}}</div>
    <div>{{msg2}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: Global.host,
      msg2: ENV.sit.mpaas_domainName
    }
  },
  mounted() {
    console.log(Global, ENV)
  },
}
</script>
