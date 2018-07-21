import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'EventEmitter'
import Router from 'vue-router'
import decode from 'jwt-decode'
// import router from './../routes'


export default class AuthService {
  authenticated = this.isAuthenticated()
  admin = this.isAdmin()
  userProfile = null
  authNotifier = new EventEmitter()
  router = new Router()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.isAdmin = this.isAdmin.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    audience: AUTH_CONFIG.audience,
    responseType: AUTH_CONFIG.responseType,
    scope: AUTH_CONFIG.scope
  })

  login () {
    this.auth0.authorize()
    this.handleAuthentication()
    this.authenticated = this.isAuthenticated()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // this.router.replace('/locations')
        location.pathname = '/locations'
      } else if (err) {
        // this.router.replace('/loginPage')
        location.pathname = '/'
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // this.auth0.logout()
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    // this.router.push('/loginPage')
    location.pathname = '/'
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getRole () {
    const namespace = 'https://hopefullyhealing.com'
    const idToken = localStorage.getItem('id_token')
    if (idToken) {
      return decode(idToken)[`${namespace}/roles`][0] || null
    }
  }

  isAdmin () {
    return this.getRole() === 'admin'
    // return true
  }
}