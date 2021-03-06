import { MyBlock, TPublicLedger } from 'generated/graphql';

export type Navigation = {
  navigation: any
};

export type DecryptBlock = {
  hash: TPublicLedger['hash'];
  _id: TPublicLedger['_id'];
  data: TPublicLedger['data'];
  shared: TPublicLedger['shared'];
  createdAt: TPublicLedger['createdAt'];
  messageType: TPublicLedger['messageType'];
};

export type MyBlockProps = DecryptBlock & Omit<MyBlock, '__typename'>;
