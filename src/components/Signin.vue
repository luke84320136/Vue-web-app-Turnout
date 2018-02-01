<template>
  <div class="from-inline">
    <h3>登入</h3>
    <div class="form-group">
      <input type="text" placeholder="E-mail" class="form-control" v-model="email" />
      <input type="password" placeholder="密碼" class="form-control" v-model="password" />
      <button class="btn btn-primary" @click="signIn">登入</button>
    </div>
    <br>
    <router-link to="/signup">註冊會員了嗎？來註冊吧！</router-link>
    <br>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp'

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>