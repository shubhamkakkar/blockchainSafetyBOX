import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import { RequestedBlocksNavigationStack } from 'navigationContainer/navigation';

const Stack = createStackNavigator<RequestedBlocksNavigationStack>();
export default function RequestedDanglingBlockStack() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen
        name={navigationRouteNames.RequestedBlocksScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.RequestedBlocksScreen
        ]}
      />
      <Stack.Screen
        name={navigationRouteNames.MyRequestedBlocksScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.MyRequestedBlocksScreen
        ]}
      />
      <Stack.Screen
        name={navigationRouteNames.MedicalFormsTopBarNavigation}
        component={navigationRouteComponentMap[
          navigationRouteNames.MedicalFormsTopBarNavigation
        ]}
      />
    </Stack.Navigator>
  );
}
