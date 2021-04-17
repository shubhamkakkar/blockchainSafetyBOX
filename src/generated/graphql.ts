import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  login: ReturnedUser;
  allUsers: Array<Maybe<User>>;
  user: User;
  searchUser: Array<Maybe<User>>;
  requestedBlocks: Array<Maybe<TRequestedDanglingBlock>>;
  isAlreadyVoted: Scalars['Boolean'];
  myRequestedBlocks: Array<Maybe<TRequestedDanglingBlock>>;
  publicLedger: Array<Maybe<TPublicLedger>>;
  sharedBlocks: Array<SharedBlock>;
  receivedBlocks: Array<ReceivedBlock>;
  receivedBlock: MyBlock;
  myBlocks: Array<TPublicLedger>;
  myBlock: MyBlock;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QuerySearchUserArgs = {
  filter: Scalars['String'];
};


export type QueryRequestedBlocksArgs = {
  isUserOnly?: Maybe<Scalars['Boolean']>;
};


export type QueryIsAlreadyVotedArgs = {
  blockId: Scalars['ID'];
};


export type QueryReceivedBlockArgs = {
  receivedBlockArgs: ReceivedBlockArgs;
};


export type QueryMyBlockArgs = {
  myBlockArgs?: Maybe<MyBlockArgs>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  signUp: ReturnedUser;
  makeUserAdmin: Scalars['Boolean'];
  requestDanglingBlock: TRequestedDanglingBlock;
  acceptDeclineBlock?: Maybe<TAcceptDeclineCount>;
  shareBlock: TSharedBlockResponse;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
};


export type MutationMakeUserAdminArgs = {
  id: Scalars['String'];
};


export type MutationRequestDanglingBlockArgs = {
  requestBlockData: TRequestDanglingBlock;
};


export type MutationAcceptDeclineBlockArgs = {
  acceptDenyParams: TAcceptDenyParams;
};


