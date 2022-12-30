import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {themeColors} from '../assets/color/colors';
import ItemBox from './ItemBox';

export default function ItemsList({data, header, footer}) {
  const renderItem = ({item}) => (
    <ItemBox
      id={item.id}
      title={item.title}
      content={item.content}
      date={item.date}
    />
  );

  return (
    <FlatList
      style={stlyes.block}
      ListHeaderComponent={header}
      data={data.sort((a, b) => b.date - a.date)}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={stlyes.separator} />}
      ListFooterComponent={footer}
    />
  );
}

const stlyes = StyleSheet.create({
  block: {flex: 1, width: '100%'},
  separator: {height: 0.4, backgroundColor: themeColors.feedSeparatorColor},
});
