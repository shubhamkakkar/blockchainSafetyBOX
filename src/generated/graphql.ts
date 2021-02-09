import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  {[P in K]-?: NonNullable<T[P]>};
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
  requestedBlocks: Array<Maybe<TRequestedDanglingBlock>>;
  myRequestedBlocks: Array<Maybe<TRequestedDanglingBlock>>;
  publicLedger: Array<Maybe<TPublicLedger>>;
  sharedBlocks: Array<SharedBlock>;
  receivedBlocks: Array<ReceivedBlock>;
  receivedBlock: DecryptedReceivedBlock;
  myBlocks: Array<TPublicLedger>;
  myBlock: MyBlock;
};

export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  signUp: ReturnedUserSignup;
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

export type ReturnedUserSignup = {
  __typename?: 'ReturnedUserSignup';
  _id: Scalars['ID'];
  publicKey: Scalars['String'];
  token: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  privateKey: Scalars['String'];
  role: Scalars['String'];
};

export enum RequestedBlockMessage {
  PersonalMedicalInformation = 'PERSONAL_MEDICAL_INFORMATION',
  InsuranceInformation = 'INSURANCE_INFORMATION',
  MedicalReports = 'MEDICAL_REPORTS',
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
};

export type SharedBlock = {
  __typename?: 'SharedBlock';
  encryptedMessage: Scalars['String'];
  recipientUser: User;
  sharedAt: Scalars['DateTime'];
};

