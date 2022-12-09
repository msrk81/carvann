<template>
  <nav class="container">
    <div class="row">
      <div class="col-lg-1">
        <div class="logo">
          <img src="../../assets/home/svg/logo.svg" alt="carvaan logo">
        </div>
      </div>
      <div class="col-lg-7">
        <div class="menu-items font-regular">
          <p>
            پنل های کاروان
          </p>
          <p>
            امکانات
          </p>
          <p>
            راهنمای کاروان
          </p>
          <p>
            تماس با ما
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="menu-panel font-regular">
          <div class="menu-panel-item">
            <p>
              سفارشات روز
            </p>
            <img src="../../assets/home/svg/keyboard.svg" alt="keyboard logo">
          </div>
          <div class="menu-panel-item">
            <p>
              ورود به حساب کاربری
            </p>
            <img src="../../assets/home/svg/user.svg" alt="keyboard logo">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigationComponent"
}
</script>

<style scoped lang="scss">
@import "../../style/home/navigation";
</style>
