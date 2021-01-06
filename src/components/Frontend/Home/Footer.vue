<template>
  <div class ='footer'>
    <div class='col-4 text-center text-white mx-auto pb-5'>
      <p>訂閱我們的電子報，可以獲得最新的電影資訊與秘密折扣！</p>
      <div class='input-group'>
        <input type='mail' placeholder='abc123@mail.com' id='copy' class='form-control'>
        <div class='input-group-append'>
          <button class='btn btn-secondary' type='button'
            data-toggle='modal' data-target='#exampleModal'>
            訂閱
          </button>
        </div>
      </div>
    </div>
    <div class='text-center text-white col-4 mx-auto py-5'>
      © Copyright 2020 Enjoy Movie 不作任何商業用途 純屬練習作品
    </div>
    <!-- Modal -->
    <div class='modal fade' id='exampleModal' tabindex='-1'
    role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='mx-auto mt-4'>
            <h1 >訂閱成功!</h1>
          </div>
          <div class='modal-body text-center'>
            <h5>獲得8折優惠卷:sub8</h5>
          </div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
}
</style>
