/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const BlogPostPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPostPaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_not_starts_with"},"value":{"kind":"StringValue","value":"blog/tagged/","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"StringValue","value":"blog/","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<BlogPostPathsQuery, BlogPostPathsQueryVariables>;
export type BlogPostPathsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BlogPostPathsQuery = { pages: Array<{ url: string }> };
