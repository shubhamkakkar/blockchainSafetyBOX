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
  const [isUploadDocument, setIsUploadDocument] = useState<boolean>(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  function toggleIsPersonalMedicalHistory() {
    setIsAnimationComplete(!isAnimationComplete);
    if (isUploadDocument) {
      setIsUploadDocument(!isUploadDocument);
    }
    Animated
      .timing(formScale, {
        toValue: isUploadDocument ? 1 : 0,
        useNativeDriver: true,
      })
      .start(() => {
        if (!isUploadDocument) {
          setIsUploadDocument(!isUploadDocument);
        }
      });
  }
  return (
    <MainContainer>
      <Header title="Request Dangling Block" />
      <View style={[styles.flex, styles.marginTop, styles.horizontalSpacer]}>
        {!isUploadDocument && (
          <Animated.ScrollView
            style={[styles.flex, { opacity: formScale }]}
            showsVerticalScrollIndicator={false}
          >
            <MedicalHistoryForm />
          </Animated.ScrollView>
        )}
        <Animated.View style={{ opacity: uploadImageScale }}>
          {isAnimationComplete && (
          <TextUI>
            Upload Image
          </TextUI>
          )}
        </Animated.View>
      </View>
    </MainContainer>
  );
}
