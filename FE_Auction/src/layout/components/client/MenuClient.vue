<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-white shadow-sm rounded-4 px-3 my-3">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-3">
        <img src="../../../assets/img/Logo_AA.png" class="imgLogo" alt="">
        <span class="fw-semibold"><span class="text-success-bright fw-semibold">Art</span>Auction</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto gap-lg-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }" aria-current="page">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/client/auction" class="nav-link" :class="{ 'active': $route.path === '/client/auction' }">
              Auction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" :class="{ 'active': $route.path === '/about-us' }">
              About us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link" :class="{ 'active': $route.path === '/help' }">
              Help
            </router-link>
          </li>
        </ul>

        <div class="d-flex gap-2">
          <router-link to="/register">
            <button class="btn btn-outline-success">Đăng ký</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-success">Đăng nhập</button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
