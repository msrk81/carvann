<template>
  <div>
    <div class="background-style">
      <navigation-component/>
      <header-component/>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/components/home/navigation";
import HeaderComponent from "@/components/home/header";

export default {
  name: "indexComponent",
  components: {HeaderComponent, NavigationComponent}
}
</script>

<style scoped lang="scss">
@import "src/style/home/index";
</style>

