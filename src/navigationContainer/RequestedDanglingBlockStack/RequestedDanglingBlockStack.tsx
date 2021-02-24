import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';

const Stack = createStackNavigator();
export default function RequestedDanglingBlockStack() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen
        name={navigationRouteNames.RequestedBlocksScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.RequestedBlocksScreen
        ]}
      />
      <Stack.Screen
        name={navigationRouteNames.MedicalFormsTopBarNavigation as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.MedicalFormsTopBarNavigation
        ]}
      />
    </Stack.Navigator>
  );
}
