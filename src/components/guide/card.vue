<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="title">
            <div style="background-color:#BFEFD4;">
              <img src="../../assets/guide/svg/tick.svg" alt="tick icon">
            </div>
            <div>
              1
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque facere facilis in non odit, officia
          omnis quasi repellat rerum. Deleniti exercitationem fugit inventore, nulla placeat possimus sed sit
          temporibus!
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque facere facilis in non odit, officia
          omnis quasi repellat rerum. Deleniti exercitationem fugit inventore, nulla placeat possimus sed sit
          temporibus!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cardComponent"
}
</script>

<style scoped lang="scss">
.card {
  background: url("../../assets/guide/png/background.png") #F8F8F8;
  background-size: cover;
  width: 90%;
  padding: 44px 40px;
  border-radius: 23px;

  .title {
    display: flex;
    justify-content: space-between;

    img {
      width: 32px;
      height: auto;
      margin: 14px;
    }
  }
}
</style>
