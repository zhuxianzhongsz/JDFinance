<template>
  <panel title="生活服务" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t28189/232/289098066/5076/dfe2d74f/5bee6bb4N4ec4cede.png?width=90&height=90" alt="">
        <p>领红包</p>
      </li>
      <li :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27334/12/1829630702/5159/f8133cd6/5bee6bbdN8606cfbb.png?width=90&height=90" alt="">
        <p>领福利</p>
      </li>
      <li :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90" alt="">
        <p>领券</p>
      </li>
      <li :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90" alt="">
        <p>支付抽奖</p>
      </li>
      <li :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90" alt="">
        <p>全部</p>
      </li>
    </ul>
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
  .content{
    @include flex(row);
    box-sizing: border-box;
    padding-bottom: 40px;
    .item{
      width: 20%;
      text-align: center;
      img{
        width: 90px;
        height: 90px;
      }
      p{
        font-size:  26px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 12px;
      }
    }
  }
}
</style>
