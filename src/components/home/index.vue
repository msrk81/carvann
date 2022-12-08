<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
    <stats-component/>
    <panels-component/>
    <features-component/>
    <video-component/>
    <customer-component/>
  </div>
</template>

<script>
import NavigationComponent from "@/components/home/navigation";
import HeaderComponent from "@/components/home/header";
import StatsComponent from "@/components/home/stats";
import PanelsComponent from "@/components/home/panels";
import FeaturesComponent from "@/components/home/features";
import VideoComponent from "@/components/home/video";
import CustomerComponent from "@/components/home/customer";

export default {
  name: "indexComponent",
  components: {
    CustomerComponent,
    VideoComponent, FeaturesComponent, PanelsComponent, StatsComponent, HeaderComponent, NavigationComponent
  }
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

