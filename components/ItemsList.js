import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {themeColors} from '../assets/color/colors';
import ItemBox from './ItemBox';

export default function ItemsList({data, header, footer, onScrolledToBottom}) {
  const onScroll = e => {
    if (!onScrolledToBottom) {
      return;
    }

    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 12
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };

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
      onScroll={onScroll}
    />
  );
}

const stlyes = StyleSheet.create({
  block: {flex: 1, width: '100%'},
  separator: {height: 0.4, backgroundColor: themeColors.feedSeparatorColor},
});