export type MutationShareBlockArgs = {
  shareBlockArgs: TShareBlockArgs;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type TSignupArgs = {
  __typename?: 'TSignupArgs';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type TLoginArgs = {
  __typename?: 'TLoginArgs';
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ReturnedUser = {
  __typename?: 'ReturnedUser';
  _id: Scalars['ID'];
  publicKey: Scalars['String'];
  token: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  privateKey: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  publicKey: Scalars['String'];
  role: Scalars['String'];
};

export enum RequestedBlockMessage {
  PersonalMedicalInformation = 'PERSONAL_MEDICAL_INFORMATION',
  InsuranceInformation = 'INSURANCE_INFORMATION',
  MedicalReports = 'MEDICAL_REPORTS'
}

export type TRequestedDanglingBlock = {
  __typename?: 'TRequestedDanglingBlock';
  _id: Scalars['ID'];
  user: User;
  requestAt: Scalars['DateTime'];
  message: Scalars['String'];
  acceptCount: Scalars['Int'];
  rejectCount: Scalars['Int'];
  messageType: RequestedBlockMessage;
};

export type TAcceptDeclineCount = {
  __typename?: 'TAcceptDeclineCount';
  acceptCount: Scalars['Int'];
  rejectCount: Scalars['Int'];
};

export type TRequestDanglingBlock = {
  cipherKeyForTheMessage: Scalars['String'];
  message: Scalars['String'];
  messageType: RequestedBlockMessage;
};

export type TAcceptDenyParams = {
  blockId: Scalars['ID'];
  isAccept?: Maybe<Scalars['Boolean']>;
};

export type ReceivedBlock = {
  __typename?: 'ReceivedBlock';
  sharedAt: Scalars['DateTime'];
  sharedBy: User;
  _id: Scalars['ID'];
};

export type DecryptedReceivedBlock = {
  __typename?: 'DecryptedReceivedBlock';
  message: Scalars['String'];
  sharedAt: Scalars['DateTime'];
  messageType: RequestedBlockMessage;
};

export type SharedBlock = {
  __typename?: 'SharedBlock';
  recipientUser: User;
  sharedAt: Scalars['DateTime'];
  _id: Scalars['ID'];
};

export type TPublicLedger = {
  __typename?: 'TPublicLedger';
  _id: Scalars['ID'];
  data: Scalars['String'];
  ownerId: Scalars['ID'];
  shared: Array<SharedBlock>;
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  ownerProfile?: Maybe<User>;
  messageType?: Maybe<RequestedBlockMessage>;
};

export type MyBlockShared = {
  __typename?: 'MyBlockShared';
  sharedAt: Scalars['DateTime'];
  _id: Scalars['ID'];
};

export type MyBlock = {
  __typename?: 'MyBlock';
  _id: Scalars['ID'];
  data: Scalars['String'];
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  prevHash: Scalars['String'];
  ownerProfile?: Maybe<User>;
  messageType?: Maybe<RequestedBlockMessage>;
  shared: Array<Maybe<MyBlockShared>>;
};

export type TSharedBlockResponse = {
  __typename?: 'TSharedBlockResponse';
  isSuccess: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
};

export type RecipientUser = {
  userId: Scalars['ID'];
};

export type TShareBlockArgs = {
  blockId: Scalars['ID'];
  recipientUserId: Scalars['ID'];
  cipherTextOfBlock: Scalars['String'];
};

export type ReceivedBlockArgs = {
  blockId: Scalars['ID'];
};

export type MyBlockArgs = {
  blockId: Scalars['ID'];
  cipherTextOfBlock: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<any>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  ID: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  TSignupArgs: ResolverTypeWrapper<any>;
  TLoginArgs: ResolverTypeWrapper<any>;
  ReturnedUser: ResolverTypeWrapper<any>;
  User: ResolverTypeWrapper<any>;
  RequestedBlockMessage: ResolverTypeWrapper<any>;
  TRequestedDanglingBlock: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  TAcceptDeclineCount: ResolverTypeWrapper<any>;
  TRequestDanglingBlock: ResolverTypeWrapper<any>;
  TAcceptDenyParams: ResolverTypeWrapper<any>;
  ReceivedBlock: ResolverTypeWrapper<any>;
  DecryptedReceivedBlock: ResolverTypeWrapper<any>;
  SharedBlock: ResolverTypeWrapper<any>;
  TPublicLedger: ResolverTypeWrapper<any>;
  MyBlockShared: ResolverTypeWrapper<any>;
  MyBlock: ResolverTypeWrapper<any>;
  TSharedBlockResponse: ResolverTypeWrapper<any>;
  RecipientUser: ResolverTypeWrapper<any>;
  TShareBlockArgs: ResolverTypeWrapper<any>;
  ReceivedBlockArgs: ResolverTypeWrapper<any>;
  MyBlockArgs: ResolverTypeWrapper<any>;
  CacheControlScope: ResolverTypeWrapper<any>;
  Upload: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: any;
  Query: {};
  Boolean: any;
  String: any;
  ID: any;
  Mutation: {};
  Subscription: {};
  TSignupArgs: any;
  TLoginArgs: any;
  ReturnedUser: any;
  User: any;
  TRequestedDanglingBlock: any;
  Int: any;
  TAcceptDeclineCount: any;
  TRequestDanglingBlock: any;
  TAcceptDenyParams: any;
  ReceivedBlock: any;
  DecryptedReceivedBlock: any;
  SharedBlock: any;
  TPublicLedger: any;
  MyBlockShared: any;
  MyBlock: any;
  TSharedBlockResponse: any;
  RecipientUser: any;
  TShareBlockArgs: any;
  ReceivedBlockArgs: any;
  MyBlockArgs: any;
  Upload: any;
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  login?: Resolver<ResolversTypes['ReturnedUser'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
  allUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  searchUser?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QuerySearchUserArgs, 'filter'>>;
  requestedBlocks?: Resolver<Array<Maybe<ResolversTypes['TRequestedDanglingBlock']>>, ParentType, ContextType, RequireFields<QueryRequestedBlocksArgs, never>>;
  isAlreadyVoted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryIsAlreadyVotedArgs, 'blockId'>>;
  myRequestedBlocks?: Resolver<Array<Maybe<ResolversTypes['TRequestedDanglingBlock']>>, ParentType, ContextType>;
  publicLedger?: Resolver<Array<Maybe<ResolversTypes['TPublicLedger']>>, ParentType, ContextType>;
  sharedBlocks?: Resolver<Array<ResolversTypes['SharedBlock']>, ParentType, ContextType>;
  receivedBlocks?: Resolver<Array<ResolversTypes['ReceivedBlock']>, ParentType, ContextType>;
  receivedBlock?: Resolver<ResolversTypes['MyBlock'], ParentType, ContextType, RequireFields<QueryReceivedBlockArgs, 'receivedBlockArgs'>>;
  myBlocks?: Resolver<Array<ResolversTypes['TPublicLedger']>, ParentType, ContextType>;
  myBlock?: Resolver<ResolversTypes['MyBlock'], ParentType, ContextType, RequireFields<QueryMyBlockArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  signUp?: Resolver<ResolversTypes['ReturnedUser'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'email' | 'password' | 'firstName' | 'lastName'>>;
  makeUserAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMakeUserAdminArgs, 'id'>>;
  requestDanglingBlock?: Resolver<ResolversTypes['TRequestedDanglingBlock'], ParentType, ContextType, RequireFields<MutationRequestDanglingBlockArgs, 'requestBlockData'>>;
  acceptDeclineBlock?: Resolver<Maybe<ResolversTypes['TAcceptDeclineCount']>, ParentType, ContextType, RequireFields<MutationAcceptDeclineBlockArgs, 'acceptDenyParams'>>;
  shareBlock?: Resolver<ResolversTypes['TSharedBlockResponse'], ParentType, ContextType, RequireFields<MutationShareBlockArgs, 'shareBlockArgs'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
};

export type TSignupArgsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TSignupArgs'] = ResolversParentTypes['TSignupArgs']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLoginArgsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TLoginArgs'] = ResolversParentTypes['TLoginArgs']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnedUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnedUser'] = ResolversParentTypes['ReturnedUser']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privateKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TRequestedDanglingBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['TRequestedDanglingBlock'] = ResolversParentTypes['TRequestedDanglingBlock']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requestAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  acceptCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rejectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messageType?: Resolver<ResolversTypes['RequestedBlockMessage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAcceptDeclineCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAcceptDeclineCount'] = ResolversParentTypes['TAcceptDeclineCount']> = {
  acceptCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rejectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReceivedBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReceivedBlock'] = ResolversParentTypes['ReceivedBlock']> = {
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  sharedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecryptedReceivedBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecryptedReceivedBlock'] = ResolversParentTypes['DecryptedReceivedBlock']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  messageType?: Resolver<ResolversTypes['RequestedBlockMessage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SharedBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['SharedBlock'] = ResolversParentTypes['SharedBlock']> = {
  recipientUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPublicLedgerResolvers<ContextType = any, ParentType extends ResolversParentTypes['TPublicLedger'] = ResolversParentTypes['TPublicLedger']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shared?: Resolver<Array<ResolversTypes['SharedBlock']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messageType?: Resolver<Maybe<ResolversTypes['RequestedBlockMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyBlockSharedResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyBlockShared'] = ResolversParentTypes['MyBlockShared']> = {
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyBlock'] = ResolversParentTypes['MyBlock']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prevHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messageType?: Resolver<Maybe<ResolversTypes['RequestedBlockMessage']>, ParentType, ContextType>;
  shared?: Resolver<Array<Maybe<ResolversTypes['MyBlockShared']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSharedBlockResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TSharedBlockResponse'] = ResolversParentTypes['TSharedBlockResponse']> = {
  isSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TSignupArgs?: TSignupArgsResolvers<ContextType>;
  TLoginArgs?: TLoginArgsResolvers<ContextType>;
  ReturnedUser?: ReturnedUserResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  TRequestedDanglingBlock?: TRequestedDanglingBlockResolvers<ContextType>;
  TAcceptDeclineCount?: TAcceptDeclineCountResolvers<ContextType>;
  ReceivedBlock?: ReceivedBlockResolvers<ContextType>;
  DecryptedReceivedBlock?: DecryptedReceivedBlockResolvers<ContextType>;
  SharedBlock?: SharedBlockResolvers<ContextType>;
  TPublicLedger?: TPublicLedgerResolvers<ContextType>;
  MyBlockShared?: MyBlockSharedResolvers<ContextType>;
  MyBlock?: MyBlockResolvers<ContextType>;
  TSharedBlockResponse?: TSharedBlockResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = (
  { __typename?: 'Query' }
  & { login: (
    { __typename?: 'ReturnedUser' }
    & Pick<ReturnedUser, '_id' | 'publicKey' | 'token' | 'firstName' | 'lastName' | 'middleName' | 'role'>
  ) }
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'ReturnedUser' }
    & Pick<ReturnedUser, '_id' | 'publicKey' | 'token' | 'firstName' | 'lastName' | 'middleName' | 'role' | 'privateKey'>
  ) }
);

export type RequestDanglingBlockMutationVariables = Exact<{
  message: Scalars['String'];
  cipherKeyForTheMessage: Scalars['String'];
  messageType: RequestedBlockMessage;
}>;


export type RequestDanglingBlockMutation = (
  { __typename?: 'Mutation' }
  & { requestDanglingBlock: (
    { __typename?: 'TRequestedDanglingBlock' }
    & Pick<TRequestedDanglingBlock, '_id' | 'requestAt' | 'acceptCount' | 'rejectCount' | 'messageType'>
  ) }
);

export type RequestedDanglingBlocksQueryVariables = Exact<{
  isUserOnly?: Maybe<Scalars['Boolean']>;
}>;


export type RequestedDanglingBlocksQuery = (
  { __typename?: 'Query' }
  & { requestedBlocks: Array<Maybe<(
    { __typename?: 'TRequestedDanglingBlock' }
    & Pick<TRequestedDanglingBlock, '_id' | 'requestAt' | 'acceptCount' | 'rejectCount' | 'messageType'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName' | 'middleName'>
    ) }
  )>> }
);

export type AcceptDeclineDanglingBlockMutationVariables = Exact<{
  blockId: Scalars['ID'];
  isAccept?: Maybe<Scalars['Boolean']>;
}>;


export type AcceptDeclineDanglingBlockMutation = (
  { __typename?: 'Mutation' }
  & { acceptDeclineBlock?: Maybe<(
    { __typename?: 'TAcceptDeclineCount' }
    & Pick<TAcceptDeclineCount, 'acceptCount' | 'rejectCount'>
  )> }
);

export type IsAlreadyVotedQueryVariables = Exact<{
  blockId: Scalars['ID'];
}>;


export type IsAlreadyVotedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isAlreadyVoted'>
);

