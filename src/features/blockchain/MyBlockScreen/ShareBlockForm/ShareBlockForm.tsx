import React, { useState } from 'react';
import OverlayWithCard from 'UI/Overlay/OverlayWithCard';
import Header from 'UI/Header';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import { Dimensions, View } from 'react-native';
import { User } from 'generated/graphql';
import SearchBar from 'UI/SearchBar';
import styles from './shareBlockForm.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void
};
export default function ShareBlockForm(props: Props) {
  const [toShareWith, setToShareWith] = useState<User | undefined>();
  const [searchString, setSearchString] = useState<string>('');
  return (
    <OverlayWithCard
      isOpen={props.isOpen}
      removePadding
      onClose={props.onClose}
    >
      <Header
        title="Share"
        noBackButton
        isRightIcon
        onRightIconPress={props.onClose}
      />
      <View style={styles.container}>
        {toShareWith ? <CipherKeyFormikInput isNotFormik /> : (
          <>
            <SearchBar
              textInputProps={{
                placeholder: 'Search user to share with',
                autoFocus: true,
                value: searchString,
              }}
            />
          </>
        )}
      </View>
    </OverlayWithCard>
  );
}

// TOOD: RENDER SEARCHING LIST
