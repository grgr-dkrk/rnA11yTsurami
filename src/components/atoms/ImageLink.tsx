import React from 'react'
import {
  TouchableWithoutFeedback,
  Linking,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native'

type Props = {
  label: string
  href: string
  imagePath: ImageSourcePropType
}

export const ImageLink = (props: Props) => {
  return (
    <TouchableWithoutFeedback
      accessible
      accessibilityRole="link"
      accessibilityLabel={props.label}
      onAccessibilityAction={() => Linking.openURL(props.href)}
      onPress={() => Linking.openURL(props.href)}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={props.imagePath}
      />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
})
