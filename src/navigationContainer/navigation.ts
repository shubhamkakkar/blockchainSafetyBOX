import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type NavigationStack = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  PrivateKeyDownloadScreen: {privateKey: string; email: string};
  PublicLedger: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
NavigationStack,
'SplashScreen'
>;
type SplashScreenRouteProp = RouteProp<NavigationStack, 'SplashScreen'>;

type AuthScreenNavigationProp = StackNavigationProp<
NavigationStack,
'AuthScreen'
>;
type AuthScreenRouteProp = RouteProp<NavigationStack, 'AuthScreen'>;

type PrivateKeyDownloadScreenNavigationProps = StackNavigationProp<
NavigationStack,
'PrivateKeyDownloadScreen'
>;
type PrivateKeyDownloadScreenRouteProps = RouteProp<
NavigationStack,
'PrivateKeyDownloadScreen'
>;

type PublicLedgerNavigationProp = StackNavigationProp<
NavigationStack,
'PublicLedger'
>;
type PublicLedgerRouteProp = RouteProp<NavigationStack, 'PublicLedger'>;

export type SplashScreenNavigation = {
  navigation: SplashScreenNavigationProp;
  route: SplashScreenRouteProp;
};

export type AuthScreenNavigation = {
  navigation: AuthScreenNavigationProp;
  route: AuthScreenRouteProp;
};

export type PrivateKeyDownloadScreenNavigation = {
  navigation: PrivateKeyDownloadScreenNavigationProps;
  route: PrivateKeyDownloadScreenRouteProps;
};

export type PublicLedgerNavigation = {
  navigation: PublicLedgerNavigationProp;
  route: PublicLedgerRouteProp;
};
