<template>
  <div>
    <v-app>
      <app-bar/>
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" md="8"  class="mx-auto">
          <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          </v-col>
        </v-row>
      </v-container>
      <router-view/>
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
