<template lang="pug">
v-container
  v-dialog(
    v-model="dialog",
    max-width="500px",
    @click:outside="close",
    @keydown.esc="close"
  )
    v-form(@submit="editDeveloper", v-model="isValid")
      v-card
        v-card-title
          span.text-h5 {{ formTitle }}
        v-card-text
          v-container
            v-row
              v-col(cols="12")
                strong ID {{ developer.id }}
              v-col(cols="12", sm="6")
                v-text-field(
                  label="Nome*",
                  required="",
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']",
                  v-model="developer.name"
                )
              v-col(cols="12", sm="6", md="4")
                label= 'Sexo*'
                v-radio-group(
                  v-model="developer.gender",
                  row="",
                  required="",
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']"
                )
                  v-radio(value="F")
                    template(v-slot:label="")
                      strong.third--text Feminino
                  v-radio(value="M")
                    template(v-slot:label="")
                      strong.third--text Masculino

              v-col(cols="12", sm="6")
                v-menu(
                  v-model="menu",
                  :close-on-content-click="false",
                  :nudge-right="40",
                  transition="scale-transition",
                  required="",
                  offset-y="",
                  max-width="290px",
                  min-width="290px"
                )
                  template(v-slot:activator="{ on }")
                    v-text-field(
                      v-model="developer.birthdate",
                      label="Data da Nascimento*",
                      hint="formato de data em YYYY-MM-DD",
                      persistent-hint="",
                      readonly="",
                      v-on="on"
                    )
                  v-date-picker(
                    min="1900-01-01",
                    :max="today",
                    locale="pt-br",
                    v-model="developer.birthdate",
                    no-title="",
                    @input="menu = false"
                  )

              v-col(cols="12")
                v-text-field(
                  label="Hobby*",
                  :rules="[(v) => !!v || 'Preenchimento obrigatório']",
                  required="",
                  v-model="developer.hobby"
                )
          small * indica campos obrigatórios
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1", text="", @click="close")
            | Cancelar
          v-btn(
            color="blue darken-1",
            text="",
            type="submit",
            @submit="editDeveloper",
            :disabled="!isValid"
          )
            | Salvar
</template>

<script>
import Developer from "../services/DeveloperDataService";

export default {
  props: {
    dev: {
      type: Object,
      default: null,
    },
    dialog: {
      type: Boolean,
      required: true,
    },
    close: {
      required: true,
    },
  },
  data: () => ({
    today: new Date().toISOString().split("T")[0],
    developer: {
      id: null,
      name: "",
      gender: "",
      hobby: "",
      birthdate: "",
    },
    isValid: false,
    menu: false,
  }),

  computed: {
    formTitle() {
      if (this.dev) {
        return "Editar Desenvolvedor";
      }
      return "Criar Desenvolvedor";
    },
  },

  created() {
    if (this.dev) {
      this.developer.id = this.dev.id;
      this.developer.name = this.dev.name;
      this.developer.gender = this.dev.gender;
      this.developer.hobby = this.dev.hobby;
      this.developer.birthdate = this.dev.birthdate;
    }
  },

  methods: {
    async editDeveloper() {
      try {
        if (this.developer.id) {
          await Developer.edit(this.developer.id, this.developer).then(() => {
            this.$toaster.success("Desenvolvedor editado com sucesso.", {
              timeout: 8000,
            });
            this.close();
          });
        }

        await Developer.store(this.developer).then((response) => {
          this.$toaster.success("Desenvolvedor cadastrado com sucesso.", {
            timeout: 8000,
          });
          this.close();
        });
      } catch (error) {
        this.$toaster.error(
          `Algo não correu bem, entre em contato com o suporte e informe o erro: ${error}`,
          {
            timeout: 8000,
          }
        );
      }
    },
  },
};
</script>

,<style scoped>
.third--text {
  font-size: 15px;
}
</style>



