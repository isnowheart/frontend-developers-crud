<template lang="pug">
v-row(justify="center")
  v-dialog(v-model="dialog", persistent="", max-width="600px")
    template(v-slot:activator="{ on, attrs }")
      v-btn(color="#1C4E8D", v-bind="attrs", v-on="on")
        | Criar
    form
      v-card
        v-card-title
          span.text-h5 Novo desenvolvedor
        v-card-text
          v-container
            v-row
              v-col(cols="12", sm="6")
                v-text-field(
                  label="Nome*",
                  required="",
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']",
                  v-model="newdev.name"
                )
              v-col(cols="12", sm="6", md="4")
                label= 'Sexo*'
                v-radio-group(v-model="newdev.gender", row="", required="")
                  v-radio(value="f")
                    template(v-slot:label="")
                      strong.third--text Feminino
                  v-radio(value="m")
                    template(v-slot:label="")
                      strong.third--text Masculino
              v-col(cols="12", sm="6", md="4")
                v-text-field(
                  label="Data de Nascimento*",
                  required="",
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']",
                  type="text",
                  v-mask="'####-##-##'",
                  v-model="newdev.birthdate"
                )
              v-col(cols="12")
                v-text-field(
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']",
                  label="Hobby*",
                  required="",
                  v-model="newdev.hobby"
                )
          small * indica campos obrigatórios
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1", text="", @click="dialog = false")
            | Fechar
          v-btn(
            color="blue darken-1",
            text="",
            @click="storeDeveloper(newdev)"
          )
            | Salvar
</template>

<script>
import Developer from "../../services/DeveloperDataService";

export default {
  data() {
    return {
      newdev: {
        name: null,
        gender: null,
        hobby: null,
        birthdate: null,
      },
      dialog: false,
    };
  },
  methods: {
    storeDeveloper() {
      Developer.store(this.newdev)
        .then((response) => {
          this.newdev = {};
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.v-btn--is-elevated {
  box-shadow: none;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 60px;
  width: 82px;
  flex: 1 1;
}
input[required] {
  border-color: red;
}
.third--text {
  font-size: 15px;
}
</style>