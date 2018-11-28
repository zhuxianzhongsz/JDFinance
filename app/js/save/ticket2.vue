<template>
  <section class="d-ticket">
    <div class="ticket-left">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&height=420" alt="">  
    </div>  
    <div class="ticket-right">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t27631/208/1513930801/9151/55693fb9/5be4fb0bN15c07ec1.png?width=335&height=210" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t24757/94/2422816066/11630/c31c4bfb/5be4f719N75983e83.png?width=335&height=210" alt="">
    </div>
  </section>  
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.d-ticket{
  display: flex;
  padding: 0 20px;
  .ticket-left{
    margin-right: 20px;
    img{
      width: 100%;
      height: 100.3%;
    }
  }
  .ticket-right{
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      &:nth-child(1){
        margin-bottom: 20px;
      }
    }
  }
}
</style>
