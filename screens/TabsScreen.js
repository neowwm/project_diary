import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CalendarScreen from './CalendarScreen';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';

const Tabs = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#330099',
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => {
          const icons = {
            FeedsScreen: 'server',
            CalendarScreen: 'calendar',
            SearchScreen: 'search',
          };
          return <Icon name={icons[route.name]} color={color} size={20} />;
        },
      })}>
      <Tabs.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{
          title: '피드',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
        }}
      />
      <Tabs.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: '달력',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: '검색',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
        }}
      />
    </Tabs.Navigator>
  );
}
