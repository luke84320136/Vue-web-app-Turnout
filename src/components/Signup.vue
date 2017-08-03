<template>
  <div class="from-inline">
    <h3>註冊</h3>
    <div class="form-group">
      <input
      type="text"
      placeholder="E-mail"
      class="form-control"
      v-model="email"
      />
      <input type="password"
      placeholder="密碼"
      class="form-control"
      v-model="password"
      />
      <button class="btn btn-primary" @click="signUp">註冊</button>
    </div>
    <br>
    <router-link to="/signin">是會員了嗎？登入吧！</router-link>
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
      signUp() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
      }
    }
  }
</script>
