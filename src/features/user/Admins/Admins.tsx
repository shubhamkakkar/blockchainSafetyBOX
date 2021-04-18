import React from 'react';
import { Navigation } from "types";
import styles from "features/blockchain/PublicLedgerScreen/publicLedgerScreen.styles";
import { Animated } from "react-native";
import AnimatedHeader from "UI/AnimatedHeader";
import MainContainer from "UI/MainContainer";
import ListAdmins from "features/user/Admins/ListAdmins";

export default function Admins(props: Navigation) {
    const scrollY = new Animated.Value(0);
    return (
        <MainContainer style={styles.container}>
            <ListAdmins
                scrollPositionHandler={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                navigation={props.navigation}
            />
            <AnimatedHeader
                title="Admins"
                scrollY={scrollY}
                navigation={props.navigation}
            />
        </MainContainer>
    );
};
