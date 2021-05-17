import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Item } from '../../types/Item'

type Props = Item

export const SearchResultItem = (props: Props) => {
  return (
    <View style={styles.itemWrapper} accessible>
      <Text>{props.title} </Text>
      <Text>{props.price}円</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
})
