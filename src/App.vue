<template>
  <div>
    <v-app>
      <app-bar/>
      <router-view/>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    AppBar
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>
