import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import MainContainer from 'UI/MainContainer';
import AnimatedTextHeader from 'UI/AnimatedTextHeader';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import { MyBLockScreenNavigationProps } from 'navigationContainer/navigation';
import Icon from 'UI/Icon';
import theme from 'theme';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import TextUI from 'UI/TextUI';
import { dateString, twelveHourClockTime } from 'utils/dateHelpers';
import { RequestedBlockMessage } from 'generated/graphql';
import PreviewMedicalHistoryModal
  from 'features/blockchain/MedicalHistoryFormScreen/container/PreviewMedicalHistoryModal';
import PreviewInsuranceInformation
  from 'features/blockchain/InsuranceDetailsScreen/container/PreviewInsuranceInformation';
import styles from './myBlockScreen.styles';

export default function MyBlockScreen(props: MyBLockScreenNavigationProps) {
  const scrollY = new Animated.Value(0);

  function onBackClick() {
    props.navigation.navigate(navigationRouteNames.PublicLedgerScreen);
  }

  function onUserProfileIconPress() {
    props.navigation.navigate(navigationRouteNames.UserProfileScreen);
  }

  function previewDataRendered() {
    switch (props.route.params.block?.messageType) {
      case RequestedBlockMessage.PersonalMedicalInformation: {
        return (
          <PreviewMedicalHistoryModal
            isModalOpen
            previewFormState={JSON.parse(props.route.params.block?.data)}
            isBlockPreview
          />
        );
      }
      case RequestedBlockMessage.InsuranceInformation: {
        return (
          <PreviewInsuranceInformation
            isModalOpen
            previewFormState={JSON.parse(props.route.params.block?.data)}
            isBlockPreview
          />
        );
      }
      case RequestedBlockMessage.MedicalReports: {
        return (
          <View />
        );
      }
      default: {
        return <></>;
      }
    }
  }

  console.log('props.route.params.block', props.route.params.block);

  return (
    <MainContainer>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        style={styles.spacer}
      >
        <LayoutAnimationWrapper title="Created" expanded>
          <TextUI>
            {dateString(new Date(props.route.params.block?.createdAt))}
            {' '}
            at
            {' '}
            {twelveHourClockTime(props.route.params.block?.createdAt)}
          </TextUI>
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Hash" expanded>
          <TextUI>
            {props.route.params.block?.hash}
          </TextUI>
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Prev Hash" expanded>
          <TextUI>
            {props.route.params.block?.prevHash}
          </TextUI>
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Data" expanded>
          {previewDataRendered()}
        </LayoutAnimationWrapper>
      </Animated.ScrollView>
      <AnimatedTextHeader
        initialTitle="My Block"
        onAnimationCompleteTitle={props.route.params.block?.messageType
          ?.split('_').join(' ') || ''}
        scrollY={scrollY}
        onBackClick={onBackClick}
        RightContainer={(
          <TouchableOpacity
            onPress={onUserProfileIconPress}
          >
            <Icon name="account-settings" size={25} color={theme.DARK_PRIMARY} />
          </TouchableOpacity>
        )}
      />

    </MainContainer>
  );
}
