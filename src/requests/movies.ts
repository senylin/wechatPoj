import { request } from './index'

export const getCities = (params: any, options?: any) => {
  return request('GET', 'https://www.easy-mock.com/mock/5ba0a7f92e49497b37162e32/example_copy/cities_copy_1541385673090', params, options)
}

export const getMovieInfo = (params: any, options?: any) => {
  return request('GET', 'https://m.maoyan.com/ajax/movieOnInfoList?token=', params, options)
}

export const getMoreMovie = (params: any, options?: any) => {
  return request('GET', 'https://m.maoyan.com/ajax/moreComingList', params, options)
}