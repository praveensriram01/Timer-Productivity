import { useState } from 'react'
import './App.css'
import Settings from './components/Settings'
import Timer from './components/Timer'
import SettingsContext from './components/SettingsContext'

function App() {

  const [showSetting, setShowSetting] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  

  return (
    <>
      <SettingsContext.Provider value={{
        showSetting,
        setShowSetting,
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes
      }}>
        {showSetting ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </>
  )
}

export default App
