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
          href: 'ious',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26494/44/1976501052/44585/ad311eee/5bf3d23fNd7210734.jpg?width=750&height=360'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t28666/203/145502384/40855/61d3becc/5be94757N4c545177.jpg?width=750&height=360'
        },
        {
          href: '',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t28246/126/274676870/61389/7e5b1386/5bee28e5Naee426f8.jpg?width=750&height=360'
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
  margin-top: 0 !important;
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
