<template>
  <div class="avatar-container">
    <v-avatar color="teal" size="62">
      <span class="white--text headline">{{ buildAvatarLetters() }}</span>
    </v-avatar>
  </div>
</template>

<script type="text/babel">
export default {
  name: "avatar-name",
  watch: {},
  props: ["driver"],
  data() {
    return {
      result: undefined,
      dataLoaded: false,
    };
  },
  methods: {
    buildAvatarLetters() {
      return `${this.driver.first_name[0]}${this.driver.last_name[0]}`;
    },
  },
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  mixins: [],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.avatar-container {
    margin-right: 8px;
}

a:hover, a:visited, a:link, a:active
{
    text-decoration: none !important;
}
</style>