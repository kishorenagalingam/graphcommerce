/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type UspsQueryFragment = { sidebarUsps?: { uspsMultiple: Array<{ id: string, title: string, url: string, description?: { raw: any } | null, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null }> } | null, usps?: { uspsMultiple: Array<{ id: string, title: string, url: string, description?: { raw: any } | null, asset?: { url: string, width?: number | null, height?: number | null, mimeType?: string | null, size?: number | null, alt?: string | null } | null }> } | null };
