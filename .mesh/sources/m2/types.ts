// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace M2Types {
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
};

export type Query = {
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

/** An implementation for simple product cart items. */
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

/** An implementation for virtual product cart items. */
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

/** An interface for products in a cart. */
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

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
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

/** An implementation for downloadable product cart items. */
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

/** An implementation for configurable product cart items. */
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

/** An implementation for bundle product cart items. */
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

  export type QuerySdk = {
      /** Get a list of available store views and their config information. **/
  availableStores: InContextSdkMethod<Query['availableStores'], QueryavailableStoresArgs, MeshContext>,
  /** Return information about the specified shopping cart. **/
  cart: InContextSdkMethod<Query['cart'], QuerycartArgs, MeshContext>,
  /** Return a list of categories that match the specified filter. **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** Search for categories that match the criteria specified in the `search` and `filter` attributes. **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>,
  /** Return an array of categories based on the specified filters. **/
  categoryList: InContextSdkMethod<Query['categoryList'], QuerycategoryListArgs, MeshContext>,
  /** Return Terms and Conditions configuration information. **/
  checkoutAgreements: InContextSdkMethod<Query['checkoutAgreements'], {}, MeshContext>,
  /** Return information about CMS blocks. **/
  cmsBlocks: InContextSdkMethod<Query['cmsBlocks'], QuerycmsBlocksArgs, MeshContext>,
  /** Return details about a CMS page. **/
  cmsPage: InContextSdkMethod<Query['cmsPage'], QuerycmsPageArgs, MeshContext>,
  /** Return products that have been added to the specified compare list. **/
  compareList: InContextSdkMethod<Query['compareList'], QuerycompareListArgs, MeshContext>,
  /** The countries query provides information for all countries. **/
  countries: InContextSdkMethod<Query['countries'], {}, MeshContext>,
  /** The countries query provides information for a single country. **/
  country: InContextSdkMethod<Query['country'], QuerycountryArgs, MeshContext>,
  /** Return information about the store's currency. **/
  currency: InContextSdkMethod<Query['currency'], {}, MeshContext>,
  /** Return the attribute type, given an attribute code and entity type. **/
  customAttributeMetadata: InContextSdkMethod<Query['customAttributeMetadata'], QuerycustomAttributeMetadataArgs, MeshContext>,
  /** Return detailed information about a customer account. **/
  customer: InContextSdkMethod<Query['customer'], {}, MeshContext>,
  /** Return information about the customer's shopping cart. **/
  customerCart: InContextSdkMethod<Query['customerCart'], {}, MeshContext>,
  /** Return a list of downloadable products the customer has purchased. **/
  customerDownloadableProducts: InContextSdkMethod<Query['customerDownloadableProducts'], {}, MeshContext>,
  /** null **/
  customerOrders: InContextSdkMethod<Query['customerOrders'], {}, MeshContext>,
  /** Return a list of customer payment tokens stored in the vault. **/
  customerPaymentTokens: InContextSdkMethod<Query['customerPaymentTokens'], {}, MeshContext>,
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. **/
  getHostedProUrl: InContextSdkMethod<Query['getHostedProUrl'], QuerygetHostedProUrlArgs, MeshContext>,
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. **/
  getPayflowLinkToken: InContextSdkMethod<Query['getPayflowLinkToken'], QuerygetPayflowLinkTokenArgs, MeshContext>,
  /** Check whether the specified email has already been used to create a customer account. **/
  isEmailAvailable: InContextSdkMethod<Query['isEmailAvailable'], QueryisEmailAvailableArgs, MeshContext>,
  /** null **/
  mollieCustomerOrder: InContextSdkMethod<Query['mollieCustomerOrder'], QuerymollieCustomerOrderArgs, MeshContext>,
  /** null **/
  molliePaymentMethods: InContextSdkMethod<Query['molliePaymentMethods'], QuerymolliePaymentMethodsArgs, MeshContext>,
  /** The pickup locations query searches for locations that match the search request requirements. **/
  pickupLocations: InContextSdkMethod<Query['pickupLocations'], QuerypickupLocationsArgs, MeshContext>,
  /** Return the active ratings attributes and the values each rating can have. **/
  productReviewRatingsMetadata: InContextSdkMethod<Query['productReviewRatingsMetadata'], {}, MeshContext>,
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. **/
  products: InContextSdkMethod<Query['products'], QueryproductsArgs, MeshContext>,
  /** Return the full details for a specified product, category, or CMS page. **/
  route: InContextSdkMethod<Query['route'], QueryrouteArgs, MeshContext>,
  /** Return details about the store's configuration. **/
  storeConfig: InContextSdkMethod<Query['storeConfig'], {}, MeshContext>,
  /** Return the relative URL for a specified product, category or CMS page. **/
  urlResolver: InContextSdkMethod<Query['urlResolver'], QueryurlResolverArgs, MeshContext>,
  /** Return the contents of a customer's wish list. **/
  wishlist: InContextSdkMethod<Query['wishlist'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addBundleProductsToCart: InContextSdkMethod<Mutation['addBundleProductsToCart'], MutationaddBundleProductsToCartArgs, MeshContext>,
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addConfigurableProductsToCart: InContextSdkMethod<Mutation['addConfigurableProductsToCart'], MutationaddConfigurableProductsToCartArgs, MeshContext>,
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addDownloadableProductsToCart: InContextSdkMethod<Mutation['addDownloadableProductsToCart'], MutationaddDownloadableProductsToCartArgs, MeshContext>,
  /** Add any type of product to the cart. **/
  addProductsToCart: InContextSdkMethod<Mutation['addProductsToCart'], MutationaddProductsToCartArgs, MeshContext>,
  /** Add products to the specified compare list. **/
  addProductsToCompareList: InContextSdkMethod<Mutation['addProductsToCompareList'], MutationaddProductsToCompareListArgs, MeshContext>,
  /** Add one or more products to the specified wish list. This mutation supports all product types. **/
  addProductsToWishlist: InContextSdkMethod<Mutation['addProductsToWishlist'], MutationaddProductsToWishlistArgs, MeshContext>,
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addSimpleProductsToCart: InContextSdkMethod<Mutation['addSimpleProductsToCart'], MutationaddSimpleProductsToCartArgs, MeshContext>,
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addVirtualProductsToCart: InContextSdkMethod<Mutation['addVirtualProductsToCart'], MutationaddVirtualProductsToCartArgs, MeshContext>,
  /** Add items in the specified wishlist to the customer's cart. **/
  addWishlistItemsToCart: InContextSdkMethod<Mutation['addWishlistItemsToCart'], MutationaddWishlistItemsToCartArgs, MeshContext>,
  /** Apply a pre-defined coupon code to the specified cart. **/
  applyCouponToCart: InContextSdkMethod<Mutation['applyCouponToCart'], MutationapplyCouponToCartArgs, MeshContext>,
  /** Assign the specified compare list to the logged in customer. **/
  assignCompareListToCustomer: InContextSdkMethod<Mutation['assignCompareListToCustomer'], MutationassignCompareListToCustomerArgs, MeshContext>,
  /** Assign a logged-in customer to the specified guest shopping cart. **/
  assignCustomerToGuestCart: InContextSdkMethod<Mutation['assignCustomerToGuestCart'], MutationassignCustomerToGuestCartArgs, MeshContext>,
  /** Change the password for the logged-in customer. **/
  changeCustomerPassword: InContextSdkMethod<Mutation['changeCustomerPassword'], MutationchangeCustomerPasswordArgs, MeshContext>,
  /** Creates Client Token for Braintree Javascript SDK initialization. **/
  createBraintreeClientToken: InContextSdkMethod<Mutation['createBraintreeClientToken'], {}, MeshContext>,
  /** Create a new compare list. The compare list is saved for logged in customers. **/
  createCompareList: InContextSdkMethod<Mutation['createCompareList'], MutationcreateCompareListArgs, MeshContext>,
  /** Use `createCustomerV2` instead. **/
  createCustomer: InContextSdkMethod<Mutation['createCustomer'], MutationcreateCustomerArgs, MeshContext>,
  /** Create a billing or shipping address for a customer or guest. **/
  createCustomerAddress: InContextSdkMethod<Mutation['createCustomerAddress'], MutationcreateCustomerAddressArgs, MeshContext>,
  /** Create a customer account. **/
  createCustomerV2: InContextSdkMethod<Mutation['createCustomerV2'], MutationcreateCustomerV2Args, MeshContext>,
  /** Create an empty shopping cart for a guest or logged in user **/
  createEmptyCart: InContextSdkMethod<Mutation['createEmptyCart'], MutationcreateEmptyCartArgs, MeshContext>,
  /** null **/
  createMollieTransaction: InContextSdkMethod<Mutation['createMollieTransaction'], MutationcreateMollieTransactionArgs, MeshContext>,
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods **/
  createPayflowProToken: InContextSdkMethod<Mutation['createPayflowProToken'], MutationcreatePayflowProTokenArgs, MeshContext>,
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. **/
  createPaypalExpressToken: InContextSdkMethod<Mutation['createPaypalExpressToken'], MutationcreatePaypalExpressTokenArgs, MeshContext>,
  /** Create a product review for the specified product. **/
  createProductReview: InContextSdkMethod<Mutation['createProductReview'], MutationcreateProductReviewArgs, MeshContext>,
  /** Delete the specified compare list. **/
  deleteCompareList: InContextSdkMethod<Mutation['deleteCompareList'], MutationdeleteCompareListArgs, MeshContext>,
  /** Delete customer account **/
  deleteCustomer: InContextSdkMethod<Mutation['deleteCustomer'], {}, MeshContext>,
  /** Delete the billing or shipping address of a customer. **/
  deleteCustomerAddress: InContextSdkMethod<Mutation['deleteCustomerAddress'], MutationdeleteCustomerAddressArgs, MeshContext>,
  /** Delete a customer's payment token. **/
  deletePaymentToken: InContextSdkMethod<Mutation['deletePaymentToken'], MutationdeletePaymentTokenArgs, MeshContext>,
  /** Generate a token for specified customer. **/
  generateCustomerToken: InContextSdkMethod<Mutation['generateCustomerToken'], MutationgenerateCustomerTokenArgs, MeshContext>,
  /** Request a customer token so that an administrator can perform remote shopping assistance. **/
  generateCustomerTokenAsAdmin: InContextSdkMethod<Mutation['generateCustomerTokenAsAdmin'], MutationgenerateCustomerTokenAsAdminArgs, MeshContext>,
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. **/
  handlePayflowProResponse: InContextSdkMethod<Mutation['handlePayflowProResponse'], MutationhandlePayflowProResponseArgs, MeshContext>,
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. **/
  mergeCarts: InContextSdkMethod<Mutation['mergeCarts'], MutationmergeCartsArgs, MeshContext>,
  /** null **/
  mollieApplePayValidation: InContextSdkMethod<Mutation['mollieApplePayValidation'], MutationmollieApplePayValidationArgs, MeshContext>,
  /** null **/
  mollieProcessTransaction: InContextSdkMethod<Mutation['mollieProcessTransaction'], MutationmollieProcessTransactionArgs, MeshContext>,
  /** null **/
  mollieRestoreCart: InContextSdkMethod<Mutation['mollieRestoreCart'], MutationmollieRestoreCartArgs, MeshContext>,
  /** Convert the quote into an order. **/
  placeOrder: InContextSdkMethod<Mutation['placeOrder'], MutationplaceOrderArgs, MeshContext>,
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. **/
  removeCouponFromCart: InContextSdkMethod<Mutation['removeCouponFromCart'], MutationremoveCouponFromCartArgs, MeshContext>,
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. **/
  removeItemFromCart: InContextSdkMethod<Mutation['removeItemFromCart'], MutationremoveItemFromCartArgs, MeshContext>,
  /** Remove products from the specified compare list. **/
  removeProductsFromCompareList: InContextSdkMethod<Mutation['removeProductsFromCompareList'], MutationremoveProductsFromCompareListArgs, MeshContext>,
  /** Remove one or more products from the specified wish list. **/
  removeProductsFromWishlist: InContextSdkMethod<Mutation['removeProductsFromWishlist'], MutationremoveProductsFromWishlistArgs, MeshContext>,
  /** Add all products from a customer's previous order to the cart. **/
  reorderItems: InContextSdkMethod<Mutation['reorderItems'], MutationreorderItemsArgs, MeshContext>,
  /** Request an email with a reset password token for the registered customer identified by the specified email. **/
  requestPasswordResetEmail: InContextSdkMethod<Mutation['requestPasswordResetEmail'], MutationrequestPasswordResetEmailArgs, MeshContext>,
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. **/
  resetPassword: InContextSdkMethod<Mutation['resetPassword'], MutationresetPasswordArgs, MeshContext>,
  /** Revoke the customer token. **/
  revokeCustomerToken: InContextSdkMethod<Mutation['revokeCustomerToken'], {}, MeshContext>,
  /** Send a message on behalf of a customer to the specified email addresses. **/
  sendEmailToFriend: InContextSdkMethod<Mutation['sendEmailToFriend'], MutationsendEmailToFriendArgs, MeshContext>,
  /** Set the billing address on a specific cart. **/
  setBillingAddressOnCart: InContextSdkMethod<Mutation['setBillingAddressOnCart'], MutationsetBillingAddressOnCartArgs, MeshContext>,
  /** Assign the email address of a guest to the cart. **/
  setGuestEmailOnCart: InContextSdkMethod<Mutation['setGuestEmailOnCart'], MutationsetGuestEmailOnCartArgs, MeshContext>,
  /** Set the cart payment method and convert the cart into an order. **/
  setPaymentMethodAndPlaceOrder: InContextSdkMethod<Mutation['setPaymentMethodAndPlaceOrder'], MutationsetPaymentMethodAndPlaceOrderArgs, MeshContext>,
  /** Apply a payment method to the cart. **/
  setPaymentMethodOnCart: InContextSdkMethod<Mutation['setPaymentMethodOnCart'], MutationsetPaymentMethodOnCartArgs, MeshContext>,
  /** Set one or more shipping addresses on a specific cart. **/
  setShippingAddressesOnCart: InContextSdkMethod<Mutation['setShippingAddressesOnCart'], MutationsetShippingAddressesOnCartArgs, MeshContext>,
  /** Set one or more delivery methods on a cart. **/
  setShippingMethodsOnCart: InContextSdkMethod<Mutation['setShippingMethodsOnCart'], MutationsetShippingMethodsOnCartArgs, MeshContext>,
  /** Subscribe the specified email to the store's newsletter. **/
  subscribeEmailToNewsletter: InContextSdkMethod<Mutation['subscribeEmailToNewsletter'], MutationsubscribeEmailToNewsletterArgs, MeshContext>,
  /** Modify items in the cart. **/
  updateCartItems: InContextSdkMethod<Mutation['updateCartItems'], MutationupdateCartItemsArgs, MeshContext>,
  /** Use `updateCustomerV2` instead. **/
  updateCustomer: InContextSdkMethod<Mutation['updateCustomer'], MutationupdateCustomerArgs, MeshContext>,
  /** Update the billing or shipping address of a customer or guest. **/
  updateCustomerAddress: InContextSdkMethod<Mutation['updateCustomerAddress'], MutationupdateCustomerAddressArgs, MeshContext>,
  /** Change the email address for the logged-in customer. **/
  updateCustomerEmail: InContextSdkMethod<Mutation['updateCustomerEmail'], MutationupdateCustomerEmailArgs, MeshContext>,
  /** Update the customer's personal information. **/
  updateCustomerV2: InContextSdkMethod<Mutation['updateCustomerV2'], MutationupdateCustomerV2Args, MeshContext>,
  /** Update one or more products in the specified wish list. **/
  updateProductsInWishlist: InContextSdkMethod<Mutation['updateProductsInWishlist'], MutationupdateProductsInWishlistArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["m2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
