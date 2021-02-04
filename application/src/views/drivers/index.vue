<template>
  <div class="component">
    <div class="loading-state" v-if="!dataLoaded">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <p class="font-weight-regular">Loading drivers</p>
    </div>

    <div class="container--fluid">
        <v-text-field label="Search" outlined v-model="search"></v-text-field>
      <v-slider
        v-model="fontSize"
        thumb-label
        label="Font Size"
        max="30"
        min="14"
      ></v-slider>

      <h1>Drivers</h1>
      <v-list flat>
        <template v-for="driver in filteredList">
          <router-link
            :key="driver.id"
            :to="{ name: 'driver-details', params: { id: driver.id } }"
          >
            <v-list-item class="list-item" :key="driver.id">
              <avatar-name v-bind:driver="driver"></avatar-name>

              <v-list-item-content>
                <v-list-item-title
                  v-html="driver.first_name"
                  v-bind:style="{ fontSize: fontSize + 'px' }"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script type="text/babel">
import DriversService from "@/services/drivers";

export default {
  name: "views-orders-index",
  watch: {},
  props: {},
  data() {
    return {
      result: [],
      dataLoaded: false,
      fontSize: 15,
      search: ""
    };
  },
  methods: {
    getDrivers() {
      return DriversService.getDrivers().then((result) => {
        this.result = result;
        this.dataLoaded = true;
        this.$store.commit("setDrivers", result);
      });
    },
  },
  computed: {
    filteredList() {
      return this.result.filter((driver) => {
        return driver.first_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  created() {},
  mounted() {
    this.getDrivers();
  },
  beforeDestroy() {},
  mixins: [],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 80px);

  p {
    margin-top: 8px;
  }
}

.list-item {
  margin-bottom: 15px;
}

.component {
  padding: 1rem;
}

a {
  text-decoration: none;
}

.v-input__slider {
    width: 400px;
}
</style>
