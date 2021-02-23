import { from } from "core-js/fn/array";
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
