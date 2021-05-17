import React, { useState } from 'react'
import { SettingsExample } from '../components/pages/SettingsExample'
import { Settings } from '../types/settings'

export const SettingsScreen = () => {
  const [sendNotification, setEnableSendNotification] =
    useState<Settings['enableSendNotification']>(true)
  const [otokunaJouhou, setEnableOtokunaJouhou] =
    useState<Settings['otokunaJouhou']>(true)
  const [intervalNotify, setIntervalNotify] =
    useState<Settings['intervalNotify']>('hour')

  const changeEnableNotification = () => {
    setEnableSendNotification(!sendNotification)
  }
  const changeEnableOtokunaJouhou = () => {
    setEnableOtokunaJouhou(!otokunaJouhou)
  }
  const changeIntervalNotify = (time: Settings['intervalNotify']) => {
    setIntervalNotify(time)
  }

  return (
    <SettingsExample
      isEnabledSendNotification={sendNotification}
      isEnabledOtokunaJouhou={otokunaJouhou}
      intervalNotify={intervalNotify}
      handleChangeEnableNotification={changeEnableNotification}
      handleChangeEnableOtokunaJouhou={changeEnableOtokunaJouhou}
      handleChangeIntervalNotify={changeIntervalNotify}
    />
  )
}
