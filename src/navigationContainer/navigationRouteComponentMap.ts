import NavigationRouteNames from 'navigationContainer/navigationRouteNames';
import SplashScreen from 'features/authentication/SplashScreen';
import AuthScreen from 'features/authentication/AuthScreen';
import PrivateKeyDownloadScreen from 'features/authentication/PrivateKeyDownloadScreen';
import BottomTabNavigation from 'navigationContainer/BottomTabNavigation';
import PublicLedgerScreen from 'features/blockchain/PublicLedgerScreen';
import RequestedBlocksScreen from 'features/blockchain/RequestedBlocksScreen';
import RequestBlockScreen from 'features/blockchain/RequestBlockScreen';
import ReceivedBlocksScreen from 'features/blockchain/ReceivedBlocksScreen';
import SharedBlocksScreen from 'features/blockchain/SharedBlocksScreen';

const navigationRouteComponentMap = {
  [NavigationRouteNames.SplashScreen]: SplashScreen,
  [NavigationRouteNames.AuthScreen]: AuthScreen,
  [NavigationRouteNames.PrivateKeyDownloadScreen]: PrivateKeyDownloadScreen,
  [NavigationRouteNames.BottomTabNavigation]: BottomTabNavigation,
  [NavigationRouteNames.PublicLedgerScreen]: PublicLedgerScreen,
  [NavigationRouteNames.RequestedBlocksScreen]: RequestedBlocksScreen,
  [NavigationRouteNames.RequestBlocksScreen]: RequestBlockScreen,
  [NavigationRouteNames.SharedBlocksScreen]: SharedBlocksScreen,
  [NavigationRouteNames.ReceivedBlocksScreen]: ReceivedBlocksScreen,
};

export default navigationRouteComponentMap;
