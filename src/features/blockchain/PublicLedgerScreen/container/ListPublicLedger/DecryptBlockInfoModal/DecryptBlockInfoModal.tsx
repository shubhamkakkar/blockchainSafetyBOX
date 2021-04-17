import React, { useEffect, useState } from 'react';
import OverlayWithCard from 'UI/Overlay/OverlayWithCard';
import Header from 'UI/Header';
import { Alert, View } from 'react-native';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { useMyBlockLazyQuery } from 'generated/graphql';
import { DecryptBlock, MyBlockProps } from 'types';
import styles from './decryptBlockInfoModal.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  toDecryptBlock: DecryptBlock;
  onSuccessHandler: (_block: MyBlockProps | any, showShare: boolean) => void;
};
export default function DecryptBlockInfoModal({
  toDecryptBlock,
  onSuccessHandler,
  ...rest
}: Props) {
  const [cipherKey, setCipherKey] = useState<string>('');
  const [myBlockMutation, myBlockResponse] = useMyBlockLazyQuery();

  function onChangeCipherKeyHandler(text: string) {
    setCipherKey(text);
  }

  function onSubmitHandler() {
    myBlockMutation({
      variables: {
        // eslint-disable-next-line no-underscore-dangle
        blockId: toDecryptBlock._id,
        cipherKey,
      },
    });
  }

  useEffect(() => {
    if (myBlockResponse.called && (!!myBlockResponse.error || !myBlockResponse.data)) {
      Alert.alert('Error', myBlockResponse.error?.message || 'Invalid Signature');
    } else if (myBlockResponse?.data?.myBlock?.prevHash) {
      const block: MyBlockProps = {
        ...toDecryptBlock,
        ...myBlockResponse?.data?.myBlock,
      };
      onSuccessHandler(block, true);
    }
  }, [myBlockResponse.error, myBlockResponse.data]);

  return (
    <OverlayWithCard
      removePadding
      {...rest}
    >
      <Header
        title="Decrypt Block Information"
        noBackButton
        isRightIcon
        onRightIconPress={rest.onClose}
      />
      <View style={styles.container}>
        <CipherKeyFormikInput
          isError={false}
          isNotFormik
          value={cipherKey}
          onChangeText={onChangeCipherKeyHandler}
        />
        <AnimatedButton
          title="Submit"
          disabled={!cipherKey.trim().length}
          onPress={onSubmitHandler}
          isLoading={myBlockResponse.loading}
          isSuccess={!!myBlockResponse.data?.myBlock.prevHash}
          isFailed={myBlockResponse.called && (!!myBlockResponse.error || !myBlockResponse.data)}
        />
      </View>
    </OverlayWithCard>
  );
}
