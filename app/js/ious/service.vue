<template>
  <panel title="更多服务" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items">
        <img :src="item.img" alt="">
        <p>{{item.text}}</p>
      </div>
      
    </section>
  </panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88',
          text: '租房',
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90',
          text: '房抵贷'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88',
          text: '分期用'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90',
          text: '分期商城'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90',
          text: '教育'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
          text: '家装'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
          text: '车险'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
          text: '车险'
        },
      ]
    }
  }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  .content{
    @include flex(row);
    .item{
      width: 160px;
      height: 144px;
      text-align: center;
      margin-bottom: 40px;
      img{
        width: 90px;
        height: 90px;
      }
      p{
        font-size: 26px;
        color: #666;
        margin-top: 12px;
      }
    }
  }
}
</style>
