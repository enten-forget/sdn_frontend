<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <AppLogo />
      <v-flex xs12>
        <AppDescription />
      </v-flex>
      <v-flex xs12>
        <BindingsList />
      </v-flex>
      <v-flex xs12>
        <PlaceholderHowTo />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BindingsList from "./components/BindingsList";
import AppDescription from "../../components/AppDescription";
import AppLogo from "../../components/AppLogo";
import PlaceholderHowTo from "./components/PlaceholderHowTo";

export default {
  name: "HomePage",
  components: { BindingsList, AppDescription, AppLogo, PlaceholderHowTo },
};
</script>
