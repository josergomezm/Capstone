export const AUTH_CONFIG = {
    domain: 'capstone-summer-2018.auth0.com',
    clientID: '6hy7cYJ07VYP089glKl71xxe5DWHO290',
    redirectUri: `http://${window.location.hostname}:8080/callback`,
    audience: 'https://capstone-summer-2018.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
}
