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
    <company-component/>
    <download-component/>
    <footer-component/>
  </div>
</template>

<script>
import NavigationComponent from "@/components/global/navigation";
import HeaderComponent from "@/components/home/header";
import StatsComponent from "@/components/home/stats";
import PanelsComponent from "@/components/home/panels";
import FeaturesComponent from "@/components/home/features";
import VideoComponent from "@/components/home/video";
import CustomerComponent from "@/components/home/customer";
import CompanyComponent from "@/components/home/company";
import DownloadComponent from "@/components/home/download";
import FooterComponent from "@/components/global/footer";

export default {
  name: "indexComponent",
  components: {
    FooterComponent,
    DownloadComponent,
    CompanyComponent,
    CustomerComponent,
    VideoComponent,
    FeaturesComponent,
    PanelsComponent,
    StatsComponent,
    HeaderComponent,
    NavigationComponent
  }
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

