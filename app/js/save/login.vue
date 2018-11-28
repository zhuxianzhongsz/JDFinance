<template>
  <panel title="亲，您没有登录哦~" :class="$style.panel" >
    
  </panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  >h4{
    margin-top: 100px;
    text-align: left;
    color: red;
  }
}
</style>
