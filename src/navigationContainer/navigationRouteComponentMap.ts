import NavigationRouteNames from 'navigationContainer/navigationRouteNames';
import SplashScreen from 'features/authentication/SplashScreen';
import AuthScreen from 'features/authentication/AuthScreen';
import PrivateKeyDownloadScreen from 'features/authentication/PrivateKeyDownloadScreen';
import PublicLedger from 'features/blockchain/PublicLedger';

const navigationRouteComponentMap = {
  [NavigationRouteNames.SplashScreen]: SplashScreen,
  [NavigationRouteNames.AuthScreen]: AuthScreen,
  [NavigationRouteNames.PrivateKeyDownloadScreen]: PrivateKeyDownloadScreen,
  [NavigationRouteNames.PublicLedger]: PublicLedger,
};

export default navigationRouteComponentMap;
