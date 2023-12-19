/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const BlogPostTaggedPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPostTaggedPaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"StringValue","value":"blog/tagged/","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<BlogPostTaggedPathsQuery, BlogPostTaggedPathsQueryVariables>;
export type BlogPostTaggedPathsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BlogPostTaggedPathsQuery = { pages: Array<{ url: string }> };