export type PublicLedgerQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicLedgerQuery = (
  { __typename?: 'Query' }
  & { publicLedger: Array<Maybe<(
    { __typename?: 'TPublicLedger' }
    & Pick<TPublicLedger, '_id' | 'ownerId' | 'createdAt' | 'hash' | 'messageType'>
    & { shared: Array<(
      { __typename?: 'SharedBlock' }
      & Pick<SharedBlock, 'sharedAt'>
      & { recipientUser: (
        { __typename?: 'User' }
        & Pick<User, '_id' | 'firstName' | 'lastName' | 'middleName'>
      ) }
    )>, ownerProfile?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'middleName' | 'email'>
    )> }
  )>> }
);

export type MyBlockQueryVariables = Exact<{
  blockId: Scalars['ID'];
  cipherKey: Scalars['String'];
}>;


export type MyBlockQuery = (
  { __typename?: 'Query' }
  & { myBlock: (
    { __typename?: 'MyBlock' }
    & Pick<MyBlock, 'data' | 'prevHash' | 'createdAt' | 'messageType' | 'hash'>
  ) }
);

export type SearchUserQueryVariables = Exact<{
  filter: Scalars['String'];
}>;


export type SearchUserQuery = (
  { __typename?: 'Query' }
  & { searchUser: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'firstName' | 'lastName' | 'middleName' | 'publicKey' | 'email'>
  )>> }
);

