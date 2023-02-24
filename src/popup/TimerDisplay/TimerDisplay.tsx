import React from 'react'
import './TimerDisplay.css'

type Props = {
  timerDate: Date
  isTimerRunning: boolean
}

const TimerDisplay: React.FC<Props> = ({ timerDate, isTimerRunning }) => {
  return (
    <div className="timerdisplay-clock">
      {timerDate.getMinutes().toString().padStart(2, '0')}:
      {timerDate.getSeconds().toString().padStart(2, '0')}
    </div>
  )
}

export default TimerDisplay
