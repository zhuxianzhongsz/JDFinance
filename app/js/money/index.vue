<template>
    <div>
      <heador></heador>
      <slider></slider>
      <ada></ada>
      <money></money>
      <adb></adb>
      <finance></finance>
      <adc></adc>
      <footor></footor>
      <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Slider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'

export default {
  components: {
    Heador,
    Slider,
    Footor,
    Navbar,
    Ada,
    Money,
    Adb,
    Finance,
    Adc
  }
}
</script>

<style lang="scss" module>
  
</style>
