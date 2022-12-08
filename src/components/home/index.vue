<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
    <stats-component/>
    <panels-component/>
  </div>
</template>

<script>
import NavigationComponent from "@/components/home/navigation";
import HeaderComponent from "@/components/home/header";
import StatsComponent from "@/components/home/stats";
import PanelsComponent from "@/components/home/panels";

export default {
  name: "indexComponent",
  components: {PanelsComponent, StatsComponent, HeaderComponent, NavigationComponent}
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

