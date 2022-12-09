<template>
  <div class="container">
    <div class="stats-container">
      <div class="row">
        <div class="col-lg-3">
          <div class="stats-item">
            <h1 class="font-black">
              2,379
            </h1>
            <p class="font-medium">
              راننده
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="stats-item">
            <h1 class="font-black">
              25
            </h1>
            <p class="font-medium">
              شرکت حمل و نقل
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="stats-item">
            <h1 class="font-black">
              3,159,042
            </h1>
            <p class="font-medium">
              تناژ سفارش ثبت شده
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="stats-item">
            <h1 class="font-black">
              174,427
            </h1>
            <p class="font-medium">
              کامیون سفارش ثبت شده
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statsComponent"
}
</script>

<style scoped lang="scss">
@import "src/style/home/stats";
@import "src/style/home/stats-animation";
</style>
