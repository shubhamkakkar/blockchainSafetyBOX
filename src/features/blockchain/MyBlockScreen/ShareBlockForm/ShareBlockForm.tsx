import React, { useEffect, useState } from 'react';
import OverlayWithCard from 'UI/Overlay/OverlayWithCard';
import Header from 'UI/Header';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import { TouchableOpacity, View } from 'react-native';
import { User, useSearchUserLazyQuery } from 'generated/graphql';
import SearchBar from 'UI/SearchBar';
import TextUI from "UI/TextUI";
import theme from "theme";
// @ts-ignore
import { FONT_SIZES } from "constants";
import styles from './shareBlockForm.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void
};
export default function ShareBlockForm(props: Props) {
  const [toShareWith, setToShareWith] = useState<Partial<User> | undefined>();
  const [searchString, setSearchString] = useState<string>('');
  const [searchUserQuery, searchUserQueryResponse] = useSearchUserLazyQuery()
  function onChangeSearchTextHandler(text: string) {
    setSearchString(text)
  }

  function onSearchItemPress(user: Partial<User>) {
    setToShareWith(user)
  }

  function userRenderer(user: Partial<User> | any) {
    return (
      <>
        <TextUI color={theme.DARK_PRIMARY} fontWeight="Bold">
          {user.firstName}{user.middleName ? ` ${user.middleName} ` : ''}{`${user.lastName}`}
        </TextUI>
        <TextUI
          color={theme.LIGHT_BLACK}
          fontWeight="SemiBold"
          fontSize={FONT_SIZES.SMALL_TEXT}
          style={styles.marginBottom10}
        >
          {user.email}
        </TextUI>
      </>
    )
  }

  useEffect(() => {
    if (searchString.trim().length >= 3) {
      searchUserQuery({ variables: { filter: searchString } })
    }
  }, [searchString])

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
      <View style={styles.spacer}>
        {toShareWith ? (
            <>
              {userRenderer(toShareWith)}
             <CipherKeyFormikInput isNotFormik />
            </>
        ) : (
          <>
            <SearchBar
              textInputProps={{
                placeholder: 'Search user to share with',
                autoFocus: true,
                value: searchString,
                onChangeText: onChangeSearchTextHandler
              }}
            />
            <View style={styles.spacer}>
              {searchUserQueryResponse.called
                && searchUserQueryResponse.data?.searchUser.map((user: any) => (
                  <TouchableOpacity
                    key={user.publicKey}
                    style={styles.searchItem}
                    onPress={() => onSearchItemPress(user)}>
                    {userRenderer(user)}
                  </TouchableOpacity>
                )
              )}
            </View>
          </>
        )}
      </View>
    </OverlayWithCard>
  );
}
