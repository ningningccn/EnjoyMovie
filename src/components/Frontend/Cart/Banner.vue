<template>
  <div>
    <div class="banner">
      <div class="container d-md-flex text-center">
        <img class="col-md-6 py-2"
          src="@/assets/Banner(img)/Cart/banner(new_open).png" alt="banner(new_open)">
        <img class="col-md-6 py-2"
          src="@/assets/Banner(img)/Cart/banner(code).png" alt="banner(code)">
      </div>
    </div>
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
  min-height: 300px;
  margin-top: -73px;
  background-image: url('~@/assets/Banner(img)/Cart/banner(BG1).jpg');
  background-size: cover;
  position: relative;
}
@media(max-width: 768px){
  .banner{
    min-height: 400px;
  }
}
.container{
  padding-top: 100px;
}
img {
  width: 80%;
  height: auto;
}
</style>
