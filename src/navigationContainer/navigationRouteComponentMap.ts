import NavigationRouteNames from 'navigationContainer/navigationRouteNames';
import SplashScreen from 'features/authentication/SplashScreen';
import AuthScreen from 'features/authentication/AuthScreen';
import PrivateKeyDownloadScreen from 'features/authentication/PrivateKeyDownloadScreen';
import PublicLedgerScreen from 'features/blockchain/PublicLedgerScreen';
import RequestedBlocksScreen from 'features/blockchain/RequestedBlocksScreen';
import MedicalHistoryFormScreen from 'features/blockchain/MedicalHistoryFormScreen';
import ReceivedBlocksScreen from 'features/blockchain/ReceivedBlocksScreen';
import InsuranceDetailsScreen from 'features/blockchain/InsuranceDetailsScreen';
import SharedBlocksScreen from 'features/blockchain/SharedBlocksScreen';
import UploadReportsScreen from 'features/blockchain/UploadReportsScreen';
import BottomTabNavigation from './BottomTabNavigation';
import MedicalFormsTopBarNavigation from './MedicalFormsTopBarNavigation';

const navigationRouteComponentMap = {
  [NavigationRouteNames.SplashScreen]: SplashScreen,
  [NavigationRouteNames.AuthScreen]: AuthScreen,
  [NavigationRouteNames.PrivateKeyDownloadScreen]: PrivateKeyDownloadScreen,
  [NavigationRouteNames.BottomTabNavigation]: BottomTabNavigation,
  [NavigationRouteNames.PublicLedgerScreen]: PublicLedgerScreen,
  [NavigationRouteNames.RequestedBlocksScreen]: RequestedBlocksScreen,
  [NavigationRouteNames.SharedBlocksScreen]: SharedBlocksScreen,
  [NavigationRouteNames.ReceivedBlocksScreen]: ReceivedBlocksScreen,
  [NavigationRouteNames.MedicalFormsTopBarNavigation]: MedicalFormsTopBarNavigation,
  [NavigationRouteNames.MedicalHistoryFormScreen]: MedicalHistoryFormScreen,
  [NavigationRouteNames.InsuranceDetailsScreen]: InsuranceDetailsScreen,
  [NavigationRouteNames.UploadReportsScreen]: UploadReportsScreen,
};

export default navigationRouteComponentMap;
