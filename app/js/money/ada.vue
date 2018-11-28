<template>
  <panel title="神券满" :class="$style.panel">
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t30454/69/710748998/50634/159109b9/5bfb8bdaNa88988a2.jpg?width=750&height=220" alt="">
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
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  >h4{
    display: none;
  }
  .content{
    img{
      width: 100%;
      height: 186px;
      display: block;
    }
  }
}
</style>
