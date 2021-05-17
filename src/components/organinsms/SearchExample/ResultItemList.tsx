import React from 'react'
import { FlatList } from 'react-native'
import { Item } from '../../../types/Item'
import { SearchResultItem } from '../../molecules/SearchResultItem'

type Props = {
  items: Item[]
}

export const ResultItemList = (props: Props) => {
  return (
    <FlatList
      data={props.items}
      renderItem={({ item }) => <SearchResultItem {...item} />}
    />
  )
}
