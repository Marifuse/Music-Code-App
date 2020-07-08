<template>
  <v-container>
    <h1 class="text-center mt-5">Nuestros Cursos</h1>
    <v-row>
      <v-col v-for="course in courses" :key=course.id cols="12" lg="4" md="6">
        <v-card class="pa-2 mt-5">
          <v-img class="white--text align-end" height="200px" :src="course.data.img"></v-img>
        <v-card-text class="text--primary">
          <div><h1>{{ course.data.title }}</h1></div>
        </v-card-text>
        <v-card-text class="text--primary">
          <div>{{ course.data.description }}</div>
          <div class="text-center mt-3"><v-btn rounded color="primary" dark>Ejemplos</v-btn></div>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name:'CourseCard',
  methods:{
  ...mapActions(['getCourses'])
  },
  computed: {
  ...mapState(['courses']),
  },
  created() {
    this.$store.dispatch('getCourses')
  },
}
</script>

<style>

</style>