import React, { useEffect, useState } from 'react';
import OverlayWithCard from 'UI/Overlay/OverlayWithCard';
import Header from 'UI/Header';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import { Alert, Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import { User, useSearchUserLazyQuery, useShareBlockMutation } from 'generated/graphql';
import SearchBar from 'UI/SearchBar';
import TextUI from "UI/TextUI";
import theme from "theme";
// @ts-ignore
import { FONT_SIZES } from "constants";
import Input from "UI/Input";
import TextInput from "UI/Input/TextInput";
import BorderButton from "UI/Buttons/BorderButton";
import Button from "UI/Buttons";
import styles from './shareBlockForm.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  blockId: string;
};
export default function ShareBlockForm(props: Props) {
  const [toShareWith, setToShareWith] = useState<Partial<User> | undefined>();
  const [searchString, setSearchString] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [cipherTextOfBlock, setCipherTextOfBlock] = useState<string>('');
  const [searchUserQuery, searchUserQueryResponse] = useSearchUserLazyQuery()
  const [shareBlock, shareBlockResponse] = useShareBlockMutation();

  const disabled = shareBlockResponse.loading || !privateKey || !cipherTextOfBlock

  function onChangeSearchTextHandler(text: string) {
    setSearchString(text)
  }

  function onSearchItemPress(user: Partial<User>) {
    setToShareWith(user)
  }

  function onSubmit(){
    shareBlock({ variables: {
      blockId:  props.blockId,
        publicKey: toShareWith?.publicKey || '',
        // eslint-disable-next-line no-underscore-dangle
        userId: toShareWith?._id || '',
        cipherTextOfBlock,
        privateKey
      }})
  }

  function userRenderer(user: Partial<User> | any) {
    return (
      <>
        <TextUI color={theme.DARK_PRIMARY} fontWeight="Bold">
          {user.firstName}{user.middleName ? ` ${user.middleName}` : ''}{` ${user.lastName}`}
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

  useEffect(() => {
    if(shareBlockResponse.called){
      let title: "Error" | "Success" = "Error";
      let message: string = "Unable to share block"
      if(shareBlockResponse.data?.shareBlock.isSuccess){
        title = 'Success';
        message =  "Block shared"
      } else if(!shareBlockResponse.data?.shareBlock.isSuccess){
        message = shareBlockResponse.data?.shareBlock.errorMessage || ''
      } else if(shareBlockResponse.error?.message){
        message = shareBlockResponse.error?.message
      }
      Alert.alert(title, message)
    }
  }, [shareBlockResponse.called])

  return (
    <OverlayWithCard
      isOpen={props.isOpen}
      removePadding
      onClose={props.onClose}
      height={Dimensions.get("screen").height}
    >
      <Header
        title="Share"
        noBackButton
        isRightIcon
        onRightIconPress={props.onClose}
      />
      <View style={[styles.spacer,styles.flex]}>
        {toShareWith ? (
            <>
              <ScrollView>
                {userRenderer(toShareWith)}
                <CipherKeyFormikInput
                    isNotFormik
                    value={cipherTextOfBlock}
                    onChangeText={setCipherTextOfBlock}
                />
                <View style={styles.textAreaContainer}>
                  <TextInput
                      placeholder="Private Key"
                      value={privateKey}
                      onChangeText={setPrivateKey}
                      secureTextEntry
                      multiline
                      numberOfLines={2}
                      style={styles.textArea}
                  />
                </View>
              </ScrollView>
              <Button title="Submit" onPress={onSubmit} disabled={disabled} />
            </>
        ) : (
          <>
            <View>
              <SearchBar
                  textInputProps={{
                    placeholder: 'Search user to share with',
                    autoFocus: true,
                    value: searchString,
                    onChangeText: onChangeSearchTextHandler
                  }}
              />
            </View>
            <ScrollView>
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
            </ScrollView>
          </>
        )}
      </View>
    </OverlayWithCard>
  );
}
