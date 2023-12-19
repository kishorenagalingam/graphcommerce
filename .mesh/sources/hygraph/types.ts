// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HygraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  assetRowHeroBanner: Array<RowHeroBanner>;
  rowSpecialBannerAsset: Array<RowSpecialBanner>;
  assetRowProduct: Array<RowProduct>;
  assetPage: Array<Page>;
  assetPageLink: Array<PageLink>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
};


/** Asset system model */
export type AssetassetRowHeroBannerArgs = {
  where?: InputMaybe<RowHeroBannerWhereInput>;
  orderBy?: InputMaybe<RowHeroBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Asset system model */
export type AssetrowSpecialBannerAssetArgs = {
  where?: InputMaybe<RowSpecialBannerWhereInput>;
  orderBy?: InputMaybe<RowSpecialBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Asset system model */
export type AssetassetRowProductArgs = {
  where?: InputMaybe<RowProductWhereInput>;
  orderBy?: InputMaybe<RowProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Asset system model */
export type AssetassetPageArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Asset system model */
export type AssetassetPageLinkArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Asset system model */
export type AsseturlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: InputMaybe<ImageTransformationInput>;
  document?: InputMaybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetRowHeroBanner_every?: InputMaybe<RowHeroBannerWhereInput>;
  assetRowHeroBanner_some?: InputMaybe<RowHeroBannerWhereInput>;
  assetRowHeroBanner_none?: InputMaybe<RowHeroBannerWhereInput>;
  rowSpecialBannerAsset_every?: InputMaybe<RowSpecialBannerWhereInput>;
  rowSpecialBannerAsset_some?: InputMaybe<RowSpecialBannerWhereInput>;
  rowSpecialBannerAsset_none?: InputMaybe<RowSpecialBannerWhereInput>;
  assetRowProduct_every?: InputMaybe<RowProductWhereInput>;
  assetRowProduct_some?: InputMaybe<RowProductWhereInput>;
  assetRowProduct_none?: InputMaybe<RowProductWhereInput>;
  assetPage_every?: InputMaybe<PageWhereInput>;
  assetPage_some?: InputMaybe<PageWhereInput>;
  assetPage_none?: InputMaybe<PageWhereInput>;
  assetPageLink_every?: InputMaybe<PageLinkWhereInput>;
  assetPageLink_some?: InputMaybe<PageLinkWhereInput>;
  assetPageLink_none?: InputMaybe<PageLinkWhereInput>;
};

/** All of these conditions must match */
export type ConditionAnd = Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  conditions: Array<ConditionAndconditionsUnion>;
};


/** All of these conditions must match */
export type ConditionAndconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Identifies documents */
export type ConditionAndWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConditionAndWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConditionAndWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConditionAndWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  conditions_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  conditions_some?: InputMaybe<ConditionAndconditionsUnionWhereInput>;
};

export type ConditionAndconditionsUnion = ConditionNumber | ConditionOr | ConditionText;

export type ConditionAndconditionsUnionWhereInput = {
  ConditionNumber?: InputMaybe<ConditionNumberWhereInput>;
  ConditionText?: InputMaybe<ConditionTextWhereInput>;
  ConditionOr?: InputMaybe<ConditionOrWhereInput>;
};

export type ConditionNumber = Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  property: Scalars['String']['output'];
  value: Scalars['Float']['output'];
  operator: DynamicRowConditionNumberOperator;
};

/** Identifies documents */
export type ConditionNumberWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConditionNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConditionNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConditionNumberWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  property_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  property_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  property_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  property_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  property_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  property_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  property_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  property_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  property_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Float']['input']>;
  operator?: InputMaybe<DynamicRowConditionNumberOperator>;
  /** Any other value that exists and is not equal to the given value. */
  operator_not?: InputMaybe<DynamicRowConditionNumberOperator>;
  /** All values that are contained in given list. */
  operator_in?: InputMaybe<Array<InputMaybe<DynamicRowConditionNumberOperator>>>;
  /** All values that are not contained in given list. */
  operator_not_in?: InputMaybe<Array<InputMaybe<DynamicRowConditionNumberOperator>>>;
};

/** One of these conditions must match */
export type ConditionOr = Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  conditions: Array<ConditionOrconditionsUnion>;
};


/** One of these conditions must match */
export type ConditionOrconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Identifies documents */
export type ConditionOrWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConditionOrWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConditionOrWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConditionOrWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  conditions_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  conditions_some?: InputMaybe<ConditionOrconditionsUnionWhereInput>;
};

export type ConditionOrconditionsUnion = ConditionNumber | ConditionText;

export type ConditionOrconditionsUnionWhereInput = {
  ConditionNumber?: InputMaybe<ConditionNumberWhereInput>;
  ConditionText?: InputMaybe<ConditionTextWhereInput>;
};

export type ConditionText = Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  property: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Identifies documents */
export type ConditionTextWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConditionTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConditionTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConditionTextWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  property_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  property_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  property_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  property_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  property_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  property_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  property_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  property_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  property_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentFileTypes =
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'pdf'
  | 'html'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

/** Dynamic rows allow you to add specific Row models to pages based on the properties of the page */
export type DynamicRow = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Only used for internal reference */
  internalName: Scalars['String']['output'];
  /** One of these conditions must match */
  conditions: Array<DynamicRowconditionsUnion>;
  /** Where will the row be placed relative to the target */
  placement: DynamicRowPlacement;
  rows: Array<Union_rows_dynamicRows>;
  /** Optional: When the target is left blank it will place the Dynamic Row on the start or end. */
  target?: Maybe<DynamicRowTarget>;
  /** This field is deprecated. Use Rows instead. */
  row?: Maybe<Union_row_dynamicRow>;
};


/** Dynamic rows allow you to add specific Row models to pages based on the properties of the page */
export type DynamicRowconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Dynamic rows allow you to add specific Row models to pages based on the properties of the page */
export type DynamicRowrowsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type DynamicRowConditionNumberOperator =
  | 'GTE'
  | 'LTE'
  | 'EQUAL';