export type ShareBlockMutationVariables = Exact<{
  blockId: Scalars['ID'];
  cipherTextOfBlock: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type ShareBlockMutation = (
  { __typename?: 'Mutation' }
  & { shareBlock: (
    { __typename?: 'TSharedBlockResponse' }
    & Pick<TSharedBlockResponse, 'errorMessage' | 'isSuccess'>
  ) }
);

export type SharedBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type SharedBlocksQuery = (
  { __typename?: 'Query' }
  & { sharedBlocks: Array<(
    { __typename?: 'SharedBlock' }
    & Pick<SharedBlock, '_id' | 'sharedAt'>
    & { recipientUser: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'middleName' | 'lastName' | 'email'>
    ) }
  )> }
);

export type ReceivedBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type ReceivedBlocksQuery = (
  { __typename?: 'Query' }
  & { receivedBlocks: Array<(
    { __typename?: 'ReceivedBlock' }
    & Pick<ReceivedBlock, '_id' | 'sharedAt'>
    & { sharedBy: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'email'>
    ) }
  )> }
);

export type ReceivedBlockQueryVariables = Exact<{
  blockId: Scalars['ID'];
}>;


export type ReceivedBlockQuery = (
  { __typename?: 'Query' }
  & { receivedBlock: (
    { __typename?: 'MyBlock' }
    & Pick<MyBlock, '_id' | 'data' | 'createdAt' | 'hash' | 'prevHash' | 'messageType'>
    & { shared: Array<Maybe<(
      { __typename?: 'MyBlockShared' }
      & Pick<MyBlockShared, 'sharedAt'>
    )>> }
  ) }
);

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'firstName' | 'lastName' | 'middleName' | 'email' | 'role' | 'publicKey'>
  ) }
);


