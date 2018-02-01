<template>
  <div class="">
    <h4>增加記事
      <input type="checkbox" v-model="showForm">
    </h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>標題</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label>詳細記事</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label>日期</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label>地點</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">完成</button>
    </div>
  </div>


</template>

<script>
  import { eventsRef } from '../firebaseApp'

  export default {
    data() {
      return {
        event: {
          title: '',
          description: '',
          date: '',
          location: '',
          email: ''
        },
        showForm: false
      }
    },

    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email
        eventsRef.push(this.event)
      }
    }
  }
</script>