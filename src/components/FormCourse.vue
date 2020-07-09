<template>
  <div class="text-center mt-5">
    <v-card class="pa-5 light-blue lighten-5 mb-15">
      <h1 class="text-center mb-5">Ingrese un Nuevo Curso Aquí</h1>
        <v-text-field label="Nombre del Curso" type="text" :value="currentCourse.data.title" @input="updateTitle" outlined color="indigo darken-4"/>
        <v-text-field label="URL de la Imagen" type="text" :value="currentCourse.data.img" @input="updateImg" outlined color="indigo darken-4"/>
        <v-text-field label="Descripción" :value="currentCourse.data.description" @input="updateDescription" outlined color="indigo darken-4"/>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="indigo darken-1" dark @click="submitForm">{{ !!currentCourse.id ? 'Actualizar' : 'Crear' }}</v-btn>
        <v-btn color="pink darken-1" dark @click="cancelForm">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['updateTitle', 'updateImg', 'updateDescription', 'postCourse', 'updateCourse', 'cancelForm']),
    submitForm() {
      if (this.currentCourse.id) {
        //Si tiene id se llama a la funcion que actualiza los datos
        this.updateCourse(this.currentCourse.id)
      } else {
        this.postCourse()
      }
    }
  },
  computed: {
    ...mapState(['currentCourse']),
  }
}
</script>

<style>

</style>