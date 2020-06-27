<template>
  <div>
    <v-app>
      <app-bar/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
