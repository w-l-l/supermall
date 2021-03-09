import { request } from './request'

// 获取详情数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: { iid }
  })
}
