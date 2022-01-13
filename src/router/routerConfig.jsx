import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { NOT_FOUND_ROUTES, LOGIN_ROUTES, dynamicRoutes } from '@/router/index'
import { useEffect, useState } from 'react'
import store from '@/redux'
import Layout from '@/Layout/BaseLayout'

const routes = dynamicRoutes.concat(NOT_FOUND_ROUTES)

function RouterConfig() {
  console.log(store.getState())
  const isLogin = !!store.getState().token
  console.log('登录？', isLogin)
  useEffect(() => {
    console.log('isLogin发生改变', isLogin)
  }, [isLogin])
  return (
    <Router>
      <Routes>
        <Route path='' element={<Outlet/>}>
          {
            isLogin ? 
              routes.map(item => {
                return <Route key={item.name} path={item.path} element={item.redirect ? <Navigate to={item.redirect} /> : <item.component />}>
                  {
                    item.children && item.children.map(child => {
                      return <Route key={child.name} path={child.path} element={<child.component />}></Route>
                    })
                  }
                </Route>
              })
              :
              LOGIN_ROUTES.map(item => {
                return <Route key={item.path} path={item.path} element={item.redirect ? <Navigate to={item.redirect} /> : <item.component />}></Route>
              })
          }
          {/* {
            routes.map(item => {
              if (isLogin) {
                return <Route key={item.name} path={item.path} element={item.redirect ? <Navigate to={item.redirect} /> : <item.component />}>
                  {
                    item.children && item.children.map(child => {
                      return <Route key={child.name} path={child.path} element={<child.component />}></Route>
                    })
                  }
                </Route>
              } else {
                return LOGIN_ROUTES.map(item => {
                  return <Route key={item.path} path={item.path} element={item.redirect ? <Navigate to={item.redirect} /> : <item.component />}></Route>
                })
              }
            })
          } */}
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterConfig
