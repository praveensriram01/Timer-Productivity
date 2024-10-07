import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pausebtn from './Pausebtn';
import Playbtn from './Playbtn';
import Settings from './Settingsbtn';
import Reset from './Reset';


function Timer() {

    const percentage = 66;

  return (
    <>
    <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({textColor:"#fff", pathColor:"green", trailColor:"#fff"})} />
    </div>

    <div>
        <Playbtn />
        <Pausebtn />
        <Reset />
        <Settings />
    </div>
    </>
  
  )
}

export default Timer