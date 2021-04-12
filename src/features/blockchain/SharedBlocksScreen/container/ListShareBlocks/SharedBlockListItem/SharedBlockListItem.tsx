import React, { useMemo } from 'react';
import { Animated, Share, TouchableOpacity, View } from "react-native";
import { SharedBlock } from "generated/graphql";
import { dateString, determineIsSameDay } from "utils/dateHelpers";
import Icon from "UI/Icon";
import TextUI from "UI/TextUI";
import CreatedAt
    from "features/blockchain/PublicLedgerScreen/container/ListPublicLedger/PublicLedgerBlock/CreatedAt";
import LayoutAnimationWrapper from "UI/LayoutAnimationWrapper";
import styles  from './sharedBlockListItem.styles';

type Props = {
    item: SharedBlock
    prevDate?: string
    infoIconTranslateY: Animated.AnimatedInterpolation;
    onInfoIconPressHandler: (_block: SharedBlock) => void
    isReceived: boolean
};
export default function SharedBlockListItem(
    {
        item, prevDate, infoIconTranslateY, onInfoIconPressHandler, isReceived
    } : Props) {

    // @ts-ignore
    const user = useMemo(() => item[isReceived ? 'sharedBy' : 'recipientUser'],[isReceived])

    function onInfoIconPress() {
        onInfoIconPressHandler(item);
    }

    const isSameDayBool = determineIsSameDay(item.sharedAt, prevDate);
    return (
        <View style={styles.container}>
            {!isSameDayBool && (
                <View style={[styles.dateSlimSectionHeader, styles.row]}>
                    <Icon name="calendar" />
                    <TextUI>{dateString(new Date(item.sharedAt))}</TextUI>
                </View>
            )}
            <View style={styles.cardDescription}>
                <View style={[styles.row, styles.spaceBetween]}>
                    <CreatedAt
                        createdAt={item.sharedAt}
                    />
                    <Animated.View
                        style={[
                            styles.row, styles.hMargin5,
                            { transform: [{ translateY: infoIconTranslateY }] },
                        ]}
                    >
                        <TouchableOpacity onPress={onInfoIconPress}>
                            <Icon
                                name="shield-key"
                                size={30}
                                noMargin
                                isError
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <LayoutAnimationWrapper
                    title={isReceived ? 'Shared By' : "Recipient User"}
                    isAllCenter
                    buttonContainer={styles.tMargin5}
                >
                    <View style={[styles.row, styles.spaceBetween]}>
                        <TextUI center>
                            {user.firstName}{' '}{user.lastName}
                        </TextUI>
                        <TextUI center>
                            {user.email}
                        </TextUI>
                    </View>
                </LayoutAnimationWrapper>
            </View>
        </View>
    );
};
