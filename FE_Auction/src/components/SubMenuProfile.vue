<template>
  <!-- menu phụ -->
  <div class="col-lg-4 col-md-12 submenu text-white d-flex flex-column align-items-center">
    <div class="card w-100">
      <div class="card-body">
        <div class="row ">
          <div class="col-lg-12 col-md-3 col-sm-3 mb-lg-2">
            <router-link to="/client/profile/art-management"
              class="submenu-item aa-link text-decoration-none d-flex align-items-center gap-4 px-4 py-3 justify-content-sm-center justify-content-lg-start "
              :class="{ active: isActive('/client/profile/art-management') }">
              <i class="fa-solid fa-images fa-xl m-lg-0 m-2"></i>
              <span class="fw-bold text-nowrap d-none d-lg-inline">Artwork Management</span>
            </router-link>
          </div>
          <div class="col-lg-12 col-md-3 col-sm-3 mb-lg-2">
            <router-link to="/client/profile/history"
              class="submenu-item aa-link text-decoration-none d-flex align-items-center gap-4 px-4 py-3 justify-content-sm-center justify-content-lg-start "
              :class="{ active: isActive('/client/profile/history') }">
              <i class="fa-solid fa-rotate-right fa-xl m-lg-0 m-2"></i>
              <span class="fw-bold text-nowrap d-none d-lg-inline">Auction History</span>
            </router-link>
          </div>
          <div class="col-lg-12 col-md-3 col-sm-3 mb-lg-2">
            <router-link to="/client/profile/invoices"
              class="submenu-item aa-link text-decoration-none d-flex align-items-center gap-4 px-4 py-3 justify-content-sm-center justify-content-lg-start "
              :class="{ active: isActive('/client/profile/invoices') }">
              <i class="fa-solid fa-receipt fa-xl m-lg-0 m-2"></i>
              <span class="fw-bold text-nowrap d-none d-lg-inline">Invoices</span>
            </router-link>
          </div>
          <div class="col-lg-12 col-md-3 col-sm-3">
            <router-link to="/client/profile/e-wallet"
              class="submenu-item aa-link text-decoration-none d-flex align-items-center gap-4 px-4 py-3 justify-content-sm-center justify-content-lg-start "
              :class="{ active: isActive('/client/profile/e-wallet') }">
              <i class="fa-solid fa-wallet fa-xl m-lg-0 m-2"></i>
              <span class="fw-bold text-nowrap d-none d-lg-inline">E-Wallet</span>
            </router-link>
          </div>
        </div>




      </div>
    </div>
  </div>

  <!-- nội dung submenu -->
  <div class="col-lg-8 col-md-12 mt-sm-4 m-lg-0">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'SubMenuProfile',
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    }
  }
};
</script>
<style scoped>
.submenu-item:hover,
.submenu-item:focus,
.submenu-item:active,
.submenu-item:visited {
  text-decoration: none !important;
}
</style>
