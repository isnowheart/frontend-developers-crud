<template lang="pug">
header.navbar-app
  header-buttons.hide-sm-res
  small-header-buttons.hide-normal-res
</template>

<script>
import HeaderButtons from "./HeaderButtons";
import SmallHeaderButtons from "./SmallHeaderButtons";

export default {
  components: { HeaderButtons, SmallHeaderButtons },
};
</script>

<style lang="stylus" scoped>
@media (max-width: 484px) {
  .hide-sm-res {
    display: none !important;
  }
}

@media (min-width: 485px) {
  .hide-normal-res {
    display: none !important;
  }
}
</style>