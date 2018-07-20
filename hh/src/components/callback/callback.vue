<template>
  <div class="spinner">
    <img src="./assets/loading.svg" alt="loading"/>
  </div>
</template>

<script>
import AuthService from '../../auth/AuthService'

export default {
    name: 'callback',
    props: ['auth'],
    data () {
      const auth = new AuthService()
      const { handleAuthentication } = auth
      auth.handleAuthentication()
      
      return {}
    }
  }
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>