export type TPublicLedger = {
  __typename?: 'TPublicLedger';
  _id: Scalars['ID'];
  data: Scalars['String'];
  ownerId: Scalars['ID'];
  shared: Array<SharedBlock>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type MyBlock = {
  __typename?: 'MyBlock';
  data: Scalars['String'];
  shared: Array<SharedBlock>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type TSharedBlockResponse = {
  __typename?: 'TSharedBlockResponse';
  isSuccess: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
};

export type TShareBlockArgs = {
  blockId: Scalars['ID'];
  recipientUserId: Scalars['ID'];
  cipherTextOfBlock: Scalars['String'];
  privateKey: Scalars['String'];
};

export type ReceivedBlockArgs = {
  blockId: Scalars['ID'];
  privateKey: Scalars['String'];
};

export type MyBlockArgs = {
  blockId: Scalars['ID'];
  cipherTextOfBlock: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
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
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<any>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  TSignupArgs: ResolverTypeWrapper<any>;
  TLoginArgs: ResolverTypeWrapper<any>;
  ReturnedUser: ResolverTypeWrapper<any>;
  ID: ResolverTypeWrapper<any>;
  User: ResolverTypeWrapper<any>;
  ReturnedUserSignup: ResolverTypeWrapper<any>;
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
  MyBlock: ResolverTypeWrapper<any>;
  TSharedBlockResponse: ResolverTypeWrapper<any>;
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
  Mutation: {};
  Subscription: {};
  TSignupArgs: any;
  TLoginArgs: any;
  ReturnedUser: any;
  ID: any;
  User: any;
  ReturnedUserSignup: any;
  TRequestedDanglingBlock: any;
  Int: any;
  TAcceptDeclineCount: any;
  TRequestDanglingBlock: any;
  TAcceptDenyParams: any;
  ReceivedBlock: any;
  DecryptedReceivedBlock: any;
  SharedBlock: any;
  TPublicLedger: any;
  MyBlock: any;
  TSharedBlockResponse: any;
  TShareBlockArgs: any;
  ReceivedBlockArgs: any;
  MyBlockArgs: any;
  Upload: any;
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CacheControlDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  login?: Resolver<
    ResolversTypes['ReturnedUser'],
    ParentType,
    ContextType,
    RequireFields<QueryLoginArgs, 'email' | 'password'>
  >;
  allUsers?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requestedBlocks?: Resolver<
    Array<Maybe<ResolversTypes['TRequestedDanglingBlock']>>,
    ParentType,
    ContextType
  >;
  myRequestedBlocks?: Resolver<
    Array<Maybe<ResolversTypes['TRequestedDanglingBlock']>>,
    ParentType,
    ContextType
  >;
  publicLedger?: Resolver<
    Array<Maybe<ResolversTypes['TPublicLedger']>>,
    ParentType,
    ContextType
  >;
  sharedBlocks?: Resolver<
    Array<ResolversTypes['SharedBlock']>,
    ParentType,
    ContextType
  >;
  receivedBlocks?: Resolver<
    Array<ResolversTypes['ReceivedBlock']>,
    ParentType,
    ContextType
  >;
  receivedBlock?: Resolver<
    ResolversTypes['DecryptedReceivedBlock'],
    ParentType,
    ContextType,
    RequireFields<QueryReceivedBlockArgs, 'receivedBlockArgs'>
  >;
  myBlocks?: Resolver<
    Array<ResolversTypes['TPublicLedger']>,
    ParentType,
    ContextType
  >;
  myBlock?: Resolver<
    ResolversTypes['MyBlock'],
    ParentType,
    ContextType,
    RequireFields<QueryMyBlockArgs, never>
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  signUp?: Resolver<
    ResolversTypes['ReturnedUserSignup'],
    ParentType,
    ContextType,
    RequireFields<
      MutationSignUpArgs,
      'email' | 'password' | 'firstName' | 'lastName'
    >
  >;
  makeUserAdmin?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationMakeUserAdminArgs, 'id'>
  >;
  requestDanglingBlock?: Resolver<
    ResolversTypes['TRequestedDanglingBlock'],
    ParentType,
    ContextType,
    RequireFields<MutationRequestDanglingBlockArgs, 'requestBlockData'>
  >;
  acceptDeclineBlock?: Resolver<
    Maybe<ResolversTypes['TAcceptDeclineCount']>,
    ParentType,
    ContextType,
    RequireFields<MutationAcceptDeclineBlockArgs, 'acceptDenyParams'>
  >;
  shareBlock?: Resolver<
    ResolversTypes['TSharedBlockResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationShareBlockArgs, 'shareBlockArgs'>
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  _?: SubscriptionResolver<
    Maybe<ResolversTypes['Boolean']>,
    '_',
    ParentType,
    ContextType
  >;
};

export type TSignupArgsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TSignupArgs'] = ResolversParentTypes['TSignupArgs']
> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLoginArgsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TLoginArgs'] = ResolversParentTypes['TLoginArgs']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnedUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReturnedUser'] = ResolversParentTypes['ReturnedUser']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnedUserSignupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReturnedUserSignup'] = ResolversParentTypes['ReturnedUserSignup']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  privateKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TRequestedDanglingBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TRequestedDanglingBlock'] = ResolversParentTypes['TRequestedDanglingBlock']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requestAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  acceptCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rejectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messageType?: Resolver<
    ResolversTypes['RequestedBlockMessage'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAcceptDeclineCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TAcceptDeclineCount'] = ResolversParentTypes['TAcceptDeclineCount']
> = {
  acceptCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rejectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReceivedBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReceivedBlock'] = ResolversParentTypes['ReceivedBlock']
> = {
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  sharedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecryptedReceivedBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DecryptedReceivedBlock'] = ResolversParentTypes['DecryptedReceivedBlock']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SharedBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SharedBlock'] = ResolversParentTypes['SharedBlock']
> = {
  encryptedMessage?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  recipientUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sharedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPublicLedgerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TPublicLedger'] = ResolversParentTypes['TPublicLedger']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shared?: Resolver<
    Array<ResolversTypes['SharedBlock']>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MyBlock'] = ResolversParentTypes['MyBlock']
> = {
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shared?: Resolver<
    Array<ResolversTypes['SharedBlock']>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSharedBlockResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TSharedBlockResponse'] = ResolversParentTypes['TSharedBlockResponse']
> = {
  isSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  errorMessage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
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
  ReturnedUserSignup?: ReturnedUserSignupResolvers<ContextType>;
  TRequestedDanglingBlock?: TRequestedDanglingBlockResolvers<ContextType>;
  TAcceptDeclineCount?: TAcceptDeclineCountResolvers<ContextType>;
  ReceivedBlock?: ReceivedBlockResolvers<ContextType>;
  DecryptedReceivedBlock?: DecryptedReceivedBlockResolvers<ContextType>;
  SharedBlock?: SharedBlockResolvers<ContextType>;
  TPublicLedger?: TPublicLedgerResolvers<ContextType>;
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
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginQuery = {__typename?: 'Query'} & {
  login: {__typename?: 'ReturnedUser'} & Pick<
    ReturnedUser,
    | '_id'
    | 'publicKey'
    | 'token'
    | 'firstName'
    | 'lastName'
    | 'middleName'
    | 'role'
  >;
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
}>;

export type SignUpMutation = {__typename?: 'Mutation'} & {
  signUp: {__typename?: 'ReturnedUserSignup'} & Pick<
    ReturnedUserSignup,
    | '_id'
    | 'publicKey'
    | 'token'
    | 'firstName'
    | 'lastName'
    | 'middleName'
    | 'role'
    | 'privateKey'
  >;
};

export type RequestDanglingBlockMutationVariables = Exact<{
  message: Scalars['String'];
  cipherKeyForTheMessage: Scalars['String'];
  messageType: RequestedBlockMessage;
}>;

export type RequestDanglingBlockMutation = {__typename?: 'Mutation'} & {
  requestDanglingBlock: {__typename?: 'TRequestedDanglingBlock'} & Pick<
    TRequestedDanglingBlock,
    '_id' | 'requestAt' | 'acceptCount' | 'rejectCount' | 'messageType'
  >;
};

export type UserProfileQueryVariables = Exact<{[key: string]: never}>;

export type UserProfileQuery = {__typename?: 'Query'} & {
  user: {__typename?: 'User'} & Pick<
    User,
    | '_id'
    | 'firstName'
    | 'lastName'
    | 'middleName'
    | 'email'
    | 'role'
    | 'publicKey'
  >;
};

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
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    baseOptions,
  );
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    baseOptions,
  );
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<
  LoginQuery,
  LoginQueryVariables
>;
export const SignUpDocument = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $middleName: String
  ) {
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
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

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
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const RequestDanglingBlockDocument = gql`
  mutation RequestDanglingBlock(
    $message: String!
    $cipherKeyForTheMessage: String!
    $messageType: RequestedBlockMessage!
  ) {
    requestDanglingBlock(
      requestBlockData: {
        message: $message
        cipherKeyForTheMessage: $cipherKeyForTheMessage
        messageType: $messageType
      }
    ) {
      _id
      requestAt
      acceptCount
      rejectCount
      messageType
    }
  }
`;
export type RequestDanglingBlockMutationFn = Apollo.MutationFunction<
  RequestDanglingBlockMutation,
  RequestDanglingBlockMutationVariables
>;

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
export function useRequestDanglingBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestDanglingBlockMutation,
    RequestDanglingBlockMutationVariables
  >,
) {
  return Apollo.useMutation<
    RequestDanglingBlockMutation,
    RequestDanglingBlockMutationVariables
  >(RequestDanglingBlockDocument, baseOptions);
}
export type RequestDanglingBlockMutationHookResult = ReturnType<
  typeof useRequestDanglingBlockMutation
>;
export type RequestDanglingBlockMutationResult = Apollo.MutationResult<RequestDanglingBlockMutation>;
export type RequestDanglingBlockMutationOptions = Apollo.BaseMutationOptions<
  RequestDanglingBlockMutation,
  RequestDanglingBlockMutationVariables
>;
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
export function useUserProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserProfileQuery,
    UserProfileQueryVariables
  >,
) {
  return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(
    UserProfileDocument,
    baseOptions,
  );
}
export function useUserProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfileQuery,
    UserProfileQueryVariables
  >,
) {
  return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(
    UserProfileDocument,
    baseOptions,
  );
}
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<
  typeof useUserProfileLazyQuery
>;
export type UserProfileQueryResult = Apollo.QueryResult<
  UserProfileQuery,
  UserProfileQueryVariables
>;
