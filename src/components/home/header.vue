<template>
  <header class="container">
    <div class="row">
      <div class="col-lg-6 header-text">
        <div class="header-title">
          <h1 class="font-bold">
            کـــاروان
            <br><span>
              همسفر لحظه های پربار
            </span>
          </h1>
          <p class="font-regular">
            کاروان، بستری جامع و یکپارچه در راستای مدیریت تمامی فرآیند های جابه جایی کالا ارائه می دهد.
          </p>
        </div>
        <div class="header-buttons font-regular">
          <a href="#" class="straight-link">
            دانلود مستقیم
          </a>
          <a href="#" class="bazaar-link">
            دانلود از کافه بازار
          </a>
        </div>
        <img src="../../assets/home/svg/square2.svg" alt="header square2" class="header-square2">
        <img src="../../assets/home/svg/circles.svg" alt="header circles" class="header-circles">
      </div>
      <div class="col-gl-6 header-character">
        <img src="../../assets/home/png/character.png" alt="header character">
        <img src="../../assets/home/svg/history.svg" alt="header history" class="header-history">
        <img src="../../assets/home/svg/rezerv.svg" alt="header reserve" class="header-reserve">
        <img src="../../assets/home/svg/nobat.svg" alt="header turn" class="header-turn">
        <img src="../../assets/home/svg/Polygon1.svg" alt="header polygon" class="header-polygon">
        <img src="../../assets/home/svg/behind-circle.svg" alt="header behind circle" class="header-behind-circle">
        <img src="../../assets/home/svg/square1.svg" alt="header square1" class="header-square1">
        <div class="header-background-green"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerComponent"
}
</script>

<style scoped lang="scss">
@import "src/style/home/header";
@import "src/style/home/header-animation";
</style>
