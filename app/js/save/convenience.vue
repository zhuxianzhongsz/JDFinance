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
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3256/1/8339/10638/5ba98da9E4331a644/bc82f7dbfe7778b6.png?width=120&height=120',
          text: '机票',
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&height=120',
          text: '每日特惠'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&height=120',
          text: '信用卡'
        },
        {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&height=120',
          text: '火车票'
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
  .content{
    @include flex(row);
    margin-top: 20px;
    .item{
      width: 160px;
      height: 144px;
      text-align: center;
      margin: 40px 0;
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
