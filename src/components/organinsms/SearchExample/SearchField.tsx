import React, { forwardRef, ForwardedRef } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

type Props = {
  onChangeText: (text: string) => void
  onPressSearchButton: () => void
}

export const SearchField = forwardRef(
  (props: Props, ref: ForwardedRef<TextInput>) => {
    return (
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
            accessibilityRole="search"
            placeholder="検索ワードを入力してください"
            style={styles.input}
            onChangeText={props.onChangeText}
            ref={ref}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Button
            onPress={props.onPressSearchButton}
            accessibilityLabel="検索する"
            title="検索する"
          />
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  resultWrapper: {
    marginTop: 24,
  },
  inputWrapper: {
    marginTop: 16,
  },
  buttonWrapper: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
})
