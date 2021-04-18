import React, { useEffect, useState } from 'react';
import {
    Animated,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent, ScrollView,
    TouchableOpacity,
    View
} from "react-native";
import {
    useAllUsersQuery,
    useMakeUserAdminMutation,
    User,
    useSearchUserLazyQuery
} from "generated/graphql";
import {
    FONT_SIZES,
    HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
    USER_ROLE_TYPE
} from "constants";
import KeyValuePairRow from "UI/KeyValuePairRow";
import EmptyUI from "UI/EmptyUI";
import theme from "theme";
import Icon from "UI/Icon";
import OverlayWithCard from "UI/Overlay/OverlayWithCard";
import Header from "UI/Header";
import SearchBar from "UI/SearchBar";
import styles from 'features/blockchain/MyBlockScreen/ShareBlockForm/shareBlockForm.styles';
import TextUI from "UI/TextUI";

type Props = {
    scrollPositionHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    navigation: any
};
export default function ListAdmins(props: Props) {
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    const [searchUserQuery, searchUserQueryResponse] = useSearchUserLazyQuery()
    const allUsersResponse = useAllUsersQuery({ variables : { isAdmin: true } })
    const [makeUserAdmin] = useMakeUserAdminMutation()
    const [makeUserAdminModalOpen, setMakeUserAdminModalOpen] = useState<boolean>(false);
    const [searchValue, setSearchingValue] = useState<string>('')
    useEffect(() => {
        if (searchValue.trim().length >= 3) {
            searchUserQuery({ variables: { filter: searchValue } })
        }
    }, [searchValue])

    function toggleMakeUserAdminModal(){
        setMakeUserAdminModalOpen(prevState => !prevState)
        setSearchingValue('')
        searchUserQuery()
    }

    async function onSearchItemPress(user: Partial<User>) {
        if(user?.role === USER_ROLE_TYPE.ADMIN){
            alert('Already Admin')
        } else {
           await makeUserAdmin({ variables: { id: user._id || '' } })
            toggleMakeUserAdminModal();
            await allUsersResponse.refetch()
        }
    }

    function renderAdmins({ item }: { item: User }){
        return (
            <View style={{ marginBottom: 20, padding: 20, borderBottomColor: theme.GREY, borderBottomWidth: 1 }}>
                <KeyValuePairRow label="First name" value={item.firstName} />
                <KeyValuePairRow label="Last name" value={item.lastName} />
                <KeyValuePairRow label="Email" value={item.email} />
            </View>
        )
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

    return (
        <>
        <AnimatedFlatList
            data={allUsersResponse.data?.allUsers || [] as User[]}
            extraData={allUsersResponse.data?.allUsers || [] as User[]}
            // @ts-ignore
            keyExtractor={(item: User) => item._id as string}
            // @ts-ignore
            renderItem={renderAdmins}
            scrollEventThrottle={16}
            onScroll={props.scrollPositionHandler}
            contentContainerStyle={{ flexGrow: 1, paddingTop: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT }}
            onRefresh={allUsersResponse.refetch}
            refreshing={allUsersResponse.loading}
            ListEmptyComponent={<EmptyUI isLoading={allUsersResponse.loading} />}
        />
        <OverlayWithCard
            isOpen={makeUserAdminModalOpen}
            removePadding onClose={toggleMakeUserAdminModal}
            height="100%"
        >
            <Header
                title="Search User"
                noBackButton
                isRightIcon
                onRightIconPress={toggleMakeUserAdminModal}
            />
            <SearchBar textInputProps={{ value: searchValue, onChangeText: setSearchingValue }} />
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
        </OverlayWithCard>
        <View style={{
            alignItems:'flex-end',
            justifyContent:'center',
            marginBottom: 10,
            marginRight: 10,
        }}>
            <TouchableOpacity
                onPress={toggleMakeUserAdminModal}
                style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:theme.PRIMARY,
                paddingLeft: 10,
                paddingVertical: 10,
                borderRadius: 20,
            }}>
                <Icon name="plus" color={theme.WHITE} />
            </TouchableOpacity>
        </View>
        </>
    );
};

