import request from '../utils/request'
import { env } from '../utils/auth'

export function login (data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo () {
  return request({
    url: `${env.api_url}details`,
    // url: '/vue-element-admin/user/info',
    method: 'post'
  })
}

export function logout () {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function fetchUserList (query) {
  return request({
    url: `${env.api_url}/users/`,
    method: 'get',
    params: query
  })
}

export function fetchDepartmentList (query) {
  return request({
    url: `${env.api_url}/departments/`,
    method: 'get',
    params: query
  })
}

export function updateUser (data) {
  return request({
    url: `${env.api_url}/users/${data.id}/`,
    method: 'put',
    data
  })
}

export function createUser (data) {
  return request({
    url: `${env.api_url}/users/`,
    method: 'post',
    data
  })
}
