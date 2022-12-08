<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
    <stats-component/>
  </div>
</template>

<script>
import NavigationComponent from "@/components/home/navigation";
import HeaderComponent from "@/components/home/header";
import StatsComponent from "@/components/home/stats";

export default {
  name: "indexComponent",
  components: {StatsComponent, HeaderComponent, NavigationComponent}
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

