<script lang="ts" setup>
import { MainLayout } from '@/layouts/MainLayout'
import SFPD_ROUTES_META from '@/router/sfpdRoutesMeta'
</script>
<template>
  <MainLayout>
    <h1 class="text-center">SA-ES Generators</h1>
    <div class="d-flex flex-wrap gap-3">
      <div class="card" style="width: 18rem" v-for="(elem, index) in SFPD_ROUTES_META" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ elem.name }}</h5>
          <RouterLink :to="elem.route" class="btn btn-primary">Перейти</RouterLink>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
