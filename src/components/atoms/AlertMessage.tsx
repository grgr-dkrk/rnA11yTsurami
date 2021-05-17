import React from 'react'
import { Text } from 'react-native'

type Props = {
  label: string
}

export const AlertMessage = (props: Props) => {
  return <Text accessibilityLiveRegion={'polite'}>{props.label}</Text>
}
