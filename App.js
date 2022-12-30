import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DataProvider from './contexts/Store';
import RootStack from './RootStack';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <DataProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <RootStack />
      </DataProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