/** A connection to a list of items. */
export type DynamicRowConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DynamicRowEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type DynamicRowEdge = {
  /** The item at the end of the edge. */
  node: DynamicRow;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type DynamicRowOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'internalName_ASC'
  | 'internalName_DESC'
  | 'placement_ASC'
  | 'placement_DESC';

export type DynamicRowPlacement =
  | 'BEFORE'
  | 'AFTER'
  | 'REPLACE';

export type DynamicRowTarget = RowBlogContent | RowButtonLinkList | RowColumnOne | RowColumnThree | RowColumnTwo | RowContentLinks | RowHeroBanner | RowLinks | RowProduct | RowQuote | RowServiceOptions | RowSpecialBanner;

export type DynamicRowTargetWhereInput = {
  RowServiceOptions?: InputMaybe<RowServiceOptionsWhereInput>;
  RowQuote?: InputMaybe<RowQuoteWhereInput>;
  RowColumnOne?: InputMaybe<RowColumnOneWhereInput>;
  RowContentLinks?: InputMaybe<RowContentLinksWhereInput>;
  RowButtonLinkList?: InputMaybe<RowButtonLinkListWhereInput>;
  RowProduct?: InputMaybe<RowProductWhereInput>;
  RowSpecialBanner?: InputMaybe<RowSpecialBannerWhereInput>;
  RowLinks?: InputMaybe<RowLinksWhereInput>;
  RowHeroBanner?: InputMaybe<RowHeroBannerWhereInput>;
  RowColumnTwo?: InputMaybe<RowColumnTwoWhereInput>;
  RowColumnThree?: InputMaybe<RowColumnThreeWhereInput>;
  RowBlogContent?: InputMaybe<RowBlogContentWhereInput>;
};

/** Identifies documents */
export type DynamicRowWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DynamicRowWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DynamicRowWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DynamicRowWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  conditions_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  conditions_some?: InputMaybe<DynamicRowconditionsUnionWhereInput>;
  placement?: InputMaybe<DynamicRowPlacement>;
  /** Any other value that exists and is not equal to the given value. */
  placement_not?: InputMaybe<DynamicRowPlacement>;
  /** All values that are contained in given list. */
  placement_in?: InputMaybe<Array<InputMaybe<DynamicRowPlacement>>>;
  /** All values that are not contained in given list. */
  placement_not_in?: InputMaybe<Array<InputMaybe<DynamicRowPlacement>>>;
  /** All values in which the union is empty */
  rows_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  rows_some?: InputMaybe<Union_rows_dynamicRowsWhereInput>;
  /** All values in which the union is empty */
  target_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the union is connected to the given models */
  target?: InputMaybe<DynamicRowTargetWhereInput>;
  /** All values in which the union is empty */
  row_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the union is connected to the given models */
  row?: InputMaybe<Union_row_dynamicRowWhereInput>;
};

/** References DynamicRow record uniquely */
export type DynamicRowWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
};

export type DynamicRowconditionsUnion = ConditionAnd | ConditionNumber | ConditionText;

export type DynamicRowconditionsUnionWhereInput = {
  ConditionAnd?: InputMaybe<ConditionAndWhereInput>;
  ConditionNumber?: InputMaybe<ConditionNumberWhereInput>;
  ConditionText?: InputMaybe<ConditionTextWhereInput>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export type EntityTypeName =
  | 'RowServiceOptions'
  | 'Footer'
  | 'RowQuote'
  | 'Usps'
  | 'Page'
  /** Asset system model */
  | 'Asset'
  /** User system model */
  | 'User'
  /** Scheduled Operation system model */
  | 'ScheduledOperation'
  /** Scheduled Release system model */
  | 'ScheduledRelease'
  | 'RowContentLinks'
  /** Dynamic rows allow you to add specific Row models to pages based on the properties of the page */
  | 'DynamicRow'
  | 'RowButtonLinkList'
  | 'PageLink'
  | 'RowProduct'
  | 'RowSpecialBanner'
  | 'RowLinks'
  | 'RowHeroBanner'
  | 'RowColumnTwo'
  | 'RowColumnThree'
  | 'RowColumnOne'
  | 'RowBlogContent'
  /** All of these conditions must match */
  | 'ConditionAnd'
  | 'ConditionNumber'
  /** One of these conditions must match */
  | 'ConditionOr'
  | 'ConditionText';

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  /** The Type name of an object */
  typename: EntityTypeName;
  stage: Stage;
  locale?: InputMaybe<Locale>;
};

export type Footer = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  copyright?: Maybe<Scalars['String']['output']>;
  socialLinks: Array<PageLink>;
  legalLinks: Array<PageLink>;
};


export type FootersocialLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterlegalLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type FooterConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FooterEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type FooterEdge = {
  /** The item at the end of the edge. */
  node: Footer;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type FooterOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'copyright_ASC'
  | 'copyright_DESC';

/** Identifies documents */
export type FooterWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  copyright_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  copyright_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  copyright_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  copyright_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  copyright_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  copyright_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  socialLinks_every?: InputMaybe<PageLinkWhereInput>;
  socialLinks_some?: InputMaybe<PageLinkWhereInput>;
  socialLinks_none?: InputMaybe<PageLinkWhereInput>;
  legalLinks_every?: InputMaybe<PageLinkWhereInput>;
  legalLinks_some?: InputMaybe<PageLinkWhereInput>;
  legalLinks_none?: InputMaybe<PageLinkWhereInput>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max';

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
  /** System locale */
  | 'en_us'
  | 'nl';

export type MetaRobots =
  | 'INDEX_FOLLOW'
  | 'INDEX_NOFOLLOW'
  | 'NOINDEX_FOLLOW'
  | 'NOINDEX_NOFOLLOW';

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  metaTitle: Scalars['String']['output'];
  metaDescription: Scalars['String']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  /** 9:6 for general usage */
  asset?: Maybe<Asset>;
  relatedPages: Array<Page>;
  childPages: Array<Page>;
  rowButtonLinkLists: Array<RowButtonLinkList>;
  metaRobots: MetaRobots;
  content: Array<PageContent>;
};


export type PagerelatedPagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PagechildPagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PagerowButtonLinkListsArgs = {
  where?: InputMaybe<RowButtonLinkListWhereInput>;
  orderBy?: InputMaybe<RowButtonLinkListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PagecontentArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type PageConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type PageContent = RowBlogContent | RowButtonLinkList | RowColumnOne | RowColumnThree | RowColumnTwo | RowContentLinks | RowHeroBanner | RowLinks | RowProduct | RowQuote | RowServiceOptions | RowSpecialBanner;

export type PageContentWhereInput = {
  RowServiceOptions?: InputMaybe<RowServiceOptionsWhereInput>;
  RowButtonLinkList?: InputMaybe<RowButtonLinkListWhereInput>;
  RowContentLinks?: InputMaybe<RowContentLinksWhereInput>;
  RowQuote?: InputMaybe<RowQuoteWhereInput>;
  RowProduct?: InputMaybe<RowProductWhereInput>;
  RowSpecialBanner?: InputMaybe<RowSpecialBannerWhereInput>;
  RowHeroBanner?: InputMaybe<RowHeroBannerWhereInput>;
  RowColumnTwo?: InputMaybe<RowColumnTwoWhereInput>;
  RowColumnThree?: InputMaybe<RowColumnThreeWhereInput>;
  RowColumnOne?: InputMaybe<RowColumnOneWhereInput>;
  RowBlogContent?: InputMaybe<RowBlogContentWhereInput>;
  RowLinks?: InputMaybe<RowLinksWhereInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
};

export type PageLink = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  description?: Maybe<RichText>;
  url: Scalars['String']['output'];
  rowHeroBanners: Array<RowHeroBanner>;
  rowProductMultiple: Array<RowProduct>;
  rowSpecialBanners: Array<RowSpecialBanner>;
  rowLinks: Array<RowLinks>;
  footerSocialLinks: Array<Footer>;
  uspsMultiple: Array<Usps>;
  rowServiceOptionsMultiple: Array<RowServiceOptions>;
  rowContentLinks?: Maybe<RowContentLinks>;
  footerLegalLinks: Array<Footer>;
  asset?: Maybe<Asset>;
};


