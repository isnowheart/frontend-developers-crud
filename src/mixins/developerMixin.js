import Developer from "../services/DeveloperDataService";

export const developerMixin = {
  data() {
    return {
      developers: [],
      newdev: {
        name: null,
        gender: null,
        hobby: null,
        birthdate: null,
      },
      getdev: {
        id: null,
      },
      updatedev: {
        id: null,
        name: null,
        gender: null,
        hobby: null,
        birthdate: null,
      },
      dialog: false,
      dialogDelete: false,
    }
  },

  mounted() {
    this.indexDevelopers();
  },

  methods: {
    indexDevelopers() {
      Developer.index().then((response) => {
        this.developers = response.data;
      });
    },

    storeDeveloper() {
      Developer.store(this.newdev).then((response) => {
        this.newdev = {};
      })
      .catch((e) => {
        console.log(e);
      });
    },

    showDeveloper() {
      Developer.show(this.getdev.id).then((response) => {
        this.getdev = response.data;
      })
      .catch((e) => {
        console.log(e);
      })
    },
  }
}
    