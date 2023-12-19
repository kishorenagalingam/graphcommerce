/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type RowProductFragment = { variant?: Types.RowProductVariants | null, identity: string, title: string, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null, productCopy?: { raw: any } | null, pageLinks: Array<{ title: string, url: string, description?: { raw: any } | null, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null }> };
