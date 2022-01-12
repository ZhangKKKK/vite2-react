import { getHomeListApi } from "@/api"
export default function Home () {
  getHomeListApi().then(res => {
    console.log(res)
  })
  return (
    <div>Home</div>
  )
}