import React from 'react';
import { View } from 'react-native';
import TextUI from 'UI/TextUI';
import { PublicLedgerNavigation } from 'navigationContainer/navigation';

export default function PublicLedger({ navigation }: PublicLedgerNavigation) {
  return (
    <View>
      <TextUI>
        PublicLedger
      </TextUI>
    </View>
  );
}
