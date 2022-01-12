import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/assets/App.less'
import Login from '@/pages/user/login'
import NotFound from '@/pages/404'
import Layout from '@/Layout/BaseLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
