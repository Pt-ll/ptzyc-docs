<script setup lang="ts">
defineProps<{ title: string; description: string; href: string; updated?: string }>()
</script>

<template>
  <article class="project-card">
    <h3><a :href="href">{{ title }}</a></h3>
    <p>{{ description }}</p>
    <small v-if="updated">最近更新：{{ updated }}</small>
  </article>
</template>
