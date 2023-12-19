// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import fetchFn from "/home/z0094@ad.ziffity.com/Desktop/reactjs/my-project/node_modules/@graphcommerce/graphql-mesh/customFetch.js";

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import UseHttpDetailsExtensions from "@graphql-mesh/plugin-http-details-extensions";
import FilterSchemaTransform from "@graphql-mesh/transform-filter-schema";
import PruneTransform from "@graphql-mesh/transform-prune";
import { parse } from 'graphql';
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { HygraphTypes } from './sources/hygraph/types';
import type { M2Types } from './sources/m2/types';
import * as importedModule$0 from "./sources/hygraph/introspectionSchema";
import * as importedModule$1 from "./sources/m2/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Return information about the specified shopping cart. */
  cart?: Maybe<Cart>;
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<CategoryResult>;
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categories` instead.
   */
  category?: Maybe<CategoryTree>;
  /**
   * Return an array of categories based on the specified filters.
   * @deprecated Use `categories` instead.
   */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** Return information about CMS blocks. */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** Return details about a CMS page. */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list. */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** Return information about the store's currency. */
  currency?: Maybe<Currency>;
  /** Return the attribute type, given an attribute code and entity type. */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** Return detailed information about a customer account. */
  customer?: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  mollieCustomerOrder?: Maybe<CustomerOrder>;
  molliePaymentMethods?: Maybe<MolliePaymentMethodsOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<Products>;
  /** Return the full details for a specified product, category, or CMS page. */
  route?: Maybe<RoutableInterface>;
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<StoreConfig>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<EntityUrl>;
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist?: Maybe<WishlistOutput>;
  currentCartId?: Maybe<CurrentCartId>;
  currentCompareUid?: Maybe<CurrentCompareUid>;
  customerToken?: Maybe<CustomerToken>;
  guestWishlist?: Maybe<GuestWishlist>;
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


export type QueryavailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerycartArgs = {
  cart_id: Scalars['String']['input'];
};


export type QuerycategoriesArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycategoryListArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerycmsPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type QuerycountryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QuerygetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QuerygetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryisEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QuerymollieCustomerOrderArgs = {
  hash?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymolliePaymentMethodsArgs = {
  input?: InputMaybe<MolliePaymentMethodsInput>;
};


export type QuerypickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  sort?: InputMaybe<PickupLocationSortInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
};


export type QueryproductsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryrouteArgs = {
  url: Scalars['String']['input'];
};


export type QueryurlResolverArgs = {
  url: Scalars['String']['input'];
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

export type Mutation = {
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list. */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart;
  /** Change the password for the logged-in customer. */
  changeCustomerPassword?: Maybe<Customer>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']['output'];
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList?: Maybe<CompareList>;
  /** Use `createCustomerV2` instead. */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create a customer account. */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']['output']>;
  /** @deprecated Using the Order.mollie_redirect_url attribuut */
  createMollieTransaction?: Maybe<MollieTransactionOutput>;
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput;
  /** Delete the specified compare list. */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer account */
  deleteCustomer?: Maybe<Scalars['Boolean']['output']>;
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a customer's payment token. */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart;
  mollieApplePayValidation?: Maybe<MollieApplePayValidationOutput>;
  mollieProcessTransaction?: Maybe<MollieProcessTransactionOutput>;
  mollieRestoreCart?: Maybe<MollieResetCartOutput>;
  /** Convert the quote into an order. */
  placeOrder?: Maybe<PlaceOrderOutput>;
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Add all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']['output']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  /** Revoke the customer token. */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  /** Modify items in the cart. */
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Use `updateCustomerV2` instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information. */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
};


export type MutationaddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationaddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationaddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationaddProductsToCartArgs = {
  cartId: Scalars['String']['input'];
  cartItems: Array<CartItemInput>;
};


export type MutationaddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationaddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationaddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationaddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationaddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationapplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationassignCompareListToCustomerArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationassignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type MutationchangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationcreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationcreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationcreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationcreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationcreateEmptyCartArgs = {
  input?: InputMaybe<createEmptyCartInput>;
};


export type MutationcreateMollieTransactionArgs = {
  input?: InputMaybe<MollieTransactionInput>;
};


export type MutationcreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationcreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationcreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationdeleteCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationdeleteCustomerAddressArgs = {
  id: Scalars['Int']['input'];
};


export type MutationdeletePaymentTokenArgs = {
  public_hash: Scalars['String']['input'];
};


export type MutationgenerateCustomerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationgenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationhandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationmergeCartsArgs = {
  source_cart_id: Scalars['String']['input'];
  destination_cart_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmollieApplePayValidationArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  validationUrl: Scalars['String']['input'];
};


export type MutationmollieProcessTransactionArgs = {
  input?: InputMaybe<MollieProcessTransactionInput>;
};


export type MutationmollieRestoreCartArgs = {
  input?: InputMaybe<MollieResetCartInput>;
};


export type MutationplaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationremoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationremoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationremoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationremoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemsIds: Array<Scalars['ID']['input']>;
};


export type MutationreorderItemsArgs = {
  orderNumber: Scalars['String']['input'];
};


export type MutationrequestPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationresetPasswordArgs = {
  email: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationsendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationsetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationsetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationsetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationsetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationsetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationsetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationsubscribeEmailToNewsletterArgs = {
  email: Scalars['String']['input'];
};


export type MutationupdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationupdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationupdateCustomerAddressArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationupdateCustomerEmailArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationupdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationupdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']['input']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']['input']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']['input']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']['output']>;
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']['output']>;
};

/** Indicates whether to return results in ascending or descending order. */
export type SortEnum =
  | 'ASC'
  | 'DESC';

export type ComplexTextValue = {
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output'];
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']['output']>;
};

/** The list of available currency codes. */
export type CurrencyEnum =
  | 'AFN'
  | 'ALL'
  | 'AZN'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BSD'
  | 'BHD'
  | 'BDT'
  | 'BBD'
  | 'BYN'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BOB'
  | 'BAM'
  | 'BWP'
  | 'BRL'
  | 'GBP'
  | 'BND'
  | 'BGN'
  | 'BUK'
  | 'BIF'
  | 'KHR'
  | 'CAD'
  | 'CVE'
  | 'CZK'
  | 'KYD'
  | 'GQE'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CUP'
  | 'DKK'
  | 'DJF'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'SVC'
  | 'ERN'
  | 'EEK'
  | 'ETB'
  | 'EUR'
  | 'FKP'
  | 'FJD'
  | 'GMD'
  | 'GEK'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GTQ'
  | 'GNF'
  | 'GYD'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'IRR'
  | 'IQD'
  | 'ILS'
  | 'JMD'
  | 'JPY'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LYD'
  | 'LTL'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'LSM'
  | 'MRO'
  | 'MUR'
  | 'MXN'
  | 'MDL'
  | 'MNT'
  | 'MAD'
  | 'MZN'
  | 'MMK'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'YTL'
  | 'NZD'
  | 'NIC'
  | 'NGN'
  | 'KPW'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'PAB'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RHD'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'SHP'
  | 'STD'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'SKK'
  | 'SBD'
  | 'SOS'
  | 'ZAR'
  | 'KRW'
  | 'LKR'
  | 'SDG'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'SYP'
  | 'TWD'
  | 'TJS'
  | 'TZS'
  | 'THB'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TMM'
  | 'USD'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'CHE'
  | 'CHW'
  | 'XOF'
  | 'WST'
  | 'YER'
  | 'ZMK'
  | 'ZWD'
  | 'TRY'
  | 'AZM'
  | 'ROL'
  | 'TRL'
  | 'XPF';

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input'];
  /** Text the customer entered. */
  value: Scalars['String']['input'];
};

export type BatchMutationStatus =
  | 'SUCCESS'
  | 'FAILURE'
  | 'MIXED_RESULTS';

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  /** The returned error message. */
  message: Scalars['String']['output'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output'];
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Contains information about a store's configuration. */
export type StoreConfig = {
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer?: Maybe<Scalars['String']['output']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']['output']>;
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']['output']>;
  /** The base currency code. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified base URL. */
  base_url?: Maybe<Scalars['String']['output']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']['output']>;
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total?: Maybe<Scalars['String']['output']>;
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total?: Maybe<Scalars['String']['output']>;
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title?: Maybe<Scalars['String']['output']>;
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route?: Maybe<Scalars['String']['output']>;
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']['output']>;
  /** The copyright statement that appears at the bottom of each page. */
  copyright?: Maybe<Scalars['String']['output']>;
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description?: Maybe<Scalars['String']['output']>;
  /** The default display currency code. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords?: Maybe<Scalars['String']['output']>;
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title?: Maybe<Scalars['String']['output']>;
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice?: Maybe<Scalars['Int']['output']>;
  /** The landing page that is associated with the base URL. */
  front?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in Grid View. */
  grid_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values?: Maybe<Scalars['String']['output']>;
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes?: Maybe<Scalars['String']['output']>;
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon?: Maybe<Scalars['String']['output']>;
  /** The path to the logo that appears in the header. */
  header_logo_src?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group?: Maybe<Scalars['Boolean']['output']>;
  /** The format of the search results list. */
  list_mode?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in List View. */
  list_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values?: Maybe<Scalars['String']['output']>;
  /** The store locale. */
  locale?: Maybe<Scalars['String']['output']>;
  /** The Alt text that is associated with the logo. */
  logo_alt?: Maybe<Scalars['String']['output']>;
  /** The height of the logo image, in pixels. */
  logo_height?: Maybe<Scalars['Int']['output']>;
  /** The width of the logo image, in pixels. */
  logo_width?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']['output']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']['output']>;
  /** Mollie store config */
  mollie?: Maybe<MollieStoreConfig>;
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route?: Maybe<Scalars['String']['output']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled?: Maybe<Scalars['String']['output']>;
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix?: Maybe<Scalars['String']['output']>;
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']['output']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified secure base URL. */
  secure_base_url?: Maybe<Scalars['String']['output']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code?: Maybe<Scalars['ID']['output']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code?: Maybe<Scalars['ID']['output']>;
  /** The label assigned to the store group. */
  store_group_name?: Maybe<Scalars['String']['output']>;
  /** The label assigned to the store view. */
  store_name?: Maybe<Scalars['String']['output']>;
  /** The store view sort order. */
  store_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The time zone of the store. */
  timezone?: Maybe<Scalars['String']['output']>;
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix?: Maybe<Scalars['String']['output']>;
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator?: Maybe<Scalars['String']['output']>;
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url?: Maybe<Scalars['Boolean']['output']>;
  /** The unique ID for the website. */
  website_code?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id?: Maybe<Scalars['Int']['output']>;
  /** The label assigned to the website. */
  website_name?: Maybe<Scalars['String']['output']>;
  /** The unit of weight. */
  weight_unit?: Maybe<Scalars['String']['output']>;
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status?: Maybe<Scalars['String']['output']>;
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title?: Maybe<Scalars['String']['output']>;
};

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']['output']>;
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']['output']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<StorefrontProperties>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines whether the attribute is filterable in layered navigation. */
export type UseInLayeredNavigationOptions =
  | 'NO'
  | 'FILTERABLE_WITH_RESULTS'
  | 'FILTERABLE_NO_RESULT';

/** Defines an attribute option. */
export type AttributeOption = {
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute option value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']['input']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output'];
  /** Required. The text of the agreement. */
  content: Scalars['String']['output'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String']['output'];
};

/** Indicates how agreements are accepted. */
export type CheckoutAgreementMode =
  /** Conditions are automatically accepted upon checkout. */
  | 'AUTO'
  /** Shoppers must manually accept the conditions to place an order. */
  | 'MANUAL';

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export type PriceAdjustmentCodesEnum =
  | 'TAX'
  | 'WEEE'
  | 'WEEE_TAX';

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export type PriceAdjustmentDescriptionEnum =
  | 'INCLUDED'
  | 'EXCLUDED';

/** Defines the price type. */
export type PriceTypeEnum =
  | 'FIXED'
  | 'PERCENT'
  | 'DYNAMIC';

/** Defines the customizable date type. */
export type CustomizableDateTypeEnum =
  | 'DATE'
  | 'DATE_TIME'
  | 'TIME';

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<Price>;
};

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Represents a product price. */
export type ProductPrice = {
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']['output']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']['output']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfacereviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** A tree of child categories. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
};


/** Contains the hierarchy of categories. */
export type CategoryTreeproductsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']['output']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']['output']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
};


/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceproductsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** The category level. */
  category_level?: Maybe<Scalars['Int']['output']>;
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output'];
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']['output']>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = ProductInterface & RoutableInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains the results of a `products` query. */
export type Products = {
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};


/** Contains the results of a `products` query. */
export type ProductsaggregationsArgs = {
  filter?: InputMaybe<AggregationsFilterInput>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Brand */
  brand?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Colors */
  colors?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Compatible Phones */
  compatible_phones?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Debug: colors */
  debug_colors?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Debug: labels */
  debug_labels?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Debug: landmarks */
  debug_landmarks?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Dominant color */
  dominant_color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Art */
  print_art?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Holiday */
  print_holiday?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Search Labels */
  print_labels?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Search Landmarks */
  print_landmarks?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Landscape */
  print_landscape?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mood */
  print_mood?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Type */
  print_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Special Price */
  special_price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']['output']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']['output']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']['output']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']['output']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']['output']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']['output']>;
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  /** Details about the content of the media gallery item. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']['output']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']['output']>;
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output'];
  /** Details about the content of a video item. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']['output']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  /** The search suggestion of existing product. */
  search: Scalars['String']['output'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Defines a possible sort field. */
export type SortField = {
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  /** The default sort field value. */
  default?: Maybe<Scalars['String']['output']>;
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** This enumeration defines the entity type. */
export type UrlRewriteEntityTypeEnum =
  | 'CMS_PAGE'
  | 'PRODUCT'
  | 'CATEGORY';

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output'];
  /** The display value of the attribute. */
  value: Scalars['String']['output'];
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output'];
  /** The label of the attribute code. */
  label: Scalars['String']['output'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output'];
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output'];
};

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output'];
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']['output']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']['output']>;
  /** The customer's email address. Required. */
  email?: Maybe<Scalars['String']['output']>;
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']['output']>;
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerordersArgs = {
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CustomerOrderSortInput>;
  scope?: InputMaybe<ScopeTypeEnum>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Defines the customer name, addresses, and other details. */
export type Customerwishlist_v2Args = {
  id: Scalars['ID']['input'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerwishlistsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output'];
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output'];
};

/** Assigns a specific `cart_id` to the empty cart. */
export type createEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']['input'];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product. */
  sku: Scalars['String']['input'];
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The string value of the option. */
  value_string: Scalars['String']['input'];
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input'];
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars['String']['input']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']['input']>;
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['input'];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']['input'];
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['input'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['input'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input'];
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Optionally send a URL where the visitor is returned after completing the Mollie order */
  mollie_return_url?: InputMaybe<Scalars['String']['input']>;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** The internal name for the payment method. */
  code: Scalars['String']['input'];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** The Apple Pay payment token */
  mollie_applepay_payment_token?: InputMaybe<Scalars['String']['input']>;
  /** The card token provided by Mollie Components */
  mollie_card_token?: InputMaybe<Scalars['String']['input']>;
  /** Provided the issuer chosen by the end-user */
  mollie_selected_issuer?: InputMaybe<Scalars['String']['input']>;
  /** Provided the terminal chosen */
  mollie_selected_terminal?: InputMaybe<Scalars['String']['input']>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The email address of the guest. */
  email: Scalars['String']['input'];
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>;
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<Money>;
  mollie_payment_fee?: Maybe<MolliePaymentFee>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String']['output'];
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  /** The cart after setting the billing address. */
  cart: Cart;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  /** The cart after applying a coupon. */
  cart: Cart;
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  /** The ID of the order. */
  order: Order;
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<BillingCartAddress>;
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output'];
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output'];
  /** An array of products that have been added to the cart. */
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** Available issuers for the selected payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Pricing details for the quote. */
  prices?: Maybe<CartPrices>;
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output'];
};

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']['output']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output'];
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  /** The state or province code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The display label for the region. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  /** The country code. */
  code: Scalars['String']['output'];
  /** The display label for the country. */
  label: Scalars['String']['output'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output'];
  /** The label for the method code. */
  method_title: Scalars['String']['output'];
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']['output']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']['output']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean']['output'];
  /** Available issuers for this payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output'];
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  /** The cart after removing a coupon. */
  cart?: Maybe<Cart>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  /** The cart after updating products. */
  cart: Cart;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  /** The cart after removing an item. */
  cart: Cart;
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  /** The cart after setting the guest email. */
  cart: Cart;
};

export type SimpleCartItem = CartItemInterface & {
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

export type VirtualCartItem = CartItemInterface & {
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

export type CartItemError = {
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String']['output'];
};

export type CartItemErrorType =
  | 'UNDEFINED'
  | 'ITEM_QTY'
  | 'ITEM_INCREMENTS';

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  /** The amount of the discount. */
  amount: Money;
  /** A description of the discount. */
  label: Scalars['String']['output'];
};

export type CartItemPrices = {
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  price_including_tax?: Maybe<Money>;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<Money>;
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display name of the selected value. */
  label: Scalars['String']['output'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String']['output'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output'];
  /** A price value. */
  value: Scalars['Float']['output'];
};

/** Contains the order ID. */
export type Order = {
  mollie_payment_token?: Maybe<Scalars['String']['output']>;
  mollie_redirect_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

export type CartUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input'];
  /** The value assigned to the attribute. */
  value: Scalars['String']['input'];
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email: Scalars['String']['input'];
  /** The customer's first name. */
  firstname: Scalars['String']['input'];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname: Scalars['String']['input'];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output'];
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']['output']>;
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The address region code. */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** The valuue assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']['output']>;
};

/** The list of country codes. */
export type CountryCodeEnum =
  /** Afghanistan */
  | 'AF'
  /** Åland Islands */
  | 'AX'
  /** Albania */
  | 'AL'
  /** Algeria */
  | 'DZ'
  /** American Samoa */
  | 'AS'
  /** Andorra */
  | 'AD'
  /** Angola */
  | 'AO'
  /** Anguilla */
  | 'AI'
  /** Antarctica */
  | 'AQ'
  /** Antigua & Barbuda */
  | 'AG'
  /** Argentina */
  | 'AR'
  /** Armenia */
  | 'AM'
  /** Aruba */
  | 'AW'
  /** Australia */
  | 'AU'
  /** Austria */
  | 'AT'
  /** Azerbaijan */
  | 'AZ'
  /** Bahamas */
  | 'BS'
  /** Bahrain */
  | 'BH'
  /** Bangladesh */
  | 'BD'
  /** Barbados */
  | 'BB'
  /** Belarus */
  | 'BY'
  /** Belgium */
  | 'BE'
  /** Belize */
  | 'BZ'
  /** Benin */
  | 'BJ'
  /** Bermuda */
  | 'BM'
  /** Bhutan */
  | 'BT'
  /** Bolivia */
  | 'BO'
  /** Bosnia & Herzegovina */
  | 'BA'
  /** Botswana */
  | 'BW'
  /** Bouvet Island */
  | 'BV'
  /** Brazil */
  | 'BR'
  /** British Indian Ocean Territory */
  | 'IO'
  /** British Virgin Islands */
  | 'VG'
  /** Brunei */
  | 'BN'
  /** Bulgaria */
  | 'BG'
  /** Burkina Faso */
  | 'BF'
  /** Burundi */
  | 'BI'
  /** Cambodia */
  | 'KH'
  /** Cameroon */
  | 'CM'
  /** Canada */
  | 'CA'
  /** Cape Verde */
  | 'CV'
  /** Cayman Islands */
  | 'KY'
  /** Central African Republic */
  | 'CF'
  /** Chad */
  | 'TD'
  /** Chile */
  | 'CL'
  /** China */
  | 'CN'
  /** Christmas Island */
  | 'CX'
  /** Cocos (Keeling) Islands */
  | 'CC'
  /** Colombia */
  | 'CO'
  /** Comoros */
  | 'KM'
  /** Congo-Brazzaville */
  | 'CG'
  /** Congo-Kinshasa */
  | 'CD'
  /** Cook Islands */
  | 'CK'
  /** Costa Rica */
  | 'CR'
  /** Côte d’Ivoire */
  | 'CI'
  /** Croatia */
  | 'HR'
  /** Cuba */
  | 'CU'
  /** Cyprus */
  | 'CY'
  /** Czech Republic */
  | 'CZ'
  /** Denmark */
  | 'DK'
  /** Djibouti */
  | 'DJ'
  /** Dominica */
  | 'DM'
  /** Dominican Republic */
  | 'DO'
  /** Ecuador */
  | 'EC'
  /** Egypt */
  | 'EG'
  /** El Salvador */
  | 'SV'
  /** Equatorial Guinea */
  | 'GQ'
  /** Eritrea */
  | 'ER'
  /** Estonia */
  | 'EE'
  /** Ethiopia */
  | 'ET'
  /** Falkland Islands */
  | 'FK'
  /** Faroe Islands */
  | 'FO'
  /** Fiji */
  | 'FJ'
  /** Finland */
  | 'FI'
  /** France */
  | 'FR'
  /** French Guiana */
  | 'GF'
  /** French Polynesia */
  | 'PF'
  /** French Southern Territories */
  | 'TF'
  /** Gabon */
  | 'GA'
  /** Gambia */
  | 'GM'
  /** Georgia */
  | 'GE'
  /** Germany */
  | 'DE'
  /** Ghana */
  | 'GH'
  /** Gibraltar */
  | 'GI'
  /** Greece */
  | 'GR'
  /** Greenland */
  | 'GL'
  /** Grenada */
  | 'GD'
  /** Guadeloupe */
  | 'GP'
  /** Guam */
  | 'GU'
  /** Guatemala */
  | 'GT'
  /** Guernsey */
  | 'GG'
  /** Guinea */
  | 'GN'
  /** Guinea-Bissau */
  | 'GW'
  /** Guyana */
  | 'GY'
  /** Haiti */
  | 'HT'
  /** Heard &amp; McDonald Islands */
  | 'HM'
  /** Honduras */
  | 'HN'
  /** Hong Kong SAR China */
  | 'HK'
  /** Hungary */
  | 'HU'
  /** Iceland */
  | 'IS'
  /** India */
  | 'IN'
  /** Indonesia */
  | 'ID'
  /** Iran */
  | 'IR'
  /** Iraq */
  | 'IQ'
  /** Ireland */
  | 'IE'
  /** Isle of Man */
  | 'IM'
  /** Israel */
  | 'IL'
  /** Italy */
  | 'IT'
  /** Jamaica */
  | 'JM'
  /** Japan */
  | 'JP'
  /** Jersey */
  | 'JE'
  /** Jordan */
  | 'JO'
  /** Kazakhstan */
  | 'KZ'
  /** Kenya */
  | 'KE'
  /** Kiribati */
  | 'KI'
  /** Kuwait */
  | 'KW'
  /** Kyrgyzstan */
  | 'KG'
  /** Laos */
  | 'LA'
  /** Latvia */
  | 'LV'
  /** Lebanon */
  | 'LB'
  /** Lesotho */
  | 'LS'
  /** Liberia */
  | 'LR'
  /** Libya */
  | 'LY'
  /** Liechtenstein */
  | 'LI'
  /** Lithuania */
  | 'LT'
  /** Luxembourg */
  | 'LU'
  /** Macau SAR China */
  | 'MO'
  /** Macedonia */
  | 'MK'
  /** Madagascar */
  | 'MG'
  /** Malawi */
  | 'MW'
  /** Malaysia */
  | 'MY'
  /** Maldives */
  | 'MV'
  /** Mali */
  | 'ML'
  /** Malta */
  | 'MT'
  /** Marshall Islands */
  | 'MH'
  /** Martinique */
  | 'MQ'
  /** Mauritania */
  | 'MR'
  /** Mauritius */
  | 'MU'
  /** Mayotte */
  | 'YT'
  /** Mexico */
  | 'MX'
  /** Micronesia */
  | 'FM'
  /** Moldova */
  | 'MD'
  /** Monaco */
  | 'MC'
  /** Mongolia */
  | 'MN'
  /** Montenegro */
  | 'ME'
  /** Montserrat */
  | 'MS'
  /** Morocco */
  | 'MA'
  /** Mozambique */
  | 'MZ'
  /** Myanmar (Burma) */
  | 'MM'
  /** Namibia */
  | 'NA'
  /** Nauru */
  | 'NR'
  /** Nepal */
  | 'NP'
  /** Netherlands */
  | 'NL'
  /** Netherlands Antilles */
  | 'AN'
  /** New Caledonia */
  | 'NC'
  /** New Zealand */
  | 'NZ'
  /** Nicaragua */
  | 'NI'
  /** Niger */
  | 'NE'
  /** Nigeria */
  | 'NG'
  /** Niue */
  | 'NU'
  /** Norfolk Island */
  | 'NF'
  /** Northern Mariana Islands */
  | 'MP'
  /** North Korea */
  | 'KP'
  /** Norway */
  | 'NO'
  /** Oman */
  | 'OM'
  /** Pakistan */
  | 'PK'
  /** Palau */
  | 'PW'
  /** Palestinian Territories */
  | 'PS'
  /** Panama */
  | 'PA'
  /** Papua New Guinea */
  | 'PG'
  /** Paraguay */
  | 'PY'
  /** Peru */
  | 'PE'
  /** Philippines */
  | 'PH'
  /** Pitcairn Islands */
  | 'PN'
  /** Poland */
  | 'PL'
  /** Portugal */
  | 'PT'
  /** Qatar */
  | 'QA'
  /** Réunion */
  | 'RE'
  /** Romania */
  | 'RO'
  /** Russia */
  | 'RU'
  /** Rwanda */
  | 'RW'
  /** Samoa */
  | 'WS'
  /** San Marino */
  | 'SM'
  /** São Tomé & Príncipe */
  | 'ST'
  /** Saudi Arabia */
  | 'SA'
  /** Senegal */
  | 'SN'
  /** Serbia */
  | 'RS'
  /** Seychelles */
  | 'SC'
  /** Sierra Leone */
  | 'SL'
  /** Singapore */
  | 'SG'
  /** Slovakia */
  | 'SK'
  /** Slovenia */
  | 'SI'
  /** Solomon Islands */
  | 'SB'
  /** Somalia */
  | 'SO'
  /** South Africa */
  | 'ZA'
  /** South Georgia & South Sandwich Islands */
  | 'GS'
  /** South Korea */
  | 'KR'
  /** Spain */
  | 'ES'
  /** Sri Lanka */
  | 'LK'
  /** St. Barthélemy */
  | 'BL'
  /** St. Helena */
  | 'SH'
  /** St. Kitts & Nevis */
  | 'KN'
  /** St. Lucia */
  | 'LC'
  /** St. Martin */
  | 'MF'
  /** St. Pierre & Miquelon */
  | 'PM'
  /** St. Vincent & Grenadines */
  | 'VC'
  /** Sudan */
  | 'SD'
  /** Suriname */
  | 'SR'
  /** Svalbard & Jan Mayen */
  | 'SJ'
  /** Swaziland */
  | 'SZ'
  /** Sweden */
  | 'SE'
  /** Switzerland */
  | 'CH'
  /** Syria */
  | 'SY'
  /** Taiwan */
  | 'TW'
  /** Tajikistan */
  | 'TJ'
  /** Tanzania */
  | 'TZ'
  /** Thailand */
  | 'TH'
  /** Timor-Leste */
  | 'TL'
  /** Togo */
  | 'TG'
  /** Tokelau */
  | 'TK'
  /** Tonga */
  | 'TO'
  /** Trinidad & Tobago */
  | 'TT'
  /** Tunisia */
  | 'TN'
  /** Turkey */
  | 'TR'
  /** Turkmenistan */
  | 'TM'
  /** Turks & Caicos Islands */
  | 'TC'
  /** Tuvalu */
  | 'TV'
  /** Uganda */
  | 'UG'
  /** Ukraine */
  | 'UA'
  /** United Arab Emirates */
  | 'AE'
  /** United Kingdom */
  | 'GB'
  /** United States */
  | 'US'
  /** Uruguay */
  | 'UY'
  /** U.S. Outlying Islands */
  | 'UM'
  /** U.S. Virgin Islands */
  | 'VI'
  /** Uzbekistan */
  | 'UZ'
  /** Vanuatu */
  | 'VU'
  /** Vatican City */
  | 'VA'
  /** Venezuela */
  | 'VE'
  /** Vietnam */
  | 'VN'
  /** Wallis & Futuna */
  | 'WF'
  /** Western Sahara */
  | 'EH'
  /** Yemen */
  | 'YE'
  /** Zambia */
  | 'ZM'
  /** Zimbabwe */
  | 'ZW';

export type Currency = {
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']['output']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']['output']>;
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']['output']>;
};

export type Country = {
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<Region>>>;
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']['output']>;
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']['output']>;
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']['output']>;
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']['output']>;
};

export type Region = {
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']['output']>;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input'];
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

export type DownloadableCartItem = CartItemInterface & {
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = ProductInterface & RoutableInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately?: Maybe<Scalars['Int']['output']>;
  /** The heading above the list of downloadable products. */
  links_title?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

export type DownloadableFileTypeEnum =
  | 'FILE'
  | 'URL';

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']['output']>;
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output'];
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']['output']>;
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']['output']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']['output']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']['output']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']['output']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type ConfigurableCartItem = CartItemInterface & {
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

export type BundleCartItem = CartItemInterface & {
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  /** Sender name */
  from: Scalars['String']['output'];
  /** Gift message text */
  message: Scalars['String']['output'];
  /** Recipient name */
  to: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String']['input'];
  /** Gift message text */
  message: Scalars['String']['input'];
  /** Recipient name */
  to: Scalars['String']['input'];
};

export type SalesItemInterface = {
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  /** The billing address for the order. */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output'];
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']['output']>;
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number. */
  number: Scalars['String']['output'];
  /** The date the order was placed. */
  order_date: Scalars['String']['output'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output'];
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']['output']>;
  /** The current status of the order. */
  status: Scalars['String']['output'];
  /** Details about the calculated totals for this order. */
  total?: Maybe<OrderTotal>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The type of selected bundle product option. */
  type: Scalars['String']['output'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  /** Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']['output'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output'];
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']['output']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']['output']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output'];
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export type PriceViewEnum =
  | 'PRICE_RANGE'
  | 'AS_LOW_AS';

/** Defines whether bundle items must be shipped together. */
export type ShipBundleItemsEnum =
  | 'TOGETHER'
  | 'SEPARATELY';

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output'];
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items. */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Details about this product option. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colors?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_phones?: Maybe<Scalars['Int']['output']>;
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dominant_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_art?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_holiday?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_labels?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landmarks?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_landscape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_mood?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_pattern_swatch?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  print_type?: Maybe<Scalars['String']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  th_test_attribute?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** An array of simple product variants. */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductconfigurable_product_options_selectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product?: Maybe<SimpleProduct>;
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']['output']>;
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output'];
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']['output']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']['output']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']['output']>;
  /** The label of the product. */
  label?: Maybe<Scalars['String']['output']>;
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']['output']>;
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display text for the option. */
  option_label: Scalars['String']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output'];
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output'];
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** The display name of the option. */
  label: Scalars['String']['output'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output'];
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output'];
  /** The display name of the value. */
  label: Scalars['String']['output'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID']['output'];
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']['input'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']['input'];
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  city?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['Int']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']['input'];
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export type ProductStockStatus =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  /** The generated customer token. */
  customer_token: Scalars['String']['output'];
};

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  /** The status of the subscription request. */
  status?: Maybe<SubscriptionStatusesEnum>;
};

/** Indicates the status of the request. */
export type SubscriptionStatusesEnum =
  | 'NOT_ACTIVE'
  | 'SUBSCRIBED'
  | 'UNSUBSCRIBED'
  | 'UNCONFIRMED';

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The payment method code. */
  code: Scalars['String']['input'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']['input']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  /** The mode for the Payflow transaction. */
  mode?: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']['output']>;
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']['output']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']['output']>;
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']['output']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input'];
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']['input']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']['input']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']['output']>;
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']['output']>;
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkMode =
  | 'TEST'
  | 'LIVE';

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']['input'];
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']['input'];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']['input'];
  /** The credit card type. */
  cc_type: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input'];
};

export type PayflowProResponseOutput = {
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input'];
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Contains details of a product review. */
export type ProductReview = {
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output'];
  /** The date the review was created. */
  created_at: Scalars['String']['output'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String']['output'];
  /** The review text. */
  text: Scalars['String']['output'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  /** An encoded rating ID. */
  id: Scalars['String']['output'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  /** Product review details. */
  review: ProductReview;
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input'];
  /** The summary (title) of the review. */
  summary: Scalars['String']['input'];
  /** The review text. */
  text: Scalars['String']['input'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input'];
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export type CustomerOrderSortableField =
  /** Sorts customer orders by number */
  | 'NUMBER'
  /** Sorts customer orders by created_at field */
  | 'CREATED_AT';

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  /** The city or town. */
  city: Scalars['String']['output'];
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']['output']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type OrderItem = OrderItemInterface & {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  /** The name of the option. */
  label: Scalars['String']['output'];
  /** The value of the option. */
  value: Scalars['String']['output'];
};

/** Contains tax item details. */
export type TaxItem = {
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output'];
  /** A title that describes the tax. */
  title: Scalars['String']['output'];
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
};

/** Contains invoice details. */
export type Invoice = {
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output'];
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String']['output'];
  /** Invoice total amount details. */
  total?: Maybe<InvoiceTotal>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

export type InvoiceItem = InvoiceItemInterface & {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  /** The amount of the discount. */
  amount: Money;
};

/** Contains order shipment details. */
export type OrderShipment = {
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output'];
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String']['output'];
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  /** The text of the message. */
  message: Scalars['String']['output'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

export type ShipmentItem = ShipmentItemInterface & {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output'];
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']['output']>;
  /** The shipment tracking title. */
  title: Scalars['String']['output'];
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String']['output'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output'];
};

/** Contains credit memo details. */
export type CreditMemo = {
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output'];
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String']['output'];
  /** Details about the total refunded amount. */
  total?: Maybe<CreditMemoTotal>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

/** Contains a key-value pair. */
export type KeyValue = {
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CheckoutUserInputErrorCodes =
  | 'REORDER_NOT_AVAILABLE'
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

/** This enumeration defines the scope type for customer orders. */
export type ScopeTypeEnum =
  | 'GLOBAL'
  | 'WEBSITE'
  | 'STORE';

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']['output']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  /** A parameter name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A parameter value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input'];
  /** The text of the message to be sent. */
  message: Scalars['String']['input'];
  /** The name of the sender. */
  name: Scalars['String']['input'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input'];
  /** The name of the recipient. */
  name: Scalars['String']['input'];
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender?: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  /** The email address of the sender. */
  email: Scalars['String']['output'];
  /** The text of the message to be sent. */
  message: Scalars['String']['output'];
  /** The name of the sender. */
  name: Scalars['String']['output'];
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  /** The email address of the recipient. */
  email: Scalars['String']['output'];
  /** The name of the recipient. */
  name: Scalars['String']['output'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output'];
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

/** Describes the swatch type and a value. */
export type SwatchData = {
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value for the swatch item. It could be text or an image link. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type TextSwatchData = SwatchDataInterface & {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output'];
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** The stored payment method available to the customer. */
export type PaymentToken = {
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']['output']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output'];
  /** The public hash of the token. */
  public_hash: Scalars['String']['output'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export type PaymentTokenTypeEnum =
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'card'
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'account';

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']['output']>;
};

/** Lists display settings for the Fixed Product Tax. */
export type FixedProductTaxDisplaySettings =
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
  | 'INCLUDE_FPT_WITHOUT_DETAILS'
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
  | 'INCLUDE_FPT_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  | 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
  | 'EXCLUDE_FPT_WITHOUT_DETAILS'
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
  | 'FPT_DISABLED';

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** Contains a customer wish list. */
export type Wishlist = {
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']['output']>;
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']['output']>;
};


/** Contains a customer wish list. */
export type Wishlistitems_v2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Contains details about a wish list item. */
export type WishlistItem = {
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']['output']>;
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Details about the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output'];
};

/** A list of possible error types. */
export type WishlistCartUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** A list of possible error types. */
export type WishListUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'UNDEFINED';

export type PaymentMethod = {
  /** Available issuers for this payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
};

export type MollieStoreConfig = {
  /** Is Mollie running in live mode? */
  live_mode?: Maybe<Scalars['Boolean']['output']>;
  /** The profile ID used for this store */
  profile_id?: Maybe<Scalars['String']['output']>;
};

export type MollieIssuer = {
  code?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentMethodMeta = {
  image?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentMethod = {
  code?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MollieResetCartOutput = {
  cart: Cart;
};

export type MolliePaymentMethodsOutput = {
  methods?: Maybe<Array<Maybe<MolliePaymentMethod>>>;
};

export type MollieTransactionOutput = {
  checkout_url?: Maybe<Scalars['String']['output']>;
};

export type MollieProcessTransactionOutput = {
  /** The cart is only available when the payment status is failed, canceled or expired. */
  cart?: Maybe<Cart>;
  paymentStatus?: Maybe<PaymentStatusEnum>;
  /** Indicates if the customer should be redirected to the cart. */
  redirect_to_cart?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the customer should be redirected to the success page. */
  redirect_to_success_page?: Maybe<Scalars['Boolean']['output']>;
};

export type MolliePaymentFee = {
  /** Base mollie payment fee */
  base_fee?: Maybe<Money>;
  /** Base mollie payment fee tax */
  base_fee_tax?: Maybe<Money>;
  /** Mollie payment fee */
  fee?: Maybe<Money>;
  /** Mollie payment fee tax */
  fee_tax?: Maybe<Money>;
};

export type MollieApplePayValidationOutput = {
  response: Scalars['String']['output'];
};

export type MollieTransactionInput = {
  issuer?: InputMaybe<Scalars['String']['input']>;
  payment_token: Scalars['String']['input'];
};

export type MolliePaymentMethodsInput = {
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
};

export type MollieResetCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String']['input'];
};

export type MollieProcessTransactionInput = {
  /** The payment token returned from the PlaceOrder call/added to the return URL */
  payment_token: Scalars['String']['input'];
};

export type PaymentStatusEnum =
  | 'CREATED'
  | 'PAID'
  | 'AUTHORIZED'
  | 'CANCELED'
  | 'SHIPPING'
  | 'COMPLETED'
  | 'EXPIRED'
  | 'PENDING'
  | 'REFUNDED'
  | 'ERROR'
  | 'FAILED'
  | 'OPEN';

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars['String']['input']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']['input'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']['input'];
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']['input']>;
  public_hash: Scalars['String']['input'];
};

/**
 * # GraphCommerce configuration system
 *
 * Global GraphCommerce configuration can be configured in your `graphcommerce.config.js` file
 * in the root of your project and are automatically validated on startup.
 *
 * ## Configuring with the configuration file.
 *
 * The configuration file is a javascript file that exports a `GraphCommerceConfig` object. See graphcommerce.config.js.example for an example.
 *
 * ## Using configuration
 *
 * Configuration can be accessed in your project with the `import.meta.graphCommerce` object.
 *
 * ```tsx
 * import { storefrontAll, storefrontConfig, storefrontConfigDefault, useStorefrontConfig } from '@graphcommerce/next-ui'
 *
 * // Accessing a global value
 * const globalConf = import.meta.graphCommerce.cartDisplayPricesInclTax
 *
 * function MyComponent() {
 *   // Configuration configured per storefront locale.
 *   const scopedConfig = useStorefrontConfig().cartDisplayPricesInclTax
 *
 *   // Creating a fallback system
 *   const scopedConfigWithFallback = scopedConfig ?? globalConf
 *
 *   // Or as single line
 *   const scopedConfigWithFallback2 =
 *     useStorefrontConfig().cartDisplayPricesInclTax ?? import.meta.graphCommerce.cartDisplayPricesInclTax
 *
 *   return <div>{googleRecaptchaKey}</div>
 * }
 * ```
 *
 * You can also use the configuration in your `.meshrc.yml` by accessing
 * `{graphCommerce.myField}`
 *
 * ```yml
 * endpoint: '{graphCommerce.magentoEndpoint}'
 * ```
 *
 * ## Environment variables to override configuration
 *
 * Configuration values can be overwriten by environment variables, with the following rules:
 * - Convert from camelCase to `SCREAMING_SNAKE_CASE`
 * - Prefix with `GC_`
 * - Arrays can be indexed with `_0`, `_1`, `_2`, etc.
 * - Objects can be accessed with `_<key>`.
 *
 * Examples:
 * - `limitSsg` -> `GC_LIMIT_SSG="1"`
 * - `storefront[0].locale` -> `GC_STOREFRONT_0_LOCALE="en"`
 * - `debug.pluginStatus` -> `GC_DEBUG_PLUGIN_STATUS="1"`
 *
 *
 * ## Exporting current configuration to environment variables
 *
 * You can export configuration by running `yarn graphcommerce export-config`
 *
 * ## Extending the configuration in your  project
 *
 * Create a graphql/Config.graphqls file in your project and extend the GraphCommerceConfig, GraphCommerceStorefrontConfig inputs to add configuration.
 *
 * ```graphql
 * extend input GraphCommerceConfig {
 *   myConfig: String # or Boolean, or Int, or Float, make required with `!`
 * }
 * extend input GraphCommerceStorefrontConfig {
 *   myField: Boolean
 * }
 * ```
 *
 * ## All configuration values
 *
 * Below is a list of all possible configurations that can be set by GraphCommerce.
 */
export type GraphCommerceConfig = {
  /**
   * Enables some demo specific code that is probably not useful for a project:
   *
   * - Adds the "BY GC" to the product list items.
   * - Adds "dominant_color" attribute swatches to the product list items.
   * - Creates a big list items in the product list.
   */
  demoMode?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * See https://support.google.com/analytics/answer/9539598?hl=en
   *
   * Provide a value to enable Google Analytics for your store.
   *
   * To override the value for a specific locale, configure in i18n config.
   */
  googleAnalyticsId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Google reCAPTCHA site key.
   * When using reCAPTCHA, this value is required, even if you are configuring different values for each locale.
   *
   * Get a site key and a secret key from https://developers.google.com/recaptcha/docs/v3
   *
   * The secret key should be added in the Magento admin panel (Stores > Configuration > Security > Google ReCAPTCHA Storefront > reCAPTCHA v3 Invisible)
   * ReCAPTCHA can then be enabled/disabled for the different forms, separately (Stores > Configuration > Security > Google ReCAPTCHA Storefront > Storefront)
   */
  googleRecaptchaKey?: InputMaybe<Scalars['String']['input']>;
  /**
   * The Google Tagmanager ID to be used on the site.
   *
   * This value is required even if you are configuring different values for each locale.
   */
  googleTagmanagerId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The HyGraph endpoint.
   *
   * > Read-only endpoint that allows low latency and high read-throughput content delivery.
   *
   * Project settings -> API Access -> High Performance Read-only Content API
   */
  hygraphEndpoint: Scalars['String']['input'];
  /**
   * Content API. **Only used for migrations.**
   *
   * > Regular read & write endpoint that allows querying and mutating data in your project.
   *
   * Project settings -> API Access -> Content API
   */
  hygraphWriteAccessEndpoint?: InputMaybe<Scalars['String']['input']>;
  /**
   * Hygraph Management SDK Authorization Token. **Only used for migrations.**
   *
   * Project settings -> API Access -> Permanent Auth Tokens
   *
   * 1. Click  'Add token' and give it a name, something like 'GraphCommerce Write Access Token' and keep stage on 'Published'.
   * 2. Under 'Management API', click 'Yes, Initialize defaults'
   * 3. Click 'Edit Permissions' and enable: 'Update' and 'Delete' permissions for 'models', 'enumerations', 'fields', 'components' and 'sources'
   *   - Update existing models
   *   - Delete existing models
   *   - Update existing fields
   *   - Delete existing fields
   *   - Update existing enumerations
   *   - Delete existing enumerations
   *   - Update existing components
   *   - Delete existing components
   *   - Update remote sources
   *   - Delete remote sources
   *   - Read existing environments
   *   - Read public content views
   *   - Create public content views
   *   - Update public content views
   *   - Delete public content views
   *   - Can see schema view
   *
   * ```
   * GC_HYGRAPH_WRITE_ACCESS_ENDPOINT="https://...hygraph.com/v2/..."
   * GC_HYGRAPH_WRITE_ACCESS_TOKEN="AccessTokenFromHygraph"
   * yarn graphcommerce hygraph-migrate
   * ```
   */
  hygraphWriteAccessToken?: InputMaybe<Scalars['String']['input']>;
  /** Hygraph Project ID. **Only used for migrations.** */
  hygraphProjectId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax.
   *
   * When Magento's StoreConfig adds this value, this can be replaced.
   */
  cartDisplayPricesInclTax?: InputMaybe<Scalars['Boolean']['input']>;
  /** Use compare functionality */
  compare?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * By default the compare feature is denoted with a 'compare ICON' (2 arrows facing one another).
   * This may be fine for experienced users, but for more clarity it's also possible to present the compare feature as a CHECKBOX accompanied by the 'Compare' label
   */
  compareVariant?: InputMaybe<CompareVariant>;
  /**
   * Due to a limitation in the GraphQL API of Magento 2, we need to know if the
   * customer requires email confirmation.
   *
   * This value should match Magento 2's configuration value for
   * `customer/create_account/confirm` and should be removed once we can query
   */
  customerRequireEmailConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * GraphQL Magento endpoint.
   *
   * Examples:
   * - https://magento2.test/graphql
   */
  magentoEndpoint: Scalars['String']['input'];
  /**
   * When a user selects a variant, it will switch the values on the configurable page with the values of the configured variant.
   *
   * Enabling options here will allow switching of those variants.
   */
  configurableVariantValues?: InputMaybe<MagentoConfigurableVariantValues>;
  /**
   * If a simple product is part of a Configurable product page, should the simple product be
   * rendered as a configured option of the configurable product page?
   *
   * How does this work:
   *
   * When the `products(filters: { url_key: { eq: 'simple-product' } }) { ... }` query is ran,
   * Magento also returns the Simple product and the Configurable product the simple belongs to.
   *
   * If that is the case we render the configurable product page instead of the simple product page but
   * the options to select the simple product are pre-selected.
   */
  configurableVariantForSimple?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * On older versions of GraphCommerce products would use a product type specific route.
   *
   * This should only be set to true if you use the /product/[url] AND /product/configurable/[url] routes.
   *
   * @deprecated Will be removed in a future version. [migration](../upgrading/graphcommerce-5-to-6.md#product-routing-changes)
   */
  legacyProductRoute?: InputMaybe<Scalars['Boolean']['input']>;
  /** Product filters with better UI for mobile and desktop. */
  productFiltersPro?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Layout how the filters are rendered.
   * DEFAULT: Will be rendered as horzontal chips on desktop and mobile
   * SIDEBAR: Will be rendered as a sidebar on desktop and horizontal chips on mobile
   */
  productFiltersLayout?: InputMaybe<ProductFiltersLayout>;
  /**
   * By default we route products to /p/[url] but you can change this to /product/[url] if you wish.
   *
   * Default: '/p/'
   * Example: '/product/'
   */
  productRoute?: InputMaybe<Scalars['String']['input']>;
  /** Hide the wishlist functionality for guests. */
  wishlistHideForGuests?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ignores whether a product is already in the wishlist, makes the toggle an add only. */
  wishlistIgnoreProductWishlistStatus?: InputMaybe<Scalars['Boolean']['input']>;
  /** Show a message when the product is added to the wishlist. */
  wishlistShowFeedbackMessage?: InputMaybe<Scalars['Boolean']['input']>;
  /** All storefront configuration for the project */
  storefront: Array<GraphCommerceStorefrontConfig>;
  /** Limit the static generation of SSG when building */
  limitSsg?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Allow the site to be indexed by search engines.
   * If false, the robots.txt file will be set to disallow all.
   */
  robotsAllow?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * The canonical base URL is used for SEO purposes.
   *
   * Examples:
   * - https://example.com
   * - https://example.com/en
   * - https://example.com/en-US
   */
  canonicalBaseUrl: Scalars['String']['input'];
  /** To enable next.js' preview mode, configure the secret you'd like to use. */
  previewSecret?: InputMaybe<Scalars['String']['input']>;
  /** Debug configuration for GraphCommerce */
  debug?: InputMaybe<GraphCommerceDebugConfig>;
};

/** All storefront configuration for the project */
export type GraphCommerceStorefrontConfig = {
  /**
   * Configure different Google Analytics IDs for different locales.
   *
   * To disable for a specific locale, set the value to null.
   */
  googleAnalyticsId?: InputMaybe<Scalars['String']['input']>;
  /** Locale specific google reCAPTCHA key. */
  googleRecaptchaKey?: InputMaybe<Scalars['String']['input']>;
  /** The Google Tagmanager ID to be used per locale. */
  googleTagmanagerId?: InputMaybe<Scalars['String']['input']>;
  /** Add a gcms-locales header to make sure queries return in a certain language, can be an array to define fallbacks. */
  hygraphLocales?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Specify a custom locale for to load translations. */
  linguiLocale?: InputMaybe<Scalars['String']['input']>;
  /** Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax. */
  cartDisplayPricesInclTax?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Magento store code.
   *
   * Stores => All Stores => [Store View] => Store View Code
   *
   * Examples:
   * - default
   * - en-us
   * - b2b-us
   */
  magentoStoreCode: Scalars['String']['input'];
  /**
   * There can only be one entry with defaultLocale set to true.
   * - If there are more, the first one is used.
   * - If there is none, the first entry is used.
   */
  defaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
  /** Domain configuration, must be a domain https://tools.ietf.org/html/rfc3986 */
  domain?: InputMaybe<Scalars['String']['input']>;
  /** Must be a locale string https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers */
  locale: Scalars['String']['input'];
  /**
   * The canonical base URL is used for SEO purposes.
   *
   * Examples:
   * - https://example.com
   * - https://example.com/en
   * - https://example.com/en-US
   */
  canonicalBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CurrentCartId = {
  id?: Maybe<Scalars['String']['output']>;
};

export type RegisterCartIdInput = {
  cart_id: Scalars['String']['input'];
};

export type CompareVariant =
  | 'ICON'
  | 'CHECKBOX';

export type CurrentCompareUid = {
  uid?: Maybe<Scalars['String']['output']>;
};

/** Options to configure which values will be replaced when a variant is selected on the product page. */
export type MagentoConfigurableVariantValues = {
  /**
   * When a variant is selected the URL of the product will be changed in the address bar.
   *
   * This only happens when the actual variant is can be accessed by the URL.
   */
  url?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * This option enables the automatic update of product gallery images on the product page when a variant is selected,
   * provided that the gallery images for the selected variant differ from the currently displayed images.
   */
  gallery?: InputMaybe<Scalars['Boolean']['input']>;
  /** Use the name, description, short description and meta data from the configured variant */
  content?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductFiltersLayout =
  | 'DEFAULT'
  | 'SIDEBAR';

export type GuestWishlist = {
  items: Array<GuestWishlistItem>;
};

export type GuestWishlistItem = {
  sku: Scalars['String']['output'];
  url_key: Scalars['String']['output'];
  selected_options?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  quantity: Scalars['Float']['output'];
};

/** Debug configuration for GraphCommerce */
export type GraphCommerceDebugConfig = {
  /**
   * When updating packages it can happen that the same package is included with different versions in the same project.
   *
   * Issues that this can cause are:
   * - The same package is included multiple times in the bundle, increasing the bundle size.
   * - The Typescript types of the package are not compatible with each other, causing Typescript errors.
   */
  webpackDuplicatesPlugin?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Cyclic dependencies can cause memory issues and other strange bugs.
   * This plugin will warn you when it detects a cyclic dependency.
   *
   * When running into memory issues, it can be useful to enable this plugin.
   */
  webpackCircularDependencyPlugin?: InputMaybe<Scalars['Boolean']['input']>;
  /** Reports which plugins are enabled or disabled. */
  pluginStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  ConditionAndconditionsUnion: ( ConditionNumber ) | ( Omit<ConditionOr, 'conditions'> & { conditions: Array<RefType['ConditionOrconditionsUnion']> } ) | ( ConditionText );
  ConditionOrconditionsUnion: ( ConditionNumber ) | ( ConditionText );
  DynamicRowTarget: ( RowBlogContent ) | ( RowButtonLinkList ) | ( RowColumnOne ) | ( RowColumnThree ) | ( RowColumnTwo ) | ( RowContentLinks ) | ( RowHeroBanner ) | ( RowLinks ) | ( RowProduct ) | ( RowQuote ) | ( RowServiceOptions ) | ( RowSpecialBanner );
  DynamicRowconditionsUnion: ( Omit<ConditionAnd, 'conditions'> & { conditions: Array<RefType['ConditionAndconditionsUnion']> } ) | ( ConditionNumber ) | ( ConditionText );
  PageContent: ( RowBlogContent ) | ( RowButtonLinkList ) | ( RowColumnOne ) | ( RowColumnThree ) | ( RowColumnTwo ) | ( RowContentLinks ) | ( RowHeroBanner ) | ( RowLinks ) | ( RowProduct ) | ( RowQuote ) | ( RowServiceOptions ) | ( RowSpecialBanner );
  ScheduledOperationAffectedDocument: ( Asset ) | ( Omit<DynamicRow, 'conditions' | 'rows' | 'target' | 'row'> & { conditions: Array<RefType['DynamicRowconditionsUnion']>, rows: Array<RefType['Union_rows_dynamicRows']>, target?: Maybe<RefType['DynamicRowTarget']>, row?: Maybe<RefType['Union_row_dynamicRow']> } ) | ( Footer ) | ( Omit<Page, 'content'> & { content: Array<RefType['PageContent']> } ) | ( PageLink ) | ( RowBlogContent ) | ( RowButtonLinkList ) | ( RowColumnOne ) | ( RowColumnThree ) | ( RowColumnTwo ) | ( RowContentLinks ) | ( RowHeroBanner ) | ( RowLinks ) | ( RowProduct ) | ( RowQuote ) | ( RowServiceOptions ) | ( RowSpecialBanner ) | ( Usps );
  Union_row_dynamicRow: ( RowColumnOne ) | ( RowLinks ) | ( RowQuote );
  Union_rows_dynamicRows: ( RowColumnOne ) | ( RowLinks ) | ( RowQuote );
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Entity: ( Asset ) | ( Omit<ConditionAnd, 'conditions'> & { conditions: Array<RefType['ConditionAndconditionsUnion']> } ) | ( ConditionNumber ) | ( Omit<ConditionOr, 'conditions'> & { conditions: Array<RefType['ConditionOrconditionsUnion']> } ) | ( ConditionText ) | ( Omit<DynamicRow, 'conditions' | 'rows' | 'target' | 'row'> & { conditions: Array<RefType['DynamicRowconditionsUnion']>, rows: Array<RefType['Union_rows_dynamicRows']>, target?: Maybe<RefType['DynamicRowTarget']>, row?: Maybe<RefType['Union_row_dynamicRow']> } ) | ( Footer ) | ( Omit<Page, 'content'> & { content: Array<RefType['PageContent']> } ) | ( PageLink ) | ( RowBlogContent ) | ( RowButtonLinkList ) | ( RowColumnOne ) | ( RowColumnThree ) | ( RowColumnTwo ) | ( RowContentLinks ) | ( RowHeroBanner ) | ( RowLinks ) | ( RowProduct ) | ( RowQuote ) | ( RowServiceOptions ) | ( RowSpecialBanner ) | ( Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<RefType['ScheduledOperationAffectedDocument']> } ) | ( ScheduledRelease ) | ( User ) | ( Usps );
  Node: ( Asset ) | ( Omit<DynamicRow, 'conditions' | 'rows' | 'target' | 'row'> & { conditions: Array<RefType['DynamicRowconditionsUnion']>, rows: Array<RefType['Union_rows_dynamicRows']>, target?: Maybe<RefType['DynamicRowTarget']>, row?: Maybe<RefType['Union_row_dynamicRow']> } ) | ( Footer ) | ( Omit<Page, 'content'> & { content: Array<RefType['PageContent']> } ) | ( PageLink ) | ( RowBlogContent ) | ( RowButtonLinkList ) | ( RowColumnOne ) | ( RowColumnThree ) | ( RowColumnTwo ) | ( RowContentLinks ) | ( RowHeroBanner ) | ( RowLinks ) | ( RowProduct ) | ( RowQuote ) | ( RowServiceOptions ) | ( RowSpecialBanner ) | ( Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<RefType['ScheduledOperationAffectedDocument']> } ) | ( ScheduledRelease ) | ( User ) | ( Usps );
  ErrorInterface: ( NoSuchEntityUidError ) | ( InternalError );
  ProductLinksInterface: ( ProductLinks );
  ProductInterface: ( VirtualProduct ) | ( SimpleProduct ) | ( DownloadableProduct ) | ( BundleProduct ) | ( GroupedProduct ) | ( ConfigurableProduct );
  PhysicalProductInterface: ( SimpleProduct ) | ( BundleProduct ) | ( GroupedProduct ) | ( ConfigurableProduct );
  MediaGalleryInterface: ( ProductImage ) | ( ProductVideo );
  CustomizableOptionInterface: ( CustomizableAreaOption ) | ( CustomizableDateOption ) | ( CustomizableDropDownOption ) | ( CustomizableMultipleOption ) | ( CustomizableFieldOption ) | ( CustomizableFileOption ) | ( CustomizableRadioOption ) | ( CustomizableCheckboxOption );
  CustomizableProductInterface: ( VirtualProduct ) | ( SimpleProduct ) | ( DownloadableProduct ) | ( BundleProduct ) | ( ConfigurableProduct );
  CategoryInterface: ( CategoryTree );
  LayerFilterItemInterface: ( LayerFilterItem ) | ( SwatchLayerFilterItem );
  AggregationOptionInterface: ( AggregationOption );
  CartAddressInterface: ( ShippingCartAddress ) | ( BillingCartAddress );
  CartItemInterface: ( SimpleCartItem ) | ( VirtualCartItem ) | ( DownloadableCartItem ) | ( ConfigurableCartItem ) | ( BundleCartItem );
  OrderItemInterface: ( DownloadableOrderItem ) | ( BundleOrderItem ) | ( OrderItem );
  InvoiceItemInterface: ( DownloadableInvoiceItem ) | ( BundleInvoiceItem ) | ( InvoiceItem );
  ShipmentItemInterface: ( BundleShipmentItem ) | ( ShipmentItem );
  CreditMemoItemInterface: ( DownloadableCreditMemoItem ) | ( BundleCreditMemoItem ) | ( CreditMemoItem );
  RoutableInterface: ( CmsPage ) | ( CategoryTree ) | ( VirtualProduct ) | ( SimpleProduct ) | ( DownloadableProduct ) | ( BundleProduct ) | ( GroupedProduct ) | ( ConfigurableProduct );
  SwatchLayerFilterItemInterface: ( SwatchLayerFilterItem );
  SwatchDataInterface: ( ImageSwatchData ) | ( TextSwatchData ) | ( ColorSwatchData );
  WishlistItemInterface: ( SimpleWishlistItem ) | ( VirtualWishlistItem ) | ( DownloadableWishlistItem ) | ( BundleWishlistItem ) | ( GroupedProductWishlistItem ) | ( ConfigurableWishlistItem );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Aggregate: ResolverTypeWrapper<Aggregate>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetTransformationInput: AssetTransformationInput;
  AssetWhereInput: AssetWhereInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ConditionAnd: ResolverTypeWrapper<Omit<ConditionAnd, 'conditions'> & { conditions: Array<ResolversTypes['ConditionAndconditionsUnion']> }>;
  ConditionAndWhereInput: ConditionAndWhereInput;
  ConditionAndconditionsUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ConditionAndconditionsUnion']>;
  ConditionAndconditionsUnionWhereInput: ConditionAndconditionsUnionWhereInput;
  ConditionNumber: ResolverTypeWrapper<ConditionNumber>;
  ConditionNumberWhereInput: ConditionNumberWhereInput;
  ConditionOr: ResolverTypeWrapper<Omit<ConditionOr, 'conditions'> & { conditions: Array<ResolversTypes['ConditionOrconditionsUnion']> }>;
  ConditionOrWhereInput: ConditionOrWhereInput;
  ConditionOrconditionsUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ConditionOrconditionsUnion']>;
  ConditionOrconditionsUnionWhereInput: ConditionOrconditionsUnionWhereInput;
  ConditionText: ResolverTypeWrapper<ConditionText>;
  ConditionTextWhereInput: ConditionTextWhereInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DocumentFileTypes: DocumentFileTypes;
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DynamicRow: ResolverTypeWrapper<Omit<DynamicRow, 'conditions' | 'rows' | 'target' | 'row'> & { conditions: Array<ResolversTypes['DynamicRowconditionsUnion']>, rows: Array<ResolversTypes['Union_rows_dynamicRows']>, target?: Maybe<ResolversTypes['DynamicRowTarget']>, row?: Maybe<ResolversTypes['Union_row_dynamicRow']> }>;
  DynamicRowConditionNumberOperator: DynamicRowConditionNumberOperator;
  DynamicRowConnection: ResolverTypeWrapper<DynamicRowConnection>;
  DynamicRowEdge: ResolverTypeWrapper<DynamicRowEdge>;
  DynamicRowOrderByInput: DynamicRowOrderByInput;
  DynamicRowPlacement: DynamicRowPlacement;
  DynamicRowTarget: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DynamicRowTarget']>;
  DynamicRowTargetWhereInput: DynamicRowTargetWhereInput;
  DynamicRowWhereInput: DynamicRowWhereInput;
  DynamicRowWhereUniqueInput: DynamicRowWhereUniqueInput;
  DynamicRowconditionsUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DynamicRowconditionsUnion']>;
  DynamicRowconditionsUnionWhereInput: DynamicRowconditionsUnionWhereInput;
  Entity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entity']>;
  EntityTypeName: EntityTypeName;
  EntityWhereInput: EntityWhereInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Footer: ResolverTypeWrapper<Footer>;
  FooterConnection: ResolverTypeWrapper<FooterConnection>;
  FooterEdge: ResolverTypeWrapper<FooterEdge>;
  FooterOrderByInput: FooterOrderByInput;
  FooterWhereInput: FooterWhereInput;
  FooterWhereUniqueInput: FooterWhereUniqueInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageFit: ImageFit;
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Json: ResolverTypeWrapper<Scalars['Json']['output']>;
  Locale: Locale;
  MetaRobots: MetaRobots;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  Page: ResolverTypeWrapper<Omit<Page, 'content'> & { content: Array<ResolversTypes['PageContent']> }>;
  PageConnection: ResolverTypeWrapper<PageConnection>;
  PageContent: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PageContent']>;
  PageContentWhereInput: PageContentWhereInput;
  PageEdge: ResolverTypeWrapper<PageEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageLink: ResolverTypeWrapper<PageLink>;
  PageLinkConnection: ResolverTypeWrapper<PageLinkConnection>;
  PageLinkEdge: ResolverTypeWrapper<PageLinkEdge>;
  PageLinkOrderByInput: PageLinkOrderByInput;
  PageLinkWhereInput: PageLinkWhereInput;
  PageLinkWhereUniqueInput: PageLinkWhereUniqueInput;
  PageOrderByInput: PageOrderByInput;
  PageWhereInput: PageWhereInput;
  PageWhereUniqueInput: PageWhereUniqueInput;
  RichText: ResolverTypeWrapper<RichText>;
  RichTextAST: ResolverTypeWrapper<Scalars['RichTextAST']['output']>;
  RowBlogContent: ResolverTypeWrapper<RowBlogContent>;
  RowBlogContentConnection: ResolverTypeWrapper<RowBlogContentConnection>;
  RowBlogContentEdge: ResolverTypeWrapper<RowBlogContentEdge>;
  RowBlogContentOrderByInput: RowBlogContentOrderByInput;
  RowBlogContentWhereInput: RowBlogContentWhereInput;
  RowBlogContentWhereUniqueInput: RowBlogContentWhereUniqueInput;
  RowButtonLinkList: ResolverTypeWrapper<RowButtonLinkList>;
  RowButtonLinkListConnection: ResolverTypeWrapper<RowButtonLinkListConnection>;
  RowButtonLinkListEdge: ResolverTypeWrapper<RowButtonLinkListEdge>;
  RowButtonLinkListOrderByInput: RowButtonLinkListOrderByInput;
  RowButtonLinkListWhereInput: RowButtonLinkListWhereInput;
  RowButtonLinkListWhereUniqueInput: RowButtonLinkListWhereUniqueInput;
  RowColumnOne: ResolverTypeWrapper<RowColumnOne>;
  RowColumnOneConnection: ResolverTypeWrapper<RowColumnOneConnection>;
  RowColumnOneEdge: ResolverTypeWrapper<RowColumnOneEdge>;
  RowColumnOneOrderByInput: RowColumnOneOrderByInput;
  RowColumnOneVariants: RowColumnOneVariants;
  RowColumnOneWhereInput: RowColumnOneWhereInput;
  RowColumnOneWhereUniqueInput: RowColumnOneWhereUniqueInput;
  RowColumnThree: ResolverTypeWrapper<RowColumnThree>;
  RowColumnThreeConnection: ResolverTypeWrapper<RowColumnThreeConnection>;
  RowColumnThreeEdge: ResolverTypeWrapper<RowColumnThreeEdge>;
  RowColumnThreeOrderByInput: RowColumnThreeOrderByInput;
  RowColumnThreeWhereInput: RowColumnThreeWhereInput;
  RowColumnThreeWhereUniqueInput: RowColumnThreeWhereUniqueInput;
  RowColumnTwo: ResolverTypeWrapper<RowColumnTwo>;
  RowColumnTwoConnection: ResolverTypeWrapper<RowColumnTwoConnection>;
  RowColumnTwoEdge: ResolverTypeWrapper<RowColumnTwoEdge>;
  RowColumnTwoOrderByInput: RowColumnTwoOrderByInput;
  RowColumnTwoWhereInput: RowColumnTwoWhereInput;
  RowColumnTwoWhereUniqueInput: RowColumnTwoWhereUniqueInput;
  RowContentLinks: ResolverTypeWrapper<RowContentLinks>;
  RowContentLinksConnection: ResolverTypeWrapper<RowContentLinksConnection>;
  RowContentLinksEdge: ResolverTypeWrapper<RowContentLinksEdge>;
  RowContentLinksOrderByInput: RowContentLinksOrderByInput;
  RowContentLinksWhereInput: RowContentLinksWhereInput;
  RowContentLinksWhereUniqueInput: RowContentLinksWhereUniqueInput;
  RowHeroBanner: ResolverTypeWrapper<RowHeroBanner>;
  RowHeroBannerConnection: ResolverTypeWrapper<RowHeroBannerConnection>;
  RowHeroBannerEdge: ResolverTypeWrapper<RowHeroBannerEdge>;
  RowHeroBannerOrderByInput: RowHeroBannerOrderByInput;
  RowHeroBannerWhereInput: RowHeroBannerWhereInput;
  RowHeroBannerWhereUniqueInput: RowHeroBannerWhereUniqueInput;
  RowLinks: ResolverTypeWrapper<RowLinks>;
  RowLinksConnection: ResolverTypeWrapper<RowLinksConnection>;
  RowLinksEdge: ResolverTypeWrapper<RowLinksEdge>;
  RowLinksOrderByInput: RowLinksOrderByInput;
  RowLinksVariants: RowLinksVariants;
  RowLinksWhereInput: RowLinksWhereInput;
  RowLinksWhereUniqueInput: RowLinksWhereUniqueInput;
  RowProduct: ResolverTypeWrapper<RowProduct>;
  RowProductConnection: ResolverTypeWrapper<RowProductConnection>;
  RowProductEdge: ResolverTypeWrapper<RowProductEdge>;
  RowProductOrderByInput: RowProductOrderByInput;
  RowProductVariants: RowProductVariants;
  RowProductWhereInput: RowProductWhereInput;
  RowProductWhereUniqueInput: RowProductWhereUniqueInput;
  RowQuote: ResolverTypeWrapper<RowQuote>;
  RowQuoteConnection: ResolverTypeWrapper<RowQuoteConnection>;
  RowQuoteEdge: ResolverTypeWrapper<RowQuoteEdge>;
  RowQuoteOrderByInput: RowQuoteOrderByInput;
  RowQuoteWhereInput: RowQuoteWhereInput;
  RowQuoteWhereUniqueInput: RowQuoteWhereUniqueInput;
  RowServiceOptions: ResolverTypeWrapper<RowServiceOptions>;
  RowServiceOptionsConnection: ResolverTypeWrapper<RowServiceOptionsConnection>;
  RowServiceOptionsEdge: ResolverTypeWrapper<RowServiceOptionsEdge>;
  RowServiceOptionsOrderByInput: RowServiceOptionsOrderByInput;
  RowServiceOptionsWhereInput: RowServiceOptionsWhereInput;
  RowServiceOptionsWhereUniqueInput: RowServiceOptionsWhereUniqueInput;
  RowSpecialBanner: ResolverTypeWrapper<RowSpecialBanner>;
  RowSpecialBannerConnection: ResolverTypeWrapper<RowSpecialBannerConnection>;
  RowSpecialBannerEdge: ResolverTypeWrapper<RowSpecialBannerEdge>;
  RowSpecialBannerOrderByInput: RowSpecialBannerOrderByInput;
  RowSpecialBannerWhereInput: RowSpecialBannerWhereInput;
  RowSpecialBannerWhereUniqueInput: RowSpecialBannerWhereUniqueInput;
  ScheduledOperation: ResolverTypeWrapper<Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversTypes['ScheduledOperationAffectedDocument']> }>;
  ScheduledOperationAffectedDocument: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ScheduledOperationAffectedDocument']>;
  ScheduledOperationOrderByInput: ScheduledOperationOrderByInput;
  ScheduledOperationStatus: ScheduledOperationStatus;
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledRelease: ResolverTypeWrapper<ScheduledRelease>;
  ScheduledReleaseStatus: ScheduledReleaseStatus;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  Stage: Stage;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Union_row_dynamicRow: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Union_row_dynamicRow']>;
  Union_row_dynamicRowWhereInput: Union_row_dynamicRowWhereInput;
  Union_rows_dynamicRows: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Union_rows_dynamicRows']>;
  Union_rows_dynamicRowsWhereInput: Union_rows_dynamicRowsWhereInput;
  User: ResolverTypeWrapper<User>;
  UserKind: UserKind;
  Usps: ResolverTypeWrapper<Usps>;
  UspsConnection: ResolverTypeWrapper<UspsConnection>;
  UspsEdge: ResolverTypeWrapper<UspsEdge>;
  UspsOrderByInput: UspsOrderByInput;
  UspsWhereInput: UspsWhereInput;
  UspsWhereUniqueInput: UspsWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  FilterTypeInput: FilterTypeInput;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  SearchResultPageInfo: ResolverTypeWrapper<SearchResultPageInfo>;
  SortEnum: SortEnum;
  ComplexTextValue: ResolverTypeWrapper<ComplexTextValue>;
  Money: ResolverTypeWrapper<Money>;
  CurrencyEnum: CurrencyEnum;
  EnteredOptionInput: EnteredOptionInput;
  BatchMutationStatus: BatchMutationStatus;
  ErrorInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ErrorInterface']>;
  NoSuchEntityUidError: ResolverTypeWrapper<NoSuchEntityUidError>;
  InternalError: ResolverTypeWrapper<InternalError>;
  StoreConfig: ResolverTypeWrapper<StoreConfig>;
  CmsPage: ResolverTypeWrapper<CmsPage>;
  CmsBlocks: ResolverTypeWrapper<CmsBlocks>;
  CmsBlock: ResolverTypeWrapper<CmsBlock>;
  CustomAttributeMetadata: ResolverTypeWrapper<CustomAttributeMetadata>;
  Attribute: ResolverTypeWrapper<Attribute>;
  StorefrontProperties: ResolverTypeWrapper<StorefrontProperties>;
  UseInLayeredNavigationOptions: UseInLayeredNavigationOptions;
  AttributeOption: ResolverTypeWrapper<AttributeOption>;
  AttributeInput: AttributeInput;
  Website: ResolverTypeWrapper<Website>;
  CheckoutAgreement: ResolverTypeWrapper<CheckoutAgreement>;
  CheckoutAgreementMode: CheckoutAgreementMode;
  Price: ResolverTypeWrapper<Price>;
  PriceAdjustment: ResolverTypeWrapper<PriceAdjustment>;
  PriceAdjustmentCodesEnum: PriceAdjustmentCodesEnum;
  PriceAdjustmentDescriptionEnum: PriceAdjustmentDescriptionEnum;
  PriceTypeEnum: PriceTypeEnum;
  CustomizableDateTypeEnum: CustomizableDateTypeEnum;
  ProductPrices: ResolverTypeWrapper<ProductPrices>;
  PriceRange: ResolverTypeWrapper<PriceRange>;
  ProductPrice: ResolverTypeWrapper<ProductPrice>;
  ProductDiscount: ResolverTypeWrapper<ProductDiscount>;
  ProductLinks: ResolverTypeWrapper<ProductLinks>;
  ProductLinksInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ProductLinksInterface']>;
  ProductInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ProductInterface']>;
  PhysicalProductInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PhysicalProductInterface']>;
  CustomizableAreaOption: ResolverTypeWrapper<CustomizableAreaOption>;
  CustomizableAreaValue: ResolverTypeWrapper<CustomizableAreaValue>;
  CategoryTree: ResolverTypeWrapper<CategoryTree>;
  CategoryResult: ResolverTypeWrapper<CategoryResult>;
  CustomizableDateOption: ResolverTypeWrapper<CustomizableDateOption>;
  CustomizableDateValue: ResolverTypeWrapper<CustomizableDateValue>;
  CustomizableDropDownOption: ResolverTypeWrapper<CustomizableDropDownOption>;
  CustomizableDropDownValue: ResolverTypeWrapper<CustomizableDropDownValue>;
  CustomizableMultipleOption: ResolverTypeWrapper<CustomizableMultipleOption>;
  CustomizableMultipleValue: ResolverTypeWrapper<CustomizableMultipleValue>;
  CustomizableFieldOption: ResolverTypeWrapper<CustomizableFieldOption>;
  CustomizableFieldValue: ResolverTypeWrapper<CustomizableFieldValue>;
  CustomizableFileOption: ResolverTypeWrapper<CustomizableFileOption>;
  CustomizableFileValue: ResolverTypeWrapper<CustomizableFileValue>;
  MediaGalleryInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MediaGalleryInterface']>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductVideo: ResolverTypeWrapper<ProductVideo>;
  CustomizableOptionInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CustomizableOptionInterface']>;
  CustomizableProductInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CustomizableProductInterface']>;
  CategoryInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CategoryInterface']>;
  Breadcrumb: ResolverTypeWrapper<Breadcrumb>;
  CustomizableRadioOption: ResolverTypeWrapper<CustomizableRadioOption>;
  CustomizableRadioValue: ResolverTypeWrapper<CustomizableRadioValue>;
  CustomizableCheckboxOption: ResolverTypeWrapper<CustomizableCheckboxOption>;
  CustomizableCheckboxValue: ResolverTypeWrapper<CustomizableCheckboxValue>;
  VirtualProduct: ResolverTypeWrapper<VirtualProduct>;
  SimpleProduct: ResolverTypeWrapper<SimpleProduct>;
  Products: ResolverTypeWrapper<Products>;
  AggregationsFilterInput: AggregationsFilterInput;
  AggregationsCategoryFilterInput: AggregationsCategoryFilterInput;
  CategoryProducts: ResolverTypeWrapper<CategoryProducts>;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  CategoryFilterInput: CategoryFilterInput;
  ProductFilterInput: ProductFilterInput;
  ProductMediaGalleryEntriesContent: ResolverTypeWrapper<ProductMediaGalleryEntriesContent>;
  ProductMediaGalleryEntriesVideoContent: ResolverTypeWrapper<ProductMediaGalleryEntriesVideoContent>;
  ProductSortInput: ProductSortInput;
  ProductAttributeSortInput: ProductAttributeSortInput;
  MediaGalleryEntry: ResolverTypeWrapper<MediaGalleryEntry>;
  LayerFilter: ResolverTypeWrapper<LayerFilter>;
  LayerFilterItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['LayerFilterItemInterface']>;
  LayerFilterItem: ResolverTypeWrapper<LayerFilterItem>;
  Aggregation: ResolverTypeWrapper<Aggregation>;
  SearchSuggestion: ResolverTypeWrapper<SearchSuggestion>;
  AggregationOptionInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AggregationOptionInterface']>;
  AggregationOption: ResolverTypeWrapper<AggregationOption>;
  SortField: ResolverTypeWrapper<SortField>;
  SortFields: ResolverTypeWrapper<SortFields>;
  SimpleWishlistItem: ResolverTypeWrapper<SimpleWishlistItem>;
  VirtualWishlistItem: ResolverTypeWrapper<VirtualWishlistItem>;
  UrlRewriteEntityTypeEnum: UrlRewriteEntityTypeEnum;
  ComparableItem: ResolverTypeWrapper<ComparableItem>;
  ProductAttribute: ResolverTypeWrapper<ProductAttribute>;
  ComparableAttribute: ResolverTypeWrapper<ComparableAttribute>;
  CompareList: ResolverTypeWrapper<CompareList>;
  Customer: ResolverTypeWrapper<Customer>;
  CreateCompareListInput: CreateCompareListInput;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  DeleteCompareListOutput: ResolverTypeWrapper<DeleteCompareListOutput>;
  AssignCompareListToCustomerOutput: ResolverTypeWrapper<AssignCompareListToCustomerOutput>;
  createEmptyCartInput: createEmptyCartInput;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  CartItemInput: CartItemInput;
  CustomizableOptionInput: CustomizableOptionInput;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  UpdateCartItemsInput: UpdateCartItemsInput;
  CartItemUpdateInput: CartItemUpdateInput;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  ShippingAddressInput: ShippingAddressInput;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  BillingAddressInput: BillingAddressInput;
  CartAddressInput: CartAddressInput;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  ShippingMethodInput: ShippingMethodInput;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  PlaceOrderInput: PlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  PaymentMethodInput: PaymentMethodInput;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  CartPrices: ResolverTypeWrapper<CartPrices>;
  CartTaxItem: ResolverTypeWrapper<CartTaxItem>;
  CartDiscount: ResolverTypeWrapper<CartDiscount>;
  SetPaymentMethodOnCartOutput: ResolverTypeWrapper<SetPaymentMethodOnCartOutput>;
  SetBillingAddressOnCartOutput: ResolverTypeWrapper<SetBillingAddressOnCartOutput>;
  SetShippingAddressesOnCartOutput: ResolverTypeWrapper<SetShippingAddressesOnCartOutput>;
  SetShippingMethodsOnCartOutput: ResolverTypeWrapper<SetShippingMethodsOnCartOutput>;
  ApplyCouponToCartOutput: ResolverTypeWrapper<ApplyCouponToCartOutput>;
  PlaceOrderOutput: ResolverTypeWrapper<PlaceOrderOutput>;
  Cart: ResolverTypeWrapper<Cart>;
  CartAddressInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CartAddressInterface']>;
  ShippingCartAddress: ResolverTypeWrapper<ShippingCartAddress>;
  BillingCartAddress: ResolverTypeWrapper<BillingCartAddress>;
  CartItemQuantity: ResolverTypeWrapper<CartItemQuantity>;
  CartAddressRegion: ResolverTypeWrapper<CartAddressRegion>;
  CartAddressCountry: ResolverTypeWrapper<CartAddressCountry>;
  SelectedShippingMethod: ResolverTypeWrapper<SelectedShippingMethod>;
  AvailableShippingMethod: ResolverTypeWrapper<AvailableShippingMethod>;
  AvailablePaymentMethod: ResolverTypeWrapper<AvailablePaymentMethod>;
  SelectedPaymentMethod: ResolverTypeWrapper<SelectedPaymentMethod>;
  AppliedCoupon: ResolverTypeWrapper<AppliedCoupon>;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: ResolverTypeWrapper<RemoveCouponFromCartOutput>;
  AddSimpleProductsToCartOutput: ResolverTypeWrapper<AddSimpleProductsToCartOutput>;
  AddVirtualProductsToCartOutput: ResolverTypeWrapper<AddVirtualProductsToCartOutput>;
  UpdateCartItemsOutput: ResolverTypeWrapper<UpdateCartItemsOutput>;
  RemoveItemFromCartOutput: ResolverTypeWrapper<RemoveItemFromCartOutput>;
  SetGuestEmailOnCartOutput: ResolverTypeWrapper<SetGuestEmailOnCartOutput>;
  SimpleCartItem: ResolverTypeWrapper<SimpleCartItem>;
  VirtualCartItem: ResolverTypeWrapper<VirtualCartItem>;
  CartItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CartItemInterface']>;
  CartItemError: ResolverTypeWrapper<CartItemError>;
  CartItemErrorType: CartItemErrorType;
  Discount: ResolverTypeWrapper<Discount>;
  CartItemPrices: ResolverTypeWrapper<CartItemPrices>;
  SelectedCustomizableOption: ResolverTypeWrapper<SelectedCustomizableOption>;
  SelectedCustomizableOptionValue: ResolverTypeWrapper<SelectedCustomizableOptionValue>;
  CartItemSelectedOptionValuePrice: ResolverTypeWrapper<CartItemSelectedOptionValuePrice>;
  Order: ResolverTypeWrapper<Order>;
  CartUserInputError: ResolverTypeWrapper<CartUserInputError>;
  AddProductsToCartOutput: ResolverTypeWrapper<AddProductsToCartOutput>;
  CartUserInputErrorType: CartUserInputErrorType;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerToken: ResolverTypeWrapper<CustomerToken>;
  CustomerInput: CustomerInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerOutput: ResolverTypeWrapper<CustomerOutput>;
  RevokeCustomerTokenOutput: ResolverTypeWrapper<RevokeCustomerTokenOutput>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  CustomerAddressRegion: ResolverTypeWrapper<CustomerAddressRegion>;
  CustomerAddressAttribute: ResolverTypeWrapper<CustomerAddressAttribute>;
  IsEmailAvailableOutput: ResolverTypeWrapper<IsEmailAvailableOutput>;
  CountryCodeEnum: CountryCodeEnum;
  Currency: ResolverTypeWrapper<Currency>;
  ExchangeRate: ResolverTypeWrapper<ExchangeRate>;
  Country: ResolverTypeWrapper<Country>;
  Region: ResolverTypeWrapper<Region>;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  AddDownloadableProductsToCartOutput: ResolverTypeWrapper<AddDownloadableProductsToCartOutput>;
  DownloadableCartItem: ResolverTypeWrapper<DownloadableCartItem>;
  DownloadableProduct: ResolverTypeWrapper<DownloadableProduct>;
  DownloadableFileTypeEnum: DownloadableFileTypeEnum;
  DownloadableProductLinks: ResolverTypeWrapper<DownloadableProductLinks>;
  DownloadableProductSamples: ResolverTypeWrapper<DownloadableProductSamples>;
  DownloadableOrderItem: ResolverTypeWrapper<DownloadableOrderItem>;
  DownloadableInvoiceItem: ResolverTypeWrapper<DownloadableInvoiceItem>;
  DownloadableCreditMemoItem: ResolverTypeWrapper<DownloadableCreditMemoItem>;
  DownloadableItemsLinks: ResolverTypeWrapper<DownloadableItemsLinks>;
  DownloadableWishlistItem: ResolverTypeWrapper<DownloadableWishlistItem>;
  CustomerDownloadableProducts: ResolverTypeWrapper<CustomerDownloadableProducts>;
  CustomerDownloadableProduct: ResolverTypeWrapper<CustomerDownloadableProduct>;
  ProductTierPrices: ResolverTypeWrapper<ProductTierPrices>;
  TierPrice: ResolverTypeWrapper<TierPrice>;
  ConfigurableCartItem: ResolverTypeWrapper<ConfigurableCartItem>;
  BundleCartItem: ResolverTypeWrapper<BundleCartItem>;
  GiftMessage: ResolverTypeWrapper<GiftMessage>;
  GiftMessageInput: GiftMessageInput;
  SalesItemInterface: ResolverTypeWrapper<SalesItemInterface>;
  CustomerOrder: ResolverTypeWrapper<CustomerOrder>;
  OrderItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['OrderItemInterface']>;
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleOptionInput: BundleOptionInput;
  AddBundleProductsToCartOutput: ResolverTypeWrapper<AddBundleProductsToCartOutput>;
  SelectedBundleOption: ResolverTypeWrapper<SelectedBundleOption>;
  SelectedBundleOptionValue: ResolverTypeWrapper<SelectedBundleOptionValue>;
  BundleItem: ResolverTypeWrapper<BundleItem>;
  BundleItemOption: ResolverTypeWrapper<BundleItemOption>;
  BundleProduct: ResolverTypeWrapper<BundleProduct>;
  PriceViewEnum: PriceViewEnum;
  ShipBundleItemsEnum: ShipBundleItemsEnum;
  BundleOrderItem: ResolverTypeWrapper<BundleOrderItem>;
  BundleInvoiceItem: ResolverTypeWrapper<BundleInvoiceItem>;
  BundleShipmentItem: ResolverTypeWrapper<BundleShipmentItem>;
  BundleCreditMemoItem: ResolverTypeWrapper<BundleCreditMemoItem>;
  ItemSelectedBundleOption: ResolverTypeWrapper<ItemSelectedBundleOption>;
  ItemSelectedBundleOptionValue: ResolverTypeWrapper<ItemSelectedBundleOptionValue>;
  BundleWishlistItem: ResolverTypeWrapper<BundleWishlistItem>;
  GroupedProduct: ResolverTypeWrapper<GroupedProduct>;
  GroupedProductItem: ResolverTypeWrapper<GroupedProductItem>;
  GroupedProductWishlistItem: ResolverTypeWrapper<GroupedProductWishlistItem>;
  ConfigurableProduct: ResolverTypeWrapper<ConfigurableProduct>;
  ConfigurableVariant: ResolverTypeWrapper<ConfigurableVariant>;
  ConfigurableAttributeOption: ResolverTypeWrapper<ConfigurableAttributeOption>;
  ConfigurableProductOptions: ResolverTypeWrapper<ConfigurableProductOptions>;
  ConfigurableProductOptionsValues: ResolverTypeWrapper<ConfigurableProductOptionsValues>;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: ResolverTypeWrapper<AddConfigurableProductsToCartOutput>;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  SelectedConfigurableOption: ResolverTypeWrapper<SelectedConfigurableOption>;
  ConfigurableWishlistItem: ResolverTypeWrapper<ConfigurableWishlistItem>;
  ConfigurableProductOptionsSelection: ResolverTypeWrapper<ConfigurableProductOptionsSelection>;
  ConfigurableOptionAvailableForSelection: ResolverTypeWrapper<ConfigurableOptionAvailableForSelection>;
  ConfigurableProductOption: ResolverTypeWrapper<ConfigurableProductOption>;
  ConfigurableProductOptionValue: ResolverTypeWrapper<ConfigurableProductOptionValue>;
  AreaInput: AreaInput;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: ResolverTypeWrapper<PickupLocations>;
  PickupLocation: ResolverTypeWrapper<PickupLocation>;
  ProductInfoInput: ProductInfoInput;
  ProductStockStatus: ProductStockStatus;
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: ResolverTypeWrapper<GenerateCustomerTokenAsAdminOutput>;
  SubscribeEmailToNewsletterOutput: ResolverTypeWrapper<SubscribeEmailToNewsletterOutput>;
  SubscriptionStatusesEnum: SubscriptionStatusesEnum;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressToken: ResolverTypeWrapper<PaypalExpressToken>;
  PaypalExpressTokenOutput: ResolverTypeWrapper<PaypalExpressTokenOutput>;
  PayflowLinkToken: ResolverTypeWrapper<PayflowLinkToken>;
  HostedProUrl: ResolverTypeWrapper<HostedProUrl>;
  HostedProUrlInput: HostedProUrlInput;
  HostedProInput: HostedProInput;
  PaypalExpressInput: PaypalExpressInput;
  PayflowExpressInput: PayflowExpressInput;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PaypalExpressUrlList: ResolverTypeWrapper<PaypalExpressUrlList>;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowLinkMode: PayflowLinkMode;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProInput: PayflowProInput;
  CreditCardDetailsInput: CreditCardDetailsInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PayflowProToken: ResolverTypeWrapper<PayflowProToken>;
  CreatePayflowProTokenOutput: ResolverTypeWrapper<CreatePayflowProTokenOutput>;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: ResolverTypeWrapper<PayflowProResponseOutput>;
  VaultTokenInput: VaultTokenInput;
  ProductReviews: ResolverTypeWrapper<ProductReviews>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  ProductReviewRating: ResolverTypeWrapper<ProductReviewRating>;
  ProductReviewRatingsMetadata: ResolverTypeWrapper<ProductReviewRatingsMetadata>;
  ProductReviewRatingMetadata: ResolverTypeWrapper<ProductReviewRatingMetadata>;
  ProductReviewRatingValueMetadata: ResolverTypeWrapper<ProductReviewRatingValueMetadata>;
  CreateProductReviewOutput: ResolverTypeWrapper<CreateProductReviewOutput>;
  CreateProductReviewInput: CreateProductReviewInput;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ReorderItemsOutput: ResolverTypeWrapper<ReorderItemsOutput>;
  CheckoutUserInputError: ResolverTypeWrapper<CheckoutUserInputError>;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOrderSortInput: CustomerOrderSortInput;
  CustomerOrderSortableField: CustomerOrderSortableField;
  CustomerOrders: ResolverTypeWrapper<CustomerOrders>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemOption: ResolverTypeWrapper<OrderItemOption>;
  TaxItem: ResolverTypeWrapper<TaxItem>;
  OrderTotal: ResolverTypeWrapper<OrderTotal>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoiceItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['InvoiceItemInterface']>;
  InvoiceItem: ResolverTypeWrapper<InvoiceItem>;
  InvoiceTotal: ResolverTypeWrapper<InvoiceTotal>;
  ShippingHandling: ResolverTypeWrapper<ShippingHandling>;
  ShippingDiscount: ResolverTypeWrapper<ShippingDiscount>;
  OrderShipment: ResolverTypeWrapper<OrderShipment>;
  SalesCommentItem: ResolverTypeWrapper<SalesCommentItem>;
  ShipmentItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ShipmentItemInterface']>;
  ShipmentItem: ResolverTypeWrapper<ShipmentItem>;
  ShipmentTracking: ResolverTypeWrapper<ShipmentTracking>;
  OrderPaymentMethod: ResolverTypeWrapper<OrderPaymentMethod>;
  CreditMemo: ResolverTypeWrapper<CreditMemo>;
  CreditMemoItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CreditMemoItemInterface']>;
  CreditMemoItem: ResolverTypeWrapper<CreditMemoItem>;
  CreditMemoTotal: ResolverTypeWrapper<CreditMemoTotal>;
  KeyValue: ResolverTypeWrapper<KeyValue>;
  CheckoutUserInputErrorCodes: CheckoutUserInputErrorCodes;
  ScopeTypeEnum: ScopeTypeEnum;
  EntityUrl: ResolverTypeWrapper<EntityUrl>;
  UrlRewrite: ResolverTypeWrapper<UrlRewrite>;
  HttpQueryParameter: ResolverTypeWrapper<HttpQueryParameter>;
  RoutableInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['RoutableInterface']>;
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendOutput: ResolverTypeWrapper<SendEmailToFriendOutput>;
  SendEmailToFriendSender: ResolverTypeWrapper<SendEmailToFriendSender>;
  SendEmailToFriendRecipient: ResolverTypeWrapper<SendEmailToFriendRecipient>;
  SendFriendConfiguration: ResolverTypeWrapper<SendFriendConfiguration>;
  SwatchLayerFilterItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SwatchLayerFilterItemInterface']>;
  SwatchLayerFilterItem: ResolverTypeWrapper<SwatchLayerFilterItem>;
  SwatchData: ResolverTypeWrapper<SwatchData>;
  SwatchDataInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SwatchDataInterface']>;
  ImageSwatchData: ResolverTypeWrapper<ImageSwatchData>;
  TextSwatchData: ResolverTypeWrapper<TextSwatchData>;
  ColorSwatchData: ResolverTypeWrapper<ColorSwatchData>;
  DeletePaymentTokenOutput: ResolverTypeWrapper<DeletePaymentTokenOutput>;
  CustomerPaymentTokens: ResolverTypeWrapper<CustomerPaymentTokens>;
  PaymentToken: ResolverTypeWrapper<PaymentToken>;
  PaymentTokenTypeEnum: PaymentTokenTypeEnum;
  FixedProductTax: ResolverTypeWrapper<FixedProductTax>;
  FixedProductTaxDisplaySettings: FixedProductTaxDisplaySettings;
  WishlistOutput: ResolverTypeWrapper<WishlistOutput>;
  Wishlist: ResolverTypeWrapper<Wishlist>;
  WishlistItemInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['WishlistItemInterface']>;
  WishlistItems: ResolverTypeWrapper<WishlistItems>;
  WishlistItem: ResolverTypeWrapper<WishlistItem>;
  AddWishlistItemsToCartOutput: ResolverTypeWrapper<AddWishlistItemsToCartOutput>;
  WishlistCartUserInputError: ResolverTypeWrapper<WishlistCartUserInputError>;
  WishlistCartUserInputErrorType: WishlistCartUserInputErrorType;
  WishlistItemInput: WishlistItemInput;
  AddProductsToWishlistOutput: ResolverTypeWrapper<AddProductsToWishlistOutput>;
  RemoveProductsFromWishlistOutput: ResolverTypeWrapper<RemoveProductsFromWishlistOutput>;
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  UpdateProductsInWishlistOutput: ResolverTypeWrapper<UpdateProductsInWishlistOutput>;
  WishListUserInputError: ResolverTypeWrapper<WishListUserInputError>;
  WishListUserInputErrorType: WishListUserInputErrorType;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  MollieStoreConfig: ResolverTypeWrapper<MollieStoreConfig>;
  MollieIssuer: ResolverTypeWrapper<MollieIssuer>;
  MolliePaymentMethodMeta: ResolverTypeWrapper<MolliePaymentMethodMeta>;
  MolliePaymentMethod: ResolverTypeWrapper<MolliePaymentMethod>;
  MollieResetCartOutput: ResolverTypeWrapper<MollieResetCartOutput>;
  MolliePaymentMethodsOutput: ResolverTypeWrapper<MolliePaymentMethodsOutput>;
  MollieTransactionOutput: ResolverTypeWrapper<MollieTransactionOutput>;
  MollieProcessTransactionOutput: ResolverTypeWrapper<MollieProcessTransactionOutput>;
  MolliePaymentFee: ResolverTypeWrapper<MolliePaymentFee>;
  MollieApplePayValidationOutput: ResolverTypeWrapper<MollieApplePayValidationOutput>;
  MollieTransactionInput: MollieTransactionInput;
  MolliePaymentMethodsInput: MolliePaymentMethodsInput;
  MollieResetCartInput: MollieResetCartInput;
  MollieProcessTransactionInput: MollieProcessTransactionInput;
  PaymentStatusEnum: PaymentStatusEnum;
  BraintreeInput: BraintreeInput;
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  GraphCommerceConfig: GraphCommerceConfig;
  GraphCommerceStorefrontConfig: GraphCommerceStorefrontConfig;
  CurrentCartId: ResolverTypeWrapper<CurrentCartId>;
  RegisterCartIdInput: RegisterCartIdInput;
  CompareVariant: CompareVariant;
  CurrentCompareUid: ResolverTypeWrapper<CurrentCompareUid>;
  MagentoConfigurableVariantValues: MagentoConfigurableVariantValues;
  ProductFiltersLayout: ProductFiltersLayout;
  GuestWishlist: ResolverTypeWrapper<GuestWishlist>;
  GuestWishlistItem: ResolverTypeWrapper<GuestWishlistItem>;
  GraphCommerceDebugConfig: GraphCommerceDebugConfig;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Aggregate: Aggregate;
  Asset: Asset;
  AssetTransformationInput: AssetTransformationInput;
  AssetWhereInput: AssetWhereInput;
  Boolean: Scalars['Boolean']['output'];
  ConditionAnd: Omit<ConditionAnd, 'conditions'> & { conditions: Array<ResolversParentTypes['ConditionAndconditionsUnion']> };
  ConditionAndWhereInput: ConditionAndWhereInput;
  ConditionAndconditionsUnion: ResolversUnionTypes<ResolversParentTypes>['ConditionAndconditionsUnion'];
  ConditionAndconditionsUnionWhereInput: ConditionAndconditionsUnionWhereInput;
  ConditionNumber: ConditionNumber;
  ConditionNumberWhereInput: ConditionNumberWhereInput;
  ConditionOr: Omit<ConditionOr, 'conditions'> & { conditions: Array<ResolversParentTypes['ConditionOrconditionsUnion']> };
  ConditionOrWhereInput: ConditionOrWhereInput;
  ConditionOrconditionsUnion: ResolversUnionTypes<ResolversParentTypes>['ConditionOrconditionsUnion'];
  ConditionOrconditionsUnionWhereInput: ConditionOrconditionsUnionWhereInput;
  ConditionText: ConditionText;
  ConditionTextWhereInput: ConditionTextWhereInput;
  DateTime: Scalars['DateTime']['output'];
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DynamicRow: Omit<DynamicRow, 'conditions' | 'rows' | 'target' | 'row'> & { conditions: Array<ResolversParentTypes['DynamicRowconditionsUnion']>, rows: Array<ResolversParentTypes['Union_rows_dynamicRows']>, target?: Maybe<ResolversParentTypes['DynamicRowTarget']>, row?: Maybe<ResolversParentTypes['Union_row_dynamicRow']> };
  DynamicRowConnection: DynamicRowConnection;
  DynamicRowEdge: DynamicRowEdge;
  DynamicRowTarget: ResolversUnionTypes<ResolversParentTypes>['DynamicRowTarget'];
  DynamicRowTargetWhereInput: DynamicRowTargetWhereInput;
  DynamicRowWhereInput: DynamicRowWhereInput;
  DynamicRowWhereUniqueInput: DynamicRowWhereUniqueInput;
  DynamicRowconditionsUnion: ResolversUnionTypes<ResolversParentTypes>['DynamicRowconditionsUnion'];
  DynamicRowconditionsUnionWhereInput: DynamicRowconditionsUnionWhereInput;
  Entity: ResolversInterfaceTypes<ResolversParentTypes>['Entity'];
  EntityWhereInput: EntityWhereInput;
  Float: Scalars['Float']['output'];
  Footer: Footer;
  FooterConnection: FooterConnection;
  FooterEdge: FooterEdge;
  FooterWhereInput: FooterWhereInput;
  FooterWhereUniqueInput: FooterWhereUniqueInput;
  ID: Scalars['ID']['output'];
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: Scalars['Int']['output'];
  Json: Scalars['Json']['output'];
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  Page: Omit<Page, 'content'> & { content: Array<ResolversParentTypes['PageContent']> };
  PageConnection: PageConnection;
  PageContent: ResolversUnionTypes<ResolversParentTypes>['PageContent'];
  PageContentWhereInput: PageContentWhereInput;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  PageLink: PageLink;
  PageLinkConnection: PageLinkConnection;
  PageLinkEdge: PageLinkEdge;
  PageLinkWhereInput: PageLinkWhereInput;
  PageLinkWhereUniqueInput: PageLinkWhereUniqueInput;
  PageWhereInput: PageWhereInput;
  PageWhereUniqueInput: PageWhereUniqueInput;
  RichText: RichText;
  RichTextAST: Scalars['RichTextAST']['output'];
  RowBlogContent: RowBlogContent;
  RowBlogContentConnection: RowBlogContentConnection;
  RowBlogContentEdge: RowBlogContentEdge;
  RowBlogContentWhereInput: RowBlogContentWhereInput;
  RowBlogContentWhereUniqueInput: RowBlogContentWhereUniqueInput;
  RowButtonLinkList: RowButtonLinkList;
  RowButtonLinkListConnection: RowButtonLinkListConnection;
  RowButtonLinkListEdge: RowButtonLinkListEdge;
  RowButtonLinkListWhereInput: RowButtonLinkListWhereInput;
  RowButtonLinkListWhereUniqueInput: RowButtonLinkListWhereUniqueInput;
  RowColumnOne: RowColumnOne;
  RowColumnOneConnection: RowColumnOneConnection;
  RowColumnOneEdge: RowColumnOneEdge;
  RowColumnOneWhereInput: RowColumnOneWhereInput;
  RowColumnOneWhereUniqueInput: RowColumnOneWhereUniqueInput;
  RowColumnThree: RowColumnThree;
  RowColumnThreeConnection: RowColumnThreeConnection;
  RowColumnThreeEdge: RowColumnThreeEdge;
  RowColumnThreeWhereInput: RowColumnThreeWhereInput;
  RowColumnThreeWhereUniqueInput: RowColumnThreeWhereUniqueInput;
  RowColumnTwo: RowColumnTwo;
  RowColumnTwoConnection: RowColumnTwoConnection;
  RowColumnTwoEdge: RowColumnTwoEdge;
  RowColumnTwoWhereInput: RowColumnTwoWhereInput;
  RowColumnTwoWhereUniqueInput: RowColumnTwoWhereUniqueInput;
  RowContentLinks: RowContentLinks;
  RowContentLinksConnection: RowContentLinksConnection;
  RowContentLinksEdge: RowContentLinksEdge;
  RowContentLinksWhereInput: RowContentLinksWhereInput;
  RowContentLinksWhereUniqueInput: RowContentLinksWhereUniqueInput;
  RowHeroBanner: RowHeroBanner;
  RowHeroBannerConnection: RowHeroBannerConnection;
  RowHeroBannerEdge: RowHeroBannerEdge;
  RowHeroBannerWhereInput: RowHeroBannerWhereInput;
  RowHeroBannerWhereUniqueInput: RowHeroBannerWhereUniqueInput;
  RowLinks: RowLinks;
  RowLinksConnection: RowLinksConnection;
  RowLinksEdge: RowLinksEdge;
  RowLinksWhereInput: RowLinksWhereInput;
  RowLinksWhereUniqueInput: RowLinksWhereUniqueInput;
  RowProduct: RowProduct;
  RowProductConnection: RowProductConnection;
  RowProductEdge: RowProductEdge;
  RowProductWhereInput: RowProductWhereInput;
  RowProductWhereUniqueInput: RowProductWhereUniqueInput;
  RowQuote: RowQuote;
  RowQuoteConnection: RowQuoteConnection;
  RowQuoteEdge: RowQuoteEdge;
  RowQuoteWhereInput: RowQuoteWhereInput;
  RowQuoteWhereUniqueInput: RowQuoteWhereUniqueInput;
  RowServiceOptions: RowServiceOptions;
  RowServiceOptionsConnection: RowServiceOptionsConnection;
  RowServiceOptionsEdge: RowServiceOptionsEdge;
  RowServiceOptionsWhereInput: RowServiceOptionsWhereInput;
  RowServiceOptionsWhereUniqueInput: RowServiceOptionsWhereUniqueInput;
  RowSpecialBanner: RowSpecialBanner;
  RowSpecialBannerConnection: RowSpecialBannerConnection;
  RowSpecialBannerEdge: RowSpecialBannerEdge;
  RowSpecialBannerWhereInput: RowSpecialBannerWhereInput;
  RowSpecialBannerWhereUniqueInput: RowSpecialBannerWhereUniqueInput;
  ScheduledOperation: Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversParentTypes['ScheduledOperationAffectedDocument']> };
  ScheduledOperationAffectedDocument: ResolversUnionTypes<ResolversParentTypes>['ScheduledOperationAffectedDocument'];
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledRelease: ScheduledRelease;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  String: Scalars['String']['output'];
  Union_row_dynamicRow: ResolversUnionTypes<ResolversParentTypes>['Union_row_dynamicRow'];
  Union_row_dynamicRowWhereInput: Union_row_dynamicRowWhereInput;
  Union_rows_dynamicRows: ResolversUnionTypes<ResolversParentTypes>['Union_rows_dynamicRows'];
  Union_rows_dynamicRowsWhereInput: Union_rows_dynamicRowsWhereInput;
  User: User;
  Usps: Usps;
  UspsConnection: UspsConnection;
  UspsEdge: UspsEdge;
  UspsWhereInput: UspsWhereInput;
  UspsWhereUniqueInput: UspsWhereUniqueInput;
  Mutation: {};
  FilterTypeInput: FilterTypeInput;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  SearchResultPageInfo: SearchResultPageInfo;
  ComplexTextValue: ComplexTextValue;
  Money: Money;
  EnteredOptionInput: EnteredOptionInput;
  ErrorInterface: ResolversInterfaceTypes<ResolversParentTypes>['ErrorInterface'];
  NoSuchEntityUidError: NoSuchEntityUidError;
  InternalError: InternalError;
  StoreConfig: StoreConfig;
  CmsPage: CmsPage;
  CmsBlocks: CmsBlocks;
  CmsBlock: CmsBlock;
  CustomAttributeMetadata: CustomAttributeMetadata;
  Attribute: Attribute;
  StorefrontProperties: StorefrontProperties;
  AttributeOption: AttributeOption;
  AttributeInput: AttributeInput;
  Website: Website;
  CheckoutAgreement: CheckoutAgreement;
  Price: Price;
  PriceAdjustment: PriceAdjustment;
  ProductPrices: ProductPrices;
  PriceRange: PriceRange;
  ProductPrice: ProductPrice;
  ProductDiscount: ProductDiscount;
  ProductLinks: ProductLinks;
  ProductLinksInterface: ResolversInterfaceTypes<ResolversParentTypes>['ProductLinksInterface'];
  ProductInterface: ResolversInterfaceTypes<ResolversParentTypes>['ProductInterface'];
  PhysicalProductInterface: ResolversInterfaceTypes<ResolversParentTypes>['PhysicalProductInterface'];
  CustomizableAreaOption: CustomizableAreaOption;
  CustomizableAreaValue: CustomizableAreaValue;
  CategoryTree: CategoryTree;
  CategoryResult: CategoryResult;
  CustomizableDateOption: CustomizableDateOption;
  CustomizableDateValue: CustomizableDateValue;
  CustomizableDropDownOption: CustomizableDropDownOption;
  CustomizableDropDownValue: CustomizableDropDownValue;
  CustomizableMultipleOption: CustomizableMultipleOption;
  CustomizableMultipleValue: CustomizableMultipleValue;
  CustomizableFieldOption: CustomizableFieldOption;
  CustomizableFieldValue: CustomizableFieldValue;
  CustomizableFileOption: CustomizableFileOption;
  CustomizableFileValue: CustomizableFileValue;
  MediaGalleryInterface: ResolversInterfaceTypes<ResolversParentTypes>['MediaGalleryInterface'];
  ProductImage: ProductImage;
  ProductVideo: ProductVideo;
  CustomizableOptionInterface: ResolversInterfaceTypes<ResolversParentTypes>['CustomizableOptionInterface'];
  CustomizableProductInterface: ResolversInterfaceTypes<ResolversParentTypes>['CustomizableProductInterface'];
  CategoryInterface: ResolversInterfaceTypes<ResolversParentTypes>['CategoryInterface'];
  Breadcrumb: Breadcrumb;
  CustomizableRadioOption: CustomizableRadioOption;
  CustomizableRadioValue: CustomizableRadioValue;
  CustomizableCheckboxOption: CustomizableCheckboxOption;
  CustomizableCheckboxValue: CustomizableCheckboxValue;
  VirtualProduct: VirtualProduct;
  SimpleProduct: SimpleProduct;
  Products: Products;
  AggregationsFilterInput: AggregationsFilterInput;
  AggregationsCategoryFilterInput: AggregationsCategoryFilterInput;
  CategoryProducts: CategoryProducts;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  CategoryFilterInput: CategoryFilterInput;
  ProductFilterInput: ProductFilterInput;
  ProductMediaGalleryEntriesContent: ProductMediaGalleryEntriesContent;
  ProductMediaGalleryEntriesVideoContent: ProductMediaGalleryEntriesVideoContent;
  ProductSortInput: ProductSortInput;
  ProductAttributeSortInput: ProductAttributeSortInput;
  MediaGalleryEntry: MediaGalleryEntry;
  LayerFilter: LayerFilter;
  LayerFilterItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['LayerFilterItemInterface'];
  LayerFilterItem: LayerFilterItem;
  Aggregation: Aggregation;
  SearchSuggestion: SearchSuggestion;
  AggregationOptionInterface: ResolversInterfaceTypes<ResolversParentTypes>['AggregationOptionInterface'];
  AggregationOption: AggregationOption;
  SortField: SortField;
  SortFields: SortFields;
  SimpleWishlistItem: SimpleWishlistItem;
  VirtualWishlistItem: VirtualWishlistItem;
  ComparableItem: ComparableItem;
  ProductAttribute: ProductAttribute;
  ComparableAttribute: ComparableAttribute;
  CompareList: CompareList;
  Customer: Customer;
  CreateCompareListInput: CreateCompareListInput;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  DeleteCompareListOutput: DeleteCompareListOutput;
  AssignCompareListToCustomerOutput: AssignCompareListToCustomerOutput;
  createEmptyCartInput: createEmptyCartInput;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  CartItemInput: CartItemInput;
  CustomizableOptionInput: CustomizableOptionInput;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  UpdateCartItemsInput: UpdateCartItemsInput;
  CartItemUpdateInput: CartItemUpdateInput;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  ShippingAddressInput: ShippingAddressInput;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  BillingAddressInput: BillingAddressInput;
  CartAddressInput: CartAddressInput;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  ShippingMethodInput: ShippingMethodInput;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  PlaceOrderInput: PlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  PaymentMethodInput: PaymentMethodInput;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  CartPrices: CartPrices;
  CartTaxItem: CartTaxItem;
  CartDiscount: CartDiscount;
  SetPaymentMethodOnCartOutput: SetPaymentMethodOnCartOutput;
  SetBillingAddressOnCartOutput: SetBillingAddressOnCartOutput;
  SetShippingAddressesOnCartOutput: SetShippingAddressesOnCartOutput;
  SetShippingMethodsOnCartOutput: SetShippingMethodsOnCartOutput;
  ApplyCouponToCartOutput: ApplyCouponToCartOutput;
  PlaceOrderOutput: PlaceOrderOutput;
  Cart: Cart;
  CartAddressInterface: ResolversInterfaceTypes<ResolversParentTypes>['CartAddressInterface'];
  ShippingCartAddress: ShippingCartAddress;
  BillingCartAddress: BillingCartAddress;
  CartItemQuantity: CartItemQuantity;
  CartAddressRegion: CartAddressRegion;
  CartAddressCountry: CartAddressCountry;
  SelectedShippingMethod: SelectedShippingMethod;
  AvailableShippingMethod: AvailableShippingMethod;
  AvailablePaymentMethod: AvailablePaymentMethod;
  SelectedPaymentMethod: SelectedPaymentMethod;
  AppliedCoupon: AppliedCoupon;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: RemoveCouponFromCartOutput;
  AddSimpleProductsToCartOutput: AddSimpleProductsToCartOutput;
  AddVirtualProductsToCartOutput: AddVirtualProductsToCartOutput;
  UpdateCartItemsOutput: UpdateCartItemsOutput;
  RemoveItemFromCartOutput: RemoveItemFromCartOutput;
  SetGuestEmailOnCartOutput: SetGuestEmailOnCartOutput;
  SimpleCartItem: SimpleCartItem;
  VirtualCartItem: VirtualCartItem;
  CartItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['CartItemInterface'];
  CartItemError: CartItemError;
  Discount: Discount;
  CartItemPrices: CartItemPrices;
  SelectedCustomizableOption: SelectedCustomizableOption;
  SelectedCustomizableOptionValue: SelectedCustomizableOptionValue;
  CartItemSelectedOptionValuePrice: CartItemSelectedOptionValuePrice;
  Order: Order;
  CartUserInputError: CartUserInputError;
  AddProductsToCartOutput: AddProductsToCartOutput;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerToken: CustomerToken;
  CustomerInput: CustomerInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerOutput: CustomerOutput;
  RevokeCustomerTokenOutput: RevokeCustomerTokenOutput;
  CustomerAddress: CustomerAddress;
  CustomerAddressRegion: CustomerAddressRegion;
  CustomerAddressAttribute: CustomerAddressAttribute;
  IsEmailAvailableOutput: IsEmailAvailableOutput;
  Currency: Currency;
  ExchangeRate: ExchangeRate;
  Country: Country;
  Region: Region;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  AddDownloadableProductsToCartOutput: AddDownloadableProductsToCartOutput;
  DownloadableCartItem: DownloadableCartItem;
  DownloadableProduct: DownloadableProduct;
  DownloadableProductLinks: DownloadableProductLinks;
  DownloadableProductSamples: DownloadableProductSamples;
  DownloadableOrderItem: DownloadableOrderItem;
  DownloadableInvoiceItem: DownloadableInvoiceItem;
  DownloadableCreditMemoItem: DownloadableCreditMemoItem;
  DownloadableItemsLinks: DownloadableItemsLinks;
  DownloadableWishlistItem: DownloadableWishlistItem;
  CustomerDownloadableProducts: CustomerDownloadableProducts;
  CustomerDownloadableProduct: CustomerDownloadableProduct;
  ProductTierPrices: ProductTierPrices;
  TierPrice: TierPrice;
  ConfigurableCartItem: ConfigurableCartItem;
  BundleCartItem: BundleCartItem;
  GiftMessage: GiftMessage;
  GiftMessageInput: GiftMessageInput;
  SalesItemInterface: SalesItemInterface;
  CustomerOrder: CustomerOrder;
  OrderItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['OrderItemInterface'];
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleOptionInput: BundleOptionInput;
  AddBundleProductsToCartOutput: AddBundleProductsToCartOutput;
  SelectedBundleOption: SelectedBundleOption;
  SelectedBundleOptionValue: SelectedBundleOptionValue;
  BundleItem: BundleItem;
  BundleItemOption: BundleItemOption;
  BundleProduct: BundleProduct;
  BundleOrderItem: BundleOrderItem;
  BundleInvoiceItem: BundleInvoiceItem;
  BundleShipmentItem: BundleShipmentItem;
  BundleCreditMemoItem: BundleCreditMemoItem;
  ItemSelectedBundleOption: ItemSelectedBundleOption;
  ItemSelectedBundleOptionValue: ItemSelectedBundleOptionValue;
  BundleWishlistItem: BundleWishlistItem;
  GroupedProduct: GroupedProduct;
  GroupedProductItem: GroupedProductItem;
  GroupedProductWishlistItem: GroupedProductWishlistItem;
  ConfigurableProduct: ConfigurableProduct;
  ConfigurableVariant: ConfigurableVariant;
  ConfigurableAttributeOption: ConfigurableAttributeOption;
  ConfigurableProductOptions: ConfigurableProductOptions;
  ConfigurableProductOptionsValues: ConfigurableProductOptionsValues;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: AddConfigurableProductsToCartOutput;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  SelectedConfigurableOption: SelectedConfigurableOption;
  ConfigurableWishlistItem: ConfigurableWishlistItem;
  ConfigurableProductOptionsSelection: ConfigurableProductOptionsSelection;
  ConfigurableOptionAvailableForSelection: ConfigurableOptionAvailableForSelection;
  ConfigurableProductOption: ConfigurableProductOption;
  ConfigurableProductOptionValue: ConfigurableProductOptionValue;
  AreaInput: AreaInput;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: PickupLocations;
  PickupLocation: PickupLocation;
  ProductInfoInput: ProductInfoInput;
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: GenerateCustomerTokenAsAdminOutput;
  SubscribeEmailToNewsletterOutput: SubscribeEmailToNewsletterOutput;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressToken: PaypalExpressToken;
  PaypalExpressTokenOutput: PaypalExpressTokenOutput;
  PayflowLinkToken: PayflowLinkToken;
  HostedProUrl: HostedProUrl;
  HostedProUrlInput: HostedProUrlInput;
  HostedProInput: HostedProInput;
  PaypalExpressInput: PaypalExpressInput;
  PayflowExpressInput: PayflowExpressInput;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PaypalExpressUrlList: PaypalExpressUrlList;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProInput: PayflowProInput;
  CreditCardDetailsInput: CreditCardDetailsInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PayflowProToken: PayflowProToken;
  CreatePayflowProTokenOutput: CreatePayflowProTokenOutput;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: PayflowProResponseOutput;
  VaultTokenInput: VaultTokenInput;
  ProductReviews: ProductReviews;
  ProductReview: ProductReview;
  ProductReviewRating: ProductReviewRating;
  ProductReviewRatingsMetadata: ProductReviewRatingsMetadata;
  ProductReviewRatingMetadata: ProductReviewRatingMetadata;
  ProductReviewRatingValueMetadata: ProductReviewRatingValueMetadata;
  CreateProductReviewOutput: CreateProductReviewOutput;
  CreateProductReviewInput: CreateProductReviewInput;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ReorderItemsOutput: ReorderItemsOutput;
  CheckoutUserInputError: CheckoutUserInputError;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOrderSortInput: CustomerOrderSortInput;
  CustomerOrders: CustomerOrders;
  OrderAddress: OrderAddress;
  OrderItem: OrderItem;
  OrderItemOption: OrderItemOption;
  TaxItem: TaxItem;
  OrderTotal: OrderTotal;
  Invoice: Invoice;
  InvoiceItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['InvoiceItemInterface'];
  InvoiceItem: InvoiceItem;
  InvoiceTotal: InvoiceTotal;
  ShippingHandling: ShippingHandling;
  ShippingDiscount: ShippingDiscount;
  OrderShipment: OrderShipment;
  SalesCommentItem: SalesCommentItem;
  ShipmentItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['ShipmentItemInterface'];
  ShipmentItem: ShipmentItem;
  ShipmentTracking: ShipmentTracking;
  OrderPaymentMethod: OrderPaymentMethod;
  CreditMemo: CreditMemo;
  CreditMemoItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['CreditMemoItemInterface'];
  CreditMemoItem: CreditMemoItem;
  CreditMemoTotal: CreditMemoTotal;
  KeyValue: KeyValue;
  EntityUrl: EntityUrl;
  UrlRewrite: UrlRewrite;
  HttpQueryParameter: HttpQueryParameter;
  RoutableInterface: ResolversInterfaceTypes<ResolversParentTypes>['RoutableInterface'];
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendOutput: SendEmailToFriendOutput;
  SendEmailToFriendSender: SendEmailToFriendSender;
  SendEmailToFriendRecipient: SendEmailToFriendRecipient;
  SendFriendConfiguration: SendFriendConfiguration;
  SwatchLayerFilterItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['SwatchLayerFilterItemInterface'];
  SwatchLayerFilterItem: SwatchLayerFilterItem;
  SwatchData: SwatchData;
  SwatchDataInterface: ResolversInterfaceTypes<ResolversParentTypes>['SwatchDataInterface'];
  ImageSwatchData: ImageSwatchData;
  TextSwatchData: TextSwatchData;
  ColorSwatchData: ColorSwatchData;
  DeletePaymentTokenOutput: DeletePaymentTokenOutput;
  CustomerPaymentTokens: CustomerPaymentTokens;
  PaymentToken: PaymentToken;
  FixedProductTax: FixedProductTax;
  WishlistOutput: WishlistOutput;
  Wishlist: Wishlist;
  WishlistItemInterface: ResolversInterfaceTypes<ResolversParentTypes>['WishlistItemInterface'];
  WishlistItems: WishlistItems;
  WishlistItem: WishlistItem;
  AddWishlistItemsToCartOutput: AddWishlistItemsToCartOutput;
  WishlistCartUserInputError: WishlistCartUserInputError;
  WishlistItemInput: WishlistItemInput;
  AddProductsToWishlistOutput: AddProductsToWishlistOutput;
  RemoveProductsFromWishlistOutput: RemoveProductsFromWishlistOutput;
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  UpdateProductsInWishlistOutput: UpdateProductsInWishlistOutput;
  WishListUserInputError: WishListUserInputError;
  PaymentMethod: PaymentMethod;
  MollieStoreConfig: MollieStoreConfig;
  MollieIssuer: MollieIssuer;
  MolliePaymentMethodMeta: MolliePaymentMethodMeta;
  MolliePaymentMethod: MolliePaymentMethod;
  MollieResetCartOutput: MollieResetCartOutput;
  MolliePaymentMethodsOutput: MolliePaymentMethodsOutput;
  MollieTransactionOutput: MollieTransactionOutput;
  MollieProcessTransactionOutput: MollieProcessTransactionOutput;
  MolliePaymentFee: MolliePaymentFee;
  MollieApplePayValidationOutput: MollieApplePayValidationOutput;
  MollieTransactionInput: MollieTransactionInput;
  MolliePaymentMethodsInput: MolliePaymentMethodsInput;
  MollieResetCartInput: MollieResetCartInput;
  MollieProcessTransactionInput: MollieProcessTransactionInput;
  BraintreeInput: BraintreeInput;
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  GraphCommerceConfig: GraphCommerceConfig;
  GraphCommerceStorefrontConfig: GraphCommerceStorefrontConfig;
  CurrentCartId: CurrentCartId;
  RegisterCartIdInput: RegisterCartIdInput;
  CurrentCompareUid: CurrentCompareUid;
  MagentoConfigurableVariantValues: MagentoConfigurableVariantValues;
  GuestWishlist: GuestWishlist;
  GuestWishlistItem: GuestWishlistItem;
  GraphCommerceDebugConfig: GraphCommerceDebugConfig;
}>;

export type envDirectiveArgs = {
  if: Scalars['String']['input'];
};

export type envDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = envDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type injectableDirectiveArgs = { };

export type injectableDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = injectableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type injectDirectiveArgs = {
  into: Array<Scalars['String']['input']>;
};

export type injectDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = injectDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  entities?: Resolver<Maybe<Array<ResolversTypes['Entity']>>, ParentType, ContextType, RequireFields<QueryentitiesArgs, 'where'>>;
  rowServiceOptionsMultiple?: Resolver<Array<ResolversTypes['RowServiceOptions']>, ParentType, ContextType, RequireFields<QueryrowServiceOptionsMultipleArgs, 'stage'>>;
  rowServiceOptions?: Resolver<Maybe<ResolversTypes['RowServiceOptions']>, ParentType, ContextType, RequireFields<QueryrowServiceOptionsArgs, 'where' | 'stage'>>;
  rowServiceOptionsMultipleConnection?: Resolver<ResolversTypes['RowServiceOptionsConnection'], ParentType, ContextType, RequireFields<QueryrowServiceOptionsMultipleConnectionArgs, 'stage'>>;
  footers?: Resolver<Array<ResolversTypes['Footer']>, ParentType, ContextType, RequireFields<QueryfootersArgs, 'stage'>>;
  footer?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType, RequireFields<QueryfooterArgs, 'where' | 'stage'>>;
  footersConnection?: Resolver<ResolversTypes['FooterConnection'], ParentType, ContextType, RequireFields<QueryfootersConnectionArgs, 'stage'>>;
  rowQuotes?: Resolver<Array<ResolversTypes['RowQuote']>, ParentType, ContextType, RequireFields<QueryrowQuotesArgs, 'stage'>>;
  rowQuote?: Resolver<Maybe<ResolversTypes['RowQuote']>, ParentType, ContextType, RequireFields<QueryrowQuoteArgs, 'where' | 'stage'>>;
  rowQuotesConnection?: Resolver<ResolversTypes['RowQuoteConnection'], ParentType, ContextType, RequireFields<QueryrowQuotesConnectionArgs, 'stage'>>;
  uspsMultiple?: Resolver<Array<ResolversTypes['Usps']>, ParentType, ContextType, RequireFields<QueryuspsMultipleArgs, 'stage'>>;
  usps?: Resolver<Maybe<ResolversTypes['Usps']>, ParentType, ContextType, RequireFields<QueryuspsArgs, 'where' | 'stage'>>;
  uspsMultipleConnection?: Resolver<ResolversTypes['UspsConnection'], ParentType, ContextType, RequireFields<QueryuspsMultipleConnectionArgs, 'stage'>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QuerypagesArgs, 'stage'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QuerypageArgs, 'where' | 'stage'>>;
  pagesConnection?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<QuerypagesConnectionArgs, 'stage'>>;
  rowContentLinksMultiple?: Resolver<Array<ResolversTypes['RowContentLinks']>, ParentType, ContextType, RequireFields<QueryrowContentLinksMultipleArgs, 'stage'>>;
  rowContentLinks?: Resolver<Maybe<ResolversTypes['RowContentLinks']>, ParentType, ContextType, RequireFields<QueryrowContentLinksArgs, 'where' | 'stage'>>;
  rowContentLinksMultipleConnection?: Resolver<ResolversTypes['RowContentLinksConnection'], ParentType, ContextType, RequireFields<QueryrowContentLinksMultipleConnectionArgs, 'stage'>>;
  dynamicRows?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, RequireFields<QuerydynamicRowsArgs, 'stage'>>;
  dynamicRow?: Resolver<Maybe<ResolversTypes['DynamicRow']>, ParentType, ContextType, RequireFields<QuerydynamicRowArgs, 'where' | 'stage'>>;
  dynamicRowsConnection?: Resolver<ResolversTypes['DynamicRowConnection'], ParentType, ContextType, RequireFields<QuerydynamicRowsConnectionArgs, 'stage'>>;
  rowButtonLinkLists?: Resolver<Array<ResolversTypes['RowButtonLinkList']>, ParentType, ContextType, RequireFields<QueryrowButtonLinkListsArgs, 'stage'>>;
  rowButtonLinkList?: Resolver<Maybe<ResolversTypes['RowButtonLinkList']>, ParentType, ContextType, RequireFields<QueryrowButtonLinkListArgs, 'where' | 'stage'>>;
  rowButtonLinkListsConnection?: Resolver<ResolversTypes['RowButtonLinkListConnection'], ParentType, ContextType, RequireFields<QueryrowButtonLinkListsConnectionArgs, 'stage'>>;
  pageLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, RequireFields<QuerypageLinksArgs, 'stage'>>;
  pageLink?: Resolver<Maybe<ResolversTypes['PageLink']>, ParentType, ContextType, RequireFields<QuerypageLinkArgs, 'where' | 'stage'>>;
  pageLinksConnection?: Resolver<ResolversTypes['PageLinkConnection'], ParentType, ContextType, RequireFields<QuerypageLinksConnectionArgs, 'stage'>>;
  rowProductMultiple?: Resolver<Array<ResolversTypes['RowProduct']>, ParentType, ContextType, RequireFields<QueryrowProductMultipleArgs, 'stage'>>;
  rowProduct?: Resolver<Maybe<ResolversTypes['RowProduct']>, ParentType, ContextType, RequireFields<QueryrowProductArgs, 'where' | 'stage'>>;
  rowProductMultipleConnection?: Resolver<ResolversTypes['RowProductConnection'], ParentType, ContextType, RequireFields<QueryrowProductMultipleConnectionArgs, 'stage'>>;
  rowSpecialBanners?: Resolver<Array<ResolversTypes['RowSpecialBanner']>, ParentType, ContextType, RequireFields<QueryrowSpecialBannersArgs, 'stage'>>;
  rowSpecialBanner?: Resolver<Maybe<ResolversTypes['RowSpecialBanner']>, ParentType, ContextType, RequireFields<QueryrowSpecialBannerArgs, 'where' | 'stage'>>;
  rowSpecialBannersConnection?: Resolver<ResolversTypes['RowSpecialBannerConnection'], ParentType, ContextType, RequireFields<QueryrowSpecialBannersConnectionArgs, 'stage'>>;
  rowLinksMultiple?: Resolver<Array<ResolversTypes['RowLinks']>, ParentType, ContextType, RequireFields<QueryrowLinksMultipleArgs, 'stage'>>;
  rowLinks?: Resolver<Maybe<ResolversTypes['RowLinks']>, ParentType, ContextType, RequireFields<QueryrowLinksArgs, 'where' | 'stage'>>;
  rowLinksMultipleConnection?: Resolver<ResolversTypes['RowLinksConnection'], ParentType, ContextType, RequireFields<QueryrowLinksMultipleConnectionArgs, 'stage'>>;
  rowHeroBanners?: Resolver<Array<ResolversTypes['RowHeroBanner']>, ParentType, ContextType, RequireFields<QueryrowHeroBannersArgs, 'stage'>>;
  rowHeroBanner?: Resolver<Maybe<ResolversTypes['RowHeroBanner']>, ParentType, ContextType, RequireFields<QueryrowHeroBannerArgs, 'where' | 'stage'>>;
  rowHeroBannersConnection?: Resolver<ResolversTypes['RowHeroBannerConnection'], ParentType, ContextType, RequireFields<QueryrowHeroBannersConnectionArgs, 'stage'>>;
  rowColumnTwos?: Resolver<Array<ResolversTypes['RowColumnTwo']>, ParentType, ContextType, RequireFields<QueryrowColumnTwosArgs, 'stage'>>;
  rowColumnTwo?: Resolver<Maybe<ResolversTypes['RowColumnTwo']>, ParentType, ContextType, RequireFields<QueryrowColumnTwoArgs, 'where' | 'stage'>>;
  rowColumnTwosConnection?: Resolver<ResolversTypes['RowColumnTwoConnection'], ParentType, ContextType, RequireFields<QueryrowColumnTwosConnectionArgs, 'stage'>>;
  rowColumnThrees?: Resolver<Array<ResolversTypes['RowColumnThree']>, ParentType, ContextType, RequireFields<QueryrowColumnThreesArgs, 'stage'>>;
  rowColumnThree?: Resolver<Maybe<ResolversTypes['RowColumnThree']>, ParentType, ContextType, RequireFields<QueryrowColumnThreeArgs, 'where' | 'stage'>>;
  rowColumnThreesConnection?: Resolver<ResolversTypes['RowColumnThreeConnection'], ParentType, ContextType, RequireFields<QueryrowColumnThreesConnectionArgs, 'stage'>>;
  rowColumnOnes?: Resolver<Array<ResolversTypes['RowColumnOne']>, ParentType, ContextType, RequireFields<QueryrowColumnOnesArgs, 'stage'>>;
  rowColumnOne?: Resolver<Maybe<ResolversTypes['RowColumnOne']>, ParentType, ContextType, RequireFields<QueryrowColumnOneArgs, 'where' | 'stage'>>;
  rowColumnOnesConnection?: Resolver<ResolversTypes['RowColumnOneConnection'], ParentType, ContextType, RequireFields<QueryrowColumnOnesConnectionArgs, 'stage'>>;
  rowBlogContents?: Resolver<Array<ResolversTypes['RowBlogContent']>, ParentType, ContextType, RequireFields<QueryrowBlogContentsArgs, 'stage'>>;
  rowBlogContent?: Resolver<Maybe<ResolversTypes['RowBlogContent']>, ParentType, ContextType, RequireFields<QueryrowBlogContentArgs, 'where' | 'stage'>>;
  rowBlogContentsConnection?: Resolver<ResolversTypes['RowBlogContentConnection'], ParentType, ContextType, RequireFields<QueryrowBlogContentsConnectionArgs, 'stage'>>;
  availableStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreConfig']>>>, ParentType, ContextType, Partial<QueryavailableStoresArgs>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QuerycartArgs, 'cart_id'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryResult']>, ParentType, ContextType, RequireFields<QuerycategoriesArgs, 'pageSize' | 'currentPage'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryTree']>, ParentType, ContextType, Partial<QuerycategoryArgs>>;
  categoryList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType, RequireFields<QuerycategoryListArgs, 'pageSize' | 'currentPage'>>;
  checkoutAgreements?: Resolver<Maybe<Array<Maybe<ResolversTypes['CheckoutAgreement']>>>, ParentType, ContextType>;
  cmsBlocks?: Resolver<Maybe<ResolversTypes['CmsBlocks']>, ParentType, ContextType, Partial<QuerycmsBlocksArgs>>;
  cmsPage?: Resolver<Maybe<ResolversTypes['CmsPage']>, ParentType, ContextType, Partial<QuerycmsPageArgs>>;
  compareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<QuerycompareListArgs, 'uid'>>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<QuerycountryArgs>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  customAttributeMetadata?: Resolver<Maybe<ResolversTypes['CustomAttributeMetadata']>, ParentType, ContextType, RequireFields<QuerycustomAttributeMetadataArgs, 'attributes'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  customerDownloadableProducts?: Resolver<Maybe<ResolversTypes['CustomerDownloadableProducts']>, ParentType, ContextType>;
  customerOrders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType>;
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  getHostedProUrl?: Resolver<Maybe<ResolversTypes['HostedProUrl']>, ParentType, ContextType, RequireFields<QuerygetHostedProUrlArgs, 'input'>>;
  getPayflowLinkToken?: Resolver<Maybe<ResolversTypes['PayflowLinkToken']>, ParentType, ContextType, RequireFields<QuerygetPayflowLinkTokenArgs, 'input'>>;
  isEmailAvailable?: Resolver<Maybe<ResolversTypes['IsEmailAvailableOutput']>, ParentType, ContextType, RequireFields<QueryisEmailAvailableArgs, 'email'>>;
  mollieCustomerOrder?: Resolver<Maybe<ResolversTypes['CustomerOrder']>, ParentType, ContextType, Partial<QuerymollieCustomerOrderArgs>>;
  molliePaymentMethods?: Resolver<Maybe<ResolversTypes['MolliePaymentMethodsOutput']>, ParentType, ContextType, Partial<QuerymolliePaymentMethodsArgs>>;
  pickupLocations?: Resolver<Maybe<ResolversTypes['PickupLocations']>, ParentType, ContextType, RequireFields<QuerypickupLocationsArgs, 'pageSize' | 'currentPage'>>;
  productReviewRatingsMetadata?: Resolver<ResolversTypes['ProductReviewRatingsMetadata'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryproductsArgs, 'pageSize' | 'currentPage'>>;
  route?: Resolver<Maybe<ResolversTypes['RoutableInterface']>, ParentType, ContextType, RequireFields<QueryrouteArgs, 'url'>>;
  storeConfig?: Resolver<Maybe<ResolversTypes['StoreConfig']>, ParentType, ContextType>;
  urlResolver?: Resolver<Maybe<ResolversTypes['EntityUrl']>, ParentType, ContextType, RequireFields<QueryurlResolverArgs, 'url'>>;
  wishlist?: Resolver<Maybe<ResolversTypes['WishlistOutput']>, ParentType, ContextType>;
  currentCartId?: Resolver<Maybe<ResolversTypes['CurrentCartId']>, ParentType, ContextType>;
  currentCompareUid?: Resolver<Maybe<ResolversTypes['CurrentCompareUid']>, ParentType, ContextType>;
  customerToken?: Resolver<Maybe<ResolversTypes['CustomerToken']>, ParentType, ContextType>;
  guestWishlist?: Resolver<Maybe<ResolversTypes['GuestWishlist']>, ParentType, ContextType>;
}>;

export type AggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetRowHeroBanner?: Resolver<Array<ResolversTypes['RowHeroBanner']>, ParentType, ContextType, Partial<AssetassetRowHeroBannerArgs>>;
  rowSpecialBannerAsset?: Resolver<Array<ResolversTypes['RowSpecialBanner']>, ParentType, ContextType, Partial<AssetrowSpecialBannerAssetArgs>>;
  assetRowProduct?: Resolver<Array<ResolversTypes['RowProduct']>, ParentType, ContextType, Partial<AssetassetRowProductArgs>>;
  assetPage?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<AssetassetPageArgs>>;
  assetPageLink?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<AssetassetPageLinkArgs>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<AsseturlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConditionAndResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionAnd'] = ResolversParentTypes['ConditionAnd']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConditionAndconditionsUnion']>, ParentType, ContextType, Partial<ConditionAndconditionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConditionAndconditionsUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionAndconditionsUnion'] = ResolversParentTypes['ConditionAndconditionsUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ConditionNumber' | 'ConditionOr' | 'ConditionText', ParentType, ContextType>;
}>;

export type ConditionNumberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionNumber'] = ResolversParentTypes['ConditionNumber']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  property?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['DynamicRowConditionNumberOperator'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConditionOrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionOr'] = ResolversParentTypes['ConditionOr']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConditionOrconditionsUnion']>, ParentType, ContextType, Partial<ConditionOrconditionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConditionOrconditionsUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionOrconditionsUnion'] = ResolversParentTypes['ConditionOrconditionsUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ConditionNumber' | 'ConditionText', ParentType, ContextType>;
}>;

export type ConditionTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionText'] = ResolversParentTypes['ConditionText']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  property?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DynamicRowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicRow'] = ResolversParentTypes['DynamicRow']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['DynamicRowconditionsUnion']>, ParentType, ContextType, Partial<DynamicRowconditionsArgs>>;
  placement?: Resolver<ResolversTypes['DynamicRowPlacement'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Union_rows_dynamicRows']>, ParentType, ContextType, Partial<DynamicRowrowsArgs>>;
  target?: Resolver<Maybe<ResolversTypes['DynamicRowTarget']>, ParentType, ContextType>;
  row?: Resolver<Maybe<ResolversTypes['Union_row_dynamicRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DynamicRowConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicRowConnection'] = ResolversParentTypes['DynamicRowConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DynamicRowEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DynamicRowEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicRowEdge'] = ResolversParentTypes['DynamicRowEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['DynamicRow'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DynamicRowTargetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicRowTarget'] = ResolversParentTypes['DynamicRowTarget']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RowBlogContent' | 'RowButtonLinkList' | 'RowColumnOne' | 'RowColumnThree' | 'RowColumnTwo' | 'RowContentLinks' | 'RowHeroBanner' | 'RowLinks' | 'RowProduct' | 'RowQuote' | 'RowServiceOptions' | 'RowSpecialBanner', ParentType, ContextType>;
}>;

export type DynamicRowconditionsUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicRowconditionsUnion'] = ResolversParentTypes['DynamicRowconditionsUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ConditionAnd' | 'ConditionNumber' | 'ConditionText', ParentType, ContextType>;
}>;

export type EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Asset' | 'ConditionAnd' | 'ConditionNumber' | 'ConditionOr' | 'ConditionText' | 'DynamicRow' | 'Footer' | 'Page' | 'PageLink' | 'RowBlogContent' | 'RowButtonLinkList' | 'RowColumnOne' | 'RowColumnThree' | 'RowColumnTwo' | 'RowContentLinks' | 'RowHeroBanner' | 'RowLinks' | 'RowProduct' | 'RowQuote' | 'RowServiceOptions' | 'RowSpecialBanner' | 'ScheduledOperation' | 'ScheduledRelease' | 'User' | 'Usps', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
}>;

export type FooterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<FootersocialLinksArgs>>;
  legalLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<FooterlegalLinksArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooterConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FooterConnection'] = ResolversParentTypes['FooterConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FooterEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooterEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FooterEdge'] = ResolversParentTypes['FooterEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Footer'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type NodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Asset' | 'DynamicRow' | 'Footer' | 'Page' | 'PageLink' | 'RowBlogContent' | 'RowButtonLinkList' | 'RowColumnOne' | 'RowColumnThree' | 'RowColumnTwo' | 'RowContentLinks' | 'RowHeroBanner' | 'RowLinks' | 'RowProduct' | 'RowQuote' | 'RowServiceOptions' | 'RowSpecialBanner' | 'ScheduledOperation' | 'ScheduledRelease' | 'User' | 'Usps', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
}>;

export type PageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  relatedPages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<PagerelatedPagesArgs>>;
  childPages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<PagechildPagesArgs>>;
  rowButtonLinkLists?: Resolver<Array<ResolversTypes['RowButtonLinkList']>, ParentType, ContextType, Partial<PagerowButtonLinkListsArgs>>;
  metaRobots?: Resolver<ResolversTypes['MetaRobots'], ParentType, ContextType>;
  content?: Resolver<Array<ResolversTypes['PageContent']>, ParentType, ContextType, Partial<PagecontentArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageConnection'] = ResolversParentTypes['PageConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PageEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageContent'] = ResolversParentTypes['PageContent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RowBlogContent' | 'RowButtonLinkList' | 'RowColumnOne' | 'RowColumnThree' | 'RowColumnTwo' | 'RowContentLinks' | 'RowHeroBanner' | 'RowLinks' | 'RowProduct' | 'RowQuote' | 'RowServiceOptions' | 'RowSpecialBanner', ParentType, ContextType>;
}>;

export type PageEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageEdge'] = ResolversParentTypes['PageEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageLinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageLink'] = ResolversParentTypes['PageLink']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowHeroBanners?: Resolver<Array<ResolversTypes['RowHeroBanner']>, ParentType, ContextType, Partial<PageLinkrowHeroBannersArgs>>;
  rowProductMultiple?: Resolver<Array<ResolversTypes['RowProduct']>, ParentType, ContextType, Partial<PageLinkrowProductMultipleArgs>>;
  rowSpecialBanners?: Resolver<Array<ResolversTypes['RowSpecialBanner']>, ParentType, ContextType, Partial<PageLinkrowSpecialBannersArgs>>;
  rowLinks?: Resolver<Array<ResolversTypes['RowLinks']>, ParentType, ContextType, Partial<PageLinkrowLinksArgs>>;
  footerSocialLinks?: Resolver<Array<ResolversTypes['Footer']>, ParentType, ContextType, Partial<PageLinkfooterSocialLinksArgs>>;
  uspsMultiple?: Resolver<Array<ResolversTypes['Usps']>, ParentType, ContextType, Partial<PageLinkuspsMultipleArgs>>;
  rowServiceOptionsMultiple?: Resolver<Array<ResolversTypes['RowServiceOptions']>, ParentType, ContextType, Partial<PageLinkrowServiceOptionsMultipleArgs>>;
  rowContentLinks?: Resolver<Maybe<ResolversTypes['RowContentLinks']>, ParentType, ContextType>;
  footerLegalLinks?: Resolver<Array<ResolversTypes['Footer']>, ParentType, ContextType, Partial<PageLinkfooterLegalLinksArgs>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageLinkConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageLinkConnection'] = ResolversParentTypes['PageLinkConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PageLinkEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageLinkEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageLinkEdge'] = ResolversParentTypes['PageLinkEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['PageLink'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RichTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = ResolversObject<{
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface RichTextASTScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextAST'], any> {
  name: 'RichTextAST';
}

export type RowBlogContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowBlogContent'] = ResolversParentTypes['RowBlogContent']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowBlogContentdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowBlogContentpagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowBlogContentConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowBlogContentConnection'] = ResolversParentTypes['RowBlogContentConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowBlogContentEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowBlogContentEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowBlogContentEdge'] = ResolversParentTypes['RowBlogContentEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowBlogContent'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowButtonLinkListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowButtonLinkList'] = ResolversParentTypes['RowButtonLinkList']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowButtonLinkListlinksArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowButtonLinkListdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowButtonLinkListpagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowButtonLinkListConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowButtonLinkListConnection'] = ResolversParentTypes['RowButtonLinkListConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowButtonLinkListEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowButtonLinkListEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowButtonLinkListEdge'] = ResolversParentTypes['RowButtonLinkListEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowButtonLinkList'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnOneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnOne'] = ResolversParentTypes['RowColumnOne']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colOne?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  rowColumnOneVariant?: Resolver<Maybe<ResolversTypes['RowColumnOneVariants']>, ParentType, ContextType>;
  dynamicRows?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowColumnOnedynamicRowsArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowColumnOnedynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowColumnOnepagesArgs>>;
  dynamicRow?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowColumnOnedynamicRowArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnOneConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnOneConnection'] = ResolversParentTypes['RowColumnOneConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowColumnOneEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnOneEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnOneEdge'] = ResolversParentTypes['RowColumnOneEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowColumnOne'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnThreeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnThree'] = ResolversParentTypes['RowColumnThree']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colOne?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  colTwo?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  colThree?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowColumnThreedynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowColumnThreepagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnThreeConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnThreeConnection'] = ResolversParentTypes['RowColumnThreeConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowColumnThreeEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnThreeEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnThreeEdge'] = ResolversParentTypes['RowColumnThreeEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowColumnThree'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnTwoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnTwo'] = ResolversParentTypes['RowColumnTwo']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colOne?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  colTwo?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowColumnTwodynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowColumnTwopagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnTwoConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnTwoConnection'] = ResolversParentTypes['RowColumnTwoConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowColumnTwoEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowColumnTwoEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowColumnTwoEdge'] = ResolversParentTypes['RowColumnTwoEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowColumnTwo'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowContentLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowContentLinks'] = ResolversParentTypes['RowContentLinks']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowContentLinkscontentLinksArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowContentLinksdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowContentLinkspagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowContentLinksConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowContentLinksConnection'] = ResolversParentTypes['RowContentLinksConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowContentLinksEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowContentLinksEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowContentLinksEdge'] = ResolversParentTypes['RowContentLinksEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowContentLinks'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowHeroBannerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowHeroBanner'] = ResolversParentTypes['RowHeroBanner']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  copy?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  pageLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowHeroBannerpageLinksArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowHeroBannerdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowHeroBannerpagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowHeroBannerConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowHeroBannerConnection'] = ResolversParentTypes['RowHeroBannerConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowHeroBannerEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowHeroBannerEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowHeroBannerEdge'] = ResolversParentTypes['RowHeroBannerEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowHeroBanner'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowLinks'] = ResolversParentTypes['RowLinks']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowLinksCopy?: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  pageLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowLinkspageLinksArgs>>;
  linksVariant?: Resolver<Maybe<ResolversTypes['RowLinksVariants']>, ParentType, ContextType>;
  dynamicRows?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowLinksdynamicRowsArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowLinksdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowLinkspagesArgs>>;
  dynamicRow?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowLinksdynamicRowArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowLinksConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowLinksConnection'] = ResolversParentTypes['RowLinksConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowLinksEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowLinksEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowLinksEdge'] = ResolversParentTypes['RowLinksEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowLinks'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowProduct'] = ResolversParentTypes['RowProduct']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productCopy?: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  pageLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowProductpageLinksArgs>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['RowProductVariants']>, ParentType, ContextType>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowProductdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowProductpagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowProductConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowProductConnection'] = ResolversParentTypes['RowProductConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowProductEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowProductEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowProductEdge'] = ResolversParentTypes['RowProductEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowProduct'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowQuoteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowQuote'] = ResolversParentTypes['RowQuote']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  dynamicRows?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowQuotedynamicRowsArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowQuotedynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowQuotepagesArgs>>;
  dynamicRow?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowQuotedynamicRowArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowQuoteConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowQuoteConnection'] = ResolversParentTypes['RowQuoteConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowQuoteEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowQuoteEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowQuoteEdge'] = ResolversParentTypes['RowQuoteEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowQuote'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowServiceOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowServiceOptions'] = ResolversParentTypes['RowServiceOptions']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceOptions?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowServiceOptionsserviceOptionsArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowServiceOptionsdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowServiceOptionspagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowServiceOptionsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowServiceOptionsConnection'] = ResolversParentTypes['RowServiceOptionsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowServiceOptionsEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowServiceOptionsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowServiceOptionsEdge'] = ResolversParentTypes['RowServiceOptionsEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowServiceOptions'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowSpecialBannerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowSpecialBanner'] = ResolversParentTypes['RowSpecialBanner']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copy?: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  pageLinks?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<RowSpecialBannerpageLinksArgs>>;
  dynamicRowsTarget?: Resolver<Array<ResolversTypes['DynamicRow']>, ParentType, ContextType, Partial<RowSpecialBannerdynamicRowsTargetArgs>>;
  pages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType, Partial<RowSpecialBannerpagesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowSpecialBannerConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowSpecialBannerConnection'] = ResolversParentTypes['RowSpecialBannerConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RowSpecialBannerEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RowSpecialBannerEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RowSpecialBannerEdge'] = ResolversParentTypes['RowSpecialBannerEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['RowSpecialBanner'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduledOperationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduledOperation'] = ResolversParentTypes['ScheduledOperation']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  rawPayload?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  release?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScheduledOperationStatus'], ParentType, ContextType>;
  affectedDocuments?: Resolver<Array<ResolversTypes['ScheduledOperationAffectedDocument']>, ParentType, ContextType, Partial<ScheduledOperationaffectedDocumentsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduledOperationAffectedDocumentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduledOperationAffectedDocument'] = ResolversParentTypes['ScheduledOperationAffectedDocument']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Asset' | 'DynamicRow' | 'Footer' | 'Page' | 'PageLink' | 'RowBlogContent' | 'RowButtonLinkList' | 'RowColumnOne' | 'RowColumnThree' | 'RowColumnTwo' | 'RowContentLinks' | 'RowHeroBanner' | 'RowLinks' | 'RowProduct' | 'RowQuote' | 'RowServiceOptions' | 'RowSpecialBanner' | 'Usps', ParentType, ContextType>;
}>;

export type ScheduledReleaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduledRelease'] = ResolversParentTypes['ScheduledRelease']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  releaseAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isImplicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ScheduledReleaseoperationsArgs>>;
  status?: Resolver<ResolversTypes['ScheduledReleaseStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Union_row_dynamicRowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Union_row_dynamicRow'] = ResolversParentTypes['Union_row_dynamicRow']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RowColumnOne' | 'RowLinks' | 'RowQuote', ParentType, ContextType>;
}>;

export type Union_rows_dynamicRowsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Union_rows_dynamicRows'] = ResolversParentTypes['Union_rows_dynamicRows']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RowColumnOne' | 'RowLinks' | 'RowQuote', ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['UserKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UspsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Usps'] = ResolversParentTypes['Usps']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uspsMultiple?: Resolver<Array<ResolversTypes['PageLink']>, ParentType, ContextType, Partial<UspsuspsMultipleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UspsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UspsConnection'] = ResolversParentTypes['UspsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UspsEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UspsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UspsEdge'] = ResolversParentTypes['UspsEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Usps'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBundleProductsToCart?: Resolver<Maybe<ResolversTypes['AddBundleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationaddBundleProductsToCartArgs>>;
  addConfigurableProductsToCart?: Resolver<Maybe<ResolversTypes['AddConfigurableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationaddConfigurableProductsToCartArgs>>;
  addDownloadableProductsToCart?: Resolver<Maybe<ResolversTypes['AddDownloadableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationaddDownloadableProductsToCartArgs>>;
  addProductsToCart?: Resolver<Maybe<ResolversTypes['AddProductsToCartOutput']>, ParentType, ContextType, RequireFields<MutationaddProductsToCartArgs, 'cartId' | 'cartItems'>>;
  addProductsToCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationaddProductsToCompareListArgs>>;
  addProductsToWishlist?: Resolver<Maybe<ResolversTypes['AddProductsToWishlistOutput']>, ParentType, ContextType, RequireFields<MutationaddProductsToWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  addSimpleProductsToCart?: Resolver<Maybe<ResolversTypes['AddSimpleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationaddSimpleProductsToCartArgs>>;
  addVirtualProductsToCart?: Resolver<Maybe<ResolversTypes['AddVirtualProductsToCartOutput']>, ParentType, ContextType, Partial<MutationaddVirtualProductsToCartArgs>>;
  addWishlistItemsToCart?: Resolver<Maybe<ResolversTypes['AddWishlistItemsToCartOutput']>, ParentType, ContextType, RequireFields<MutationaddWishlistItemsToCartArgs, 'wishlistId'>>;
  applyCouponToCart?: Resolver<Maybe<ResolversTypes['ApplyCouponToCartOutput']>, ParentType, ContextType, Partial<MutationapplyCouponToCartArgs>>;
  assignCompareListToCustomer?: Resolver<Maybe<ResolversTypes['AssignCompareListToCustomerOutput']>, ParentType, ContextType, RequireFields<MutationassignCompareListToCustomerArgs, 'uid'>>;
  assignCustomerToGuestCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationassignCustomerToGuestCartArgs, 'cart_id'>>;
  changeCustomerPassword?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationchangeCustomerPasswordArgs, 'currentPassword' | 'newPassword'>>;
  createBraintreeClientToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationcreateCompareListArgs>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationcreateCustomerArgs, 'input'>>;
  createCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationcreateCustomerAddressArgs, 'input'>>;
  createCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationcreateCustomerV2Args, 'input'>>;
  createEmptyCart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationcreateEmptyCartArgs>>;
  createMollieTransaction?: Resolver<Maybe<ResolversTypes['MollieTransactionOutput']>, ParentType, ContextType, Partial<MutationcreateMollieTransactionArgs>>;
  createPayflowProToken?: Resolver<Maybe<ResolversTypes['CreatePayflowProTokenOutput']>, ParentType, ContextType, RequireFields<MutationcreatePayflowProTokenArgs, 'input'>>;
  createPaypalExpressToken?: Resolver<Maybe<ResolversTypes['PaypalExpressTokenOutput']>, ParentType, ContextType, RequireFields<MutationcreatePaypalExpressTokenArgs, 'input'>>;
  createProductReview?: Resolver<ResolversTypes['CreateProductReviewOutput'], ParentType, ContextType, RequireFields<MutationcreateProductReviewArgs, 'input'>>;
  deleteCompareList?: Resolver<Maybe<ResolversTypes['DeleteCompareListOutput']>, ParentType, ContextType, RequireFields<MutationdeleteCompareListArgs, 'uid'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleteCustomerAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationdeleteCustomerAddressArgs, 'id'>>;
  deletePaymentToken?: Resolver<Maybe<ResolversTypes['DeletePaymentTokenOutput']>, ParentType, ContextType, RequireFields<MutationdeletePaymentTokenArgs, 'public_hash'>>;
  generateCustomerToken?: Resolver<Maybe<ResolversTypes['CustomerToken']>, ParentType, ContextType, RequireFields<MutationgenerateCustomerTokenArgs, 'email' | 'password'>>;
  generateCustomerTokenAsAdmin?: Resolver<Maybe<ResolversTypes['GenerateCustomerTokenAsAdminOutput']>, ParentType, ContextType, RequireFields<MutationgenerateCustomerTokenAsAdminArgs, 'input'>>;
  handlePayflowProResponse?: Resolver<Maybe<ResolversTypes['PayflowProResponseOutput']>, ParentType, ContextType, RequireFields<MutationhandlePayflowProResponseArgs, 'input'>>;
  mergeCarts?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationmergeCartsArgs, 'source_cart_id'>>;
  mollieApplePayValidation?: Resolver<Maybe<ResolversTypes['MollieApplePayValidationOutput']>, ParentType, ContextType, RequireFields<MutationmollieApplePayValidationArgs, 'validationUrl'>>;
  mollieProcessTransaction?: Resolver<Maybe<ResolversTypes['MollieProcessTransactionOutput']>, ParentType, ContextType, Partial<MutationmollieProcessTransactionArgs>>;
  mollieRestoreCart?: Resolver<Maybe<ResolversTypes['MollieResetCartOutput']>, ParentType, ContextType, Partial<MutationmollieRestoreCartArgs>>;
  placeOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationplaceOrderArgs>>;
  removeCouponFromCart?: Resolver<Maybe<ResolversTypes['RemoveCouponFromCartOutput']>, ParentType, ContextType, Partial<MutationremoveCouponFromCartArgs>>;
  removeItemFromCart?: Resolver<Maybe<ResolversTypes['RemoveItemFromCartOutput']>, ParentType, ContextType, Partial<MutationremoveItemFromCartArgs>>;
  removeProductsFromCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationremoveProductsFromCompareListArgs>>;
  removeProductsFromWishlist?: Resolver<Maybe<ResolversTypes['RemoveProductsFromWishlistOutput']>, ParentType, ContextType, RequireFields<MutationremoveProductsFromWishlistArgs, 'wishlistId' | 'wishlistItemsIds'>>;
  reorderItems?: Resolver<Maybe<ResolversTypes['ReorderItemsOutput']>, ParentType, ContextType, RequireFields<MutationreorderItemsArgs, 'orderNumber'>>;
  requestPasswordResetEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationrequestPasswordResetEmailArgs, 'email'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationresetPasswordArgs, 'email' | 'resetPasswordToken' | 'newPassword'>>;
  revokeCustomerToken?: Resolver<Maybe<ResolversTypes['RevokeCustomerTokenOutput']>, ParentType, ContextType>;
  sendEmailToFriend?: Resolver<Maybe<ResolversTypes['SendEmailToFriendOutput']>, ParentType, ContextType, Partial<MutationsendEmailToFriendArgs>>;
  setBillingAddressOnCart?: Resolver<Maybe<ResolversTypes['SetBillingAddressOnCartOutput']>, ParentType, ContextType, Partial<MutationsetBillingAddressOnCartArgs>>;
  setGuestEmailOnCart?: Resolver<Maybe<ResolversTypes['SetGuestEmailOnCartOutput']>, ParentType, ContextType, Partial<MutationsetGuestEmailOnCartArgs>>;
  setPaymentMethodAndPlaceOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationsetPaymentMethodAndPlaceOrderArgs>>;
  setPaymentMethodOnCart?: Resolver<Maybe<ResolversTypes['SetPaymentMethodOnCartOutput']>, ParentType, ContextType, Partial<MutationsetPaymentMethodOnCartArgs>>;
  setShippingAddressesOnCart?: Resolver<Maybe<ResolversTypes['SetShippingAddressesOnCartOutput']>, ParentType, ContextType, Partial<MutationsetShippingAddressesOnCartArgs>>;
  setShippingMethodsOnCart?: Resolver<Maybe<ResolversTypes['SetShippingMethodsOnCartOutput']>, ParentType, ContextType, Partial<MutationsetShippingMethodsOnCartArgs>>;
  subscribeEmailToNewsletter?: Resolver<Maybe<ResolversTypes['SubscribeEmailToNewsletterOutput']>, ParentType, ContextType, RequireFields<MutationsubscribeEmailToNewsletterArgs, 'email'>>;
  updateCartItems?: Resolver<Maybe<ResolversTypes['UpdateCartItemsOutput']>, ParentType, ContextType, Partial<MutationupdateCartItemsArgs>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationupdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationupdateCustomerAddressArgs, 'id'>>;
  updateCustomerEmail?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationupdateCustomerEmailArgs, 'email' | 'password'>>;
  updateCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationupdateCustomerV2Args, 'input'>>;
  updateProductsInWishlist?: Resolver<Maybe<ResolversTypes['UpdateProductsInWishlistOutput']>, ParentType, ContextType, RequireFields<MutationupdateProductsInWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
}>;

export type SearchResultPageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultPageInfo'] = ResolversParentTypes['SearchResultPageInfo']> = ResolversObject<{
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page_size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComplexTextValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ComplexTextValue'] = ResolversParentTypes['ComplexTextValue']> = ResolversObject<{
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  currency?: Resolver<Maybe<ResolversTypes['CurrencyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ErrorInterface'] = ResolversParentTypes['ErrorInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NoSuchEntityUidError' | 'InternalError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type NoSuchEntityUidErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NoSuchEntityUidError'] = ResolversParentTypes['NoSuchEntityUidError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InternalErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InternalError'] = ResolversParentTypes['InternalError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoreConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoreConfig'] = ResolversParentTypes['StoreConfig']> = ResolversObject<{
  absolute_footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_guests_to_write_product_reviews?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_items?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autocomplete_on_storefront?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  braintree_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catalog_default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  category_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_enable_for_specific_countries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  check_money_order_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  check_money_order_make_check_payable_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_max_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_min_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_new_order_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_payment_from_specific_countries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_send_check_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  check_money_order_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_home_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_cookies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configurable_thumbnail_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  demonotice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grid_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grid_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_includes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_shortcut_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header_logo_src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default_store?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_default_store_group?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  list_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  logo_width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magento_wishlist_general_is_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum_password_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mollie?: Resolver<Maybe<ResolversTypes['MollieStoreConfig']>, ParentType, ContextType>;
  no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_payflowpro_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  product_reviews_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required_character_classes_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  root_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  root_category_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sales_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  secure_base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  send_friend?: Resolver<Maybe<ResolversTypes['SendFriendConfiguration']>, ParentType, ContextType>;
  show_cms_breadcrumbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_separator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_store_in_url?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  website_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  website_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight_unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  welcome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_enable_for_specific_countries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zero_subtotal_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zero_subtotal_new_order_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_payment_action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_payment_from_specific_countries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zero_subtotal_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CmsPage'] = ResolversParentTypes['CmsPage']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsBlocksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CmsBlocks'] = ResolversParentTypes['CmsBlocks']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CmsBlock']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsBlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CmsBlock'] = ResolversParentTypes['CmsBlock']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomAttributeMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomAttributeMetadata'] = ResolversParentTypes['CustomAttributeMetadata']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOption']>>>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  input_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storefront_properties?: Resolver<Maybe<ResolversTypes['StorefrontProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StorefrontPropertiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StorefrontProperties'] = ResolversParentTypes['StorefrontProperties']> = ResolversObject<{
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  use_in_layered_navigation?: Resolver<Maybe<ResolversTypes['UseInLayeredNavigationOptions']>, ParentType, ContextType>;
  use_in_product_listing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  use_in_search_results_layered_navigation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  visible_on_catalog_pages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttributeOption'] = ResolversParentTypes['AttributeOption']> = ResolversObject<{
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WebsiteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Website'] = ResolversParentTypes['Website']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutAgreementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutAgreement'] = ResolversParentTypes['CheckoutAgreement']> = ResolversObject<{
  agreement_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  checkbox_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_html?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['CheckoutAgreementMode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = ResolversObject<{
  adjustments?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceAdjustment']>>>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceAdjustmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceAdjustment'] = ResolversParentTypes['PriceAdjustment']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['PriceAdjustmentCodesEnum']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['PriceAdjustmentDescriptionEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPricesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductPrices'] = ResolversParentTypes['ProductPrices']> = ResolversObject<{
  maximalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  minimalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  regularPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']> = ResolversObject<{
  maximum_price?: Resolver<Maybe<ResolversTypes['ProductPrice']>, ParentType, ContextType>;
  minimum_price?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductPrice'] = ResolversParentTypes['ProductPrice']> = ResolversObject<{
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  regular_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductDiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductDiscount'] = ResolversParentTypes['ProductDiscount']> = ResolversObject<{
  amount_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductLinks'] = ResolversParentTypes['ProductLinks']> = ResolversObject<{
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductLinksInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductLinksInterface'] = ResolversParentTypes['ProductLinksInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ProductLinks', ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProductInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductInterface'] = ResolversParentTypes['ProductInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct', ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ProductInterfacereviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
}>;

export type PhysicalProductInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PhysicalProductInterface'] = ResolversParentTypes['PhysicalProductInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SimpleProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct', ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type CustomizableAreaOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableAreaOption'] = ResolversParentTypes['CustomizableAreaOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableAreaValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableAreaValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableAreaValue'] = ResolversParentTypes['CustomizableAreaValue']> = ResolversObject<{
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryTreeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CategoryTree'] = ResolversParentTypes['CategoryTree']> = ResolversObject<{
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryTreeproductsArgs, 'pageSize' | 'currentPage'>>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CategoryResult'] = ResolversParentTypes['CategoryResult']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableDateOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableDateOption'] = ResolversParentTypes['CustomizableDateOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableDateValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableDateValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableDateValue'] = ResolversParentTypes['CustomizableDateValue']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CustomizableDateTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableDropDownOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableDropDownOption'] = ResolversParentTypes['CustomizableDropDownOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableDropDownValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableDropDownValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableDropDownValue'] = ResolversParentTypes['CustomizableDropDownValue']> = ResolversObject<{
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableMultipleOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableMultipleOption'] = ResolversParentTypes['CustomizableMultipleOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableMultipleValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableMultipleValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableMultipleValue'] = ResolversParentTypes['CustomizableMultipleValue']> = ResolversObject<{
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableFieldOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableFieldOption'] = ResolversParentTypes['CustomizableFieldOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFieldValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableFieldValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableFieldValue'] = ResolversParentTypes['CustomizableFieldValue']> = ResolversObject<{
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableFileOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableFileOption'] = ResolversParentTypes['CustomizableFileOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFileValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableFileValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableFileValue'] = ResolversParentTypes['CustomizableFileValue']> = ResolversObject<{
  file_extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_size_x?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_size_y?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaGalleryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaGalleryInterface'] = ResolversParentTypes['MediaGalleryInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ProductImage' | 'ProductVideo', ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProductImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = ResolversObject<{
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductVideoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductVideo'] = ResolversParentTypes['ProductVideo']> = ResolversObject<{
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableOptionInterface'] = ResolversParentTypes['CustomizableOptionInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CustomizableAreaOption' | 'CustomizableDateOption' | 'CustomizableDropDownOption' | 'CustomizableMultipleOption' | 'CustomizableFieldOption' | 'CustomizableFileOption' | 'CustomizableRadioOption' | 'CustomizableCheckboxOption', ParentType, ContextType>;
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type CustomizableProductInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableProductInterface'] = ResolversParentTypes['CustomizableProductInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'ConfigurableProduct', ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
}>;

export type CategoryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CategoryInterface'] = ResolversParentTypes['CategoryInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CategoryTree', ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryInterfaceproductsArgs, 'pageSize' | 'currentPage'>>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type BreadcrumbResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Breadcrumb'] = ResolversParentTypes['Breadcrumb']> = ResolversObject<{
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  category_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableRadioOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableRadioOption'] = ResolversParentTypes['CustomizableRadioOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableRadioValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableRadioValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableRadioValue'] = ResolversParentTypes['CustomizableRadioValue']> = ResolversObject<{
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableCheckboxOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableCheckboxOption'] = ResolversParentTypes['CustomizableCheckboxOption']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableCheckboxValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomizableCheckboxValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomizableCheckboxValue'] = ResolversParentTypes['CustomizableCheckboxValue']> = ResolversObject<{
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VirtualProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VirtualProduct'] = ResolversParentTypes['VirtualProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<VirtualProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimpleProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimpleProduct'] = ResolversParentTypes['SimpleProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<SimpleProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = ResolversObject<{
  aggregations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Aggregation']>>>, ParentType, ContextType, Partial<ProductsaggregationsArgs>>;
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilter']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  sort_fields?: Resolver<Maybe<ResolversTypes['SortFields']>, ParentType, ContextType>;
  suggestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SearchSuggestion']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryProductsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CategoryProducts'] = ResolversParentTypes['CategoryProducts']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductMediaGalleryEntriesContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesContent'] = ResolversParentTypes['ProductMediaGalleryEntriesContent']> = ResolversObject<{
  base64_encoded_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductMediaGalleryEntriesVideoContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesVideoContent'] = ResolversParentTypes['ProductMediaGalleryEntriesVideoContent']> = ResolversObject<{
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaGalleryEntryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaGalleryEntry'] = ResolversParentTypes['MediaGalleryEntry']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesContent']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LayerFilterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LayerFilter'] = ResolversParentTypes['LayerFilter']> = ResolversObject<{
  filter_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilterItemInterface']>>>, ParentType, ContextType>;
  filter_items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  request_var?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LayerFilterItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LayerFilterItemInterface'] = ResolversParentTypes['LayerFilterItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LayerFilterItem' | 'SwatchLayerFilterItem', ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type LayerFilterItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LayerFilterItem'] = ResolversParentTypes['LayerFilterItem']> = ResolversObject<{
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Aggregation'] = ResolversParentTypes['Aggregation']> = ResolversObject<{
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregationOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchSuggestionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchSuggestion'] = ResolversParentTypes['SearchSuggestion']> = ResolversObject<{
  search?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregationOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregationOptionInterface'] = ResolversParentTypes['AggregationOptionInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AggregationOption', ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type AggregationOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregationOption'] = ResolversParentTypes['AggregationOption']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SortFieldResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SortField'] = ResolversParentTypes['SortField']> = ResolversObject<{
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SortFieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SortFields'] = ResolversParentTypes['SortFields']> = ResolversObject<{
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SortField']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimpleWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimpleWishlistItem'] = ResolversParentTypes['SimpleWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VirtualWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VirtualWishlistItem'] = ResolversParentTypes['VirtualWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComparableItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ComparableItem'] = ResolversParentTypes['ComparableItem']> = ResolversObject<{
  attributes?: Resolver<Array<Maybe<ResolversTypes['ProductAttribute']>>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductAttribute'] = ResolversParentTypes['ProductAttribute']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComparableAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ComparableAttribute'] = ResolversParentTypes['ComparableAttribute']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompareListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompareList'] = ResolversParentTypes['CompareList']> = ResolversObject<{
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableAttribute']>>>, ParentType, ContextType>;
  item_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableItem']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddress']>>>, ParentType, ContextType>;
  allow_remote_shopping_assistance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_subscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType, RequireFields<CustomerordersArgs, 'currentPage' | 'pageSize'>>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<CustomerreviewsArgs, 'pageSize' | 'currentPage'>>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  wishlist_v2?: Resolver<Maybe<ResolversTypes['Wishlist']>, ParentType, ContextType, RequireFields<Customerwishlist_v2Args, 'id'>>;
  wishlists?: Resolver<Array<Maybe<ResolversTypes['Wishlist']>>, ParentType, ContextType, RequireFields<CustomerwishlistsArgs, 'pageSize' | 'currentPage'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteCompareListOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeleteCompareListOutput'] = ResolversParentTypes['DeleteCompareListOutput']> = ResolversObject<{
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssignCompareListToCustomerOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssignCompareListToCustomerOutput'] = ResolversParentTypes['AssignCompareListToCustomerOutput']> = ResolversObject<{
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartPricesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartPrices'] = ResolversParentTypes['CartPrices']> = ResolversObject<{
  applied_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartTaxItem']>>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['CartDiscount']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  mollie_payment_fee?: Resolver<Maybe<ResolversTypes['MolliePaymentFee']>, ParentType, ContextType>;
  subtotal_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_with_discount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartTaxItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartTaxItem'] = ResolversParentTypes['CartTaxItem']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartDiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartDiscount'] = ResolversParentTypes['CartDiscount']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetPaymentMethodOnCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetPaymentMethodOnCartOutput'] = ResolversParentTypes['SetPaymentMethodOnCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetBillingAddressOnCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetBillingAddressOnCartOutput'] = ResolversParentTypes['SetBillingAddressOnCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetShippingAddressesOnCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetShippingAddressesOnCartOutput'] = ResolversParentTypes['SetShippingAddressesOnCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetShippingMethodsOnCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetShippingMethodsOnCartOutput'] = ResolversParentTypes['SetShippingMethodsOnCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApplyCouponToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApplyCouponToCartOutput'] = ResolversParentTypes['ApplyCouponToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaceOrderOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaceOrderOutput'] = ResolversParentTypes['PlaceOrderOutput']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  applied_coupon?: Resolver<Maybe<ResolversTypes['AppliedCoupon']>, ParentType, ContextType>;
  applied_coupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppliedCoupon']>>>, ParentType, ContextType>;
  available_payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailablePaymentMethod']>>>, ParentType, ContextType>;
  billing_address?: Resolver<Maybe<ResolversTypes['BillingCartAddress']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  mollie_available_issuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MollieIssuer']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartPrices']>, ParentType, ContextType>;
  selected_payment_method?: Resolver<Maybe<ResolversTypes['SelectedPaymentMethod']>, ParentType, ContextType>;
  shipping_addresses?: Resolver<Array<Maybe<ResolversTypes['ShippingCartAddress']>>, ParentType, ContextType>;
  total_quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartAddressInterface'] = ResolversParentTypes['CartAddressInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ShippingCartAddress' | 'BillingCartAddress', ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ShippingCartAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingCartAddress'] = ResolversParentTypes['ShippingCartAddress']> = ResolversObject<{
  available_shipping_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableShippingMethod']>>>, ParentType, ContextType>;
  cart_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemQuantity']>>>, ParentType, ContextType>;
  cart_items_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  selected_shipping_method?: Resolver<Maybe<ResolversTypes['SelectedShippingMethod']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BillingCartAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BillingCartAddress'] = ResolversParentTypes['BillingCartAddress']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemQuantityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartItemQuantity'] = ResolversParentTypes['CartItemQuantity']> = ResolversObject<{
  cart_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartAddressRegionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartAddressRegion'] = ResolversParentTypes['CartAddressRegion']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartAddressCountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartAddressCountry'] = ResolversParentTypes['CartAddressCountry']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedShippingMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedShippingMethod'] = ResolversParentTypes['SelectedShippingMethod']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price_excl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailableShippingMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvailableShippingMethod'] = ResolversParentTypes['AvailableShippingMethod']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price_excl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailablePaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvailablePaymentMethod'] = ResolversParentTypes['AvailablePaymentMethod']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_deferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mollie_available_issuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MollieIssuer']>>>, ParentType, ContextType>;
  mollie_meta?: Resolver<ResolversTypes['MolliePaymentMethodMeta'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedPaymentMethod'] = ResolversParentTypes['SelectedPaymentMethod']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mollie_meta?: Resolver<ResolversTypes['MolliePaymentMethodMeta'], ParentType, ContextType>;
  purchase_order_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppliedCouponResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AppliedCoupon'] = ResolversParentTypes['AppliedCoupon']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveCouponFromCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RemoveCouponFromCartOutput'] = ResolversParentTypes['RemoveCouponFromCartOutput']> = ResolversObject<{
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddSimpleProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddSimpleProductsToCartOutput'] = ResolversParentTypes['AddSimpleProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddVirtualProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddVirtualProductsToCartOutput'] = ResolversParentTypes['AddVirtualProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateCartItemsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateCartItemsOutput'] = ResolversParentTypes['UpdateCartItemsOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveItemFromCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RemoveItemFromCartOutput'] = ResolversParentTypes['RemoveItemFromCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetGuestEmailOnCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetGuestEmailOnCartOutput'] = ResolversParentTypes['SetGuestEmailOnCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimpleCartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimpleCartItem'] = ResolversParentTypes['SimpleCartItem']> = ResolversObject<{
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VirtualCartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VirtualCartItem'] = ResolversParentTypes['VirtualCartItem']> = ResolversObject<{
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartItemInterface'] = ResolversParentTypes['CartItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SimpleCartItem' | 'VirtualCartItem' | 'DownloadableCartItem' | 'ConfigurableCartItem' | 'BundleCartItem', ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type CartItemErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartItemError'] = ResolversParentTypes['CartItemError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['CartItemErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemPricesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartItemPrices'] = ResolversParentTypes['CartItemPrices']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  row_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  row_total_including_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_item_discount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedCustomizableOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedCustomizableOption'] = ResolversParentTypes['SelectedCustomizableOption']> = ResolversObject<{
  customizable_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedCustomizableOptionValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedCustomizableOptionValue'] = ResolversParentTypes['SelectedCustomizableOptionValue']> = ResolversObject<{
  customizable_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['CartItemSelectedOptionValuePrice'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemSelectedOptionValuePriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartItemSelectedOptionValuePrice'] = ResolversParentTypes['CartItemSelectedOptionValuePrice']> = ResolversObject<{
  type?: Resolver<ResolversTypes['PriceTypeEnum'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  mollie_payment_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mollie_redirect_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartUserInputErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CartUserInputError'] = ResolversParentTypes['CartUserInputError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['CartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddProductsToCartOutput'] = ResolversParentTypes['AddProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['CartUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerToken'] = ResolversParentTypes['CustomerToken']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerOutput'] = ResolversParentTypes['CustomerOutput']> = ResolversObject<{
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevokeCustomerTokenOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevokeCustomerTokenOutput'] = ResolversParentTypes['RevokeCustomerTokenOutput']> = ResolversObject<{
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  extension_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CustomerAddressRegion']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressRegionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerAddressRegion'] = ResolversParentTypes['CustomerAddressRegion']> = ResolversObject<{
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerAddressAttribute'] = ResolversParentTypes['CustomerAddressAttribute']> = ResolversObject<{
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IsEmailAvailableOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IsEmailAvailableOutput'] = ResolversParentTypes['IsEmailAvailableOutput']> = ResolversObject<{
  is_email_available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  available_currency_codes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExchangeRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExchangeRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExchangeRate'] = ResolversParentTypes['ExchangeRate']> = ResolversObject<{
  currency_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  available_regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  full_name_english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name_locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  three_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  two_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddDownloadableProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddDownloadableProductsToCartOutput'] = ResolversParentTypes['AddDownloadableProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableCartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableCartItem'] = ResolversParentTypes['DownloadableCartItem']> = ResolversObject<{
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableProduct'] = ResolversParentTypes['DownloadableProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  downloadable_product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  downloadable_product_samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  links_purchased_separately?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<DownloadableProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableProductLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableProductLinks'] = ResolversParentTypes['DownloadableProductLinks']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_shareable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableProductSamplesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableProductSamples'] = ResolversParentTypes['DownloadableProductSamples']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableOrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableOrderItem'] = ResolversParentTypes['DownloadableOrderItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableInvoiceItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableInvoiceItem'] = ResolversParentTypes['DownloadableInvoiceItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableCreditMemoItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableCreditMemoItem'] = ResolversParentTypes['DownloadableCreditMemoItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableItemsLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableItemsLinks'] = ResolversParentTypes['DownloadableItemsLinks']> = ResolversObject<{
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableWishlistItem'] = ResolversParentTypes['DownloadableWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDownloadableProductsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDownloadableProducts'] = ResolversParentTypes['CustomerDownloadableProducts']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDownloadableProduct']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDownloadableProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDownloadableProduct'] = ResolversParentTypes['CustomerDownloadableProduct']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  download_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remaining_downloads?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTierPricesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductTierPrices'] = ResolversParentTypes['ProductTierPrices']> = ResolversObject<{
  customer_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentage_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TierPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TierPrice'] = ResolversParentTypes['TierPrice']> = ResolversObject<{
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableCartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableCartItem'] = ResolversParentTypes['ConfigurableCartItem']> = ResolversObject<{
  configurable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>, ParentType, ContextType>;
  configured_variant?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleCartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleCartItem'] = ResolversParentTypes['BundleCartItem']> = ResolversObject<{
  bundle_options?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOption']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GiftMessageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GiftMessage'] = ResolversParentTypes['GiftMessage']> = ResolversObject<{
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesItemInterface'] = ResolversParentTypes['SalesItemInterface']> = ResolversObject<{
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerOrder'] = ResolversParentTypes['CustomerOrder']> = ResolversObject<{
  billing_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit_memos?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemo']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderPaymentMethod']>>>, ParentType, ContextType>;
  shipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderShipment']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shipping_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['OrderTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemInterface'] = ResolversParentTypes['OrderItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DownloadableOrderItem' | 'BundleOrderItem' | 'OrderItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type AddBundleProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddBundleProductsToCartOutput'] = ResolversParentTypes['AddBundleProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedBundleOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedBundleOption'] = ResolversParentTypes['SelectedBundleOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedBundleOptionValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedBundleOptionValue'] = ResolversParentTypes['SelectedBundleOptionValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleItem'] = ResolversParentTypes['BundleItem']> = ResolversObject<{
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItemOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleItemOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleItemOption'] = ResolversParentTypes['BundleItemOption']> = ResolversObject<{
  can_change_quantity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleProduct'] = ResolversParentTypes['BundleProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dynamic_price?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_sku?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_weight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  price_view?: Resolver<Maybe<ResolversTypes['PriceViewEnum']>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<BundleProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ship_bundle_items?: Resolver<Maybe<ResolversTypes['ShipBundleItemsEnum']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleOrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleOrderItem'] = ResolversParentTypes['BundleOrderItem']> = ResolversObject<{
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleInvoiceItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleInvoiceItem'] = ResolversParentTypes['BundleInvoiceItem']> = ResolversObject<{
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleShipmentItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleShipmentItem'] = ResolversParentTypes['BundleShipmentItem']> = ResolversObject<{
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleCreditMemoItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleCreditMemoItem'] = ResolversParentTypes['BundleCreditMemoItem']> = ResolversObject<{
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemSelectedBundleOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemSelectedBundleOption'] = ResolversParentTypes['ItemSelectedBundleOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemSelectedBundleOptionValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemSelectedBundleOptionValue'] = ResolversParentTypes['ItemSelectedBundleOptionValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleWishlistItem'] = ResolversParentTypes['BundleWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedBundleOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupedProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GroupedProduct'] = ResolversParentTypes['GroupedProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedProductItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<GroupedProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupedProductItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GroupedProductItem'] = ResolversParentTypes['GroupedProductItem']> = ResolversObject<{
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupedProductWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GroupedProductWishlistItem'] = ResolversParentTypes['GroupedProductWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProduct'] = ResolversParentTypes['ConfigurableProduct']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compatible_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptions']>>>, ParentType, ContextType>;
  configurable_product_options_selection?: Resolver<Maybe<ResolversTypes['ConfigurableProductOptionsSelection']>, ParentType, ContextType, Partial<ConfigurableProductconfigurable_product_options_selectionArgs>>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dominant_color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  print_art?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_holiday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_labels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landmarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_pattern_swatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  print_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ConfigurableProductreviewsArgs, 'pageSize' | 'currentPage'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  th_test_attribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableVariant']>>>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableVariantResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableVariant'] = ResolversParentTypes['ConfigurableVariant']> = ResolversObject<{
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableAttributeOption']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableAttributeOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableAttributeOption'] = ResolversParentTypes['ConfigurableAttributeOption']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductOptions'] = ResolversParentTypes['ConfigurableProductOptions']> = ResolversObject<{
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id_v2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  use_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionsValues']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductOptionsValuesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionsValues'] = ResolversParentTypes['ConfigurableProductOptionsValues']> = ResolversObject<{
  default_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  use_default_value?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddConfigurableProductsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddConfigurableProductsToCartOutput'] = ResolversParentTypes['AddConfigurableProductsToCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelectedConfigurableOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelectedConfigurableOption'] = ResolversParentTypes['SelectedConfigurableOption']> = ResolversObject<{
  configurable_product_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  configurable_product_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  option_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableWishlistItem'] = ResolversParentTypes['ConfigurableWishlistItem']> = ResolversObject<{
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  child_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>>, ParentType, ContextType>;
  configured_variant?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductOptionsSelectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionsSelection'] = ResolversParentTypes['ConfigurableProductOptionsSelection']> = ResolversObject<{
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOption']>>>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  options_available_for_selection?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableOptionAvailableForSelection']>>>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableOptionAvailableForSelectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableOptionAvailableForSelection'] = ResolversParentTypes['ConfigurableOptionAvailableForSelection']> = ResolversObject<{
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option_value_uids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductOption'] = ResolversParentTypes['ConfigurableProductOption']> = ResolversObject<{
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductOptionValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionValue'] = ResolversParentTypes['ConfigurableProductOptionValue']> = ResolversObject<{
  is_available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_use_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swatch?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PickupLocationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PickupLocations'] = ResolversParentTypes['PickupLocations']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PickupLocation']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PickupLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PickupLocation'] = ResolversParentTypes['PickupLocation']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenerateCustomerTokenAsAdminOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GenerateCustomerTokenAsAdminOutput'] = ResolversParentTypes['GenerateCustomerTokenAsAdminOutput']> = ResolversObject<{
  customer_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscribeEmailToNewsletterOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscribeEmailToNewsletterOutput'] = ResolversParentTypes['SubscribeEmailToNewsletterOutput']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['SubscriptionStatusesEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaypalExpressTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaypalExpressToken'] = ResolversParentTypes['PaypalExpressToken']> = ResolversObject<{
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaypalExpressTokenOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaypalExpressTokenOutput'] = ResolversParentTypes['PaypalExpressTokenOutput']> = ResolversObject<{
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayflowLinkTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayflowLinkToken'] = ResolversParentTypes['PayflowLinkToken']> = ResolversObject<{
  mode?: Resolver<Maybe<ResolversTypes['PayflowLinkMode']>, ParentType, ContextType>;
  paypal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HostedProUrlResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HostedProUrl'] = ResolversParentTypes['HostedProUrl']> = ResolversObject<{
  secure_form_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaypalExpressUrlListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaypalExpressUrlList'] = ResolversParentTypes['PaypalExpressUrlList']> = ResolversObject<{
  edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayflowProTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayflowProToken'] = ResolversParentTypes['PayflowProToken']> = ResolversObject<{
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatePayflowProTokenOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreatePayflowProTokenOutput'] = ResolversParentTypes['CreatePayflowProTokenOutput']> = ResolversObject<{
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayflowProResponseOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayflowProResponseOutput'] = ResolversParentTypes['PayflowProResponseOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReviews'] = ResolversParentTypes['ProductReviews']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReview']>>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['SearchResultPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReview'] = ResolversParentTypes['ProductReview']> = ResolversObject<{
  average_rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  ratings_breakdown?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRating']>>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewRatingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReviewRating'] = ResolversParentTypes['ProductReviewRating']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewRatingsMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReviewRatingsMetadata'] = ResolversParentTypes['ProductReviewRatingsMetadata']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewRatingMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReviewRatingMetadata'] = ResolversParentTypes['ProductReviewRatingMetadata']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingValueMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewRatingValueMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductReviewRatingValueMetadata'] = ResolversParentTypes['ProductReviewRatingValueMetadata']> = ResolversObject<{
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateProductReviewOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateProductReviewOutput'] = ResolversParentTypes['CreateProductReviewOutput']> = ResolversObject<{
  review?: Resolver<ResolversTypes['ProductReview'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReorderItemsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReorderItemsOutput'] = ResolversParentTypes['ReorderItemsOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  userInputErrors?: Resolver<Array<Maybe<ResolversTypes['CheckoutUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutUserInputErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutUserInputError'] = ResolversParentTypes['CheckoutUserInputError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['CheckoutUserInputErrorCodes'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerOrdersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerOrders'] = ResolversParentTypes['CustomerOrders']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['CustomerOrder']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemOption'] = ResolversParentTypes['OrderItemOption']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxItem'] = ResolversParentTypes['TaxItem']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderTotalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderTotal'] = ResolversParentTypes['OrderTotal']> = ResolversObject<{
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['InvoiceTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoiceItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InvoiceItemInterface'] = ResolversParentTypes['InvoiceItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DownloadableInvoiceItem' | 'BundleInvoiceItem' | 'InvoiceItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type InvoiceItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InvoiceItem'] = ResolversParentTypes['InvoiceItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoiceTotalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InvoiceTotal'] = ResolversParentTypes['InvoiceTotal']> = ResolversObject<{
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingHandlingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingHandling'] = ResolversParentTypes['ShippingHandling']> = ResolversObject<{
  amount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  amount_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingDiscount']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingDiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingDiscount'] = ResolversParentTypes['ShippingDiscount']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderShipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderShipment'] = ResolversParentTypes['OrderShipment']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentTracking']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesCommentItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesCommentItem'] = ResolversParentTypes['SalesCommentItem']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentItemInterface'] = ResolversParentTypes['ShipmentItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BundleShipmentItem' | 'ShipmentItem', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type ShipmentItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentItem'] = ResolversParentTypes['ShipmentItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentTrackingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentTracking'] = ResolversParentTypes['ShipmentTracking']> = ResolversObject<{
  carrier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderPaymentMethod'] = ResolversParentTypes['OrderPaymentMethod']> = ResolversObject<{
  additional_data?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyValue']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditMemoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreditMemo'] = ResolversParentTypes['CreditMemo']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemoItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['CreditMemoTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditMemoItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreditMemoItemInterface'] = ResolversParentTypes['CreditMemoItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DownloadableCreditMemoItem' | 'BundleCreditMemoItem' | 'CreditMemoItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type CreditMemoItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreditMemoItem'] = ResolversParentTypes['CreditMemoItem']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditMemoTotalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreditMemoTotal'] = ResolversParentTypes['CreditMemoTotal']> = ResolversObject<{
  adjustment?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyValue'] = ResolversParentTypes['KeyValue']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityUrlResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EntityUrl'] = ResolversParentTypes['EntityUrl']> = ResolversObject<{
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  redirectCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UrlRewriteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UrlRewrite'] = ResolversParentTypes['UrlRewrite']> = ResolversObject<{
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['HttpQueryParameter']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HttpQueryParameterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HttpQueryParameter'] = ResolversParentTypes['HttpQueryParameter']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoutableInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoutableInterface'] = ResolversParentTypes['RoutableInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CmsPage' | 'CategoryTree' | 'VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct', ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
}>;

export type SendEmailToFriendOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SendEmailToFriendOutput'] = ResolversParentTypes['SendEmailToFriendOutput']> = ResolversObject<{
  recipients?: Resolver<Maybe<Array<Maybe<ResolversTypes['SendEmailToFriendRecipient']>>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['SendEmailToFriendSender']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SendEmailToFriendSenderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SendEmailToFriendSender'] = ResolversParentTypes['SendEmailToFriendSender']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SendEmailToFriendRecipientResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SendEmailToFriendRecipient'] = ResolversParentTypes['SendEmailToFriendRecipient']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SendFriendConfigurationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SendFriendConfiguration'] = ResolversParentTypes['SendFriendConfiguration']> = ResolversObject<{
  enabled_for_customers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enabled_for_guests?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwatchLayerFilterItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwatchLayerFilterItemInterface'] = ResolversParentTypes['SwatchLayerFilterItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SwatchLayerFilterItem', ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
}>;

export type SwatchLayerFilterItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwatchLayerFilterItem'] = ResolversParentTypes['SwatchLayerFilterItem']> = ResolversObject<{
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwatchDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwatchData'] = ResolversParentTypes['SwatchData']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwatchDataInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwatchDataInterface'] = ResolversParentTypes['SwatchDataInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ImageSwatchData' | 'TextSwatchData' | 'ColorSwatchData', ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ImageSwatchDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImageSwatchData'] = ResolversParentTypes['ImageSwatchData']> = ResolversObject<{
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextSwatchDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TextSwatchData'] = ResolversParentTypes['TextSwatchData']> = ResolversObject<{
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColorSwatchDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ColorSwatchData'] = ResolversParentTypes['ColorSwatchData']> = ResolversObject<{
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletePaymentTokenOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeletePaymentTokenOutput'] = ResolversParentTypes['DeletePaymentTokenOutput']> = ResolversObject<{
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerPaymentTokensResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerPaymentTokens'] = ResolversParentTypes['CustomerPaymentTokens']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['PaymentToken']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentToken'] = ResolversParentTypes['PaymentToken']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PaymentTokenTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedProductTaxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FixedProductTax'] = ResolversParentTypes['FixedProductTax']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishlistOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishlistOutput'] = ResolversParentTypes['WishlistOutput']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishlistResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Wishlist'] = ResolversParentTypes['Wishlist']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items_v2?: Resolver<Maybe<ResolversTypes['WishlistItems']>, ParentType, ContextType, RequireFields<Wishlistitems_v2Args, 'currentPage' | 'pageSize'>>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishlistItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishlistItemInterface'] = ResolversParentTypes['WishlistItemInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SimpleWishlistItem' | 'VirtualWishlistItem' | 'DownloadableWishlistItem' | 'BundleWishlistItem' | 'GroupedProductWishlistItem' | 'ConfigurableWishlistItem', ParentType, ContextType>;
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type WishlistItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishlistItems'] = ResolversParentTypes['WishlistItems']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['WishlistItemInterface']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishlistItem'] = ResolversParentTypes['WishlistItem']> = ResolversObject<{
  added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddWishlistItemsToCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddWishlistItemsToCartOutput'] = ResolversParentTypes['AddWishlistItemsToCartOutput']> = ResolversObject<{
  add_wishlist_items_to_cart_user_errors?: Resolver<Array<Maybe<ResolversTypes['WishlistCartUserInputError']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishlistCartUserInputErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishlistCartUserInputError'] = ResolversParentTypes['WishlistCartUserInputError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['WishlistCartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wishlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  wishlistItemId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddProductsToWishlistOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddProductsToWishlistOutput'] = ResolversParentTypes['AddProductsToWishlistOutput']> = ResolversObject<{
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveProductsFromWishlistOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RemoveProductsFromWishlistOutput'] = ResolversParentTypes['RemoveProductsFromWishlistOutput']> = ResolversObject<{
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateProductsInWishlistOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateProductsInWishlistOutput'] = ResolversParentTypes['UpdateProductsInWishlistOutput']> = ResolversObject<{
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishListUserInputErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WishListUserInputError'] = ResolversParentTypes['WishListUserInputError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['WishListUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = ResolversObject<{
  mollie_available_issuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MollieIssuer']>>>, ParentType, ContextType>;
  mollie_meta?: Resolver<ResolversTypes['MolliePaymentMethodMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieStoreConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieStoreConfig'] = ResolversParentTypes['MollieStoreConfig']> = ResolversObject<{
  live_mode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profile_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieIssuerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieIssuer'] = ResolversParentTypes['MollieIssuer']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  svg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MolliePaymentMethodMetaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MolliePaymentMethodMeta'] = ResolversParentTypes['MolliePaymentMethodMeta']> = ResolversObject<{
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MolliePaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MolliePaymentMethod'] = ResolversParentTypes['MolliePaymentMethod']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieResetCartOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieResetCartOutput'] = ResolversParentTypes['MollieResetCartOutput']> = ResolversObject<{
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MolliePaymentMethodsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MolliePaymentMethodsOutput'] = ResolversParentTypes['MolliePaymentMethodsOutput']> = ResolversObject<{
  methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['MolliePaymentMethod']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieTransactionOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieTransactionOutput'] = ResolversParentTypes['MollieTransactionOutput']> = ResolversObject<{
  checkout_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieProcessTransactionOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieProcessTransactionOutput'] = ResolversParentTypes['MollieProcessTransactionOutput']> = ResolversObject<{
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  paymentStatus?: Resolver<Maybe<ResolversTypes['PaymentStatusEnum']>, ParentType, ContextType>;
  redirect_to_cart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  redirect_to_success_page?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MolliePaymentFeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MolliePaymentFee'] = ResolversParentTypes['MolliePaymentFee']> = ResolversObject<{
  base_fee?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  base_fee_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  fee_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MollieApplePayValidationOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MollieApplePayValidationOutput'] = ResolversParentTypes['MollieApplePayValidationOutput']> = ResolversObject<{
  response?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentCartIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentCartId'] = ResolversParentTypes['CurrentCartId']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentCompareUidResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentCompareUid'] = ResolversParentTypes['CurrentCompareUid']> = ResolversObject<{
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GuestWishlistResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GuestWishlist'] = ResolversParentTypes['GuestWishlist']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['GuestWishlistItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GuestWishlistItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GuestWishlistItem'] = ResolversParentTypes['GuestWishlistItem']> = ResolversObject<{
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url_key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Aggregate?: AggregateResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  ConditionAnd?: ConditionAndResolvers<ContextType>;
  ConditionAndconditionsUnion?: ConditionAndconditionsUnionResolvers<ContextType>;
  ConditionNumber?: ConditionNumberResolvers<ContextType>;
  ConditionOr?: ConditionOrResolvers<ContextType>;
  ConditionOrconditionsUnion?: ConditionOrconditionsUnionResolvers<ContextType>;
  ConditionText?: ConditionTextResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DynamicRow?: DynamicRowResolvers<ContextType>;
  DynamicRowConnection?: DynamicRowConnectionResolvers<ContextType>;
  DynamicRowEdge?: DynamicRowEdgeResolvers<ContextType>;
  DynamicRowTarget?: DynamicRowTargetResolvers<ContextType>;
  DynamicRowconditionsUnion?: DynamicRowconditionsUnionResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Footer?: FooterResolvers<ContextType>;
  FooterConnection?: FooterConnectionResolvers<ContextType>;
  FooterEdge?: FooterEdgeResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageConnection?: PageConnectionResolvers<ContextType>;
  PageContent?: PageContentResolvers<ContextType>;
  PageEdge?: PageEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PageLink?: PageLinkResolvers<ContextType>;
  PageLinkConnection?: PageLinkConnectionResolvers<ContextType>;
  PageLinkEdge?: PageLinkEdgeResolvers<ContextType>;
  RichText?: RichTextResolvers<ContextType>;
  RichTextAST?: GraphQLScalarType;
  RowBlogContent?: RowBlogContentResolvers<ContextType>;
  RowBlogContentConnection?: RowBlogContentConnectionResolvers<ContextType>;
  RowBlogContentEdge?: RowBlogContentEdgeResolvers<ContextType>;
  RowButtonLinkList?: RowButtonLinkListResolvers<ContextType>;
  RowButtonLinkListConnection?: RowButtonLinkListConnectionResolvers<ContextType>;
  RowButtonLinkListEdge?: RowButtonLinkListEdgeResolvers<ContextType>;
  RowColumnOne?: RowColumnOneResolvers<ContextType>;
  RowColumnOneConnection?: RowColumnOneConnectionResolvers<ContextType>;
  RowColumnOneEdge?: RowColumnOneEdgeResolvers<ContextType>;
  RowColumnThree?: RowColumnThreeResolvers<ContextType>;
  RowColumnThreeConnection?: RowColumnThreeConnectionResolvers<ContextType>;
  RowColumnThreeEdge?: RowColumnThreeEdgeResolvers<ContextType>;
  RowColumnTwo?: RowColumnTwoResolvers<ContextType>;
  RowColumnTwoConnection?: RowColumnTwoConnectionResolvers<ContextType>;
  RowColumnTwoEdge?: RowColumnTwoEdgeResolvers<ContextType>;
  RowContentLinks?: RowContentLinksResolvers<ContextType>;
  RowContentLinksConnection?: RowContentLinksConnectionResolvers<ContextType>;
  RowContentLinksEdge?: RowContentLinksEdgeResolvers<ContextType>;
  RowHeroBanner?: RowHeroBannerResolvers<ContextType>;
  RowHeroBannerConnection?: RowHeroBannerConnectionResolvers<ContextType>;
  RowHeroBannerEdge?: RowHeroBannerEdgeResolvers<ContextType>;
  RowLinks?: RowLinksResolvers<ContextType>;
  RowLinksConnection?: RowLinksConnectionResolvers<ContextType>;
  RowLinksEdge?: RowLinksEdgeResolvers<ContextType>;
  RowProduct?: RowProductResolvers<ContextType>;
  RowProductConnection?: RowProductConnectionResolvers<ContextType>;
  RowProductEdge?: RowProductEdgeResolvers<ContextType>;
  RowQuote?: RowQuoteResolvers<ContextType>;
  RowQuoteConnection?: RowQuoteConnectionResolvers<ContextType>;
  RowQuoteEdge?: RowQuoteEdgeResolvers<ContextType>;
  RowServiceOptions?: RowServiceOptionsResolvers<ContextType>;
  RowServiceOptionsConnection?: RowServiceOptionsConnectionResolvers<ContextType>;
  RowServiceOptionsEdge?: RowServiceOptionsEdgeResolvers<ContextType>;
  RowSpecialBanner?: RowSpecialBannerResolvers<ContextType>;
  RowSpecialBannerConnection?: RowSpecialBannerConnectionResolvers<ContextType>;
  RowSpecialBannerEdge?: RowSpecialBannerEdgeResolvers<ContextType>;
  ScheduledOperation?: ScheduledOperationResolvers<ContextType>;
  ScheduledOperationAffectedDocument?: ScheduledOperationAffectedDocumentResolvers<ContextType>;
  ScheduledRelease?: ScheduledReleaseResolvers<ContextType>;
  Union_row_dynamicRow?: Union_row_dynamicRowResolvers<ContextType>;
  Union_rows_dynamicRows?: Union_rows_dynamicRowsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Usps?: UspsResolvers<ContextType>;
  UspsConnection?: UspsConnectionResolvers<ContextType>;
  UspsEdge?: UspsEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  SearchResultPageInfo?: SearchResultPageInfoResolvers<ContextType>;
  ComplexTextValue?: ComplexTextValueResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  ErrorInterface?: ErrorInterfaceResolvers<ContextType>;
  NoSuchEntityUidError?: NoSuchEntityUidErrorResolvers<ContextType>;
  InternalError?: InternalErrorResolvers<ContextType>;
  StoreConfig?: StoreConfigResolvers<ContextType>;
  CmsPage?: CmsPageResolvers<ContextType>;
  CmsBlocks?: CmsBlocksResolvers<ContextType>;
  CmsBlock?: CmsBlockResolvers<ContextType>;
  CustomAttributeMetadata?: CustomAttributeMetadataResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  StorefrontProperties?: StorefrontPropertiesResolvers<ContextType>;
  AttributeOption?: AttributeOptionResolvers<ContextType>;
  Website?: WebsiteResolvers<ContextType>;
  CheckoutAgreement?: CheckoutAgreementResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PriceAdjustment?: PriceAdjustmentResolvers<ContextType>;
  ProductPrices?: ProductPricesResolvers<ContextType>;
  PriceRange?: PriceRangeResolvers<ContextType>;
  ProductPrice?: ProductPriceResolvers<ContextType>;
  ProductDiscount?: ProductDiscountResolvers<ContextType>;
  ProductLinks?: ProductLinksResolvers<ContextType>;
  ProductLinksInterface?: ProductLinksInterfaceResolvers<ContextType>;
  ProductInterface?: ProductInterfaceResolvers<ContextType>;
  PhysicalProductInterface?: PhysicalProductInterfaceResolvers<ContextType>;
  CustomizableAreaOption?: CustomizableAreaOptionResolvers<ContextType>;
  CustomizableAreaValue?: CustomizableAreaValueResolvers<ContextType>;
  CategoryTree?: CategoryTreeResolvers<ContextType>;
  CategoryResult?: CategoryResultResolvers<ContextType>;
  CustomizableDateOption?: CustomizableDateOptionResolvers<ContextType>;
  CustomizableDateValue?: CustomizableDateValueResolvers<ContextType>;
  CustomizableDropDownOption?: CustomizableDropDownOptionResolvers<ContextType>;
  CustomizableDropDownValue?: CustomizableDropDownValueResolvers<ContextType>;
  CustomizableMultipleOption?: CustomizableMultipleOptionResolvers<ContextType>;
  CustomizableMultipleValue?: CustomizableMultipleValueResolvers<ContextType>;
  CustomizableFieldOption?: CustomizableFieldOptionResolvers<ContextType>;
  CustomizableFieldValue?: CustomizableFieldValueResolvers<ContextType>;
  CustomizableFileOption?: CustomizableFileOptionResolvers<ContextType>;
  CustomizableFileValue?: CustomizableFileValueResolvers<ContextType>;
  MediaGalleryInterface?: MediaGalleryInterfaceResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductVideo?: ProductVideoResolvers<ContextType>;
  CustomizableOptionInterface?: CustomizableOptionInterfaceResolvers<ContextType>;
  CustomizableProductInterface?: CustomizableProductInterfaceResolvers<ContextType>;
  CategoryInterface?: CategoryInterfaceResolvers<ContextType>;
  Breadcrumb?: BreadcrumbResolvers<ContextType>;
  CustomizableRadioOption?: CustomizableRadioOptionResolvers<ContextType>;
  CustomizableRadioValue?: CustomizableRadioValueResolvers<ContextType>;
  CustomizableCheckboxOption?: CustomizableCheckboxOptionResolvers<ContextType>;
  CustomizableCheckboxValue?: CustomizableCheckboxValueResolvers<ContextType>;
  VirtualProduct?: VirtualProductResolvers<ContextType>;
  SimpleProduct?: SimpleProductResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  CategoryProducts?: CategoryProductsResolvers<ContextType>;
  ProductMediaGalleryEntriesContent?: ProductMediaGalleryEntriesContentResolvers<ContextType>;
  ProductMediaGalleryEntriesVideoContent?: ProductMediaGalleryEntriesVideoContentResolvers<ContextType>;
  MediaGalleryEntry?: MediaGalleryEntryResolvers<ContextType>;
  LayerFilter?: LayerFilterResolvers<ContextType>;
  LayerFilterItemInterface?: LayerFilterItemInterfaceResolvers<ContextType>;
  LayerFilterItem?: LayerFilterItemResolvers<ContextType>;
  Aggregation?: AggregationResolvers<ContextType>;
  SearchSuggestion?: SearchSuggestionResolvers<ContextType>;
  AggregationOptionInterface?: AggregationOptionInterfaceResolvers<ContextType>;
  AggregationOption?: AggregationOptionResolvers<ContextType>;
  SortField?: SortFieldResolvers<ContextType>;
  SortFields?: SortFieldsResolvers<ContextType>;
  SimpleWishlistItem?: SimpleWishlistItemResolvers<ContextType>;
  VirtualWishlistItem?: VirtualWishlistItemResolvers<ContextType>;
  ComparableItem?: ComparableItemResolvers<ContextType>;
  ProductAttribute?: ProductAttributeResolvers<ContextType>;
  ComparableAttribute?: ComparableAttributeResolvers<ContextType>;
  CompareList?: CompareListResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  DeleteCompareListOutput?: DeleteCompareListOutputResolvers<ContextType>;
  AssignCompareListToCustomerOutput?: AssignCompareListToCustomerOutputResolvers<ContextType>;
  CartPrices?: CartPricesResolvers<ContextType>;
  CartTaxItem?: CartTaxItemResolvers<ContextType>;
  CartDiscount?: CartDiscountResolvers<ContextType>;
  SetPaymentMethodOnCartOutput?: SetPaymentMethodOnCartOutputResolvers<ContextType>;
  SetBillingAddressOnCartOutput?: SetBillingAddressOnCartOutputResolvers<ContextType>;
  SetShippingAddressesOnCartOutput?: SetShippingAddressesOnCartOutputResolvers<ContextType>;
  SetShippingMethodsOnCartOutput?: SetShippingMethodsOnCartOutputResolvers<ContextType>;
  ApplyCouponToCartOutput?: ApplyCouponToCartOutputResolvers<ContextType>;
  PlaceOrderOutput?: PlaceOrderOutputResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartAddressInterface?: CartAddressInterfaceResolvers<ContextType>;
  ShippingCartAddress?: ShippingCartAddressResolvers<ContextType>;
  BillingCartAddress?: BillingCartAddressResolvers<ContextType>;
  CartItemQuantity?: CartItemQuantityResolvers<ContextType>;
  CartAddressRegion?: CartAddressRegionResolvers<ContextType>;
  CartAddressCountry?: CartAddressCountryResolvers<ContextType>;
  SelectedShippingMethod?: SelectedShippingMethodResolvers<ContextType>;
  AvailableShippingMethod?: AvailableShippingMethodResolvers<ContextType>;
  AvailablePaymentMethod?: AvailablePaymentMethodResolvers<ContextType>;
  SelectedPaymentMethod?: SelectedPaymentMethodResolvers<ContextType>;
  AppliedCoupon?: AppliedCouponResolvers<ContextType>;
  RemoveCouponFromCartOutput?: RemoveCouponFromCartOutputResolvers<ContextType>;
  AddSimpleProductsToCartOutput?: AddSimpleProductsToCartOutputResolvers<ContextType>;
  AddVirtualProductsToCartOutput?: AddVirtualProductsToCartOutputResolvers<ContextType>;
  UpdateCartItemsOutput?: UpdateCartItemsOutputResolvers<ContextType>;
  RemoveItemFromCartOutput?: RemoveItemFromCartOutputResolvers<ContextType>;
  SetGuestEmailOnCartOutput?: SetGuestEmailOnCartOutputResolvers<ContextType>;
  SimpleCartItem?: SimpleCartItemResolvers<ContextType>;
  VirtualCartItem?: VirtualCartItemResolvers<ContextType>;
  CartItemInterface?: CartItemInterfaceResolvers<ContextType>;
  CartItemError?: CartItemErrorResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  CartItemPrices?: CartItemPricesResolvers<ContextType>;
  SelectedCustomizableOption?: SelectedCustomizableOptionResolvers<ContextType>;
  SelectedCustomizableOptionValue?: SelectedCustomizableOptionValueResolvers<ContextType>;
  CartItemSelectedOptionValuePrice?: CartItemSelectedOptionValuePriceResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  CartUserInputError?: CartUserInputErrorResolvers<ContextType>;
  AddProductsToCartOutput?: AddProductsToCartOutputResolvers<ContextType>;
  CustomerToken?: CustomerTokenResolvers<ContextType>;
  CustomerOutput?: CustomerOutputResolvers<ContextType>;
  RevokeCustomerTokenOutput?: RevokeCustomerTokenOutputResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  CustomerAddressRegion?: CustomerAddressRegionResolvers<ContextType>;
  CustomerAddressAttribute?: CustomerAddressAttributeResolvers<ContextType>;
  IsEmailAvailableOutput?: IsEmailAvailableOutputResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  ExchangeRate?: ExchangeRateResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  AddDownloadableProductsToCartOutput?: AddDownloadableProductsToCartOutputResolvers<ContextType>;
  DownloadableCartItem?: DownloadableCartItemResolvers<ContextType>;
  DownloadableProduct?: DownloadableProductResolvers<ContextType>;
  DownloadableProductLinks?: DownloadableProductLinksResolvers<ContextType>;
  DownloadableProductSamples?: DownloadableProductSamplesResolvers<ContextType>;
  DownloadableOrderItem?: DownloadableOrderItemResolvers<ContextType>;
  DownloadableInvoiceItem?: DownloadableInvoiceItemResolvers<ContextType>;
  DownloadableCreditMemoItem?: DownloadableCreditMemoItemResolvers<ContextType>;
  DownloadableItemsLinks?: DownloadableItemsLinksResolvers<ContextType>;
  DownloadableWishlistItem?: DownloadableWishlistItemResolvers<ContextType>;
  CustomerDownloadableProducts?: CustomerDownloadableProductsResolvers<ContextType>;
  CustomerDownloadableProduct?: CustomerDownloadableProductResolvers<ContextType>;
  ProductTierPrices?: ProductTierPricesResolvers<ContextType>;
  TierPrice?: TierPriceResolvers<ContextType>;
  ConfigurableCartItem?: ConfigurableCartItemResolvers<ContextType>;
  BundleCartItem?: BundleCartItemResolvers<ContextType>;
  GiftMessage?: GiftMessageResolvers<ContextType>;
  SalesItemInterface?: SalesItemInterfaceResolvers<ContextType>;
  CustomerOrder?: CustomerOrderResolvers<ContextType>;
  OrderItemInterface?: OrderItemInterfaceResolvers<ContextType>;
  AddBundleProductsToCartOutput?: AddBundleProductsToCartOutputResolvers<ContextType>;
  SelectedBundleOption?: SelectedBundleOptionResolvers<ContextType>;
  SelectedBundleOptionValue?: SelectedBundleOptionValueResolvers<ContextType>;
  BundleItem?: BundleItemResolvers<ContextType>;
  BundleItemOption?: BundleItemOptionResolvers<ContextType>;
  BundleProduct?: BundleProductResolvers<ContextType>;
  BundleOrderItem?: BundleOrderItemResolvers<ContextType>;
  BundleInvoiceItem?: BundleInvoiceItemResolvers<ContextType>;
  BundleShipmentItem?: BundleShipmentItemResolvers<ContextType>;
  BundleCreditMemoItem?: BundleCreditMemoItemResolvers<ContextType>;
  ItemSelectedBundleOption?: ItemSelectedBundleOptionResolvers<ContextType>;
  ItemSelectedBundleOptionValue?: ItemSelectedBundleOptionValueResolvers<ContextType>;
  BundleWishlistItem?: BundleWishlistItemResolvers<ContextType>;
  GroupedProduct?: GroupedProductResolvers<ContextType>;
  GroupedProductItem?: GroupedProductItemResolvers<ContextType>;
  GroupedProductWishlistItem?: GroupedProductWishlistItemResolvers<ContextType>;
  ConfigurableProduct?: ConfigurableProductResolvers<ContextType>;
  ConfigurableVariant?: ConfigurableVariantResolvers<ContextType>;
  ConfigurableAttributeOption?: ConfigurableAttributeOptionResolvers<ContextType>;
  ConfigurableProductOptions?: ConfigurableProductOptionsResolvers<ContextType>;
  ConfigurableProductOptionsValues?: ConfigurableProductOptionsValuesResolvers<ContextType>;
  AddConfigurableProductsToCartOutput?: AddConfigurableProductsToCartOutputResolvers<ContextType>;
  SelectedConfigurableOption?: SelectedConfigurableOptionResolvers<ContextType>;
  ConfigurableWishlistItem?: ConfigurableWishlistItemResolvers<ContextType>;
  ConfigurableProductOptionsSelection?: ConfigurableProductOptionsSelectionResolvers<ContextType>;
  ConfigurableOptionAvailableForSelection?: ConfigurableOptionAvailableForSelectionResolvers<ContextType>;
  ConfigurableProductOption?: ConfigurableProductOptionResolvers<ContextType>;
  ConfigurableProductOptionValue?: ConfigurableProductOptionValueResolvers<ContextType>;
  PickupLocations?: PickupLocationsResolvers<ContextType>;
  PickupLocation?: PickupLocationResolvers<ContextType>;
  GenerateCustomerTokenAsAdminOutput?: GenerateCustomerTokenAsAdminOutputResolvers<ContextType>;
  SubscribeEmailToNewsletterOutput?: SubscribeEmailToNewsletterOutputResolvers<ContextType>;
  PaypalExpressToken?: PaypalExpressTokenResolvers<ContextType>;
  PaypalExpressTokenOutput?: PaypalExpressTokenOutputResolvers<ContextType>;
  PayflowLinkToken?: PayflowLinkTokenResolvers<ContextType>;
  HostedProUrl?: HostedProUrlResolvers<ContextType>;
  PaypalExpressUrlList?: PaypalExpressUrlListResolvers<ContextType>;
  PayflowProToken?: PayflowProTokenResolvers<ContextType>;
  CreatePayflowProTokenOutput?: CreatePayflowProTokenOutputResolvers<ContextType>;
  PayflowProResponseOutput?: PayflowProResponseOutputResolvers<ContextType>;
  ProductReviews?: ProductReviewsResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  ProductReviewRating?: ProductReviewRatingResolvers<ContextType>;
  ProductReviewRatingsMetadata?: ProductReviewRatingsMetadataResolvers<ContextType>;
  ProductReviewRatingMetadata?: ProductReviewRatingMetadataResolvers<ContextType>;
  ProductReviewRatingValueMetadata?: ProductReviewRatingValueMetadataResolvers<ContextType>;
  CreateProductReviewOutput?: CreateProductReviewOutputResolvers<ContextType>;
  ReorderItemsOutput?: ReorderItemsOutputResolvers<ContextType>;
  CheckoutUserInputError?: CheckoutUserInputErrorResolvers<ContextType>;
  CustomerOrders?: CustomerOrdersResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderItemOption?: OrderItemOptionResolvers<ContextType>;
  TaxItem?: TaxItemResolvers<ContextType>;
  OrderTotal?: OrderTotalResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  InvoiceItemInterface?: InvoiceItemInterfaceResolvers<ContextType>;
  InvoiceItem?: InvoiceItemResolvers<ContextType>;
  InvoiceTotal?: InvoiceTotalResolvers<ContextType>;
  ShippingHandling?: ShippingHandlingResolvers<ContextType>;
  ShippingDiscount?: ShippingDiscountResolvers<ContextType>;
  OrderShipment?: OrderShipmentResolvers<ContextType>;
  SalesCommentItem?: SalesCommentItemResolvers<ContextType>;
  ShipmentItemInterface?: ShipmentItemInterfaceResolvers<ContextType>;
  ShipmentItem?: ShipmentItemResolvers<ContextType>;
  ShipmentTracking?: ShipmentTrackingResolvers<ContextType>;
  OrderPaymentMethod?: OrderPaymentMethodResolvers<ContextType>;
  CreditMemo?: CreditMemoResolvers<ContextType>;
  CreditMemoItemInterface?: CreditMemoItemInterfaceResolvers<ContextType>;
  CreditMemoItem?: CreditMemoItemResolvers<ContextType>;
  CreditMemoTotal?: CreditMemoTotalResolvers<ContextType>;
  KeyValue?: KeyValueResolvers<ContextType>;
  EntityUrl?: EntityUrlResolvers<ContextType>;
  UrlRewrite?: UrlRewriteResolvers<ContextType>;
  HttpQueryParameter?: HttpQueryParameterResolvers<ContextType>;
  RoutableInterface?: RoutableInterfaceResolvers<ContextType>;
  SendEmailToFriendOutput?: SendEmailToFriendOutputResolvers<ContextType>;
  SendEmailToFriendSender?: SendEmailToFriendSenderResolvers<ContextType>;
  SendEmailToFriendRecipient?: SendEmailToFriendRecipientResolvers<ContextType>;
  SendFriendConfiguration?: SendFriendConfigurationResolvers<ContextType>;
  SwatchLayerFilterItemInterface?: SwatchLayerFilterItemInterfaceResolvers<ContextType>;
  SwatchLayerFilterItem?: SwatchLayerFilterItemResolvers<ContextType>;
  SwatchData?: SwatchDataResolvers<ContextType>;
  SwatchDataInterface?: SwatchDataInterfaceResolvers<ContextType>;
  ImageSwatchData?: ImageSwatchDataResolvers<ContextType>;
  TextSwatchData?: TextSwatchDataResolvers<ContextType>;
  ColorSwatchData?: ColorSwatchDataResolvers<ContextType>;
  DeletePaymentTokenOutput?: DeletePaymentTokenOutputResolvers<ContextType>;
  CustomerPaymentTokens?: CustomerPaymentTokensResolvers<ContextType>;
  PaymentToken?: PaymentTokenResolvers<ContextType>;
  FixedProductTax?: FixedProductTaxResolvers<ContextType>;
  WishlistOutput?: WishlistOutputResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistItemInterface?: WishlistItemInterfaceResolvers<ContextType>;
  WishlistItems?: WishlistItemsResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  AddWishlistItemsToCartOutput?: AddWishlistItemsToCartOutputResolvers<ContextType>;
  WishlistCartUserInputError?: WishlistCartUserInputErrorResolvers<ContextType>;
  AddProductsToWishlistOutput?: AddProductsToWishlistOutputResolvers<ContextType>;
  RemoveProductsFromWishlistOutput?: RemoveProductsFromWishlistOutputResolvers<ContextType>;
  UpdateProductsInWishlistOutput?: UpdateProductsInWishlistOutputResolvers<ContextType>;
  WishListUserInputError?: WishListUserInputErrorResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  MollieStoreConfig?: MollieStoreConfigResolvers<ContextType>;
  MollieIssuer?: MollieIssuerResolvers<ContextType>;
  MolliePaymentMethodMeta?: MolliePaymentMethodMetaResolvers<ContextType>;
  MolliePaymentMethod?: MolliePaymentMethodResolvers<ContextType>;
  MollieResetCartOutput?: MollieResetCartOutputResolvers<ContextType>;
  MolliePaymentMethodsOutput?: MolliePaymentMethodsOutputResolvers<ContextType>;
  MollieTransactionOutput?: MollieTransactionOutputResolvers<ContextType>;
  MollieProcessTransactionOutput?: MollieProcessTransactionOutputResolvers<ContextType>;
  MolliePaymentFee?: MolliePaymentFeeResolvers<ContextType>;
  MollieApplePayValidationOutput?: MollieApplePayValidationOutputResolvers<ContextType>;
  CurrentCartId?: CurrentCartIdResolvers<ContextType>;
  CurrentCompareUid?: CurrentCompareUidResolvers<ContextType>;
  GuestWishlist?: GuestWishlistResolvers<ContextType>;
  GuestWishlistItem?: GuestWishlistItemResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  env?: envDirectiveResolver<any, any, ContextType>;
  injectable?: injectableDirectiveResolver<any, any, ContextType>;
  inject?: injectDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = HygraphTypes.Context & M2Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/hygraph/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/m2/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = {"playground":true,"endpoint":"/api/graphql","playgroundTitle":"GraphCommerce® Mesh"} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const hygraphTransforms = [];
const m2Transforms = [];
const hygraphHandler = new GraphqlHandler({
              name: "hygraph",
              config: {"useGETForQueries":true,"endpoint":"https://api-ap-northeast-1.hygraph.com/v2/clqas34hw0a1201t78za29czk/master","operationHeaders":{"gcms-locales":"{context.headers['gcms-locales']}"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("hygraph"),
              logger: logger.child("hygraph"),
              importFn,
            });
const m2Handler = new GraphqlHandler({
              name: "m2",
              config: {"endpoint":"https://backend.reachdigital.dev/graphql","useGETForQueries":true,"batch":false,"operationHeaders":{"Store":"{context.headers.store}","Authorization":"{context.headers.authorization}","X-ReCaptcha":"{context.headers['x-recaptcha']}","Preview-Version":"{context.headers['preview-version']}","Content-Currency":"{context.headers['content-currency']}"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("m2"),
              logger: logger.child("m2"),
              importFn,
            });
sources[1] = {
          name: 'm2',
          handler: m2Handler,
          transforms: m2Transforms
        }
additionalEnvelopPlugins[0] = await UseHttpDetailsExtensions({
          ...({
  "if": "env.NODE_ENV === 'development'"
}),
          logger: logger.child("httpDetailsExtensions"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
hygraphTransforms[0] = new FilterSchemaTransform({
                  apiName: "hygraph",
                  config: {"filters":["Mutation.!*","Query.!{node,asset*,scheduled*,*Version,user*}","*.*.!{after,before,last,forceParentLocale,locales}","*.!{localizations,scheduledIn,documentInStages*,createdAt*,updatedAt*,publishedAt*,createdBy,updatedBy,publishedBy,history,scheduledIn*}"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
hygraphTransforms[1] = new PruneTransform({
                  apiName: "hygraph",
                  config: {"skipPruning":[]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'hygraph',
          handler: hygraphHandler,
          transforms: hygraphTransforms
        }
const additionalTypeDefs = [parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Enables some demo specific code that is probably not useful for a project:\n  \n  - Adds the \"BY GC\" to the product list items.\n  - Adds \"dominant_color\" attribute swatches to the product list items.\n  - Creates a big list items in the product list.\n  \"\"\"\n  demoMode: Boolean = true\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Enables some demo specific code that is probably not useful for a project:\n  \n  - Adds the \"BY GC\" to the product list items.\n  - Adds \"dominant_color\" attribute swatches to the product list items.\n  - Creates a big list items in the product list.\n  \"\"\"\n  demoMode: Boolean = true\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Configure different Google Analytics IDs for different locales.\n  \n  To disable for a specific locale, set the value to null.\n  \"\"\"\n  googleAnalyticsId: String\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  See https://support.google.com/analytics/answer/9539598?hl=en\n  \n  Provide a value to enable Google Analytics for your store.\n  \n  To override the value for a specific locale, configure in i18n config.\n  \"\"\"\n  googleAnalyticsId: String\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Configure different Google Analytics IDs for different locales.\n  \n  To disable for a specific locale, set the value to null.\n  \"\"\"\n  googleAnalyticsId: String\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  See https://support.google.com/analytics/answer/9539598?hl=en\n  \n  Provide a value to enable Google Analytics for your store.\n  \n  To override the value for a specific locale, configure in i18n config.\n  \"\"\"\n  googleAnalyticsId: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Google reCAPTCHA site key.\n  When using reCAPTCHA, this value is required, even if you are configuring different values for each locale.\n  \n  Get a site key and a secret key from https://developers.google.com/recaptcha/docs/v3\n  \n  The secret key should be added in the Magento admin panel (Stores > Configuration > Security > Google ReCAPTCHA Storefront > reCAPTCHA v3 Invisible)\n  ReCAPTCHA can then be enabled/disabled for the different forms, separately (Stores > Configuration > Security > Google ReCAPTCHA Storefront > Storefront)\n  \"\"\"\n  googleRecaptchaKey: String\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"Locale specific google reCAPTCHA key.\"\"\"\n  googleRecaptchaKey: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Google reCAPTCHA site key.\n  When using reCAPTCHA, this value is required, even if you are configuring different values for each locale.\n  \n  Get a site key and a secret key from https://developers.google.com/recaptcha/docs/v3\n  \n  The secret key should be added in the Magento admin panel (Stores > Configuration > Security > Google ReCAPTCHA Storefront > reCAPTCHA v3 Invisible)\n  ReCAPTCHA can then be enabled/disabled for the different forms, separately (Stores > Configuration > Security > Google ReCAPTCHA Storefront > Storefront)\n  \"\"\"\n  googleRecaptchaKey: String\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"Locale specific google reCAPTCHA key.\"\"\"\n  googleRecaptchaKey: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  The Google Tagmanager ID to be used on the site.\n  \n  This value is required even if you are configuring different values for each locale.\n  \"\"\"\n  googleTagmanagerId: String\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"The Google Tagmanager ID to be used per locale.\"\"\"\n  googleTagmanagerId: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  The Google Tagmanager ID to be used on the site.\n  \n  This value is required even if you are configuring different values for each locale.\n  \"\"\"\n  googleTagmanagerId: String\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"The Google Tagmanager ID to be used per locale.\"\"\"\n  googleTagmanagerId: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  The HyGraph endpoint.\n  \n  > Read-only endpoint that allows low latency and high read-throughput content delivery.\n  \n  Project settings -> API Access -> High Performance Read-only Content API\n  \"\"\"\n  hygraphEndpoint: String!\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Add a gcms-locales header to make sure queries return in a certain language, can be an array to define fallbacks.\n  \"\"\"\n  hygraphLocales: [String!]\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  The HyGraph endpoint.\n  \n  > Read-only endpoint that allows low latency and high read-throughput content delivery.\n  \n  Project settings -> API Access -> High Performance Read-only Content API\n  \"\"\"\n  hygraphEndpoint: String!\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Add a gcms-locales header to make sure queries return in a certain language, can be an array to define fallbacks.\n  \"\"\"\n  hygraphLocales: [String!]\n}"),,parse("\"\"\"\nOnly include this fragment in the output when the environment variable is set.\n\"\"\"\ndirective @env(if: String!) on FRAGMENT_DEFINITION"),,parse("\"\"\"\nOnly include this fragment in the output when the environment variable is set.\n\"\"\"\ndirective @env(if: String!) on FRAGMENT_DEFINITION"),,parse("\"\"\"\nDefines wheter a Fragment can be injected\n\n```graphql\nfragment MyInjectableFragment on Model @injectable {\n  id\n}\n```\n\"\"\"\ndirective @injectable on FRAGMENT_DEFINITION\n\n\"\"\"\nDefines whether a Fragment injects into an @injectable\n\n```graphql\nfragment MyFragment on Model @inject(into [\"MyInjectableFragment\"]) {\n  field\n}\n```\n\"\"\"\ndirective @inject(into: [String!]!) on FRAGMENT_DEFINITION"),,parse("\"\"\"\nDefines wheter a Fragment can be injected\n\n```graphql\nfragment MyInjectableFragment on Model @injectable {\n  id\n}\n```\n\"\"\"\ndirective @injectable on FRAGMENT_DEFINITION\n\n\"\"\"\nDefines whether a Fragment injects into an @injectable\n\n```graphql\nfragment MyFragment on Model @inject(into [\"MyInjectableFragment\"]) {\n  field\n}\n```\n\"\"\"\ndirective @inject(into: [String!]!) on FRAGMENT_DEFINITION"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Content API. **Only used for migrations.**\n  \n  > Regular read & write endpoint that allows querying and mutating data in your project.\n  \n  Project settings -> API Access -> Content API\n  \"\"\"\n  hygraphWriteAccessEndpoint: String\n  \"\"\"\n  Hygraph Management SDK Authorization Token. **Only used for migrations.**\n  \n  Project settings -> API Access -> Permanent Auth Tokens\n  \n  1. Click  'Add token' and give it a name, something like 'GraphCommerce Write Access Token' and keep stage on 'Published'.\n  2. Under 'Management API', click 'Yes, Initialize defaults'\n  3. Click 'Edit Permissions' and enable: 'Update' and 'Delete' permissions for 'models', 'enumerations', 'fields', 'components' and 'sources'\n    - Update existing models\n    - Delete existing models\n    - Update existing fields\n    - Delete existing fields\n    - Update existing enumerations\n    - Delete existing enumerations\n    - Update existing components\n    - Delete existing components\n    - Update remote sources\n    - Delete remote sources\n    - Read existing environments\n    - Read public content views\n    - Create public content views\n    - Update public content views\n    - Delete public content views\n    - Can see schema view\n  \n  ```\n  GC_HYGRAPH_WRITE_ACCESS_ENDPOINT=\"https://...hygraph.com/v2/...\"\n  GC_HYGRAPH_WRITE_ACCESS_TOKEN=\"AccessTokenFromHygraph\"\n  yarn graphcommerce hygraph-migrate\n  ```\n  \"\"\"\n  hygraphWriteAccessToken: String\n  \"\"\"Hygraph Project ID. **Only used for migrations.**\"\"\"\n  hygraphProjectId: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Content API. **Only used for migrations.**\n  \n  > Regular read & write endpoint that allows querying and mutating data in your project.\n  \n  Project settings -> API Access -> Content API\n  \"\"\"\n  hygraphWriteAccessEndpoint: String\n  \"\"\"\n  Hygraph Management SDK Authorization Token. **Only used for migrations.**\n  \n  Project settings -> API Access -> Permanent Auth Tokens\n  \n  1. Click  'Add token' and give it a name, something like 'GraphCommerce Write Access Token' and keep stage on 'Published'.\n  2. Under 'Management API', click 'Yes, Initialize defaults'\n  3. Click 'Edit Permissions' and enable: 'Update' and 'Delete' permissions for 'models', 'enumerations', 'fields', 'components' and 'sources'\n    - Update existing models\n    - Delete existing models\n    - Update existing fields\n    - Delete existing fields\n    - Update existing enumerations\n    - Delete existing enumerations\n    - Update existing components\n    - Delete existing components\n    - Update remote sources\n    - Delete remote sources\n    - Read existing environments\n    - Read public content views\n    - Create public content views\n    - Update public content views\n    - Delete public content views\n    - Can see schema view\n  \n  ```\n  GC_HYGRAPH_WRITE_ACCESS_ENDPOINT=\"https://...hygraph.com/v2/...\"\n  GC_HYGRAPH_WRITE_ACCESS_TOKEN=\"AccessTokenFromHygraph\"\n  yarn graphcommerce hygraph-migrate\n  ```\n  \"\"\"\n  hygraphWriteAccessToken: String\n  \"\"\"Hygraph Project ID. **Only used for migrations.**\"\"\"\n  hygraphProjectId: String\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"Specify a custom locale for to load translations.\"\"\"\n  linguiLocale: String\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"Specify a custom locale for to load translations.\"\"\"\n  linguiLocale: String\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax.\n  \"\"\"\n  cartDisplayPricesInclTax: Boolean\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax.\n  \n  When Magento's StoreConfig adds this value, this can be replaced.\n  \"\"\"\n  cartDisplayPricesInclTax: Boolean\n}"),,parse("extend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax.\n  \"\"\"\n  cartDisplayPricesInclTax: Boolean\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  Due to a limitation of the GraphQL API it is not possible to determine if a cart should be displayed including or excluding tax.\n  \n  When Magento's StoreConfig adds this value, this can be replaced.\n  \"\"\"\n  cartDisplayPricesInclTax: Boolean\n}"),,parse("extend type Query {\n  currentCartId: CurrentCartId\n}\n\ntype CurrentCartId {\n  id: String\n}\n\ninput RegisterCartIdInput {\n  cart_id: String!\n}"),,parse("extend type Query {\n  currentCartId: CurrentCartId\n}\n\ntype CurrentCartId {\n  id: String\n}\n\ninput RegisterCartIdInput {\n  cart_id: String!\n}"),,parse("enum CompareVariant {\n  ICON\n  CHECKBOX\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"Use compare functionality\"\"\"\n  compare: Boolean\n  \"\"\"\n  By default the compare feature is denoted with a 'compare ICON' (2 arrows facing one another).\n  This may be fine for experienced users, but for more clarity it's also possible to present the compare feature as a CHECKBOX accompanied by the 'Compare' label\n  \"\"\"\n  compareVariant: CompareVariant = ICON\n}"),,parse("enum CompareVariant {\n  ICON\n  CHECKBOX\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"Use compare functionality\"\"\"\n  compare: Boolean\n  \"\"\"\n  By default the compare feature is denoted with a 'compare ICON' (2 arrows facing one another).\n  This may be fine for experienced users, but for more clarity it's also possible to present the compare feature as a CHECKBOX accompanied by the 'Compare' label\n  \"\"\"\n  compareVariant: CompareVariant = ICON\n}"),,parse("extend type Query {\n  currentCompareUid: CurrentCompareUid\n}\n\ntype CurrentCompareUid {\n  uid: String\n}"),,parse("extend type Query {\n  currentCompareUid: CurrentCompareUid\n}\n\ntype CurrentCompareUid {\n  uid: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Due to a limitation in the GraphQL API of Magento 2, we need to know if the\n  customer requires email confirmation.\n  \n  This value should match Magento 2's configuration value for\n  `customer/create_account/confirm` and should be removed once we can query\n  \"\"\"\n  customerRequireEmailConfirmation: Boolean\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  Due to a limitation in the GraphQL API of Magento 2, we need to know if the\n  customer requires email confirmation.\n  \n  This value should match Magento 2's configuration value for\n  `customer/create_account/confirm` and should be removed once we can query\n  \"\"\"\n  customerRequireEmailConfirmation: Boolean\n}"),,parse("extend type Query {\n  customerToken: CustomerToken\n}\n\nextend type CustomerToken {\n  createdAt: String\n  valid: Boolean\n}"),,parse("extend type Query {\n  customerToken: CustomerToken\n}\n\nextend type CustomerToken {\n  createdAt: String\n  valid: Boolean\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  GraphQL Magento endpoint.\n  \n  Examples:\n  - https://magento2.test/graphql\n  \"\"\"\n  magentoEndpoint: String!\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Magento store code.\n  \n  Stores => All Stores => [Store View] => Store View Code\n  \n  Examples:\n  - default\n  - en-us\n  - b2b-us\n  \"\"\"\n  magentoStoreCode: String!\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"\n  GraphQL Magento endpoint.\n  \n  Examples:\n  - https://magento2.test/graphql\n  \"\"\"\n  magentoEndpoint: String!\n}\n\nextend input GraphCommerceStorefrontConfig {\n  \"\"\"\n  Magento store code.\n  \n  Stores => All Stores => [Store View] => Store View Code\n  \n  Examples:\n  - default\n  - en-us\n  - b2b-us\n  \"\"\"\n  magentoStoreCode: String!\n}"),,parse("interface CartItemInterface {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype BundleCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype ConfigurableCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype DownloadableCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype SimpleCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype VirtualCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype CartItemError {\n  \"An error code that describes the error encountered\"\n  code: CartItemErrorType!\n  \"A localized error message\"\n  message: String!\n}\n\ntype CartItemPrices {\n  price_including_tax: Money\n}\n\nenum CartItemErrorType {\n  UNDEFINED\n  ITEM_QTY\n  ITEM_INCREMENTS\n}"),,parse("interface CartItemInterface {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype BundleCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype ConfigurableCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype DownloadableCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype SimpleCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype VirtualCartItem {\n  \"An array of errors encountered while loading the cart item\"\n  errors: [CartItemError]\n}\n\ntype CartItemError {\n  \"An error code that describes the error encountered\"\n  code: CartItemErrorType!\n  \"A localized error message\"\n  message: String!\n}\n\ntype CartItemPrices {\n  price_including_tax: Money\n}\n\nenum CartItemErrorType {\n  UNDEFINED\n  ITEM_QTY\n  ITEM_INCREMENTS\n}"),,parse("\"\"\"\nOptions to configure which values will be replaced when a variant is selected on the product page.\n\"\"\"\ninput MagentoConfigurableVariantValues {\n  \"\"\"\n  When a variant is selected the URL of the product will be changed in the address bar.\n  \n  This only happens when the actual variant is can be accessed by the URL.\n  \"\"\"\n  url: Boolean\n  \"\"\"\n  This option enables the automatic update of product gallery images on the product page when a variant is selected,\n  provided that the gallery images for the selected variant differ from the currently displayed images.\n  \"\"\"\n  gallery: Boolean\n  \"\"\"\n  Use the name, description, short description and meta data from the configured variant\n  \"\"\"\n  content: Boolean\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  When a user selects a variant, it will switch the values on the configurable page with the values of the configured variant.\n  \n  Enabling options here will allow switching of those variants.\n  \"\"\"\n  configurableVariantValues: MagentoConfigurableVariantValues = {url: true, content: true}\n  \"\"\"\n  If a simple product is part of a Configurable product page, should the simple product be\n  rendered as a configured option of the configurable product page?\n  \n  How does this work:\n  \n  When the `products(filters: { url_key: { eq: 'simple-product' } }) { ... }` query is ran,\n  Magento also returns the Simple product and the Configurable product the simple belongs to.\n  \n  If that is the case we render the configurable product page instead of the simple product page but\n  the options to select the simple product are pre-selected.\n  \"\"\"\n  configurableVariantForSimple: Boolean = false\n}"),,parse("\"\"\"\nOptions to configure which values will be replaced when a variant is selected on the product page.\n\"\"\"\ninput MagentoConfigurableVariantValues {\n  \"\"\"\n  When a variant is selected the URL of the product will be changed in the address bar.\n  \n  This only happens when the actual variant is can be accessed by the URL.\n  \"\"\"\n  url: Boolean\n  \"\"\"\n  This option enables the automatic update of product gallery images on the product page when a variant is selected,\n  provided that the gallery images for the selected variant differ from the currently displayed images.\n  \"\"\"\n  gallery: Boolean\n  \"\"\"\n  Use the name, description, short description and meta data from the configured variant\n  \"\"\"\n  content: Boolean\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  When a user selects a variant, it will switch the values on the configurable page with the values of the configured variant.\n  \n  Enabling options here will allow switching of those variants.\n  \"\"\"\n  configurableVariantValues: MagentoConfigurableVariantValues = {url: true, content: true}\n  \"\"\"\n  If a simple product is part of a Configurable product page, should the simple product be\n  rendered as a configured option of the configurable product page?\n  \n  How does this work:\n  \n  When the `products(filters: { url_key: { eq: 'simple-product' } }) { ... }` query is ran,\n  Magento also returns the Simple product and the Configurable product the simple belongs to.\n  \n  If that is the case we render the configurable product page instead of the simple product page but\n  the options to select the simple product are pre-selected.\n  \"\"\"\n  configurableVariantForSimple: Boolean = false\n}"),,parse("enum ProductFiltersLayout {\n  DEFAULT\n  SIDEBAR\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  On older versions of GraphCommerce products would use a product type specific route.\n  \n  This should only be set to true if you use the /product/[url] AND /product/configurable/[url] routes.\n  \n  @deprecated Will be removed in a future version. [migration](../upgrading/graphcommerce-5-to-6.md#product-routing-changes)\n  \"\"\"\n  legacyProductRoute: Boolean\n  \"\"\"Product filters with better UI for mobile and desktop.\"\"\"\n  productFiltersPro: Boolean\n  \"\"\"\n  Layout how the filters are rendered.\n  DEFAULT: Will be rendered as horzontal chips on desktop and mobile\n  SIDEBAR: Will be rendered as a sidebar on desktop and horizontal chips on mobile\n  \"\"\"\n  productFiltersLayout: ProductFiltersLayout = DEFAULT\n  \"\"\"\n  By default we route products to /p/[url] but you can change this to /product/[url] if you wish.\n  \n  Default: '/p/'\n  Example: '/product/'\n  \"\"\"\n  productRoute: String\n}"),,parse("enum ProductFiltersLayout {\n  DEFAULT\n  SIDEBAR\n}\n\nextend input GraphCommerceConfig {\n  \"\"\"\n  On older versions of GraphCommerce products would use a product type specific route.\n  \n  This should only be set to true if you use the /product/[url] AND /product/configurable/[url] routes.\n  \n  @deprecated Will be removed in a future version. [migration](../upgrading/graphcommerce-5-to-6.md#product-routing-changes)\n  \"\"\"\n  legacyProductRoute: Boolean\n  \"\"\"Product filters with better UI for mobile and desktop.\"\"\"\n  productFiltersPro: Boolean\n  \"\"\"\n  Layout how the filters are rendered.\n  DEFAULT: Will be rendered as horzontal chips on desktop and mobile\n  SIDEBAR: Will be rendered as a sidebar on desktop and horizontal chips on mobile\n  \"\"\"\n  productFiltersLayout: ProductFiltersLayout = DEFAULT\n  \"\"\"\n  By default we route products to /p/[url] but you can change this to /product/[url] if you wish.\n  \n  Default: '/p/'\n  Example: '/product/'\n  \"\"\"\n  productRoute: String\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"Hide the wishlist functionality for guests.\"\"\"\n  wishlistHideForGuests: Boolean\n  \"\"\"\n  Ignores whether a product is already in the wishlist, makes the toggle an add only.\n  \"\"\"\n  wishlistIgnoreProductWishlistStatus: Boolean\n  \"\"\"Show a message when the product is added to the wishlist.\"\"\"\n  wishlistShowFeedbackMessage: Boolean\n}"),,parse("extend input GraphCommerceConfig {\n  \"\"\"Hide the wishlist functionality for guests.\"\"\"\n  wishlistHideForGuests: Boolean\n  \"\"\"\n  Ignores whether a product is already in the wishlist, makes the toggle an add only.\n  \"\"\"\n  wishlistIgnoreProductWishlistStatus: Boolean\n  \"\"\"Show a message when the product is added to the wishlist.\"\"\"\n  wishlistShowFeedbackMessage: Boolean\n}"),,parse("extend type Query {\n  guestWishlist: GuestWishlist\n}\n\ntype GuestWishlist {\n  items: [GuestWishlistItem!]!\n}\n\ntype GuestWishlistItem {\n  sku: String!\n  url_key: String!\n  selected_options: [ID]\n  quantity: Float!\n}"),,parse("extend type Query {\n  guestWishlist: GuestWishlist\n}\n\ntype GuestWishlist {\n  items: [GuestWishlistItem!]!\n}\n\ntype GuestWishlistItem {\n  sku: String!\n  url_key: String!\n  selected_options: [ID]\n  quantity: Float!\n}"),,parse("\"\"\"\n# GraphCommerce configuration system\n\nGlobal GraphCommerce configuration can be configured in your `graphcommerce.config.js` file\nin the root of your project and are automatically validated on startup.\n\n## Configuring with the configuration file.\n\nThe configuration file is a javascript file that exports a `GraphCommerceConfig` object. See graphcommerce.config.js.example for an example.\n\n## Using configuration\n\nConfiguration can be accessed in your project with the `import.meta.graphCommerce` object.\n\n```tsx\nimport { storefrontAll, storefrontConfig, storefrontConfigDefault, useStorefrontConfig } from '@graphcommerce/next-ui'\n\n// Accessing a global value\nconst globalConf = import.meta.graphCommerce.cartDisplayPricesInclTax\n\nfunction MyComponent() {\n  // Configuration configured per storefront locale.\n  const scopedConfig = useStorefrontConfig().cartDisplayPricesInclTax\n\n  // Creating a fallback system\n  const scopedConfigWithFallback = scopedConfig ?? globalConf\n\n  // Or as single line\n  const scopedConfigWithFallback2 =\n    useStorefrontConfig().cartDisplayPricesInclTax ?? import.meta.graphCommerce.cartDisplayPricesInclTax\n\n  return <div>{googleRecaptchaKey}</div>\n}\n```\n\nYou can also use the configuration in your `.meshrc.yml` by accessing\n`{graphCommerce.myField}`\n\n```yml\nendpoint: '{graphCommerce.magentoEndpoint}'\n```\n\n## Environment variables to override configuration\n\nConfiguration values can be overwriten by environment variables, with the following rules:\n- Convert from camelCase to `SCREAMING_SNAKE_CASE`\n- Prefix with `GC_`\n- Arrays can be indexed with `_0`, `_1`, `_2`, etc.\n- Objects can be accessed with `_<key>`.\n\nExamples:\n- `limitSsg` -> `GC_LIMIT_SSG=\"1\"`\n- `storefront[0].locale` -> `GC_STOREFRONT_0_LOCALE=\"en\"`\n- `debug.pluginStatus` -> `GC_DEBUG_PLUGIN_STATUS=\"1\"`\n\n\n## Exporting current configuration to environment variables\n\nYou can export configuration by running `yarn graphcommerce export-config`\n\n## Extending the configuration in your  project\n\nCreate a graphql/Config.graphqls file in your project and extend the GraphCommerceConfig, GraphCommerceStorefrontConfig inputs to add configuration.\n\n```graphql\nextend input GraphCommerceConfig {\n  myConfig: String # or Boolean, or Int, or Float, make required with `!`\n}\nextend input GraphCommerceStorefrontConfig {\n  myField: Boolean\n}\n```\n\n## All configuration values\n\nBelow is a list of all possible configurations that can be set by GraphCommerce.\n\"\"\"\ninput GraphCommerceConfig {\n  \"\"\"All storefront configuration for the project\"\"\"\n  storefront: [GraphCommerceStorefrontConfig!]!\n  \"\"\"Limit the static generation of SSG when building\"\"\"\n  limitSsg: Boolean\n  \"\"\"\n  Allow the site to be indexed by search engines.\n  If false, the robots.txt file will be set to disallow all.\n  \"\"\"\n  robotsAllow: Boolean\n  \"\"\"\n  The canonical base URL is used for SEO purposes.\n  \n  Examples:\n  - https://example.com\n  - https://example.com/en\n  - https://example.com/en-US\n  \"\"\"\n  canonicalBaseUrl: String!\n  \"\"\"\n  To enable next.js' preview mode, configure the secret you'd like to use.\n  \"\"\"\n  previewSecret: String\n  \"\"\"Debug configuration for GraphCommerce\"\"\"\n  debug: GraphCommerceDebugConfig\n}\n\n\"\"\"All storefront configuration for the project\"\"\"\ninput GraphCommerceStorefrontConfig {\n  \"\"\"\n  There can only be one entry with defaultLocale set to true.\n  - If there are more, the first one is used.\n  - If there is none, the first entry is used.\n  \"\"\"\n  defaultLocale: Boolean\n  \"\"\"\n  Domain configuration, must be a domain https://tools.ietf.org/html/rfc3986\n  \"\"\"\n  domain: String\n  \"\"\"\n  Must be a locale string https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers\n  \"\"\"\n  locale: String!\n  \"\"\"\n  The canonical base URL is used for SEO purposes.\n  \n  Examples:\n  - https://example.com\n  - https://example.com/en\n  - https://example.com/en-US\n  \"\"\"\n  canonicalBaseUrl: String\n}\n\n\"\"\"Debug configuration for GraphCommerce\"\"\"\ninput GraphCommerceDebugConfig {\n  \"\"\"\n  When updating packages it can happen that the same package is included with different versions in the same project.\n  \n  Issues that this can cause are:\n  - The same package is included multiple times in the bundle, increasing the bundle size.\n  - The Typescript types of the package are not compatible with each other, causing Typescript errors.\n  \"\"\"\n  webpackDuplicatesPlugin: Boolean\n  \"\"\"\n  Cyclic dependencies can cause memory issues and other strange bugs.\n  This plugin will warn you when it detects a cyclic dependency.\n  \n  When running into memory issues, it can be useful to enable this plugin.\n  \"\"\"\n  webpackCircularDependencyPlugin: Boolean\n  \"\"\"Reports which plugins are enabled or disabled.\"\"\"\n  pluginStatus: Boolean\n}"),,parse("\"\"\"\n# GraphCommerce configuration system\n\nGlobal GraphCommerce configuration can be configured in your `graphcommerce.config.js` file\nin the root of your project and are automatically validated on startup.\n\n## Configuring with the configuration file.\n\nThe configuration file is a javascript file that exports a `GraphCommerceConfig` object. See graphcommerce.config.js.example for an example.\n\n## Using configuration\n\nConfiguration can be accessed in your project with the `import.meta.graphCommerce` object.\n\n```tsx\nimport { storefrontAll, storefrontConfig, storefrontConfigDefault, useStorefrontConfig } from '@graphcommerce/next-ui'\n\n// Accessing a global value\nconst globalConf = import.meta.graphCommerce.cartDisplayPricesInclTax\n\nfunction MyComponent() {\n  // Configuration configured per storefront locale.\n  const scopedConfig = useStorefrontConfig().cartDisplayPricesInclTax\n\n  // Creating a fallback system\n  const scopedConfigWithFallback = scopedConfig ?? globalConf\n\n  // Or as single line\n  const scopedConfigWithFallback2 =\n    useStorefrontConfig().cartDisplayPricesInclTax ?? import.meta.graphCommerce.cartDisplayPricesInclTax\n\n  return <div>{googleRecaptchaKey}</div>\n}\n```\n\nYou can also use the configuration in your `.meshrc.yml` by accessing\n`{graphCommerce.myField}`\n\n```yml\nendpoint: '{graphCommerce.magentoEndpoint}'\n```\n\n## Environment variables to override configuration\n\nConfiguration values can be overwriten by environment variables, with the following rules:\n- Convert from camelCase to `SCREAMING_SNAKE_CASE`\n- Prefix with `GC_`\n- Arrays can be indexed with `_0`, `_1`, `_2`, etc.\n- Objects can be accessed with `_<key>`.\n\nExamples:\n- `limitSsg` -> `GC_LIMIT_SSG=\"1\"`\n- `storefront[0].locale` -> `GC_STOREFRONT_0_LOCALE=\"en\"`\n- `debug.pluginStatus` -> `GC_DEBUG_PLUGIN_STATUS=\"1\"`\n\n\n## Exporting current configuration to environment variables\n\nYou can export configuration by running `yarn graphcommerce export-config`\n\n## Extending the configuration in your  project\n\nCreate a graphql/Config.graphqls file in your project and extend the GraphCommerceConfig, GraphCommerceStorefrontConfig inputs to add configuration.\n\n```graphql\nextend input GraphCommerceConfig {\n  myConfig: String # or Boolean, or Int, or Float, make required with `!`\n}\nextend input GraphCommerceStorefrontConfig {\n  myField: Boolean\n}\n```\n\n## All configuration values\n\nBelow is a list of all possible configurations that can be set by GraphCommerce.\n\"\"\"\ninput GraphCommerceConfig {\n  \"\"\"All storefront configuration for the project\"\"\"\n  storefront: [GraphCommerceStorefrontConfig!]!\n  \"\"\"Limit the static generation of SSG when building\"\"\"\n  limitSsg: Boolean\n  \"\"\"\n  Allow the site to be indexed by search engines.\n  If false, the robots.txt file will be set to disallow all.\n  \"\"\"\n  robotsAllow: Boolean\n  \"\"\"\n  The canonical base URL is used for SEO purposes.\n  \n  Examples:\n  - https://example.com\n  - https://example.com/en\n  - https://example.com/en-US\n  \"\"\"\n  canonicalBaseUrl: String!\n  \"\"\"\n  To enable next.js' preview mode, configure the secret you'd like to use.\n  \"\"\"\n  previewSecret: String\n  \"\"\"Debug configuration for GraphCommerce\"\"\"\n  debug: GraphCommerceDebugConfig\n}\n\n\"\"\"All storefront configuration for the project\"\"\"\ninput GraphCommerceStorefrontConfig {\n  \"\"\"\n  There can only be one entry with defaultLocale set to true.\n  - If there are more, the first one is used.\n  - If there is none, the first entry is used.\n  \"\"\"\n  defaultLocale: Boolean\n  \"\"\"\n  Domain configuration, must be a domain https://tools.ietf.org/html/rfc3986\n  \"\"\"\n  domain: String\n  \"\"\"\n  Must be a locale string https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers\n  \"\"\"\n  locale: String!\n  \"\"\"\n  The canonical base URL is used for SEO purposes.\n  \n  Examples:\n  - https://example.com\n  - https://example.com/en\n  - https://example.com/en-US\n  \"\"\"\n  canonicalBaseUrl: String\n}\n\n\"\"\"Debug configuration for GraphCommerce\"\"\"\ninput GraphCommerceDebugConfig {\n  \"\"\"\n  When updating packages it can happen that the same package is included with different versions in the same project.\n  \n  Issues that this can cause are:\n  - The same package is included multiple times in the bundle, increasing the bundle size.\n  - The Typescript types of the package are not compatible with each other, causing Typescript errors.\n  \"\"\"\n  webpackDuplicatesPlugin: Boolean\n  \"\"\"\n  Cyclic dependencies can cause memory issues and other strange bugs.\n  This plugin will warn you when it detects a cyclic dependency.\n  \n  When running into memory issues, it can be useful to enable this plugin.\n  \"\"\"\n  webpackCircularDependencyPlugin: Boolean\n  \"\"\"Reports which plugins are enabled or disabled.\"\"\"\n  pluginStatus: Boolean\n}"),] as any[];
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"playground":true,"endpoint":"/api/graphql","playgroundTitle":"GraphCommerce® Mesh"},
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));