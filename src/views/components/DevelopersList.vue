<template lang="pug">
v-container.my-5
  v-layout(row="", wrap="")
    v-flex(
      xs12="",
      sm6="",
      md4="",
      lg3="",
      v-for="developer in developers",
      :key="developer.id"
    )
      v-card.text-xs-center.ma-3(min-width="200", flat="", outlined="")
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
</template>

<script>
import { developerMixin } from "../../mixins/developerMixin";

export default {
  mixins: [developerMixin],
};
</script>