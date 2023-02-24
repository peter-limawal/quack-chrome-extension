import React from 'react'
import './TimerButton.css'
import Button from '@mui/material/Button'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded'
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded'

type Props = {
  isTimerRunning: boolean
  startTimer: () => void
  stopTimer: () => void
}

const TimerButton: React.FC<Props> = ({
  isTimerRunning,
  startTimer,
  stopTimer,
}) => {
  return (
    <Button
      variant="contained"
      onClick={isTimerRunning ? stopTimer : startTimer}
      startIcon={
        isTimerRunning ? <PauseCircleRoundedIcon /> : <PlayCircleRoundedIcon />
      }
    >
      {isTimerRunning ? 'Pause' : 'Start'}
    </Button>
  )
}

export default TimerButton
