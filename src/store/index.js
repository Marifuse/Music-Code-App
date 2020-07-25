import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-music-133bf.cloudfunctions.net/courses'

function emptyCourse()  {
  return{
    id: null, data: { title: '', img: '', description: '', examples: { title: '', mp3: '', description: '' } }
  }             
}

export default new Vuex.Store({
  state: {
    currentUser: null,
    courses: [],
    currentCourse: emptyCourse(),
    loading: false,
  },
  mutations: {
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    DISPLAY_COURSE_FORM(state) { state.showForm = true },
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    SET_EMPTY_COURSE(state) {
      state.currentCourse.id = null
      const base = emptyCourse()
      Object.keys(base.data).forEach(key => {
        state.currentCourse.data[key] = base.data[key]
      })
    },
    SET_COURSES(state, data){state.courses = data},
    UPDATE_TITLE(state, title) { state.currentCourse.data.title = title },
    UPDATE_IMG(state, img) { state.currentCourse.data.img = img },
    UPDATE_DESCRIPTION(state, description) { state.currentCourse.data.description = description },
    SET_CURRENT_COURSE(state, course) {state.currentCourse = course },
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    setCourses({commit}) {
      commit('SET_LOADING')
      axios.get(`${baseUrl}/courses`)
      .then(response => {
        commit('SET_COURSES', response.data)
        commit('SET_EMPTY_COURSE')
      }).finally(() => {
        commit('UNSET_LOADING')
      }) 
    },
    displayCourseForm({commit}) { commit('DISPLAY_COURSE_FORM') },
    cancelForm({commit}) { 
      commit('HIDE_COURSE_FORM')
      commit('SET_EMPTY_COURSE') 
    },
    updateTitle({commit}, title) { commit('UPDATE_TITLE', title) },
    updateImg({commit}, img) { commit('UPDATE_IMG', img) },
    updateDescription({commit}, description) { commit('UPDATE_DESCRIPTION', description) },
    postCourse({state, dispatch}) {
      axios.post(`${baseUrl}/course`, state.currentCourse.data)
      .then(() => {
        dispatch('setCourses')
      })
    },
    updateCourse({dispatch, state}, id) {
      axios.put(`${baseUrl}/course/${id}`, state.currentCourse.data)
      .then(() => {
        dispatch('setCourses')
      })
    },
    deleteCourse({dispatch}, id) {
      axios.delete(`${baseUrl}/course/${id}`)
      .then(() => {
        dispatch('setCourses')
      })
    },
    setCurrentCourse({commit, getters}, id) {
      // Vamos a buscar el producto en la API
      // buscar si tenemos el producto en la lista actual
      let targetCourse = getters.searchProductById(id)
      if (targetCourse) {
        // si se encuentra, actualizar con esos datos
        commit('SET_CURRENT_COURSE', targetCourse)
      } else {
        // Si no, llamar al axios
        axios.get(`${baseUrl}/course/${id}`)
        .then((response) => {
          commit('SET_CURRENT_COURSE', response.data)
          })
        }  
      },
    },
    getters: {
      searchProductById: (state) => (id) => {
        return state.courses.find((course) => {
          return course.id == id
        })
      }
    }
  })  
    // setCurrentCourse({commit}, id) {
    //   axios.get(`${baseUrl}/course/${id}`)
    //   .then((response) => {
    //     commit('SET_CURRENT_COURSE', response.data)
    //   })
    // }