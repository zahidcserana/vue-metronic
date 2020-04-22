import $ from 'jquery'

// import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

export const env = {
  production: false,
  api_url: 'http://127.0.0.1:8000/api/',
  // api_url: 'http://127.0.0.1:8000/api/',
  protocal: 'http://',
  storeHoshName: 'localhost:8080',
  patnerHoshName: 'localhost:8080',
  partner: 'localhost'
}

export class Helpers {
  static setLoading (enable) {
    const body = $('body')
    if (enable) {
      $(body).attr('class', 'm--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default')
      // $(body).addClass('m--skin- m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas')
    } else {
      $(body).attr('class', 'm-page--fluid m-page--loading-enabled m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default')
    }
  }
}
