import Mock from 'mockjs'
import { PROXY_URL } from '@/config/global'
function newData () {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: Mock.mock('@id'),
      'name': Mock.mock('@cname'),
      'title': i < 5 ? Mock.Random.title(3, 5) : Mock.Random.ctitle(),
      'date': Mock.mock('@date'),
      city: Mock.mock('@city'),
      mobile: Mock.mock('@integer(400000000, 40000000022)'),
      companyInfo: Mock.Random.sentence( 10, 20 ),
      moneyInfo: Mock.Random.sentence( 10, 20 ),
      jobInfo: Mock.Random.sentence( 10, 20 )
    })
  }
  return arr
}
Mock.mock(PROXY_URL + '/home', {
  'code': 0,
  'message': Mock.Random.ctitle(),
  'data': newData()
})