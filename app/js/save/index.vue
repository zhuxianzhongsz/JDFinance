<template>
    <div>
      <heador></heador>
      <login></login>
      <slider></slider>
      <ticket></ticket>
      <discount></discount>
      <discount-ticket></discount-ticket>
      <convenience></convenience>
      <save-footer></save-footer>
      <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Login from './login1.vue'
import Navbar from '../public/navbar.vue'
import Slider from './sslider.vue'
import Ticket from './ticket.vue'
import Discount from './discount.vue'
import DiscountTicket from './ticket2.vue'
import SaveFooter from './save-footer.vue'
import Convenience from './convenience.vue'

export default {
  components: {
    Heador,
    Login,
    Navbar,
    Slider,
    Ticket,
    Discount,
    DiscountTicket,
    SaveFooter,
    Convenience
  }
}
</script>

<style lang="scss" module>
  
</style>
