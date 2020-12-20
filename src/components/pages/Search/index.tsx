import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>検索画面</Text>
    </View>
  );
}
