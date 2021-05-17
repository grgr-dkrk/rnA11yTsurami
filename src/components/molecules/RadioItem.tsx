import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from '../atoms/RadioButton'

type Props = {
  label: string
  isActive: boolean
}

export const RadioItem = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <RadioButton isActive={props.isActive} />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center' },
  label: { marginLeft: 8 },
})
