<template>
  <div>
    <v-app-bar
      app
      color="indigo darken-4"
      dark
    >

      <v-toolbar-title>♪ Music ~ Code ♪</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        text
        to="/admin"
      >
        <span>Admin~♪</span> 
      </v-btn>
      <v-btn
        text
        @click="logout"
      >
        <span class="mr-2">{{ !!currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
}
</script>

<style>

</style>