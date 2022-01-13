import { useNavigate } from "react-router-dom"
import { Button } from 'antd';
export default function Basic () {
  const nav = useNavigate()
  const goHeight = () => {
    nav('/form/height')
  }
  return (
    <div>
      basic form
      <Button onClick={goHeight}>跳转去高级</Button>
    </div>
  )
}