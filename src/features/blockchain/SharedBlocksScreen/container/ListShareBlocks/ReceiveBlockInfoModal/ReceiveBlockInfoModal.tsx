import React, { useEffect, useState } from 'react';
import { MyBlockProps } from "types";
import OverlayWithCard from "UI/Overlay/OverlayWithCard";
import Header from "UI/Header";
import Loader from "UI/Loader";
import { Alert, View } from "react-native";
import { useReceivedBlockQuery } from "generated/graphql";
import styles from './receiveBlockInfoModal.styles'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    blockId: string;
    onSuccessHandler: (_block: MyBlockProps | any, showShare: boolean) => void;
};
export default function ReceiveBlockInfoModal({ blockId, onSuccessHandler, ...rest  }: Props) {
    const [isLoader, setIsLoader] = useState<boolean>(true);
    const receivedBlockResponse = useReceivedBlockQuery({ variables: { blockId }});

    useEffect(() => {
        if (receivedBlockResponse.called && !receivedBlockResponse.loading  && (!!receivedBlockResponse.error || !receivedBlockResponse.data)) {
            Alert.alert('Error', receivedBlockResponse.error?.message || 'Invalid Signature');
        } else if (receivedBlockResponse?.data?.receivedBlock?.prevHash) {
            setIsLoader(false);
            rest.onClose();
            onSuccessHandler(receivedBlockResponse?.data?.receivedBlock, false);
        }
    }, [receivedBlockResponse.error, receivedBlockResponse.data]);

    return (
        <OverlayWithCard
            removePadding
            {...rest}
        >
            <Header
                title="Received Block Information"
                noBackButton
                isRightIcon
                onRightIconPress={rest.onClose}
            />
            <View style={styles.container}>
                {isLoader && <Loader size="large" />}
            </View>
        </OverlayWithCard>
    );
};
