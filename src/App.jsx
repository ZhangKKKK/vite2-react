import { useState } from 'react'
import '@/assets/App.less'
import Home from '@/pages/home'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <Home/>
      </header>
    </div>
  )
}

export default App