export const LoginDocument = gql`
    query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    _id
    publicKey
    token
    firstName
    lastName
    middleName
    role
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!, $middleName: String) {
  signUp(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
    middleName: $middleName
  ) {
    _id
    publicKey
    token
    firstName
    lastName
    middleName
    role
    privateKey
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const RequestDanglingBlockDocument = gql`
    mutation RequestDanglingBlock($message: String!, $cipherKeyForTheMessage: String!, $messageType: RequestedBlockMessage!) {
  requestDanglingBlock(
    requestBlockData: {message: $message, cipherKeyForTheMessage: $cipherKeyForTheMessage, messageType: $messageType}
  ) {
    _id
    requestAt
    acceptCount
    rejectCount
    messageType
  }
}
    `;
export type RequestDanglingBlockMutationFn = Apollo.MutationFunction<RequestDanglingBlockMutation, RequestDanglingBlockMutationVariables>;

/**
 * __useRequestDanglingBlockMutation__
 *
 * To run a mutation, you first call `useRequestDanglingBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestDanglingBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestDanglingBlockMutation, { data, loading, error }] = useRequestDanglingBlockMutation({
 *   variables: {
 *      message: // value for 'message'
 *      cipherKeyForTheMessage: // value for 'cipherKeyForTheMessage'
 *      messageType: // value for 'messageType'
 *   },
 * });
 */
export function useRequestDanglingBlockMutation(baseOptions?: Apollo.MutationHookOptions<RequestDanglingBlockMutation, RequestDanglingBlockMutationVariables>) {
        return Apollo.useMutation<RequestDanglingBlockMutation, RequestDanglingBlockMutationVariables>(RequestDanglingBlockDocument, baseOptions);
      }
export type RequestDanglingBlockMutationHookResult = ReturnType<typeof useRequestDanglingBlockMutation>;
export type RequestDanglingBlockMutationResult = Apollo.MutationResult<RequestDanglingBlockMutation>;
export type RequestDanglingBlockMutationOptions = Apollo.BaseMutationOptions<RequestDanglingBlockMutation, RequestDanglingBlockMutationVariables>;
export const RequestedDanglingBlocksDocument = gql`
    query RequestedDanglingBlocks($isUserOnly: Boolean) {
  requestedBlocks(isUserOnly: $isUserOnly) {
    _id
    user {
      _id
      firstName
      lastName
      middleName
    }
    requestAt
    acceptCount
    rejectCount
    messageType
  }
}
    `;

/**
 * __useRequestedDanglingBlocksQuery__
 *
 * To run a query within a React component, call `useRequestedDanglingBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequestedDanglingBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestedDanglingBlocksQuery({
 *   variables: {
 *      isUserOnly: // value for 'isUserOnly'
 *   },
 * });
 */
export function useRequestedDanglingBlocksQuery(baseOptions?: Apollo.QueryHookOptions<RequestedDanglingBlocksQuery, RequestedDanglingBlocksQueryVariables>) {
        return Apollo.useQuery<RequestedDanglingBlocksQuery, RequestedDanglingBlocksQueryVariables>(RequestedDanglingBlocksDocument, baseOptions);
      }
