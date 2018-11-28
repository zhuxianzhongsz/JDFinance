<template>
  <panel title="新品推荐" :class="$style.panel" :cname="'product-slider'">
    <section :class="$style.content">
      <div class="arrow">更多尖货 ></div>
      <slider :options="options" :items="items"></slider>
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
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t28174/190/417131104/41529/80db7464/5bf24dd8Nc031dff3.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t27892/325/1984931380/71410/61ed8546/5bf24deeNf7457c6f.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26245/260/1932008857/33085/5329fce8/5bf28c0aN70c40dfd.jpg?width=335&height=421'
        }
      ],
      options: {
        slidesPerView: 2.2,
        sapceBetween: 30,
        freeMode: true
      }
    }
  }
}
</script>
<style lang="scss">
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 314px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>
<style lang="scss" module>
@import '../../css/element.scss';
  .panel{
    @include panel;
    .content{
      padding-bottom: 40px;
      position: relative;
      z-index: 10;
      &>div{
        position: absolute;
        font-size: 28px;
        color: #999;
        right: 20px;
        top: -70px;
      }
    }
  }
</style>
