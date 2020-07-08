import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-music-133bf.cloudfunctions.net/courses'

function emptyCourse()  {
  return{
    id: null, data: { name: '', img: '', description:'', examples: { title: '', mp3: '', description: '' } }
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
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    SET_EMPTY_COURSE(state) {
      state.currentCourse.id = null
      const base = emptyCourse()
      Object.keys(base.data).forEach(key => {
        state.currentCourse.data[key] = base.data[key]
      })
    },
    GET_COURSES(state, data){state.courses = data},
    //CREATE_COURSE(state, data){state.currentCourse = data}
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    getCourses({commit}) {
      axios.get(`${baseUrl}/courses`, {
        headers: {
          "Content-type": "text/plain"
        }
      })
      .then(response => {
        commit('GET_COURSES', response.data)
        console.log(response.data)
      })
    },
    postCourse({state, dispatch, commit}){
      axios.post(`${baseUrl}/product`, state.currentCourse.data)
      .then(() => {
        commit('SET_EMPTY_COURSE')
        dispatch('getCourses')
      })
    }
  },
  modules: {
  }
})
