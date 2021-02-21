import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import EmptyUI from 'UI/EmptyUI';
import { TRequestedDanglingBlock, useRequestedDanglingBlocksLazyQuery } from 'generated/graphql';
import ListRequestedDanglingBlock from './ListRequestedDanglingBlock';

type Props = {
  isUserOnly?: boolean
};
export default function ListRequestedDanglingBlocks(props: Props) {
  const [requestBocks, requestedBlocks] = useRequestedDanglingBlocksLazyQuery(
    { variables: { isUserOnly: !!props.isUserOnly } },
  );

  async function fetchData() {
    try {
      await requestBocks();
    } catch (e) {
      console.log(`ListRequestedDanglingBlocks e() props.isUserOnly ${props.isUserOnly}`, e);
    }
  }

  function refetchHandler() {
    if (requestedBlocks && requestedBlocks.refetch) {
      console.log('refetchHandler', refetchHandler);
      requestedBlocks.refetch({ isUserOnly: !!props.isUserOnly });
    }
  }

  useEffect(() => {
    fetchData();
    /**
     * reset requesteddangling block ka reducer and usme ye wali value fit karengay
     * */
  }, []);

  return (
    <FlatList<TRequestedDanglingBlock>
      data={requestedBlocks?.data?.requestedBlocks as any}
      extraData={requestedBlocks?.data?.requestedBlocks}
      renderItem={({ item }) => (
        <ListRequestedDanglingBlock
          {...{ item, isUserOny: !!props.isUserOnly }}
        />
      )}
      keyExtractor={({ _id: id }) => id}
      ListEmptyComponent={<EmptyUI isLoading={requestedBlocks.loading} />}
      onRefresh={refetchHandler}
      refreshing={requestedBlocks.loading}
    />
  );
}
