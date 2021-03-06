import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'UI/Icon';
import theme from 'theme';
import { View, ViewStyle } from 'react-native';
import navigationRouteComponentMap from '../navigationRouteComponentMap';
import navigationRouteNames from '../navigationRouteNames';
import styles from './bottomNavigation.styles';

type TabBarIcon = {
  color: string;
  size: number;
  focused: boolean
};

const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  const commonTabOptions = (
    iconName:string, containerStyle?:ViewStyle, iconStyle?:ViewStyle, outline = true,
  ) => ({
    tabBarIcon: ({ color, size, focused }: TabBarIcon) => (
      <View style={containerStyle || {}}>
        <Icon
          name={`${iconName}${(outline && !focused) ? '-outline' : ''}`}
          {...{ color, size, style: iconStyle || {} }}
        />
      </View>
    ),
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.PRIMARY,
        inactiveTintColor: theme.LIGHT_BLACK,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: styles.topShadow,
      }}
    >
      <Tab.Screen
        name={navigationRouteNames.PublicLedgerScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.PublicLedgerScreen
        ]}
        initialParams={{ privateKey: '', email: '' }}
        options={commonTabOptions('book-account')}
      />
      <Tab.Screen
        name={navigationRouteNames.RequestedBlocksStackNavigation as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.RequestedBlocksStackNavigation
        ]}
        options={commonTabOptions('plus-network')}
      />
      <Tab.Screen
        name={navigationRouteNames.SharedBlocksScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.SharedBlocksScreen
        ]}
        options={commonTabOptions('share-all')}

      />
      <Tab.Screen
        name={navigationRouteNames.ReceivedBlocksScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.ReceivedBlocksScreen
        ]}
        options={commonTabOptions('collapse-all')}
      />
    </Tab.Navigator>
  );
}
