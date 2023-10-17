import { useState } from 'react'
import { TopBar } from './components/topBar'
import { Sidebar } from './components/sidebar/sidebar'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <TopBar/>
      <div className=''>
        <Sidebar/>
        <div></div>
      </div>
    </div>
  )
}

export default App
