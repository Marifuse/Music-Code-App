<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" md="8" class="mx-auto">
          <Form-Course/>
          <Course-Table/>
          <div class="text-center">
            <router-link to="/home">
              <v-btn rounded color="primary" dark>♪~Volver a Home~♪</v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FormCourse from '../components/FormCourse'
import CourseTable from '../components/CourseTable'
export default {
  components: {
    FormCourse,
    CourseTable,
  }
}
</script>

<style>

</style>