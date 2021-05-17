import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './src/screens/Home'
import { enableScreens } from 'react-native-screens'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { SearchScreen } from './src/screens/Search'
import { ListScreen } from './src/screens/List'
import { SettingsScreen } from './src/screens/Settings'
import { SafeAreaProvider } from 'react-native-safe-area-context'

enableScreens()

LogBox.ignoreAllLogs()

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="ホーム"
            component={HomeScreen}
            options={{
              tabBarAccessibilityLabel: 'ホーム画面',
              tabBarIcon: props => (
                <Icon
                  name="home"
                  color={props.focused ? '#000' : '#ccc'}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="検索"
            component={SearchScreen}
            options={{
              tabBarAccessibilityLabel: '検索する',
              tabBarIcon: props => (
                <Icon
                  name="search"
                  color={props.focused ? '#000' : '#ccc'}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="リスト"
            component={ListScreen}
            options={{
              tabBarAccessibilityLabel: '何らかのリスト',
              tabBarIcon: props => (
                <Icon
                  name="list"
                  color={props.focused ? '#000' : '#ccc'}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="設定"
            component={SettingsScreen}
            options={{
              tabBarAccessibilityLabel: '設定',
              tabBarIcon: props => (
                <Icon
                  name="settings"
                  color={props.focused ? '#000' : '#ccc'}
                  size={28}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
