<template lang="pug">
#app
  v-card#lateral
  v-toolbar(dark="", tabs="", flat="", color="#1C4E8D")
    v-tabs(v-model="tabs", align-with-title="")
      v-spacer
      v-tab(href="#store")
        | Criar
      v-tab(href="#show")
        | Consultar
      v-tab(href="#developersList")
        | Listar todos
      v-tabs-slider(color="pink")
      v-spacer
  v-card-text 
    v-tabs-items(v-model="tabs") 
      v-tab-item(
        v-for="content in ['store', 'show', 'developersList']",
        :key="content",
        :value="content"
      )
        v-card(v-if="content == 'store'", height="300px", flat="") 
          store
        v-card(v-else-if="content == 'show'", height="300px", flat="") 
          show
        v-card(v-else-if="content == 'developersList'", flat="")
          developers-list
</template>

<script>
import DevelopersList from "./components/DevelopersList.vue";
import Store from "./components/Store.vue";
import Show from "./components/Show.vue";

export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    dialog: false,
  }),
  components: { Store, Show, DevelopersList },
};
</script>
