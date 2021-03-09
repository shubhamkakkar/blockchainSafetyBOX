import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import { MedicalFormsTopBarNavigationStack } from 'navigationContainer/navigation';

const Stack = createStackNavigator<MedicalFormsTopBarNavigationStack>();

export default function MedicalFormsTopBarNavigation() {
  return (
    <Stack.Navigator
      detachInactiveScreens
      headerMode="none"
    >
      <Stack.Screen
        name={navigationRouteNames.MedicalHistoryFormScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.MedicalHistoryFormScreen
        ]}
      />
      <Stack.Screen
        name={navigationRouteNames.InsuranceDetailsScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.InsuranceDetailsScreen
        ]}
      />
      <Stack.Screen
        name={navigationRouteNames.UploadReportsScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.UploadReportsScreen
        ]}
      />
    </Stack.Navigator>
  );
}
