import Vue from 'vue'
import App from 'App.vue'

new Vue({
el: '#app',
    methods: {
    handleClick () {
    alert('Hello!')
    }
  },
  render (h) {
    return (
      <div>
        <h1 on-click={this.handleClick}>Hello from JSX</h1>
        <p> Hello World </p>
      </div>
  )
  }
})
