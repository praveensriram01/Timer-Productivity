import React from 'react'
import ReactSlider from 'react-slider'
import './Slider.css'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'
import Backbtn from './Backbtn'

function Settings() {

  const context = useContext(SettingsContext)
  return (
    <>
        <div className='settings'>
            <label>Work: {context.workMinutes}:00</label>
            <ReactSlider className={'slider'} thumbClassName={'thumb'} trackClassName={'track'} value={context.workMinutes} min={1} max={120} onChange={newValue => context.setWorkMinutes(newValue)}/>

            <label>Break: {context.breakMinutes}:00</label>
            <ReactSlider className={'slider'} thumbClassName={'thumb'} trackClassName={'track'} value={context.breakMinutes} min={1} max={120} onChange={newValue => context.setBreakMinutes(newValue)}/>
            
            <Backbtn onClick={() => {context.setShowSetting(false)}}/>
        </div>
    </>
  )
}

export default Settings