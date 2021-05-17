import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Settings } from '../../types/settings'
import { Heading } from '../atoms/Heading'
import { SettingWithRadio } from '../molecules/SettingWithRadio'

import { SettingWithSwitch } from '../molecules/SettingWithSwitch'

type Props = {
  isEnabledSendNotification: Settings['enableSendNotification']
  isEnabledOtokunaJouhou: Settings['otokunaJouhou']
  intervalNotify: Settings['intervalNotify']
  handleChangeEnableNotification: () => void
  handleChangeEnableOtokunaJouhou: () => void
  handleChangeIntervalNotify: (time: Settings['intervalNotify']) => void
}

export const SettingsExample = (props: Props) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Heading text="共通の設定" level={2} />
        <View style={styles.itemWrapper}>
          <SettingWithSwitch
            isActive={props.isEnabledSendNotification}
            name="プッシュ通知を有効にする。"
            description="デフォルトはオンです"
            accessibilityLabel="プッシュ通知を有効にする。"
            accessibilityHint="デフォルトはオンです"
            onPress={props.handleChangeEnableNotification}
          />
        </View>
        <View style={styles.itemWrapper}>
          <SettingWithSwitch
            isActive={props.isEnabledOtokunaJouhou}
            name="お得な情報を毎秒配信する"
            description={
              'あなたにとってお得な情報が毎秒配信されます。無効にすることもできますが、お得な情報が毎日流れてこないし、何もいいことがありません。有効にすることを強く推奨します。'
            }
            accessibilityLabel="お得な情報を毎秒配信する。"
            accessibilityHint="無効にするとお得な情報が流れてこないので、何もいいことがありません。"
            onPress={props.handleChangeEnableOtokunaJouhou}
          />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Heading text="通知の頻度" level={2} />
        <View accessibilityRole="radiogroup">
          <View style={styles.itemWrapper}>
            <SettingWithRadio
              isActive={props.intervalNotify === 'hour'}
              name="1時間"
              onPress={() => props.handleChangeIntervalNotify('hour')}
            />
          </View>
          <View style={styles.itemWrapper}>
            <SettingWithRadio
              isActive={props.intervalNotify === 'minute'}
              name="1分"
              onPress={() => props.handleChangeIntervalNotify('minute')}
            />
          </View>
          <View style={styles.itemWrapper}>
            <SettingWithRadio
              isActive={props.intervalNotify === 'seconds'}
              name="1秒"
              onPress={() => props.handleChangeIntervalNotify('seconds')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
  },
  itemWrapper: {
    marginTop: 24,
  },
})
