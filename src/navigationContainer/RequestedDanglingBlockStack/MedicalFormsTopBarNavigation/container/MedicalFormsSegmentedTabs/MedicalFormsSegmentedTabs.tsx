import React from 'react';
import SegmentedTab from 'UI/SegmentedTab';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';

type ActiveIndex = 0 | 1 | 2;

type Props = {
  activeIndex: ActiveIndex;
  navigation: any
};
export default function MedicalFormsSegmentedTabs(props: Props) {
  function onTabPress(index: number) {
    switch (index) {
      case 0: {
        if (props.activeIndex !== (index)) {
          props.navigation.navigate(navigationRouteNames.MedicalHistoryFormScreen);
        }
        break;
      }
      case 1: {
        if (props.activeIndex !== (index)) {
          props.navigation.navigate(navigationRouteNames.InsuranceDetailsScreen);
        }
        break;
      }
      case 2: {
        if (props.activeIndex !== (index)) {
          props.navigation.navigate(navigationRouteNames.UploadReportsScreen);
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <SegmentedTab
      values={['Medical History', 'Insurance Information', 'Upload Reports']}
      selectedIndex={props.activeIndex}
      onTabPressHandler={onTabPress}
    />
  );
}
