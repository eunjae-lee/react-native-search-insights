import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import aa from 'search-insights';

aa('init', { appId: 'latency', apiKey: '6be0576ff61c053d5f9a3225e2a90f76' });
aa('setUserToken', 'this-is-me');
aa('clickedFilters', {
  eventName: 'my filter event',
  filters: ['brand:Apple'],
  index: 'instant_search',
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