export function useRequestedDanglingBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RequestedDanglingBlocksQuery, RequestedDanglingBlocksQueryVariables>) {
          return Apollo.useLazyQuery<RequestedDanglingBlocksQuery, RequestedDanglingBlocksQueryVariables>(RequestedDanglingBlocksDocument, baseOptions);
        }
export type RequestedDanglingBlocksQueryHookResult = ReturnType<typeof useRequestedDanglingBlocksQuery>;
export type RequestedDanglingBlocksLazyQueryHookResult = ReturnType<typeof useRequestedDanglingBlocksLazyQuery>;
export type RequestedDanglingBlocksQueryResult = Apollo.QueryResult<RequestedDanglingBlocksQuery, RequestedDanglingBlocksQueryVariables>;
export const AcceptDeclineDanglingBlockDocument = gql`
    mutation AcceptDeclineDanglingBlock($blockId: ID!, $isAccept: Boolean) {
  acceptDeclineBlock(acceptDenyParams: {blockId: $blockId, isAccept: $isAccept}) {
    acceptCount
    rejectCount
  }
}
    `;
export type AcceptDeclineDanglingBlockMutationFn = Apollo.MutationFunction<AcceptDeclineDanglingBlockMutation, AcceptDeclineDanglingBlockMutationVariables>;

/**
 * __useAcceptDeclineDanglingBlockMutation__
 *
 * To run a mutation, you first call `useAcceptDeclineDanglingBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptDeclineDanglingBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptDeclineDanglingBlockMutation, { data, loading, error }] = useAcceptDeclineDanglingBlockMutation({
 *   variables: {
 *      blockId: // value for 'blockId'
 *      isAccept: // value for 'isAccept'
 *   },
 * });
 */
export function useAcceptDeclineDanglingBlockMutation(baseOptions?: Apollo.MutationHookOptions<AcceptDeclineDanglingBlockMutation, AcceptDeclineDanglingBlockMutationVariables>) {
        return Apollo.useMutation<AcceptDeclineDanglingBlockMutation, AcceptDeclineDanglingBlockMutationVariables>(AcceptDeclineDanglingBlockDocument, baseOptions);
      }
export type AcceptDeclineDanglingBlockMutationHookResult = ReturnType<typeof useAcceptDeclineDanglingBlockMutation>;
export type AcceptDeclineDanglingBlockMutationResult = Apollo.MutationResult<AcceptDeclineDanglingBlockMutation>;
export type AcceptDeclineDanglingBlockMutationOptions = Apollo.BaseMutationOptions<AcceptDeclineDanglingBlockMutation, AcceptDeclineDanglingBlockMutationVariables>;
export const IsAlreadyVotedDocument = gql`
    query IsAlreadyVoted($blockId: ID!) {
  isAlreadyVoted(blockId: $blockId)
}
    `;

