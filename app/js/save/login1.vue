<template>
  <div class="login">
    <h4>亲，您没有登录哦~
      <span>登录</span>
    </h4>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .login{
    box-sizing: border-box;
    width: 640px;
    height: 110px;
    margin-top: 100px;
    padding-left: 34px;
    background-color: #fff;
    border-top: 1px solid #444;
    >h4{
      width: 100%;
      height: 110px;
      line-height: 110px;
      color: #b67e38;
      position: relative;
      >span{
        position: absolute;
        right: 60px;
        top: 0;
        display: inline-block;
        font-size: 26px;
        color: #fff;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        background: #ff4b28;
      }
    }
  }
</style>
