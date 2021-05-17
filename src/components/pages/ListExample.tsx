import React, { useState } from 'react'
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import { RadioItem } from '../molecules/RadioItem'

const data = [...Array(50).keys()].map(num => ({
  id: num + 1,
  title: `アイテム${num + 1}`,
}))

export const ListExample = () => {
  const [current, setCurrent] = useState<number | undefined>()

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableHighlight
          accessible
          accessibilityRole="button"
          accessibilityLabel={item.title}
          accessibilityState={{
            selected: item.id === current,
          }}
          disabled={item.id === 10}
          key={item.id}
          onPress={() => setCurrent(item.id)}
          style={styles.listItemWrapper}>
          <RadioItem label={item.title} isActive={item.id === current} />
        </TouchableHighlight>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listItemWrapper: {
    borderTopWidth: 1,
    padding: 16,
  },
})
