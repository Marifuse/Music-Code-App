<template>
  <div class="home">
      <v-carousel
        cycle
        class="pt-8"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <div class="text-center">
        <h1>♪ Music ~ Code ♪</h1>
        <h4>♫♬ Los Mejores Cursos de Música, los encuentras AQUÍ ♫♬</h4>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/music-133bf.appspot.com/o/music-1.jpg?alt=media&token=3845b642-611f-41b0-9619-281fde3e873c',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/music-133bf.appspot.com/o/music-2.jpg?alt=media&token=e7f995da-d9bb-4c12-b708-d29ffc9fedd7',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/music-133bf.appspot.com/o/music-3.jpg?alt=media&token=7e0c13a9-aa5b-4b46-a66e-704f0045ad98',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/music-133bf.appspot.com/o/music-4.jpg?alt=media&token=b21df24e-347d-4f68-a170-78c5084ec186',
        },
      ],
    }
  },
  name: 'Home',
  components: {
    Footer
  },
}
</script>
