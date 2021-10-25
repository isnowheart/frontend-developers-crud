<template lang="pug">
v-card.text-xs-center.ma-3(
  v-if="developer",
  min-width="200",
  flat="",
  outlined=""
)
  v-spacer
  v-card-text
    .subheading
      | ID: {{ developer.id }}
    .subheading
      | Nome: {{ developer.name }}
    .subheading
      | Sexo: {{ developer.gender }}
    .subheading
      | Idade: {{ developer.age }}
    .subheading
      | Hobby: {{ developer.hobby }}
    .subheading
      | Data de Nascimento: {{ developer.birthdate }}
  v-card-actions(v-if="!readOnly")
    v-btn(
      color="blue",
      elevation="2",
      small="",
      outlined="",
      rounded="",
      v-on:click="OpenEditForm"
    )
      v-icon(small="")
        | mdi-pencil
    v-btn(
      color="red",
      small="",
      elevation="2",
      outlined="",
      rounded="",
      v-on:click="OpenDeleteConfirm"
    )
      v-icon(small="")
        | mdi-delete
  forms(:dev="developer", :dialog="showEditForm", :close="CloseEditform") 
  delete-confirm(
    :dev="developer",
    :dialogDelete="showDeleteConfirm",
    :closeDelete="CloseDeleteConfirm"
  )
</template>

<script>
import Forms from "./Forms.vue";
import deleteConfirm from "./DeleteConfirm.vue";

export default {
  props: {
    developer: {
      type: Object,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },

  components: { Forms, deleteConfirm },

  data() {
    return {
      showEditForm: false,
      showDeleteConfirm: false,
    };
  },

  methods: {
    OpenEditForm() {
      this.showEditForm = true;
    },

    CloseEditform() {
      this.showEditForm = false;
    },

    OpenDeleteConfirm() {
      this.showDeleteConfirm = true;
    },

    CloseDeleteConfirm() {
      this.showDeleteConfirm = false;
    },
  },
};
</script>