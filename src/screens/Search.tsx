import React, { useCallback, useState } from 'react'
import { MainLayout } from '../components/layouts/main'
import { SearchExample } from '../components/pages/SearchExample'
import { Item } from '../types/Item'

export const SearchScreen = () => {
  const [items, setItems] = useState<Item[]>([])

  const handleSearch = useCallback((text: string) => {
    setItems(
      text
        ? [
            {
              id: '0',
              price: 480,
              title: 'りんご',
            },
            {
              id: '1',
              price: 280,
              title: 'オレンジ',
            },
            {
              id: '2',
              price: 1280,
              title: 'バナナ',
            },
          ]
        : [],
    )
  }, [])

  return (
    <MainLayout>
      <SearchExample items={items} onPressSearch={handleSearch} />
    </MainLayout>
  )
}
