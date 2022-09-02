import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import store from "./store";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBN_Xp-EDhMj_SmTAppedBb4o4KFd6uj5E",
    libraries: "geometry,drawing,places",
  },
});

const apolloClient = new ApolloClient({
  // uri: "http://localhost:9000/",
  // uri: "https://truckstop-project-app.herokuapp.com/graphql",
  url: "/graphql",
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  store,
  el: "#app",
  apolloProvider,
  apollo: {},
  render: (h) => h(App),
}).$mount("#app");
