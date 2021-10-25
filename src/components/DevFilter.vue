<template lang="pug">
v-container.my-5
  v-col(cols="12", sm="6")
  v-row
    v-col(cols="12", sm="6")
      v-text-field.search(
        label="pesquisar",
        cols="12",
        required="",
        v-model="search"
      )
    v-spacer
    v-col(cols="12", sm="6", md="4")
      v-select(
        v-model="input.filter",
        label="filtro",
        :items="keys",
        item-text="name",
        :item-value="keys.value"
      )
    v-layout(row="", wrap="")
      v-flex(
        xs12="",
        sm6="",
        md4="",
        lg3="",
        v-for="developer in filteredDevelopers",
        :key="developer.id"
      )
        dev-card(:developer="developer")
</template>

<script>
import Developer from "../services/DeveloperDataService";
import DevCard from "./DevCard.vue";

export default {
  data() {
    return {
      search: "",
      developers: [],
      keys: [
        {
          name: "todos",
          value: "",
        },
        {
          name: "id",
          value: "id",
        },
        {
          name: "nome",
          value: "name",
        },
        {
          name: "sexo",
          value: "gender",
        },
        {
          name: "idade",
          value: "age",
        },
        {
          name: "hobby",
          value: "hobby",
        },
        {
          name: "data de nascimento",
          value: "birthdate",
        },
      ],
      input: {
        filter: "",
      },
    };
  },
  components: { DevCard },

  computed: {
    filteredDevelopers() {
      return this.developers.filter((developer) => {
        if (this.input.filter === "id") {
          return developer.id.toString().match(this.search);
        } else if (this.input.filter === "name") {
          return developer.name.toLowerCase().match(this.search.toLowerCase());
        } else if (this.input.filter === "gender") {
          return developer.gender
            .toUpperCase()
            .match(this.search.toUpperCase());
        } else if (this.input.filter === "age") {
          return developer.age.toString().match(this.search);
        } else if (this.input.filter === "hobby") {
          return developer.hobby.toLowerCase().match(this.search.toLowerCase());
        } else if (this.input.filter === "birthdate") {
          return developer.birthdate.match(this.search);
        } else {
          if (developer.id.toString().match(this.search)) {
            return developer.id.toString().match(this.search);
          } else if (
            developer.name.toLowerCase().match(this.search.toLowerCase())
          ) {
            return developer.name
              .toLowerCase()
              .match(this.search.toLowerCase());
          } else if (
            developer.gender
              .toUpperCase()
              .toString()
              .match(this.search.toUpperCase())
          ) {
            return developer.gender
              .toUpperCase()
              .match(this.search.toUpperCase());
          } else if (developer.age.toString().match(this.search)) {
            return developer.age.toString().match(this.search);
          } else if (
            developer.hobby.toLowerCase().match(this.search.toLowerCase())
          ) {
            return developer.hobby
              .toLowerCase()
              .match(this.search.toLowerCase());
          } else if (developer.birthdate.match(this.search)) {
            return developer.birthdate.match(this.search);
          }
        }
      });
    },
  },
  mounted() {
    this.indexDevelopers();
  },

  methods: {
    async indexDevelopers() {
      await Developer.index().then((response) => {
        this.developers = response.data;
      });
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
