import React from 'react'
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from 'react-native'
import { ImageLink } from '../atoms/ImageLink'

export const KihonExample = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.section}>
        <Text style={styles.header} accessibilityRole="header">
          お得な情報1
        </Text>
        <Text>お得です。</Text>
        <Text>
          リンクは{' '}
          <Text
            accessibilityRole="link"
            onPress={() => Linking.openURL('https://example.com/')}>
            こちら
          </Text>
        </Text>
        <Image
          accessible
          accessibilityRole="image"
          accessibilityLabel="お得"
          source={require('../../assets/images/otoku.png')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.header} accessibilityRole="header">
          お得な情報2
        </Text>
        <Text>お得です。</Text>
        <View style={styles.link}>
          <Text>リンクは </Text>
          <TouchableWithoutFeedback
            accessibilityRole="link"
            onPress={() => Linking.openURL('https://example.com/')}>
            <Text>https://example.com/</Text>
          </TouchableWithoutFeedback>
        </View>
        <Image
          accessible
          accessibilityRole="image"
          source={require('../../assets/images/kaedama.png')}
          accessibilityLabel="替え玉無料"
        />
      </View>

      <View style={styles.section} accessible>
        <Text style={styles.header}>お得な情報3</Text>
        <Text>お得です。</Text>
        <Text>かなりお得です。</Text>
        <Image
          accessible
          accessibilityLabel="おトク"
          source={require('../../assets/images/otoku.png')}
        />
      </View>

      <View style={styles.section}>
        <TouchableWithoutFeedback
          accessibilityRole="link"
          accessibilityLabel="お得な情報4、お得です。大盛り無料"
          onPress={() => Linking.openURL('https://example.com/')}>
          <View>
            <Text style={styles.header} accessibilityRole="header">
              お得な情報4
            </Text>
            <Text>お得です。</Text>
            <Image
              resizeMode="contain"
              style={{ width: '100%', height: undefined, aspectRatio: 1 }}
              source={require('../../assets/images/oomori.png')}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text>{''}</Text>

      <ImageLink
        href="https://example.com/"
        imagePath={require('../../assets/images/yokuaru.png')}
        label="よくあるご質問"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    paddingTop: 0,
  },
  section: {
    marginTop: 24,
  },
  header: {
    borderBottomWidth: 1,
    fontSize: 24,
  },
  link: {
    flexDirection: 'row',
  },
})
