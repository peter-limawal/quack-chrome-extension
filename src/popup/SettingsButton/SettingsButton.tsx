import React from 'react'
import './SettingsButton.css'
import Button from '@mui/material/Button'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

const SettingsButton: React.FC = () => {
  return (
    <Button variant="contained" startIcon={<SettingsRoundedIcon />}>
      Settings
    </Button>
  )
}

export default SettingsButton
