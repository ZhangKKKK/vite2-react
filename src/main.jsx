import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/index.css'
import RouterConfig from '@/router/routerConfigTest'
import './mock'

ReactDOM.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById('root')
)
