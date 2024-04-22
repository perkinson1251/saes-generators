<script lang="ts" setup>
import { Navbar } from '@/components/Navbar'
</script>
<template>
  <Navbar></Navbar>
  <main class="container">
    <slot />
  </main>
</template>
