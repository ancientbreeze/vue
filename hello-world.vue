<style>
  .hello-world-compoment{
    color:#eeeeee;
    background-color:#555555;
  }
</style>
<template>
  <div class="hello-world-component">
    <p>{{message}}</p>
    <input @keyup.enter="changeName($event)"/>
  </div>
</template>

<script>
  export default {
    props: [ /* to pass any data from the parent here... */ ],
    events: {
      /* event listeners go here */ },
    ready() {
      this.name = "John";
    },
    data() {
      return {
        name: ''
      }
    },
    computed: {
      message() {
        return "Hello from " + this.name;
      }
    },
    methods: {
      // this could be easily achieved by using v-model on the <input> field, but just
      to show a method doing it this way.
      changeName(e) {
        this.name = e.target.value;
      }
    }
  }
</script>
