import { getHomeListApi } from "@/api"
import { useEffect } from 'react'
export default function Home () {
  const getListFn = () => {
    getHomeListApi().then(res => {
      console.log(res)
    })
  }
  useEffect(() => getListFn)
  return (
    <div>Home</div>
  )
}