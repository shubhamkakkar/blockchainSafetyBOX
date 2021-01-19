import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import SplashScreen from 'features/authentication/SplashScreen';
import AuthScreen from 'features/authentication/AuthScreen';
import PrivateKeyDownloadScreen from 'features/authentication/PrivateKeyDownloadScreen';
import PublicLedger from 'features/blockchain/PublicLedger';

const navigationRouteComponentMap = {
  [navigationRouteNames.Authentication.SplashScreen]: SplashScreen,
  [navigationRouteNames.Authentication.AuthScreen]: AuthScreen,
  [navigationRouteNames.Authentication.PrivateKeyDownloadScreen]: PrivateKeyDownloadScreen,
  [navigationRouteNames.Blockchain.PublicLedger]: PublicLedger,
};

export default navigationRouteComponentMap;
