/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductFeatureMediaBoxed_BundleProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxed_ConfigurableProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxed_DownloadableProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxed_GroupedProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxed_SimpleProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxed_VirtualProduct_Fragment = { media_gallery?: Array<{ __typename: 'ProductImage', url?: string | null, label?: string | null } | { __typename: 'ProductVideo', label?: string | null } | null> | null };

export type ProductFeatureMediaBoxedFragment = ProductFeatureMediaBoxed_BundleProduct_Fragment | ProductFeatureMediaBoxed_ConfigurableProduct_Fragment | ProductFeatureMediaBoxed_DownloadableProduct_Fragment | ProductFeatureMediaBoxed_GroupedProduct_Fragment | ProductFeatureMediaBoxed_SimpleProduct_Fragment | ProductFeatureMediaBoxed_VirtualProduct_Fragment;
