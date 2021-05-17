import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Props = {
  text: string
}

export const SettingsName = (props: Props) => {
  return <Text style={styles.text}>{props.text}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
})