/**
 * __useIsAlreadyVotedQuery__
 *
 * To run a query within a React component, call `useIsAlreadyVotedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAlreadyVotedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAlreadyVotedQuery({
 *   variables: {
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useIsAlreadyVotedQuery(baseOptions: Apollo.QueryHookOptions<IsAlreadyVotedQuery, IsAlreadyVotedQueryVariables>) {
        return Apollo.useQuery<IsAlreadyVotedQuery, IsAlreadyVotedQueryVariables>(IsAlreadyVotedDocument, baseOptions);
      }
export function useIsAlreadyVotedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAlreadyVotedQuery, IsAlreadyVotedQueryVariables>) {
          return Apollo.useLazyQuery<IsAlreadyVotedQuery, IsAlreadyVotedQueryVariables>(IsAlreadyVotedDocument, baseOptions);
        }
export type IsAlreadyVotedQueryHookResult = ReturnType<typeof useIsAlreadyVotedQuery>;
export type IsAlreadyVotedLazyQueryHookResult = ReturnType<typeof useIsAlreadyVotedLazyQuery>;
export type IsAlreadyVotedQueryResult = Apollo.QueryResult<IsAlreadyVotedQuery, IsAlreadyVotedQueryVariables>;
export const PublicLedgerDocument = gql`
    query publicLedger {
  publicLedger {
    _id
    ownerId
    shared {
      sharedAt
      recipientUser {
        _id
        firstName
        lastName
        middleName
      }
    }
    createdAt
    hash
    ownerProfile {
      firstName
      lastName
      middleName
      email
    }
    messageType
  }
}
    `;

/**
 * __usePublicLedgerQuery__
 *
 * To run a query within a React component, call `usePublicLedgerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicLedgerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicLedgerQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicLedgerQuery(baseOptions?: Apollo.QueryHookOptions<PublicLedgerQuery, PublicLedgerQueryVariables>) {
        return Apollo.useQuery<PublicLedgerQuery, PublicLedgerQueryVariables>(PublicLedgerDocument, baseOptions);
      }
export function usePublicLedgerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicLedgerQuery, PublicLedgerQueryVariables>) {
          return Apollo.useLazyQuery<PublicLedgerQuery, PublicLedgerQueryVariables>(PublicLedgerDocument, baseOptions);
        }
export type PublicLedgerQueryHookResult = ReturnType<typeof usePublicLedgerQuery>;
export type PublicLedgerLazyQueryHookResult = ReturnType<typeof usePublicLedgerLazyQuery>;
export type PublicLedgerQueryResult = Apollo.QueryResult<PublicLedgerQuery, PublicLedgerQueryVariables>;
export const MyBlockDocument = gql`
    query MyBlock($blockId: ID!, $cipherKey: String!) {
  myBlock(myBlockArgs: {blockId: $blockId, cipherTextOfBlock: $cipherKey}) {
    data
    prevHash
    createdAt
    messageType
    hash
  }
}
    `;

/**
 * __useMyBlockQuery__
 *
 * To run a query within a React component, call `useMyBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBlockQuery({
 *   variables: {
 *      blockId: // value for 'blockId'
 *      cipherKey: // value for 'cipherKey'
 *   },
 * });
 */
export function useMyBlockQuery(baseOptions: Apollo.QueryHookOptions<MyBlockQuery, MyBlockQueryVariables>) {
        return Apollo.useQuery<MyBlockQuery, MyBlockQueryVariables>(MyBlockDocument, baseOptions);
      }
export function useMyBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyBlockQuery, MyBlockQueryVariables>) {
          return Apollo.useLazyQuery<MyBlockQuery, MyBlockQueryVariables>(MyBlockDocument, baseOptions);
        }
export type MyBlockQueryHookResult = ReturnType<typeof useMyBlockQuery>;
export type MyBlockLazyQueryHookResult = ReturnType<typeof useMyBlockLazyQuery>;
export type MyBlockQueryResult = Apollo.QueryResult<MyBlockQuery, MyBlockQueryVariables>;
export const SearchUserDocument = gql`
    query SearchUser($filter: String!) {
  searchUser(filter: $filter) {
    _id
    firstName
    lastName
    middleName
    publicKey
    email
  }
}
    `;

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
        return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, baseOptions);
      }
export function useSearchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, baseOptions);
        }
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>;
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>;
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>;
export const ShareBlockDocument = gql`
    mutation ShareBlock($blockId: ID!, $cipherTextOfBlock: String!, $userId: ID!) {
  shareBlock(
    shareBlockArgs: {blockId: $blockId, cipherTextOfBlock: $cipherTextOfBlock, recipientUserId: $userId}
  ) {
    errorMessage
    isSuccess
  }
}
    `;
export type ShareBlockMutationFn = Apollo.MutationFunction<ShareBlockMutation, ShareBlockMutationVariables>;

