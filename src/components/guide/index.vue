<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
    <card-component/>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/guide/header";
import NavigationComponent from "@/components/global/navigation";
import FooterComponent from "@/components/global/footer";
import CardComponent from "@/components/guide/card";

export default {
  name: "indexComponent",
  components: {CardComponent, FooterComponent, NavigationComponent, HeaderComponent}
}
</script>

<style scoped lang="scss">
.background-style {
  background: linear-gradient(183.1deg, rgba(230, 255, 249, 0.35) 2.48%, rgba(255, 255, 255, 0) 103.46%);
}
</style>
