import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import theme from 'theme';
import { MedicalFormsTopBarNavigationStack } from 'navigationContainer/navigation';
import styles from './medicalFormsTopBarNavigation.styles';

const Tab = createMaterialTopTabNavigator<MedicalFormsTopBarNavigationStack>();

export default function MedicalFormsTopBarNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.DARK_PRIMARY,
        inactiveTintColor: theme.LIGHT_BLACK,
        labelStyle: styles.topBarStyles,
      }}
      removeClippedSubviews
    >
      <Tab.Screen
        name={navigationRouteNames.MedicalHistoryFormScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.MedicalHistoryFormScreen
        ]}
        options={{ tabBarLabel: 'Medical History' }}
      />
      <Tab.Screen
        name={navigationRouteNames.InsuranceDetailsScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.InsuranceDetailsScreen
        ]}
        options={{ tabBarLabel: 'Insurance Details' }}
      />
      <Tab.Screen
        name={navigationRouteNames.UploadReportsScreen}
        component={navigationRouteComponentMap[
          navigationRouteNames.UploadReportsScreen
        ]}
        options={{ tabBarLabel: 'Upload Reports' }}
      />
    </Tab.Navigator>
  );
}
