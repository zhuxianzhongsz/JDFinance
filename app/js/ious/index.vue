<template>
    <div>
      <heador></heador>
      <slider></slider>
      <welfare></welfare>
      <service></service>
      <footor></footor>
      <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Slider from './islider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'

export default {
  components: {
    Heador,
    Slider,
    Footor,
    Navbar,
    Welfare,
    Service
  }
}
</script>

<style lang="scss" module>
  
</style>
