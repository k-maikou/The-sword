import {request} from './request';

export function getProfileLogin() {
  return request({
    url: "/svgcaptcha",
    method: 'get'
  })
}
