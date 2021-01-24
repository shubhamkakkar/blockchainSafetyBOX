import React from 'react';
import MainContainer from 'UI/MainContainer';
import { PrivateKeyDownloadScreenNavigation } from 'navigationContainer/navigation';
import reactNativeFileSystem from 'react-native-fs';
import { Alert, View } from 'react-native';
import Icon from 'UI/Icon';
import TextUI from 'UI/TextUI';
import Button from 'UI/Buttons';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import styles from './privateKeyDownloadScreen.styles';

export default function PrivateKeyDownloadScreen(
  { navigation, route }: PrivateKeyDownloadScreenNavigation,
) {
  async function downloadPrivateKeyFile() {
    try {
      const path = `${reactNativeFileSystem.DocumentDirectoryPath}/blockchainSafetyBox_privateKey_${
        route.params?.email}.txt`;
      await reactNativeFileSystem.writeFile(path, route.params.privateKey, 'utf8');
      Alert.alert('Download complete');
      navigation.navigate(navigationRouteNames.PublicLedgerScreen as any);
    } catch (e: any) {
      console.log('downloadPrivateKeyFile e()', e);
    }
  }

  return (
    <MainContainer style={styles.container}>
      <View style={[styles.container, styles.allCenter]}>
        <Icon name="file-download-outline" size={75} />
        <View style={styles.informationTextContainer}>
          <TextUI center style={styles.bottomSpacer} fontWeight="SemiBold">
            Download this file containing your private key.
          </TextUI>
          <TextUI center fontWeight="SemiBold">
            If you lost it, you will not be able to share your data with anyone
            or even read your stored content.
          </TextUI>
        </View>
        <View style={styles.downloadButtonContainer}>
          <Button
            title="Download"
            fontSize={FONT_SIZES.MEDIUM_TEXT_ALTERNATIVE}
            onPress={downloadPrivateKeyFile}
          />
        </View>
      </View>
    </MainContainer>
  );
}
