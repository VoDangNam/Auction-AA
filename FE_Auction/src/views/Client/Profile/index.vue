<template>
  <div class="container">
    <div class="row d-flex">
      <!-- infor -->
      <div class="col-lg-7 col-md-12 mb-4">
        <div class="card">
          <div class="card-body p-4">
            <div class="row">
              <div
                class="col-lg-4 col-md-12 d-flex flex-column justify-content-center align-items-center mb-lg-0 mb-sm-4">
                <img src="../../../assets/img/user_test.jpg" class="avatar mb-4" alt="">

                <button class="btn btn-outline-success w-75 text-nowrap mt-auto">Edit Profile</button>
              </div>

              <div class="col-lg-8 col-md-12 d-flex flex-column">
                <h4 class="fw-bold text-success mt-auto pb-3">Trần Hải Yêns</h4>
                <div class="mt-auto d-flex flex-column gap-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0 fw-bold">Phone</p>
                    <p class="m-0 text-success">+84 123456789</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0 fw-bold">Email</p>
                    <p class="m-0 text-success">a123@gmail.com</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0 fw-bold">Citizen identification</p>
                    <p class="m-0 text-success">0123456789</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0 fw-bold">Date of birth</p>
                    <p class="m-0 text-success">01/01/1988</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0 fw-bold">Address</p>
                    <p class="m-0 text-success">VietNam</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-lg-5 col-md-12 mb-4">
        <div class="row d-flex">
          <div class="col-lg-12 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold m-0 text-success text-center">Auction Statistics</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 mb-md-2 mb-3">
            <div class="card bg-success text-white">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="">
                  <p class="fw-bold">Monthly Auctions</p>
                  <p class="fw-bold m-0">10 works</p>
                </div>
                <div class="bg-custom px-3 py-4 rounded-circle hide-on-small">
                  <i class="fa-solid fa-gavel text-success flip-x fa-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 mb-md-2 mb-3">
            <div class="card bg-success text-white">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="">
                  <p class="fw-bold">Works Auctioned</p>
                  <p class="fw-bold m-0">5 works</p>
                </div>
                <div class="bg-custom px-3 py-4 rounded-circle hide-on-small">
                  <i class="fa-solid fa-panorama text-success flip-x fa-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div class="card bg-success text-white">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="">
                  <p class="fw-bold">Total Spending</p>
                  <p class="fw-bold m-0">$ 80M</p>
                </div>
                <div class="bg-custom px-3 py-4 rounded-circle hide-on-small">
                  <i class="fa-solid fa-sack-dollar text-success fa-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12  mb-3">
            <div class="card bg-success text-white">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="">
                  <p class="fw-bold">Auction Revenue</p>
                  <p class="fw-bold m-0">$ 100M</p>
                </div>
                <div class="bg-custom px-3 py-4 rounded-circle hide-on-small">
                  <i class="fa-solid fa-hand-holding-dollar text-success fa-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <SubMenuProfile />
    </div>

  </div>
  <!-- menu phụ + vùng gắn trang con -->
</template>
<script>
import SubMenuProfile from '@/components/SubMenuProfile.vue'
export default {
  components: { SubMenuProfile }
}
</script>
<style></style>
