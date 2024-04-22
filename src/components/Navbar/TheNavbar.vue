<script lang="ts" setup>
import { ROUTES_META } from '@/router/routesMeta'
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(elem, index) in ROUTES_META" :key="index">
            <RouterLink class="nav-link active" aria-current="page" :to="elem.route">{{
              elem.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
