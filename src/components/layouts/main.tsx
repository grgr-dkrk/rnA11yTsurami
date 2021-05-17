import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const MainLayout: React.FC = props => {
  return <SafeAreaView>{props.children}</SafeAreaView>
}
