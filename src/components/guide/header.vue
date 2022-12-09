<template>
  <header class="container">
    <img src="../../assets/guide/png/guide.png" alt="guide image" class="header-image">
    <div class="panels-title">
      <div class="row centerItem">
        <div class="col-lg-9">
          <p class="font-regular">
            به منظور آموزش قسمت های مختلف در اپلیکیشن کاروان ، راهنمای آموزشی در دسته بندی های مختلف برای شما عزیزان
            فراهم شده است.
          </p>
        </div>
        <div class="col-lg-3">
          <div class="title-box">
            <div></div>
            <h1 class="font-black">
              راهنمای کاروان
            </h1>
          </div>
        </div>
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
@import "src/style/app/variables";

.header-image {
  width: 80%;
  height: auto;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 45px;
}

.panels-title {
  margin-bottom: 100px;

  p {
    color: $gray-300;
    font-size: 18px;
    width: 75%;
    margin-right: 10%;
    line-height: 180%;
  }

  .title-box {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    div {
      width: 20px;
      height: 68px;
      top: 3px;
      background: #D9F5EA;
      border-radius: 6px;
      margin-left: 21px;
    }

    h1 {
      font-size: 28px;
    }
  }
}
</style>
