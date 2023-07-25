export default {
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
  },
  created() {
    console.log("create");
  },
  updated() {
    console.log("update");
  },
  mounted() {
    console.log("mounted");
  },
};
