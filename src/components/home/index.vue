<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
    <stats-component/>
    <panels-component/>
    <features-component/>
  </div>
</template>

<script>
import NavigationComponent from "@/components/home/navigation";
import HeaderComponent from "@/components/home/header";
import StatsComponent from "@/components/home/stats";
import PanelsComponent from "@/components/home/panels";
import FeaturesComponent from "@/components/home/features";

export default {
  name: "indexComponent",
  components: {FeaturesComponent, PanelsComponent, StatsComponent, HeaderComponent, NavigationComponent}
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

