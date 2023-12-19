/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type RowContentLinksFragment = { title: string, contentLinks: Array<{ id: string, title: string, url: string, description?: { raw: any } | null, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null }> };
