import { axios } from './request'
import { PROXY_URL } from '@/config/global'
export const getHomeListApi = params => {
  return axios({
    url: PROXY_URL + '/home',
    method: 'post',
    data: params
  })
}