<template lang="pug">
v-container.my-5
  v-row
    v-spacer
    v-col(md="4")
      v-row(md="4")
      v-flex(md4="", lg3="")
        v-spacer
        v-text-field(label="Filtro por ID", required="", v-model="searchId")
        v-btn(
          color="secondary",
          small="",
          elevation="2",
          outlined="",
          rounded="",
          v-if="searchId",
          v-on:click="showDeveloper",
          @click="dialog = true"
        )
          v-icon(small="")
            | Listar por ID
            span Listar por ID

        v-dialog(v-model="dialog", max-width="400", scrollable="")
          v-col
            dev-card(:developer="developer", :readOnly="readOnly")
    v-btn(
      color="success",
      elevation="24",
      fab="",
      rounded="",
      v-on:click="OpenEditForm"
    )
      v-icon
        | mdi-plus
  dev-filter
  forms(:dialog="showEditForm", :close="CloseEditform") 
</template>

<script>
import Developer from "../services/DeveloperDataService";
import DevFilter from "./DevFilter.vue";
import Forms from "./Forms.vue";
import DevCard from "./DevCard.vue";

export default {
  data() {
    return {
      dialog: false,
      isValid: false,
      developer: {},
      showEditForm: false,
      showDeleteConfirm: false,
      searchId: "",
      readOnly: false,
    };
  },
  components: { Forms, DevFilter, DevCard },

  methods: {
    async showDeveloper() {
      try {
        if (this.searchId) {
          await Developer.show(this.searchId).then((response) => {
            this.developer = response.data;
            this.readOnly = true;
          });
        }
      } catch (error) {
        this.developer = {};
        this.$toaster.error(`ID não encontrado. ${error}.`, {
          timeout: 8000,
        });
      }
    },
    OpenEditForm() {
      this.showEditForm = true;
    },

    CloseEditform() {
      this.showEditForm = false;
    },
  },
};
</script>

<style>
.search {
  text-transform: lowercase;
}
</style>


