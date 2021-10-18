<template lang="pug">
v-app
  header-component
  router-view
  .footer
    footer-component
</template>

<script>
import HeaderComponent from "@/components/layouts/header/Header";
import FooterComponent from "@/components/layouts/Footer";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: { FooterComponent, HeaderComponent },
};
</script>