export type PageLinkrowHeroBannersArgs = {
  where?: InputMaybe<RowHeroBannerWhereInput>;
  orderBy?: InputMaybe<RowHeroBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkrowProductMultipleArgs = {
  where?: InputMaybe<RowProductWhereInput>;
  orderBy?: InputMaybe<RowProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkrowSpecialBannersArgs = {
  where?: InputMaybe<RowSpecialBannerWhereInput>;
  orderBy?: InputMaybe<RowSpecialBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkrowLinksArgs = {
  where?: InputMaybe<RowLinksWhereInput>;
  orderBy?: InputMaybe<RowLinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkfooterSocialLinksArgs = {
  where?: InputMaybe<FooterWhereInput>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkuspsMultipleArgs = {
  where?: InputMaybe<UspsWhereInput>;
  orderBy?: InputMaybe<UspsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkrowServiceOptionsMultipleArgs = {
  where?: InputMaybe<RowServiceOptionsWhereInput>;
  orderBy?: InputMaybe<RowServiceOptionsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkfooterLegalLinksArgs = {
  where?: InputMaybe<FooterWhereInput>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type PageLinkConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageLinkEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type PageLinkEdge = {
  /** The item at the end of the edge. */
  node: PageLink;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type PageLinkOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'url_ASC'
  | 'url_DESC';

/** Identifies documents */
export type PageLinkWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageLinkWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  rowHeroBanners_every?: InputMaybe<RowHeroBannerWhereInput>;
  rowHeroBanners_some?: InputMaybe<RowHeroBannerWhereInput>;
  rowHeroBanners_none?: InputMaybe<RowHeroBannerWhereInput>;
  rowProductMultiple_every?: InputMaybe<RowProductWhereInput>;
  rowProductMultiple_some?: InputMaybe<RowProductWhereInput>;
  rowProductMultiple_none?: InputMaybe<RowProductWhereInput>;
  rowSpecialBanners_every?: InputMaybe<RowSpecialBannerWhereInput>;
  rowSpecialBanners_some?: InputMaybe<RowSpecialBannerWhereInput>;
  rowSpecialBanners_none?: InputMaybe<RowSpecialBannerWhereInput>;
  rowLinks_every?: InputMaybe<RowLinksWhereInput>;
  rowLinks_some?: InputMaybe<RowLinksWhereInput>;
  rowLinks_none?: InputMaybe<RowLinksWhereInput>;
  footerSocialLinks_every?: InputMaybe<FooterWhereInput>;
  footerSocialLinks_some?: InputMaybe<FooterWhereInput>;
  footerSocialLinks_none?: InputMaybe<FooterWhereInput>;
  uspsMultiple_every?: InputMaybe<UspsWhereInput>;
  uspsMultiple_some?: InputMaybe<UspsWhereInput>;
  uspsMultiple_none?: InputMaybe<UspsWhereInput>;
  rowServiceOptionsMultiple_every?: InputMaybe<RowServiceOptionsWhereInput>;
  rowServiceOptionsMultiple_some?: InputMaybe<RowServiceOptionsWhereInput>;
  rowServiceOptionsMultiple_none?: InputMaybe<RowServiceOptionsWhereInput>;
  rowContentLinks?: InputMaybe<RowContentLinksWhereInput>;
  footerLegalLinks_every?: InputMaybe<FooterWhereInput>;
  footerLegalLinks_some?: InputMaybe<FooterWhereInput>;
  footerLegalLinks_none?: InputMaybe<FooterWhereInput>;
  asset?: InputMaybe<AssetWhereInput>;
};

/** References PageLink record uniquely */
export type PageLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'metaTitle_ASC'
  | 'metaTitle_DESC'
  | 'metaDescription_ASC'
  | 'metaDescription_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'metaRobots_ASC'
  | 'metaRobots_DESC';

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  metaTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<AssetWhereInput>;
  relatedPages_every?: InputMaybe<PageWhereInput>;
  relatedPages_some?: InputMaybe<PageWhereInput>;
  relatedPages_none?: InputMaybe<PageWhereInput>;
  childPages_every?: InputMaybe<PageWhereInput>;
  childPages_some?: InputMaybe<PageWhereInput>;
  childPages_none?: InputMaybe<PageWhereInput>;
  rowButtonLinkLists_every?: InputMaybe<RowButtonLinkListWhereInput>;
  rowButtonLinkLists_some?: InputMaybe<RowButtonLinkListWhereInput>;
  rowButtonLinkLists_none?: InputMaybe<RowButtonLinkListWhereInput>;
  metaRobots?: InputMaybe<MetaRobots>;
  /** Any other value that exists and is not equal to the given value. */
  metaRobots_not?: InputMaybe<MetaRobots>;
  /** All values that are contained in given list. */
  metaRobots_in?: InputMaybe<Array<InputMaybe<MetaRobots>>>;
  /** All values that are not contained in given list. */
  metaRobots_not_in?: InputMaybe<Array<InputMaybe<MetaRobots>>>;
  /** All values in which the union is empty */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  content_some?: InputMaybe<PageContentWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve multiple rowServiceOptionsMultiple */
  rowServiceOptionsMultiple: Array<RowServiceOptions>;
  /** Retrieve a single rowServiceOptions */
  rowServiceOptions?: Maybe<RowServiceOptions>;
  /** Retrieve multiple rowServiceOptionsMultiple using the Relay connection interface */
  rowServiceOptionsMultipleConnection: RowServiceOptionsConnection;
  /** Retrieve multiple footers */
  footers: Array<Footer>;
  /** Retrieve a single footer */
  footer?: Maybe<Footer>;
  /** Retrieve multiple footers using the Relay connection interface */
  footersConnection: FooterConnection;
  /** Retrieve multiple rowQuotes */
  rowQuotes: Array<RowQuote>;
  /** Retrieve a single rowQuote */
  rowQuote?: Maybe<RowQuote>;
  /** Retrieve multiple rowQuotes using the Relay connection interface */
  rowQuotesConnection: RowQuoteConnection;
  /** Retrieve multiple uspsMultiple */
  uspsMultiple: Array<Usps>;
  /** Retrieve a single usps */
  usps?: Maybe<Usps>;
  /** Retrieve multiple uspsMultiple using the Relay connection interface */
  uspsMultipleConnection: UspsConnection;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve multiple rowContentLinksMultiple */
  rowContentLinksMultiple: Array<RowContentLinks>;
  /** Retrieve a single rowContentLinks */
  rowContentLinks?: Maybe<RowContentLinks>;
  /** Retrieve multiple rowContentLinksMultiple using the Relay connection interface */
  rowContentLinksMultipleConnection: RowContentLinksConnection;
  /** Retrieve multiple dynamicRows */
  dynamicRows: Array<DynamicRow>;
  /** Retrieve a single dynamicRow */
  dynamicRow?: Maybe<DynamicRow>;
  /** Retrieve multiple dynamicRows using the Relay connection interface */
  dynamicRowsConnection: DynamicRowConnection;
  /** Retrieve multiple rowButtonLinkLists */
  rowButtonLinkLists: Array<RowButtonLinkList>;
  /** Retrieve a single rowButtonLinkList */
  rowButtonLinkList?: Maybe<RowButtonLinkList>;
  /** Retrieve multiple rowButtonLinkLists using the Relay connection interface */
  rowButtonLinkListsConnection: RowButtonLinkListConnection;
  /** Retrieve multiple pageLinks */
  pageLinks: Array<PageLink>;
  /** Retrieve a single pageLink */
  pageLink?: Maybe<PageLink>;
  /** Retrieve multiple pageLinks using the Relay connection interface */
  pageLinksConnection: PageLinkConnection;
  /** Retrieve multiple rowProductMultiple */
  rowProductMultiple: Array<RowProduct>;
  /** Retrieve a single rowProduct */
  rowProduct?: Maybe<RowProduct>;
  /** Retrieve multiple rowProductMultiple using the Relay connection interface */
  rowProductMultipleConnection: RowProductConnection;
  /** Retrieve multiple rowSpecialBanners */
  rowSpecialBanners: Array<RowSpecialBanner>;
  /** Retrieve a single rowSpecialBanner */
  rowSpecialBanner?: Maybe<RowSpecialBanner>;
  /** Retrieve multiple rowSpecialBanners using the Relay connection interface */
  rowSpecialBannersConnection: RowSpecialBannerConnection;
  /** Retrieve multiple rowLinksMultiple */
  rowLinksMultiple: Array<RowLinks>;
  /** Retrieve a single rowLinks */
  rowLinks?: Maybe<RowLinks>;
  /** Retrieve multiple rowLinksMultiple using the Relay connection interface */
  rowLinksMultipleConnection: RowLinksConnection;
  /** Retrieve multiple rowHeroBanners */
  rowHeroBanners: Array<RowHeroBanner>;
  /** Retrieve a single rowHeroBanner */
  rowHeroBanner?: Maybe<RowHeroBanner>;
  /** Retrieve multiple rowHeroBanners using the Relay connection interface */
  rowHeroBannersConnection: RowHeroBannerConnection;
  /** Retrieve multiple rowColumnTwos */
  rowColumnTwos: Array<RowColumnTwo>;
  /** Retrieve a single rowColumnTwo */
  rowColumnTwo?: Maybe<RowColumnTwo>;
  /** Retrieve multiple rowColumnTwos using the Relay connection interface */
  rowColumnTwosConnection: RowColumnTwoConnection;
  /** Retrieve multiple rowColumnThrees */
  rowColumnThrees: Array<RowColumnThree>;
  /** Retrieve a single rowColumnThree */
  rowColumnThree?: Maybe<RowColumnThree>;
  /** Retrieve multiple rowColumnThrees using the Relay connection interface */
  rowColumnThreesConnection: RowColumnThreeConnection;
  /** Retrieve multiple rowColumnOnes */
  rowColumnOnes: Array<RowColumnOne>;
  /** Retrieve a single rowColumnOne */
  rowColumnOne?: Maybe<RowColumnOne>;
  /** Retrieve multiple rowColumnOnes using the Relay connection interface */
  rowColumnOnesConnection: RowColumnOneConnection;
  /** Retrieve multiple rowBlogContents */
  rowBlogContents: Array<RowBlogContent>;
  /** Retrieve a single rowBlogContent */
  rowBlogContent?: Maybe<RowBlogContent>;
  /** Retrieve multiple rowBlogContents using the Relay connection interface */
  rowBlogContentsConnection: RowBlogContentConnection;
};


export type QueryentitiesArgs = {
  where: Array<EntityWhereInput>;
};


export type QueryrowServiceOptionsMultipleArgs = {
  where?: InputMaybe<RowServiceOptionsWhereInput>;
  orderBy?: InputMaybe<RowServiceOptionsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowServiceOptionsArgs = {
  where: RowServiceOptionsWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowServiceOptionsMultipleConnectionArgs = {
  where?: InputMaybe<RowServiceOptionsWhereInput>;
  orderBy?: InputMaybe<RowServiceOptionsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryfootersArgs = {
  where?: InputMaybe<FooterWhereInput>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryfooterArgs = {
  where: FooterWhereUniqueInput;
  stage?: Stage;
};


export type QueryfootersConnectionArgs = {
  where?: InputMaybe<FooterWhereInput>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowQuotesArgs = {
  where?: InputMaybe<RowQuoteWhereInput>;
  orderBy?: InputMaybe<RowQuoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowQuoteArgs = {
  where: RowQuoteWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowQuotesConnectionArgs = {
  where?: InputMaybe<RowQuoteWhereInput>;
  orderBy?: InputMaybe<RowQuoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryuspsMultipleArgs = {
  where?: InputMaybe<UspsWhereInput>;
  orderBy?: InputMaybe<UspsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryuspsArgs = {
  where: UspsWhereUniqueInput;
  stage?: Stage;
};


export type QueryuspsMultipleConnectionArgs = {
  where?: InputMaybe<UspsWhereInput>;
  orderBy?: InputMaybe<UspsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerypagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerypageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
};


export type QuerypagesConnectionArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowContentLinksMultipleArgs = {
  where?: InputMaybe<RowContentLinksWhereInput>;
  orderBy?: InputMaybe<RowContentLinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowContentLinksArgs = {
  where: RowContentLinksWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowContentLinksMultipleConnectionArgs = {
  where?: InputMaybe<RowContentLinksWhereInput>;
  orderBy?: InputMaybe<RowContentLinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerydynamicRowsArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  orderBy?: InputMaybe<DynamicRowOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerydynamicRowArgs = {
  where: DynamicRowWhereUniqueInput;
  stage?: Stage;
};


export type QuerydynamicRowsConnectionArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  orderBy?: InputMaybe<DynamicRowOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowButtonLinkListsArgs = {
  where?: InputMaybe<RowButtonLinkListWhereInput>;
  orderBy?: InputMaybe<RowButtonLinkListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowButtonLinkListArgs = {
  where: RowButtonLinkListWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowButtonLinkListsConnectionArgs = {
  where?: InputMaybe<RowButtonLinkListWhereInput>;
  orderBy?: InputMaybe<RowButtonLinkListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerypageLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QuerypageLinkArgs = {
  where: PageLinkWhereUniqueInput;
  stage?: Stage;
};


export type QuerypageLinksConnectionArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowProductMultipleArgs = {
  where?: InputMaybe<RowProductWhereInput>;
  orderBy?: InputMaybe<RowProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowProductArgs = {
  where: RowProductWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowProductMultipleConnectionArgs = {
  where?: InputMaybe<RowProductWhereInput>;
  orderBy?: InputMaybe<RowProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowSpecialBannersArgs = {
  where?: InputMaybe<RowSpecialBannerWhereInput>;
  orderBy?: InputMaybe<RowSpecialBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowSpecialBannerArgs = {
  where: RowSpecialBannerWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowSpecialBannersConnectionArgs = {
  where?: InputMaybe<RowSpecialBannerWhereInput>;
  orderBy?: InputMaybe<RowSpecialBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowLinksMultipleArgs = {
  where?: InputMaybe<RowLinksWhereInput>;
  orderBy?: InputMaybe<RowLinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowLinksArgs = {
  where: RowLinksWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowLinksMultipleConnectionArgs = {
  where?: InputMaybe<RowLinksWhereInput>;
  orderBy?: InputMaybe<RowLinksOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowHeroBannersArgs = {
  where?: InputMaybe<RowHeroBannerWhereInput>;
  orderBy?: InputMaybe<RowHeroBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowHeroBannerArgs = {
  where: RowHeroBannerWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowHeroBannersConnectionArgs = {
  where?: InputMaybe<RowHeroBannerWhereInput>;
  orderBy?: InputMaybe<RowHeroBannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnTwosArgs = {
  where?: InputMaybe<RowColumnTwoWhereInput>;
  orderBy?: InputMaybe<RowColumnTwoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnTwoArgs = {
  where: RowColumnTwoWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowColumnTwosConnectionArgs = {
  where?: InputMaybe<RowColumnTwoWhereInput>;
  orderBy?: InputMaybe<RowColumnTwoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnThreesArgs = {
  where?: InputMaybe<RowColumnThreeWhereInput>;
  orderBy?: InputMaybe<RowColumnThreeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnThreeArgs = {
  where: RowColumnThreeWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowColumnThreesConnectionArgs = {
  where?: InputMaybe<RowColumnThreeWhereInput>;
  orderBy?: InputMaybe<RowColumnThreeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnOnesArgs = {
  where?: InputMaybe<RowColumnOneWhereInput>;
  orderBy?: InputMaybe<RowColumnOneOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowColumnOneArgs = {
  where: RowColumnOneWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowColumnOnesConnectionArgs = {
  where?: InputMaybe<RowColumnOneWhereInput>;
  orderBy?: InputMaybe<RowColumnOneOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowBlogContentsArgs = {
  where?: InputMaybe<RowBlogContentWhereInput>;
  orderBy?: InputMaybe<RowBlogContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};


export type QueryrowBlogContentArgs = {
  where: RowBlogContentWhereUniqueInput;
  stage?: Stage;
};


export type QueryrowBlogContentsConnectionArgs = {
  where?: InputMaybe<RowBlogContentWhereInput>;
  orderBy?: InputMaybe<RowBlogContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

export type RowBlogContent = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  content?: Maybe<RichText>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowBlogContentdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowBlogContentpagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowBlogContentConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowBlogContentEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowBlogContentEdge = {
  /** The item at the end of the edge. */
  node: RowBlogContent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowBlogContentOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type RowBlogContentWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowBlogContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowBlogContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowBlogContentWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowBlogContent record uniquely */
export type RowBlogContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowButtonLinkList = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  title: Scalars['String']['output'];
  links: Array<Page>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowButtonLinkListlinksArgs = {
  where?: InputMaybe<PageWhereInput>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowButtonLinkListdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowButtonLinkListpagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowButtonLinkListConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowButtonLinkListEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowButtonLinkListEdge = {
  /** The item at the end of the edge. */
  node: RowButtonLinkList;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowButtonLinkListOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'title_ASC'
  | 'title_DESC';

/** Identifies documents */
export type RowButtonLinkListWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowButtonLinkListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowButtonLinkListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowButtonLinkListWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  links_every?: InputMaybe<PageWhereInput>;
  links_some?: InputMaybe<PageWhereInput>;
  links_none?: InputMaybe<PageWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowButtonLinkList record uniquely */
export type RowButtonLinkListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowColumnOne = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  colOne: RichText;
  rowColumnOneVariant?: Maybe<RowColumnOneVariants>;
  dynamicRows: Array<DynamicRow>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
  dynamicRow: Array<DynamicRow>;
};


export type RowColumnOnedynamicRowsArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowColumnOnedynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowColumnOnepagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowColumnOnedynamicRowArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowColumnOneConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowColumnOneEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowColumnOneEdge = {
  /** The item at the end of the edge. */
  node: RowColumnOne;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowColumnOneOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'rowColumnOneVariant_ASC'
  | 'rowColumnOneVariant_DESC';

export type RowColumnOneVariants =
  | 'Default'
  | 'Message';

/** Identifies documents */
export type RowColumnOneWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowColumnOneWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowColumnOneWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowColumnOneWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  rowColumnOneVariant?: InputMaybe<RowColumnOneVariants>;
  /** Any other value that exists and is not equal to the given value. */
  rowColumnOneVariant_not?: InputMaybe<RowColumnOneVariants>;
  /** All values that are contained in given list. */
  rowColumnOneVariant_in?: InputMaybe<Array<InputMaybe<RowColumnOneVariants>>>;
  /** All values that are not contained in given list. */
  rowColumnOneVariant_not_in?: InputMaybe<Array<InputMaybe<RowColumnOneVariants>>>;
  dynamicRows_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_none?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  dynamicRow_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_none?: InputMaybe<DynamicRowWhereInput>;
};

/** References RowColumnOne record uniquely */
export type RowColumnOneWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowColumnThree = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  colOne: RichText;
  colTwo: RichText;
  colThree: RichText;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowColumnThreedynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowColumnThreepagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowColumnThreeConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowColumnThreeEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowColumnThreeEdge = {
  /** The item at the end of the edge. */
  node: RowColumnThree;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowColumnThreeOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type RowColumnThreeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowColumnThreeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowColumnThreeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowColumnThreeWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowColumnThree record uniquely */
export type RowColumnThreeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowColumnTwo = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  colOne: RichText;
  colTwo: RichText;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowColumnTwodynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowColumnTwopagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowColumnTwoConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowColumnTwoEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowColumnTwoEdge = {
  /** The item at the end of the edge. */
  node: RowColumnTwo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowColumnTwoOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type RowColumnTwoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowColumnTwoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowColumnTwoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowColumnTwoWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowColumnTwo record uniquely */
export type RowColumnTwoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowContentLinks = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  title: Scalars['String']['output'];
  contentLinks: Array<PageLink>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowContentLinkscontentLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowContentLinksdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowContentLinkspagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowContentLinksConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowContentLinksEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowContentLinksEdge = {
  /** The item at the end of the edge. */
  node: RowContentLinks;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowContentLinksOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'title_ASC'
  | 'title_DESC';

/** Identifies documents */
export type RowContentLinksWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowContentLinksWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowContentLinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowContentLinksWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contentLinks_every?: InputMaybe<PageLinkWhereInput>;
  contentLinks_some?: InputMaybe<PageLinkWhereInput>;
  contentLinks_none?: InputMaybe<PageLinkWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowContentLinks record uniquely */
export type RowContentLinksWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowHeroBanner = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  copy: RichText;
  /** Video, landscape */
  asset: Asset;
  pageLinks: Array<PageLink>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowHeroBannerpageLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowHeroBannerdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowHeroBannerpagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowHeroBannerConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowHeroBannerEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowHeroBannerEdge = {
  /** The item at the end of the edge. */
  node: RowHeroBanner;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowHeroBannerOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type RowHeroBannerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowHeroBannerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowHeroBannerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowHeroBannerWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<AssetWhereInput>;
  pageLinks_every?: InputMaybe<PageLinkWhereInput>;
  pageLinks_some?: InputMaybe<PageLinkWhereInput>;
  pageLinks_none?: InputMaybe<PageLinkWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowHeroBanner record uniquely */
export type RowHeroBannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowLinks = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  title: Scalars['String']['output'];
  rowLinksCopy?: Maybe<RichText>;
  pageLinks: Array<PageLink>;
  linksVariant?: Maybe<RowLinksVariants>;
  dynamicRows: Array<DynamicRow>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
  dynamicRow: Array<DynamicRow>;
};


export type RowLinkspageLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowLinksdynamicRowsArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowLinksdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowLinkspagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowLinksdynamicRowArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowLinksConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowLinksEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowLinksEdge = {
  /** The item at the end of the edge. */
  node: RowLinks;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowLinksOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'linksVariant_ASC'
  | 'linksVariant_DESC';

export type RowLinksVariants =
  | 'Inline'
  | 'ImageLabelSwiper'
  | 'LogoSwiper'
  | 'Usps';

/** Identifies documents */
export type RowLinksWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowLinksWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowLinksWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowLinksWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pageLinks_every?: InputMaybe<PageLinkWhereInput>;
  pageLinks_some?: InputMaybe<PageLinkWhereInput>;
  pageLinks_none?: InputMaybe<PageLinkWhereInput>;
  linksVariant?: InputMaybe<RowLinksVariants>;
  /** Any other value that exists and is not equal to the given value. */
  linksVariant_not?: InputMaybe<RowLinksVariants>;
  /** All values that are contained in given list. */
  linksVariant_in?: InputMaybe<Array<InputMaybe<RowLinksVariants>>>;
  /** All values that are not contained in given list. */
  linksVariant_not_in?: InputMaybe<Array<InputMaybe<RowLinksVariants>>>;
  dynamicRows_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_none?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  dynamicRow_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_none?: InputMaybe<DynamicRowWhereInput>;
};

/** References RowLinks record uniquely */
export type RowLinksWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowProduct = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  title: Scalars['String']['output'];
  productCopy?: Maybe<RichText>;
  pageLinks: Array<PageLink>;
  asset?: Maybe<Asset>;
  /** Row Product component to render */
  variant?: Maybe<RowProductVariants>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowProductpageLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowProductdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowProductpagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowProductConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowProductEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowProductEdge = {
  /** The item at the end of the edge. */
  node: RowProduct;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowProductOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'variant_ASC'
  | 'variant_DESC';

/** All different kind of possible Row Product components to render */
export type RowProductVariants =
  | 'Backstory'
  | 'Feature'
  | 'FeatureBoxed'
  | 'Grid'
  | 'Related'
  | 'Reviews'
  | 'Specs'
  | 'Upsells'
  | 'Swipeable';

/** Identifies documents */
export type RowProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowProductWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pageLinks_every?: InputMaybe<PageLinkWhereInput>;
  pageLinks_some?: InputMaybe<PageLinkWhereInput>;
  pageLinks_none?: InputMaybe<PageLinkWhereInput>;
  asset?: InputMaybe<AssetWhereInput>;
  variant?: InputMaybe<RowProductVariants>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<RowProductVariants>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<Array<InputMaybe<RowProductVariants>>>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<Array<InputMaybe<RowProductVariants>>>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowProduct record uniquely */
export type RowProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowQuote = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  quote: RichText;
  dynamicRows: Array<DynamicRow>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
  dynamicRow: Array<DynamicRow>;
};


export type RowQuotedynamicRowsArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowQuotedynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowQuotepagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowQuotedynamicRowArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowQuoteConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowQuoteEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowQuoteEdge = {
  /** The item at the end of the edge. */
  node: RowQuote;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowQuoteOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type RowQuoteWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowQuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowQuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowQuoteWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dynamicRows_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRows_none?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  dynamicRow_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRow_none?: InputMaybe<DynamicRowWhereInput>;
};

/** References RowQuote record uniquely */
export type RowQuoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowServiceOptions = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  title: Scalars['String']['output'];
  serviceOptions: Array<PageLink>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowServiceOptionsserviceOptionsArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowServiceOptionsdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowServiceOptionspagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowServiceOptionsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowServiceOptionsEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowServiceOptionsEdge = {
  /** The item at the end of the edge. */
  node: RowServiceOptions;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowServiceOptionsOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'title_ASC'
  | 'title_DESC';

/** Identifies documents */
export type RowServiceOptionsWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowServiceOptionsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowServiceOptionsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowServiceOptionsWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  serviceOptions_every?: InputMaybe<PageLinkWhereInput>;
  serviceOptions_some?: InputMaybe<PageLinkWhereInput>;
  serviceOptions_none?: InputMaybe<PageLinkWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowServiceOptions record uniquely */
export type RowServiceOptionsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

export type RowSpecialBanner = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  topic?: Maybe<Scalars['String']['output']>;
  copy: RichText;
  asset?: Maybe<Asset>;
  pageLinks: Array<PageLink>;
  dynamicRowsTarget: Array<DynamicRow>;
  pages: Array<Page>;
};


export type RowSpecialBannerpageLinksArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowSpecialBannerdynamicRowsTargetArgs = {
  where?: InputMaybe<DynamicRowWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type RowSpecialBannerpagesArgs = {
  where?: InputMaybe<PageWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RowSpecialBannerConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RowSpecialBannerEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type RowSpecialBannerEdge = {
  /** The item at the end of the edge. */
  node: RowSpecialBanner;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type RowSpecialBannerOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC'
  | 'topic_ASC'
  | 'topic_DESC';

/** Identifies documents */
export type RowSpecialBannerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RowSpecialBannerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RowSpecialBannerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RowSpecialBannerWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<AssetWhereInput>;
  pageLinks_every?: InputMaybe<PageLinkWhereInput>;
  pageLinks_some?: InputMaybe<PageLinkWhereInput>;
  pageLinks_none?: InputMaybe<PageLinkWhereInput>;
  dynamicRowsTarget_every?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_some?: InputMaybe<DynamicRowWhereInput>;
  dynamicRowsTarget_none?: InputMaybe<DynamicRowWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
};

/** References RowSpecialBanner record uniquely */
export type RowSpecialBannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** operation Status */
  status: ScheduledOperationStatus;
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
};


/** Scheduled Operation system model */
export type ScheduledOperationaffectedDocumentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ScheduledOperationAffectedDocument = Asset | DynamicRow | Footer | Page | PageLink | RowBlogContent | RowButtonLinkList | RowColumnOne | RowColumnThree | RowColumnTwo | RowContentLinks | RowHeroBanner | RowLinks | RowProduct | RowQuote | RowServiceOptions | RowSpecialBanner | Usps;

export type ScheduledOperationOrderByInput =
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'status_ASC'
  | 'status_DESC';

/** System Scheduled Operation Status */
export type ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** Release Status */
  status: ScheduledReleaseStatus;
};


/** Scheduled Release system model */
export type ScheduledReleaseoperationsArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** System Scheduled Release Status */
export type ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
};

/** Stage system enumeration */
export type Stage =
  /** The Draft is the default stage for all your content. */
  | 'DRAFT'
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED';

export type Union_row_dynamicRow = RowColumnOne | RowLinks | RowQuote;

export type Union_row_dynamicRowWhereInput = {
  RowColumnOne?: InputMaybe<RowColumnOneWhereInput>;
  RowLinks?: InputMaybe<RowLinksWhereInput>;
  RowQuote?: InputMaybe<RowQuoteWhereInput>;
};

export type Union_rows_dynamicRows = RowColumnOne | RowLinks | RowQuote;

export type Union_rows_dynamicRowsWhereInput = {
  RowColumnOne?: InputMaybe<RowColumnOneWhereInput>;
  RowLinks?: InputMaybe<RowLinksWhereInput>;
  RowQuote?: InputMaybe<RowQuoteWhereInput>;
};

/** User system model */
export type User = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The username */
  name: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};

/** System User Kind */
export type UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

export type Usps = Node & Entity & {
  /** System stage field */
  stage: Stage;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  uspsMultiple: Array<PageLink>;
};


export type UspsuspsMultipleArgs = {
  where?: InputMaybe<PageLinkWhereInput>;
  orderBy?: InputMaybe<PageLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type UspsConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UspsEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type UspsEdge = {
  /** The item at the end of the edge. */
  node: Usps;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type UspsOrderByInput =
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identity_ASC'
  | 'identity_DESC';

/** Identifies documents */
export type UspsWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UspsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UspsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UspsWhereInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  identity_not?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values that are not contained in given list. */
  identity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values containing the given string. */
  identity_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identity_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identity_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not starting with the given string. */
  identity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identity_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uspsMultiple_every?: InputMaybe<PageLinkWhereInput>;
  uspsMultiple_some?: InputMaybe<PageLinkWhereInput>;
  uspsMultiple_none?: InputMaybe<PageLinkWhereInput>;
};

/** References Usps record uniquely */
export type UspsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
};

  export type QuerySdk = {
      /** Fetches an object given its ID **/
  entities: InContextSdkMethod<Query['entities'], QueryentitiesArgs, MeshContext>,
  /** Retrieve multiple rowServiceOptionsMultiple **/
  rowServiceOptionsMultiple: InContextSdkMethod<Query['rowServiceOptionsMultiple'], QueryrowServiceOptionsMultipleArgs, MeshContext>,
  /** Retrieve a single rowServiceOptions **/
  rowServiceOptions: InContextSdkMethod<Query['rowServiceOptions'], QueryrowServiceOptionsArgs, MeshContext>,
  /** Retrieve multiple rowServiceOptionsMultiple using the Relay connection interface **/
  rowServiceOptionsMultipleConnection: InContextSdkMethod<Query['rowServiceOptionsMultipleConnection'], QueryrowServiceOptionsMultipleConnectionArgs, MeshContext>,
  /** Retrieve multiple footers **/
  footers: InContextSdkMethod<Query['footers'], QueryfootersArgs, MeshContext>,
  /** Retrieve a single footer **/
  footer: InContextSdkMethod<Query['footer'], QueryfooterArgs, MeshContext>,
  /** Retrieve multiple footers using the Relay connection interface **/
  footersConnection: InContextSdkMethod<Query['footersConnection'], QueryfootersConnectionArgs, MeshContext>,
  /** Retrieve multiple rowQuotes **/
  rowQuotes: InContextSdkMethod<Query['rowQuotes'], QueryrowQuotesArgs, MeshContext>,
  /** Retrieve a single rowQuote **/
  rowQuote: InContextSdkMethod<Query['rowQuote'], QueryrowQuoteArgs, MeshContext>,
  /** Retrieve multiple rowQuotes using the Relay connection interface **/
  rowQuotesConnection: InContextSdkMethod<Query['rowQuotesConnection'], QueryrowQuotesConnectionArgs, MeshContext>,
  /** Retrieve multiple uspsMultiple **/
  uspsMultiple: InContextSdkMethod<Query['uspsMultiple'], QueryuspsMultipleArgs, MeshContext>,
  /** Retrieve a single usps **/
  usps: InContextSdkMethod<Query['usps'], QueryuspsArgs, MeshContext>,
  /** Retrieve multiple uspsMultiple using the Relay connection interface **/
  uspsMultipleConnection: InContextSdkMethod<Query['uspsMultipleConnection'], QueryuspsMultipleConnectionArgs, MeshContext>,
  /** Retrieve multiple pages **/
  pages: InContextSdkMethod<Query['pages'], QuerypagesArgs, MeshContext>,
  /** Retrieve a single page **/
  page: InContextSdkMethod<Query['page'], QuerypageArgs, MeshContext>,
  /** Retrieve multiple pages using the Relay connection interface **/
  pagesConnection: InContextSdkMethod<Query['pagesConnection'], QuerypagesConnectionArgs, MeshContext>,
  /** Retrieve multiple rowContentLinksMultiple **/
  rowContentLinksMultiple: InContextSdkMethod<Query['rowContentLinksMultiple'], QueryrowContentLinksMultipleArgs, MeshContext>,
  /** Retrieve a single rowContentLinks **/
  rowContentLinks: InContextSdkMethod<Query['rowContentLinks'], QueryrowContentLinksArgs, MeshContext>,
  /** Retrieve multiple rowContentLinksMultiple using the Relay connection interface **/
  rowContentLinksMultipleConnection: InContextSdkMethod<Query['rowContentLinksMultipleConnection'], QueryrowContentLinksMultipleConnectionArgs, MeshContext>,
  /** Retrieve multiple dynamicRows **/
  dynamicRows: InContextSdkMethod<Query['dynamicRows'], QuerydynamicRowsArgs, MeshContext>,
  /** Retrieve a single dynamicRow **/
  dynamicRow: InContextSdkMethod<Query['dynamicRow'], QuerydynamicRowArgs, MeshContext>,
  /** Retrieve multiple dynamicRows using the Relay connection interface **/
  dynamicRowsConnection: InContextSdkMethod<Query['dynamicRowsConnection'], QuerydynamicRowsConnectionArgs, MeshContext>,
  /** Retrieve multiple rowButtonLinkLists **/
  rowButtonLinkLists: InContextSdkMethod<Query['rowButtonLinkLists'], QueryrowButtonLinkListsArgs, MeshContext>,
  /** Retrieve a single rowButtonLinkList **/
  rowButtonLinkList: InContextSdkMethod<Query['rowButtonLinkList'], QueryrowButtonLinkListArgs, MeshContext>,
  /** Retrieve multiple rowButtonLinkLists using the Relay connection interface **/
  rowButtonLinkListsConnection: InContextSdkMethod<Query['rowButtonLinkListsConnection'], QueryrowButtonLinkListsConnectionArgs, MeshContext>,
  /** Retrieve multiple pageLinks **/
  pageLinks: InContextSdkMethod<Query['pageLinks'], QuerypageLinksArgs, MeshContext>,
  /** Retrieve a single pageLink **/
  pageLink: InContextSdkMethod<Query['pageLink'], QuerypageLinkArgs, MeshContext>,
  /** Retrieve multiple pageLinks using the Relay connection interface **/
  pageLinksConnection: InContextSdkMethod<Query['pageLinksConnection'], QuerypageLinksConnectionArgs, MeshContext>,
  /** Retrieve multiple rowProductMultiple **/
  rowProductMultiple: InContextSdkMethod<Query['rowProductMultiple'], QueryrowProductMultipleArgs, MeshContext>,
  /** Retrieve a single rowProduct **/
  rowProduct: InContextSdkMethod<Query['rowProduct'], QueryrowProductArgs, MeshContext>,
  /** Retrieve multiple rowProductMultiple using the Relay connection interface **/
  rowProductMultipleConnection: InContextSdkMethod<Query['rowProductMultipleConnection'], QueryrowProductMultipleConnectionArgs, MeshContext>,
  /** Retrieve multiple rowSpecialBanners **/
  rowSpecialBanners: InContextSdkMethod<Query['rowSpecialBanners'], QueryrowSpecialBannersArgs, MeshContext>,
  /** Retrieve a single rowSpecialBanner **/
  rowSpecialBanner: InContextSdkMethod<Query['rowSpecialBanner'], QueryrowSpecialBannerArgs, MeshContext>,
  /** Retrieve multiple rowSpecialBanners using the Relay connection interface **/
  rowSpecialBannersConnection: InContextSdkMethod<Query['rowSpecialBannersConnection'], QueryrowSpecialBannersConnectionArgs, MeshContext>,
  /** Retrieve multiple rowLinksMultiple **/
  rowLinksMultiple: InContextSdkMethod<Query['rowLinksMultiple'], QueryrowLinksMultipleArgs, MeshContext>,
  /** Retrieve a single rowLinks **/
  rowLinks: InContextSdkMethod<Query['rowLinks'], QueryrowLinksArgs, MeshContext>,
  /** Retrieve multiple rowLinksMultiple using the Relay connection interface **/
  rowLinksMultipleConnection: InContextSdkMethod<Query['rowLinksMultipleConnection'], QueryrowLinksMultipleConnectionArgs, MeshContext>,
  /** Retrieve multiple rowHeroBanners **/
  rowHeroBanners: InContextSdkMethod<Query['rowHeroBanners'], QueryrowHeroBannersArgs, MeshContext>,
  /** Retrieve a single rowHeroBanner **/
  rowHeroBanner: InContextSdkMethod<Query['rowHeroBanner'], QueryrowHeroBannerArgs, MeshContext>,
  /** Retrieve multiple rowHeroBanners using the Relay connection interface **/
  rowHeroBannersConnection: InContextSdkMethod<Query['rowHeroBannersConnection'], QueryrowHeroBannersConnectionArgs, MeshContext>,
  /** Retrieve multiple rowColumnTwos **/
  rowColumnTwos: InContextSdkMethod<Query['rowColumnTwos'], QueryrowColumnTwosArgs, MeshContext>,
  /** Retrieve a single rowColumnTwo **/
  rowColumnTwo: InContextSdkMethod<Query['rowColumnTwo'], QueryrowColumnTwoArgs, MeshContext>,
  /** Retrieve multiple rowColumnTwos using the Relay connection interface **/
  rowColumnTwosConnection: InContextSdkMethod<Query['rowColumnTwosConnection'], QueryrowColumnTwosConnectionArgs, MeshContext>,
  /** Retrieve multiple rowColumnThrees **/
  rowColumnThrees: InContextSdkMethod<Query['rowColumnThrees'], QueryrowColumnThreesArgs, MeshContext>,
  /** Retrieve a single rowColumnThree **/
  rowColumnThree: InContextSdkMethod<Query['rowColumnThree'], QueryrowColumnThreeArgs, MeshContext>,
  /** Retrieve multiple rowColumnThrees using the Relay connection interface **/
  rowColumnThreesConnection: InContextSdkMethod<Query['rowColumnThreesConnection'], QueryrowColumnThreesConnectionArgs, MeshContext>,
  /** Retrieve multiple rowColumnOnes **/
  rowColumnOnes: InContextSdkMethod<Query['rowColumnOnes'], QueryrowColumnOnesArgs, MeshContext>,
  /** Retrieve a single rowColumnOne **/
  rowColumnOne: InContextSdkMethod<Query['rowColumnOne'], QueryrowColumnOneArgs, MeshContext>,
  /** Retrieve multiple rowColumnOnes using the Relay connection interface **/
  rowColumnOnesConnection: InContextSdkMethod<Query['rowColumnOnesConnection'], QueryrowColumnOnesConnectionArgs, MeshContext>,
  /** Retrieve multiple rowBlogContents **/
  rowBlogContents: InContextSdkMethod<Query['rowBlogContents'], QueryrowBlogContentsArgs, MeshContext>,
  /** Retrieve a single rowBlogContent **/
  rowBlogContent: InContextSdkMethod<Query['rowBlogContent'], QueryrowBlogContentArgs, MeshContext>,
  /** Retrieve multiple rowBlogContents using the Relay connection interface **/
  rowBlogContentsConnection: InContextSdkMethod<Query['rowBlogContentsConnection'], QueryrowBlogContentsConnectionArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["hygraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
