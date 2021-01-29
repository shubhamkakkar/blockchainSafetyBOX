import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import theme from 'theme';
import styles from './medicalFormsTopBarNavigation.styles';

const Tab = createMaterialTopTabNavigator();

export default function MedicalFormsTopBarNavigation() {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        activeTintColor: theme.DARK_PRIMARY,
        inactiveTintColor: theme.LIGHT_BLACK,
        labelStyle: styles.topBarStyles,
      }}
      removeClippedSubviews
    >
      <Tab.Screen
        name={navigationRouteNames.MedicalHistoryFormScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.MedicalHistoryFormScreen
        ]}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={navigationRouteNames.InsuranceDetailsScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.InsuranceDetailsScreen
        ]}
        options={{ tabBarLabel: 'Insurance Details' }}
      />
      <Tab.Screen
        name={navigationRouteNames.UploadReportsScreen as any}
        component={navigationRouteComponentMap[
          navigationRouteNames.UploadReportsScreen
        ]}
        options={{ tabBarLabel: 'Upload Reports' }}
      />
    </Tab.Navigator>
  );
}
