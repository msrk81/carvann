<template>
  <section class="container">
    <div class="title">
      <div></div>
      <h1 class="font-black">
        مورد اعتماد مشتریان  هستیم
      </h1>
    </div>
    <div class="row centerItem">
      <div class="col-lg-1">
        <div class="arrow">
          <img src="../../assets/home/svg/arrow-right.svg" alt="right-arrow">
        </div>
      </div>
      <div class="col-lg-10">
        <div class="slide">
          <div class="slide-user-info">
            <div>
              <img src="../../assets/home/comment'sProfiles/alizade.png" alt="user profile">
            </div>
            <div>
              <h2 class="font-bold">
                محمد قدرتی
              </h2>
              <p class="font-regular">
                رئیس هیأت مدیره انجمن صنفی رانندگان شاهرود
              </p>
            </div>
          </div>
          <div class="slide-message font-light">
            “استفاده از اپ کاروان و سرعت همه گیری اون بین رانندگان برای من عجیب بوده. در حال حاضر برگشتن به دوران قبل
            کاروان و پیش بردن کارهای انجمن به شکل سنتی برای ما و رانندگان تقریباً غیرممکنه.”
          </div>
        </div>
        <div class="slide-pagination">
          <div class="active"></div>
          <div class="deActive"></div>
          <div class="deActive"></div>
        </div>
      </div>
      <div class="col-lg-1">
        <div class="arrow" style="float: left">
          <img src="../../assets/home/svg/arrow-left.svg" alt="left-arrow">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "customerComponent"
}
</script>

<style scoped lang="scss">
@import "src/style/home/customer";
</style>
