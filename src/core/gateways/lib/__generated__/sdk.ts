import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
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
  ISO8601DateTime: { input: string; output: string; }
};

export type CreateTodoRequestInput = {
  attributes: TodoInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTodoRequestInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoRequestInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoRequestInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoRequestInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  todoLists: TodoListConnection;
};


export type QueryTodoListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type TodoInput = {
  completedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TodoList = {
  __typename?: 'TodoList';
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  list?: Maybe<Array<Todo>>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type TodoListConnection = {
  __typename?: 'TodoListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TodoListEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TodoList>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TodoListEdge = {
  __typename?: 'TodoListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<TodoList>;
};

export type UpdateTodoRequestInput = {
  attributes: TodoInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type TodoFieldFragment = { __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null };

export type TodoListFieldFragment = { __typename?: 'TodoList', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, list?: Array<{ __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null }> | null };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoRequestInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null } | null };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoRequestInput;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null } | null };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoRequestInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null } | null };

export type FetchTodoListsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchTodoListsQuery = { __typename?: 'Query', todoLists: { __typename?: 'TodoListConnection', nodes?: Array<{ __typename?: 'TodoList', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, list?: Array<{ __typename?: 'Todo', id: string, name?: string | null, createdAt?: string | null, updatedAt?: string | null, completedAt?: string | null }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export const TodoFieldFragmentDoc = gql`
    fragment todoField on Todo {
  id
  name
  createdAt
  updatedAt
  completedAt
}
    `;
export const TodoListFieldFragmentDoc = gql`
    fragment todoListField on TodoList {
  id
  name
  createdAt
  updatedAt
  list {
    ...todoField
  }
}
    ${TodoFieldFragmentDoc}`;
export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoRequestInput!) {
  createTodo(input: $input) {
    ...todoField
  }
}
    ${TodoFieldFragmentDoc}`;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: DeleteTodoRequestInput!) {
  deleteTodo(input: $input) {
    ...todoField
  }
}
    ${TodoFieldFragmentDoc}`;
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodoRequestInput!) {
  updateTodo(input: $input) {
    ...todoField
  }
}
    ${TodoFieldFragmentDoc}`;
export const FetchTodoListsDocument = gql`
    query fetchTodoLists($after: String, $before: String, $first: Int, $last: Int) {
  todoLists(after: $after, before: $before, first: $first, last: $last) {
    nodes {
      ...todoListField
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    ${TodoListFieldFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo', 'mutation');
    },
    deleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTodo', 'mutation');
    },
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTodo', 'mutation');
    },
    fetchTodoLists(variables?: FetchTodoListsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FetchTodoListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchTodoListsQuery>(FetchTodoListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fetchTodoLists', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;