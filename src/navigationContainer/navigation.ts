import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import navigationRouteNames from './navigationRouteNames';

export type NavigationStack = {
  [navigationRouteNames.SplashScreen]: undefined;
  [navigationRouteNames.AuthScreen]: undefined;
  [navigationRouteNames.PrivateKeyDownloadScreen]: {privateKey: string; email: string};
  [navigationRouteNames.PublicLedgerScreen]: undefined;
  [navigationRouteNames.RequestedBlocksStackNavigation]: undefined;
};

type AuthScreenNavigationProp = StackNavigationProp<
NavigationStack, navigationRouteNames.AuthScreen
>;
type AuthScreenRouteProp = RouteProp<NavigationStack, navigationRouteNames.AuthScreen>;

type PrivateKeyDownloadScreenNavigationProps = StackNavigationProp<
NavigationStack,
navigationRouteNames.PrivateKeyDownloadScreen
>;
type PrivateKeyDownloadScreenRouteProps = RouteProp<
NavigationStack, navigationRouteNames.PrivateKeyDownloadScreen
>;

export type AuthScreenNavigation = {
  navigation: AuthScreenNavigationProp;
  route: AuthScreenRouteProp;
};

export type PrivateKeyDownloadScreenNavigation = {
  navigation: PrivateKeyDownloadScreenNavigationProps;
  route: PrivateKeyDownloadScreenRouteProps;
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
