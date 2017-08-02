<template>
  <div class="">
    <h3>事件儀表板</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">登出</button>
    {{$store.state}}
  </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp'

  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    }
  }
</script>
