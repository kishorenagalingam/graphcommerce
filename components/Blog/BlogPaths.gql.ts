/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const BlogPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagesConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_not_starts_with"},"value":{"kind":"StringValue","value":"blog/tagged/","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"StringValue","value":"blog/","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<BlogPathsQuery, BlogPathsQueryVariables>;
export type BlogPathsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BlogPathsQuery = { pagesConnection: { aggregate: { count: number } } };
