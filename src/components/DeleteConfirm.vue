<template lang="pug">
v-dialog(
  v-model="dialogDelete",
  max-width="500px",
  @click:outside="closeDelete",
  @keydown.esc="closeDelete"
)
  v-form(@submit="deleteDeveloper")
    v-card
      v-card-title.text-h5 Tem certeza de que deseja apagar
        .text-h5 este Desenvolvedor?
      v-card-actions
        v-spacer
        v-btn(color="blue darken-1", text="", @click="closeDelete") Cancelar
        v-btn(
          color="blue darken-1",
          text="",
          type="submit",
          @click="deleteDeveloper"
        ) OK
</template>

<script>
import Developer from "../services/DeveloperDataService";

export default {
  props: {
    dev: {
      type: Object,
      default: null,
    },
    dialogDelete: {
      type: Boolean,
      required: true,
    },
    closeDelete: {
      required: true,
    },
  },

  data: () => ({
    developer: {
      id: null,
    },
  }),

  created() {
    if (this.dev) {
      this.developer.id = this.dev.id;
    }
  },

  methods: {
    async deleteDeveloper() {
      try {
        await Developer.delete(this.developer.id).then(() => {
          this.developer.push(developer);
          this.closeDelete();
        });
      } catch (error) {
        this.$toaster.error(error);
      }
    },
  },
};
</script>

<style scoped>
.third--text {
  font-size: 15px;
}
</style>

