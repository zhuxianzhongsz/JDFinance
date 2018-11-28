<template>
  <panel class="panel">
    <section class="footer">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="">
    </section>
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
<style lang="scss">
@import '../../css/element.scss';
.panel{
  @include panel;
  
  >h4{
    display: none;
  }
  >.footer{
    padding-bottom: 140px !important;
    >img{
      width: 100%;
    }
  }
}
</style>
