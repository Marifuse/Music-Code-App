<template>
  <div>              
    <h2 class="text-center">Inventario de Cursos</h2>
    <v-simple-table fixed-header class="pa-5 d-flex justify-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Imagen</th>
            <th class="text-left">Descripción</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in courses" :key="c.id">
            <td>{{ c.data.title }}</td>
            <td><img :src="c.data.img" class="img-table"></td>
            <td>{{ c.data.description }}</td>
            <td class="d-flex mt-4">
              <v-btn color="indigo darken-1" fab small dark @click="editCourse(c.id)"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn class='mx-2' color="pink darken-1" fab small dark @click="removeCourse(c.id)"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>      
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([ 'setCourses', 'deleteCourse', 'setCurrentCourse']),
    removeCourse(id) {
      let confirmation = confirm("¿Estás seguro de querer BORRAR el Curso?")
      if (confirmation) {
        this.deleteCourse(id)
        alert("Curso Eliminado Exitosamente")
      }  
    },
    editCourse(id) {
      this.setCurrentCourse(id)
    }
  },
  computed: {
    ...mapState(['courses'])
  },
  created() {
    this.setCourses()
  }
}
</script>

<style>
.img-table {
  width: 5em;
}
</style>