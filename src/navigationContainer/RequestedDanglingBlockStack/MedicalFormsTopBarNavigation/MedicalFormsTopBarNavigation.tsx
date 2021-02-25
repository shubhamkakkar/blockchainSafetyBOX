import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from '../../navigationRouteNames';
import navigationRouteComponentMap from '../../navigationRouteComponentMap';
import { MedicalFormsTopBarNavigationStack } from '../../navigation';

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
