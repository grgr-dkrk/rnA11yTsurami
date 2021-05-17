import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  AccessibilityInfo,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { Item } from '../../types/Item'
import { AlertMessage } from '../atoms/AlertMessage'
import { ResultItemList } from '../organinsms/SearchExample/ResultItemList'
import { SearchField } from '../organinsms/SearchExample/SearchField'

type Props = {
  items: Item[]
  onPressSearch: (text: string) => void
}

export const SearchExample = (props: Props) => {
  const [text, setText] = useState('')
  const onPressSearch = useCallback(() => {
    props.onPressSearch(text)
  }, [props, text])
  const onChangeSearchText = useCallback((text: string) => {
    setText(text)
  }, [])
  const InputRef = useRef<TextInput>(null)
  const resultMessage = useMemo(
    () => `検索結果は${props.items.length || 0}件`,
    [props.items],
  )
  useEffect(() => {
    if (Platform.OS === 'ios') {
      AccessibilityInfo.announceForAccessibility(resultMessage)
    }
  }, [resultMessage])
  useFocusEffect(
    useCallback(() => {
      InputRef.current?.focus()
    }, []),
  )
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wraper}>
      <View style={styles.searchFieldWrapper}>
        <SearchField
          onChangeText={onChangeSearchText}
          onPressSearchButton={onPressSearch}
          ref={InputRef}
        />
      </View>
      <View style={styles.resultWrapper}>
        <AlertMessage label={resultMessage} />
        <View style={styles.resultItemListWrapper}>
          {props.items.length ? <ResultItemList items={props.items} /> : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wraper: {
    marginTop: 8,
  },
  searchFieldWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultWrapper: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  resultItemListWrapper: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
})
