<template lang="pug">
#app
  v-card#lateral
  developers-list
</template>

<script>
import DevelopersList from "../components/DevelopersList.vue";

export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  data: () => ({
    tabs: null,
  }),
  components: { DevelopersList },
};
</script>
