import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {themeColors} from './assets/color/colors';
import HeaderRight from './components/HeaderRight';
import DiaryScreen from './screens/DiaryScreen';
import TabsScreen from './screens/TabsScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: themeColors.diaryScreenHeaderBackgroundColor,
          },
          headerShadowVisible: false,
          presentation: 'containedTransparentModal',
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabsScreen"
          component={TabsScreen}
        />
        <Stack.Screen
          name="DiaryScreen"
          component={DiaryScreen}
          options={({route}) => ({
            headerRight: () => (
              <HeaderRight mode="View" params={route.params} />
            ),
            title: '일기',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
