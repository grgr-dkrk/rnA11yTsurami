import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  isActive: boolean
}

export const RadioButton = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      {props.isActive ? <View style={styles.mark} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
  },
  mark: {
    backgroundColor: 'green',
    borderRadius: 50,
    width: 8,
    height: 8,
  },
})
