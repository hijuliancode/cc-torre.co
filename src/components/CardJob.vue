<template>
  <div class="card-job">{{title}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title'],
  name: 'CardJob',
});
</script>
