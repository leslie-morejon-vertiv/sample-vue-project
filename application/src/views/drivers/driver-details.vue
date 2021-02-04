<template>
  <div class="component" v-if="driver && driver.id">
    <h2>User details</h2>
    <h4>{{driver.id}} - {{driver.first_name}} {{driver.last_name}}</h4>
  </div>
  <div class="component" v-else>
    <h2>No driver found</h2>
  </div>
</template>

<script type="text/babel">

export default {
  name: "driver-details",
  watch: {},
  props: {
  },
  data() {
    return {
      driver: undefined,
      dataLoaded: false
    };
  },
  methods: {
    getDriverDetails() {
      this.driver = this.$store.getters.getDriverById(this.$route.params.id);
    }
  },
  computed: {
  },
  created() {},
  mounted() {
    this.getDriverDetails();
  },
  beforeDestroy() {},
  mixins: [],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.component {
    padding: 1rem;
}
</style>
