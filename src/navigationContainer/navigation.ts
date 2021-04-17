import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MyBlockProps } from 'types';
import navigationRouteNames from './navigationRouteNames';

export type NavigationStack = {
  [navigationRouteNames.SplashScreen]: undefined;
  [navigationRouteNames.AuthScreen]: undefined;
  [navigationRouteNames.PrivateKeyDownloadScreen]: {
    privateKey: string;
    email: string;
  };
  [navigationRouteNames.PublicLedgerScreen]: undefined;
  [navigationRouteNames.MyBlockScreen]: { block: MyBlockProps | undefined, showShare: boolean };
  [navigationRouteNames.RequestedBlocksStackNavigation]: undefined;
  [navigationRouteNames.UserProfileScreen]: undefined;
};

type AuthScreenNavigationProp = StackNavigationProp<
  NavigationStack,
  navigationRouteNames.AuthScreen
>;
type AuthScreenRouteProp = RouteProp<
  NavigationStack,
  navigationRouteNames.AuthScreen
>;

type PrivateKeyDownloadScreenNavigationProps = StackNavigationProp<
  NavigationStack,
  navigationRouteNames.PrivateKeyDownloadScreen
>;
type PrivateKeyDownloadScreenRouteProps = RouteProp<
  NavigationStack,
  navigationRouteNames.PrivateKeyDownloadScreen
>;

export type AuthScreenNavigation = {
  navigation: AuthScreenNavigationProp;
  route: AuthScreenRouteProp;
};

export type PrivateKeyDownloadScreenNavigation = {
  navigation: PrivateKeyDownloadScreenNavigationProps;
  route: PrivateKeyDownloadScreenRouteProps;
};

export type PublicLedgerScreenNavigationProps = {
  navigation: StackNavigationProp<
    NavigationStack,
    navigationRouteNames.PublicLedgerScreen
  >;
  route: RouteProp<NavigationStack, navigationRouteNames.PublicLedgerScreen>;
};

export type MyBLockScreenNavigationProps = {
  navigation: StackNavigationProp<
    NavigationStack,
    navigationRouteNames.MyBlockScreen
  >;
  route: RouteProp<NavigationStack, navigationRouteNames.MyBlockScreen>;
};

export type RequestedBlocksNavigationStack = {
  [navigationRouteNames.RequestedBlocksScreen]: undefined;
  [navigationRouteNames.MyRequestedBlocksScreen]: undefined;
  [navigationRouteNames.MedicalFormsTopBarNavigation]: undefined;
};

export type MedicalFormsTopBarNavigationStack = {
  [navigationRouteNames.MedicalHistoryFormScreen]: undefined;
  [navigationRouteNames.InsuranceDetailsScreen]: undefined;
  [navigationRouteNames.UploadReportsScreen]: undefined;
};

export type MedicalHistoryFormScreenNavigationProps = {
  navigation: StackNavigationProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.MedicalHistoryFormScreen
  >;
  route: RouteProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.MedicalHistoryFormScreen
  >;
};

export type InsuranceDetailsScreenNavigationProps = {
  navigation: StackNavigationProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.InsuranceDetailsScreen
  >;
  route: RouteProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.InsuranceDetailsScreen
  >;
};

export type UploadReportsScreenNavigationProps = {
  navigation: StackNavigationProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.UploadReportsScreen
  >;
  route: RouteProp<
    MedicalFormsTopBarNavigationStack,
    navigationRouteNames.UploadReportsScreen
  >;
};
