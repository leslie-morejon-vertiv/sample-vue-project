import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from './modules/hello-world'

Vue.use(Vuex);

const getters = {
    getDriverById: (state) => (id) => {
        var savedDrivers = JSON.parse(localStorage.getItem('drivers'));
        var temp;
        if (savedDrivers !== null) {
            state.drivers = savedDrivers;
        }
        var temp = state.drivers.find(driver => driver.id.toString() === id.toString());
        return temp;
    }
};

const actions = {};

export default new Vuex.Store({
    state: {
        drivers: []
    },
    mutations: {
        setDrivers(state, payload) {
            state.drivers = payload;
            localStorage.setItem('drivers', JSON.stringify(state.drivers));
        }
    },
    actions: actions,
    getters: getters,
    modules: {
        HelloWorld
    }
})
