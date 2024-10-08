import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pausebtn from './Pausebtn';
import Playbtn from './Playbtn';
import Settings from './Settingsbtn';
import Reset from './Reset';
import { useContext, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';


function Timer() {
  
  const contextInfo = useContext(SettingsContext)
  const [isPaused, setIsPaused] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState("break")

  const isPausedRef = useRef(isPaused)
  const secondsLeftRef = useRef(secondsLeft)
  const modeRef = useRef(mode)

  const total = mode === 'work' ? contextInfo.workMinutes * 60 : contextInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / total) * 100;
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = Math.floor(secondsLeft % 60);
  if(seconds < 10) seconds = '0'+seconds


  function initTimer() {
    setSecondsLeft(contextInfo.workMinutes * 60)
  }

  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = nextMode === 'work' ? contextInfo.workMinutes * 60 : contextInfo.breakMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
    
  }

  function tick() {
    secondsLeftRef.current -=  1
    setSecondsLeft(secondsLeftRef.current)
  }

  useEffect(() => {
    
    initTimer();
    
    const interval = setInterval(() => {
      if(isPausedRef.current) {
        return
      };
      if(secondsLeftRef.current === 0) {
        return switchMode()
      };

      tick();

    }, 1000);

    return () => clearInterval(interval);
  }, [contextInfo])



  return (
    <>
    <div style={{ width: 300, height: 300 }}>
        <CircularProgressbar value={percentage} text={minutes+ ':' +seconds} styles={buildStyles({textColor:"#fff", pathColor: mode === 'work' ? "red" : "green", trailColor:"#fff"})} />
    </div>

    <div>
        {isPaused 
        ? <Playbtn onClick={() => {setIsPaused(false); isPausedRef.current = false}} /> 
        : <Pausebtn onClick={() => {setIsPaused(true); isPausedRef.current = true}} /> }
        
        <Settings onClick={() => {contextInfo.setShowSetting(true)}} />
    </div>
    </>
  
  )
}

export default Timer