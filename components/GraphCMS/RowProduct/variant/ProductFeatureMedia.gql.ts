/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductFeatureMedia_BundleProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMedia_ConfigurableProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMedia_DownloadableProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMedia_GroupedProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMedia_SimpleProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMedia_VirtualProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaFragment = ProductFeatureMedia_BundleProduct_Fragment | ProductFeatureMedia_ConfigurableProduct_Fragment | ProductFeatureMedia_DownloadableProduct_Fragment | ProductFeatureMedia_GroupedProduct_Fragment | ProductFeatureMedia_SimpleProduct_Fragment | ProductFeatureMedia_VirtualProduct_Fragment;
