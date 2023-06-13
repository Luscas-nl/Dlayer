import { useState } from 'react'
import AppRoutes from './routes/routes'
import SideBar from './components/SideBar/Index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
      <AppRoutes />
    </div>
  )
}

export default App
