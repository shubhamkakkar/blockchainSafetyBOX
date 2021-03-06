import NavigationRouteNames from 'navigationContainer/navigationRouteNames';
import BottomTabNavigation from 'navigationContainer/BottomTabNavigation';
import SplashScreen from 'features/authentication/SplashScreen';
import AuthScreen from 'features/authentication/AuthScreen';
import PrivateKeyDownloadScreen from 'features/authentication/PrivateKeyDownloadScreen';
import PublicLedgerScreen from 'features/blockchain/PublicLedgerScreen';
import RequestedBlocksScreen from 'features/blockchain/RequestedBlocksScreen';
import MyRequestedBlocksScreen from 'features/blockchain/MyRequestedBlocksScreen';
import MedicalHistoryFormScreen from 'features/blockchain/MedicalHistoryFormScreen';
import ReceivedBlocksScreen from 'features/blockchain/ReceivedBlocksScreen';
import InsuranceDetailsScreen from 'features/blockchain/InsuranceDetailsScreen';
import SharedBlocksScreen from 'features/blockchain/SharedBlocksScreen';
import UploadReportsScreen from 'features/blockchain/UploadReportsScreen';
import RequestedDanglingBlockStack from 'navigationContainer/RequestedDanglingBlockStack';
import UserProfileScreen from 'features/user/UserProfileScreen';
import MyBlockScreen from 'features/blockchain/MyBlockScreen';
import Admins from 'features/user/Admins';
import MedicalFormsTopBarNavigation from './RequestedDanglingBlockStack/MedicalFormsTopBarNavigation';

const navigationRouteComponentMap = {
  [NavigationRouteNames.SplashScreen]: SplashScreen,
  [NavigationRouteNames.AuthScreen]: AuthScreen,
  [NavigationRouteNames.PrivateKeyDownloadScreen]: PrivateKeyDownloadScreen,
  [NavigationRouteNames.BottomTabNavigation]: BottomTabNavigation,
  [NavigationRouteNames.PublicLedgerScreen]: PublicLedgerScreen,
  [NavigationRouteNames.MyBlockScreen]: MyBlockScreen,
  [NavigationRouteNames.RequestedBlocksStackNavigation]: RequestedDanglingBlockStack,
  [NavigationRouteNames.RequestedBlocksScreen]: RequestedBlocksScreen,
  [NavigationRouteNames.MyRequestedBlocksScreen]: MyRequestedBlocksScreen,
  [NavigationRouteNames.SharedBlocksScreen]: SharedBlocksScreen,
  [NavigationRouteNames.ReceivedBlocksScreen]: ReceivedBlocksScreen,
  [NavigationRouteNames.MedicalFormsTopBarNavigation]: MedicalFormsTopBarNavigation,
  [NavigationRouteNames.MedicalHistoryFormScreen]: MedicalHistoryFormScreen,
  [NavigationRouteNames.InsuranceDetailsScreen]: InsuranceDetailsScreen,
  [NavigationRouteNames.UploadReportsScreen]: UploadReportsScreen,
  [NavigationRouteNames.UserProfileScreen]: UserProfileScreen,
  [NavigationRouteNames.Admins]: Admins,
};

export default navigationRouteComponentMap;
