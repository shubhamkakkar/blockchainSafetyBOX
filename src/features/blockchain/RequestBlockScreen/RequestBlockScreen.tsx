import React, { useMemo, useState } from 'react';
import { Animated, Switch, View } from 'react-native';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import TextUI from 'UI/TextUI';
import theme from 'theme';
import MedicalHistoryForm
  from 'features/blockchain/RequestBlockScreen/container/MedicalHistoryForm/MedicalHistoryForm';
import styles from './requestBlockScreen.styles';

type Props = {

};
export default function RequestBlockScreen(props: Props) {
  const formScale = useMemo(() => new Animated.Value(1), []);
  const uploadImageScale = formScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const [isUploadDocument, setIsUploadDocument] = useState<boolean>(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  function toggleIsPersonalMedicalHistory() {
    setIsAnimationComplete(!isAnimationComplete);
    Animated.timing(formScale, {
      toValue: isUploadDocument ? 1 : 0,
      useNativeDriver: true,
    }).start(() => setIsUploadDocument(!isUploadDocument));
  }
  return (
    <MainContainer>
      <Header title="Request Dangling Block" />
      <View style={[styles.row, styles.marginTop]}>
        <View style={[styles.flex, styles.allCenter]}>
          <TextUI
            color={!isUploadDocument ? theme.PRIMARY : theme.BLACK}
            fontWeight={!isUploadDocument ? 'Bold' : 'Regular'}
          >
            Fill Form
          </TextUI>
        </View>
        <Switch
          thumbColor={theme.PRIMARY}
          trackColor={{ false: `${theme.GREY}50`, true: `${theme.GREY}50` }}
          ios_backgroundColor={`${theme.GREY}50`}
          onValueChange={toggleIsPersonalMedicalHistory}
          value={isAnimationComplete}
        />
        <View style={[styles.flex, styles.allCenter]}>
          <TextUI
            color={isUploadDocument ? theme.PRIMARY : theme.BLACK}
            fontWeight={isUploadDocument ? 'Bold' : 'Regular'}
          >
            Upload Image
          </TextUI>
        </View>
      </View>
      <View style={[styles.flex, styles.marginTop, styles.horizontalSpacer]}>
        <Animated.View style={{ transform: [{ scale: formScale }] }}>
          {!isAnimationComplete && (
            <MedicalHistoryForm />
          )}
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: uploadImageScale }] }}>
          {isAnimationComplete && (
          <TextUI
            color={!isUploadDocument ? theme.PRIMARY : theme.BLACK}
            fontWeight={!isUploadDocument ? 'Bold' : 'Regular'}
          >
            Upload Image
          </TextUI>
          )}
        </Animated.View>
      </View>
    </MainContainer>
  );
}
