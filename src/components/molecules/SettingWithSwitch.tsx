import React from 'react'
import {
  StyleSheet,
  Switch,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native'
import { SettingsName } from '../atoms/SettingsName'

type Props = {
  name: string
  description?: string
  isActive: boolean
  onPress: () => void
  accessibilityLabel?: string
  accessibilityHint?: string
}

export const SettingWithSwitch = (props: Props) => {
  return (
    <TouchableWithoutFeedback
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: props.isActive,
      }}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityHint={props.accessibilityHint}
      onPress={props.onPress}
      style={styles.wrapper}>
      <View style={styles.wrapper}>
        <View style={styles.meta}>
          <SettingsName text={props.name} />
          {props.description ? <Text>{props.description}</Text> : null}
        </View>
        <View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={props.isActive}
            importantForAccessibility="no"
          />
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
