<template lang="pug">
v-container.my-5
  v-row(no-gutters="") 
    v-col
      v-flex(xs12="", sm6="", md4="", lg3="")
        v-text-field(label="ID", required="", v-model="getdev.id")
      v-btn(
        color="secondary",
        small="",
        elevation="2",
        outlined="",
        rounded="",
        v-on:click="showDeveloper(getdev.id)"
      )
        v-icon(small="")
          | Listar Desenvolvedor por ID
          span Listar Desenvolvedor por ID
    v-col
      v-card.text-xs-center.ma-3(min-width="200px", flat="", outlined="")
        v-card-text
          .subheading
            | ID: {{ getdev.id }}
          .subheading
            | Name: {{ getdev.name }}
          .subheading
            | Gender: {{ getdev.gender }}
          .subheading
            | Age: {{ getdev.age }}
          .subheading
            | Hobby: {{ getdev.hobby }}
          .subheading
            | BirthDate: {{ getdev.birthdate }}
</template>

<script>
import Developer from "../../services/DeveloperDataService";

export default {
  data() {
    return {
      getdev: {
        id: null,
        name: null,
        gender: null,
        hobby: null,
        birthdate: null,
      },
      developers: [],
      dialog: false,
      dialogDelete: false,
    };
  },

  methods: {
    showDeveloper() {
      Developer.show(this.getdev.id).then((response) => {
        this.getdev = response.data;
      });
    },
  },
};
</script>