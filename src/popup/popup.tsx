import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import TimerDisplay from './TimerDisplay'
import TimerButton from './TimerButton'
import SettingsButton from './SettingsButton'

const FOCUS_TIME_MINUTES = 25 * 60 * 1000

const App: React.FC<{}> = () => {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)

  const startTimer = () => {
    if (timerCount == 0) setTimerCount(FOCUS_TIME_MINUTES)
    setIsTimerRunning(true)
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000)
    setTimerInterval(id)
  }

  const stopTimer = () => {
    if (timerInterval != null) clearInterval(timerInterval)
    setIsTimerRunning(false)
  }

  useEffect(() => {
    if (timerCount == 0) {
      stopTimer()
    }
  }, [timerCount])

  return (
    <main>
      <div className="popup-clock" style={{ marginTop: '20px' }}>
        <CircularProgressbarWithChildren
          value={timerCount / 1000}
          maxValue={FOCUS_TIME_MINUTES / 1000}
          minValue={0}
        >
          <img style={{ width: 100 }} src="images/goose1.png" alt="mr goose" />
          <TimerDisplay
            timerDate={new Date(timerCount)}
            isTimerRunning={isTimerRunning}
          />
        </CircularProgressbarWithChildren>
      </div>
      <h1>Mr. Goose is Watching...</h1>
      <div style={{ marginTop: '20px' }}>
        <TimerButton
          isTimerRunning={isTimerRunning}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton />
      </div>
    </main>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
