import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Props = {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = (props: Props) => {
  return (
    <Text
      accessibilityRole="header"
      style={
        props.level === 1
          ? styles.level1
          : props.level === 2
          ? styles.level2
          : styles.levelOthers
      }>
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  level1: {
    fontSize: 32,
  },
  level2: {
    fontSize: 24,
  },
  levelOthers: {
    fontSize: 20,
  },
})
