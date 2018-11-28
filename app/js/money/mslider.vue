<template>
  <panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <slider :items="items" :cname="$style.slider"></slider>
    </section>
  </panel>
</template>
<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t27283/151/2051293051/135074/e935e15a/5bf4e4ecNae6ec8be.jpg?width=750&height=400'
        },
        {
          href: '',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t28507/153/434548641/38154/36a8ba7e/5bf372d8N88bdb170.jpg?width=750&height=400'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26998/344/2080396470/31564/d52050d6/5bf76ec8N8f2fa0b6.jpg?width=750&height=400'
        }
      ]
    }
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
    .slider{
      img{
        width: 100%;
      }
    }
  }
}
</style>
