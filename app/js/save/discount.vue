<template>
  <panel title="支付优惠" class="panel">
    <div class="discount">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
    </div>
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
  margin-top: 0 !important;
  .discount{
    >img{
      width: 100%;
    }
  }
}
</style>
