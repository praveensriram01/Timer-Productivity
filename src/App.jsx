import { useState } from 'react'
import './App.css'
import Settings from './components/Settings'
import Timer from './components/Timer'

function App() {

  const [showSetting, setShowSetting] = useState(false)

  return (
    <>
      {showSetting ? <Settings /> : <Timer />}

    </>
  )
}

export default App
