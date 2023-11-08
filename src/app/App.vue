<template lang="">
  <div class="flex justify-center flex-col items-center w-100% mt-10">
    <home-page />
  </div>
</template>
<script>
import homePage from "@/pages/home-page/ui/home-page.vue";

export default {
  components: {
    homePage,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  @apply bg-bgMain;
}
</style>
