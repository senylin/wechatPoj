import Taro from '@tarojs/taro'
import * as qs from 'qs';
import template from 'url-template';
export const request = (method: any, uri: string, params: any, options: any) => {
  let url: string = uri 
  url = template.parse(url).expand(params)
  url += method === 'GET' ? `?${qs.stringify(params)}` : ''
  let data: any = params
  if (params.headers['Content-type']==='application/x-www-form-urlencoded') {
    const formData = new FormData()
    Object.keys(params).forEach(key => {
      formData.append(key, params[key])
    })
    data = formData
  }
  return Taro.request({
    url,
    method: method.toUpperCase(),
    data,
    header: {
      "Content-Type": "application/json",
      "Cookie":`_lxsdk_cuid=164b6cae2cac8-02b7b032f571b5-39614706-1fa400-164b6cae2cbc8; v=3; iuuid=1A6E888B4A4B29B16FBA1299108DBE9CA19FF6972813B39CA13A8D9705187374; revrev=76338a29; _lx_utm=utm_source%3DBaidu%26utm_medium%3Dorganic; webp=true; __mta=3463951.1532075108184.1533098338076.1533118040602.20; _lxsdk=1A6E888B4A4B29B16FBA1299108DBE9CA19FF6972813B39CA13A8D9705187374; from=canary; selectci=true; __mta=3463951.1532075108184.1533118040602.1533118773295.21; _lxsdk_s=164f4f4c9e9-45e-d1b-46%7C%7C50; ci=${params.cityId}`,
      ...options.headers
    }
  }).then((res: any)=> {
    if (res.statusCode === 200) {
      return res.data
    } else {
      return false;
    }
  }) 
}