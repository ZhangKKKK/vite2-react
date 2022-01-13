import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { NOT_FOUND_ROUTES, LOGIN_ROUTES, dynamicRoutes } from '@/router/index'
import { useEffect, useState } from 'react'
import store from '@/redux'
import Layout from '@/Layout/BaseLayout'
import Login from '@/pages/user/login'
import FormBasic from '@/pages/form/basic'
import FormHeight from '@/pages/form/height'
import NotFound from '@/pages/404'

const routes = LOGIN_ROUTES.concat(dynamicRoutes).concat(NOT_FOUND_ROUTES)

function RouterConfig() {
  console.log(store.getState())
  const isLogin = !!store.getState().token
  console.log('登录？', isLogin)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<FormBasic/>}></Route>
          <Route path='form/basic' element={<FormBasic/>}></Route>
          <Route path='/form/height' element={<FormHeight/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

function Main () {
  const isLogin = !!store.getState().token
  return isLogin ? <FormBasic/> : <Navigate to='/login'/>
}

export default RouterConfig
