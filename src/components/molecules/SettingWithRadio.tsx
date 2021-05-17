import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { RadioButton } from '../atoms/RadioButton'
import { SettingsName } from '../atoms/SettingsName'

type Props = {
  name: string
  isActive: boolean
  onPress: () => void
  accessibilityHint?: string
}

export const SettingWithRadio = (props: Props) => {
  return (
    <TouchableWithoutFeedback
      accessibilityLabel={props.name}
      accessibilityHint={props.accessibilityHint}
      accessibilityRole="radio"
      accessibilityState={{
        selected: props.isActive,
      }}
      onPress={props.onPress}
      style={styles.wrapper}>
      <View style={styles.wrapper}>
        <View style={styles.meta}>
          <SettingsName text={props.name} />
        </View>
        <View>
          <RadioButton isActive={props.isActive} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  meta: {
    width: '80%',
  },
})
