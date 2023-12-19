/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type RowLinksFragment = { title: string, linksVariant?: Types.RowLinksVariants | null, rowLinksCopy?: { raw: any } | null, pageLinks: Array<{ id: string, title: string, url: string, description?: { raw: any } | null, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null }> };