/**
 * __useShareBlockMutation__
 *
 * To run a mutation, you first call `useShareBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareBlockMutation, { data, loading, error }] = useShareBlockMutation({
 *   variables: {
 *      blockId: // value for 'blockId'
 *      cipherTextOfBlock: // value for 'cipherTextOfBlock'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useShareBlockMutation(baseOptions?: Apollo.MutationHookOptions<ShareBlockMutation, ShareBlockMutationVariables>) {
        return Apollo.useMutation<ShareBlockMutation, ShareBlockMutationVariables>(ShareBlockDocument, baseOptions);
      }
export type ShareBlockMutationHookResult = ReturnType<typeof useShareBlockMutation>;
export type ShareBlockMutationResult = Apollo.MutationResult<ShareBlockMutation>;
export type ShareBlockMutationOptions = Apollo.BaseMutationOptions<ShareBlockMutation, ShareBlockMutationVariables>;
export const SharedBlocksDocument = gql`
    query SharedBlocks {
  sharedBlocks {
    _id
    sharedAt
    recipientUser {
      firstName
      middleName
      lastName
      email
    }
  }
}
    `;

/**
 * __useSharedBlocksQuery__
 *
 * To run a query within a React component, call `useSharedBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSharedBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSharedBlocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSharedBlocksQuery(baseOptions?: Apollo.QueryHookOptions<SharedBlocksQuery, SharedBlocksQueryVariables>) {
        return Apollo.useQuery<SharedBlocksQuery, SharedBlocksQueryVariables>(SharedBlocksDocument, baseOptions);
      }
export function useSharedBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SharedBlocksQuery, SharedBlocksQueryVariables>) {
          return Apollo.useLazyQuery<SharedBlocksQuery, SharedBlocksQueryVariables>(SharedBlocksDocument, baseOptions);
        }
export type SharedBlocksQueryHookResult = ReturnType<typeof useSharedBlocksQuery>;
export type SharedBlocksLazyQueryHookResult = ReturnType<typeof useSharedBlocksLazyQuery>;
export type SharedBlocksQueryResult = Apollo.QueryResult<SharedBlocksQuery, SharedBlocksQueryVariables>;
export const ReceivedBlocksDocument = gql`
    query ReceivedBlocks {
  receivedBlocks {
    _id
    sharedAt
    sharedBy {
      firstName
      lastName
      email
    }
  }
}
    `;

/**
 * __useReceivedBlocksQuery__
 *
 * To run a query within a React component, call `useReceivedBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceivedBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceivedBlocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useReceivedBlocksQuery(baseOptions?: Apollo.QueryHookOptions<ReceivedBlocksQuery, ReceivedBlocksQueryVariables>) {
        return Apollo.useQuery<ReceivedBlocksQuery, ReceivedBlocksQueryVariables>(ReceivedBlocksDocument, baseOptions);
      }
export function useReceivedBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceivedBlocksQuery, ReceivedBlocksQueryVariables>) {
          return Apollo.useLazyQuery<ReceivedBlocksQuery, ReceivedBlocksQueryVariables>(ReceivedBlocksDocument, baseOptions);
        }
export type ReceivedBlocksQueryHookResult = ReturnType<typeof useReceivedBlocksQuery>;
export type ReceivedBlocksLazyQueryHookResult = ReturnType<typeof useReceivedBlocksLazyQuery>;
export type ReceivedBlocksQueryResult = Apollo.QueryResult<ReceivedBlocksQuery, ReceivedBlocksQueryVariables>;
export const ReceivedBlockDocument = gql`
    query ReceivedBlock($blockId: ID!) {
  receivedBlock(receivedBlockArgs: {blockId: $blockId}) {
    _id
    data
    createdAt
    hash
    prevHash
    messageType
    shared {
      sharedAt
    }
  }
}
    `;

/**
 * __useReceivedBlockQuery__
 *
 * To run a query within a React component, call `useReceivedBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceivedBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceivedBlockQuery({
 *   variables: {
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useReceivedBlockQuery(baseOptions: Apollo.QueryHookOptions<ReceivedBlockQuery, ReceivedBlockQueryVariables>) {
        return Apollo.useQuery<ReceivedBlockQuery, ReceivedBlockQueryVariables>(ReceivedBlockDocument, baseOptions);
      }
export function useReceivedBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceivedBlockQuery, ReceivedBlockQueryVariables>) {
          return Apollo.useLazyQuery<ReceivedBlockQuery, ReceivedBlockQueryVariables>(ReceivedBlockDocument, baseOptions);
        }
export type ReceivedBlockQueryHookResult = ReturnType<typeof useReceivedBlockQuery>;
export type ReceivedBlockLazyQueryHookResult = ReturnType<typeof useReceivedBlockLazyQuery>;
export type ReceivedBlockQueryResult = Apollo.QueryResult<ReceivedBlockQuery, ReceivedBlockQueryVariables>;
export const UserProfileDocument = gql`
    query UserProfile {
  user {
    _id
    firstName
    lastName
    middleName
    email
    role
    publicKey
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;