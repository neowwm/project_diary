import {parseISO} from 'date-fns';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {themeColors} from '../assets/color/colors';
import ItemsList from '../components/ItemsList';
import {useDataContext} from '../contexts/useContext';

export default function FeedsScreen({navigation}) {
  const data = useDataContext();

  return (
    <View style={styles.block}>
      <ItemsList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.feedsScreenBackgroundColor,
  },
});
