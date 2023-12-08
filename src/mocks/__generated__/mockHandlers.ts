import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
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


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateTodoMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createTodo })
 *   )
 * })
 */
export const mockCreateTodoMutation = (resolver: ResponseResolver<GraphQLRequest<CreateTodoMutationVariables>, GraphQLContext<CreateTodoMutation>, any>) =>
  graphql.mutation<CreateTodoMutation, CreateTodoMutationVariables>(
    'createTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteTodoMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ deleteTodo })
 *   )
 * })
 */
export const mockDeleteTodoMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteTodoMutationVariables>, GraphQLContext<DeleteTodoMutation>, any>) =>
  graphql.mutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    'deleteTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateTodoMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateTodo })
 *   )
 * })
 */
export const mockUpdateTodoMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateTodoMutationVariables>, GraphQLContext<UpdateTodoMutation>, any>) =>
  graphql.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    'updateTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockFetchTodoListsQuery((req, res, ctx) => {
 *   const { after, before, first, last } = req.variables;
 *   return res(
 *     ctx.data({ todoLists })
 *   )
 * })
 */
export const mockFetchTodoListsQuery = (resolver: ResponseResolver<GraphQLRequest<FetchTodoListsQueryVariables>, GraphQLContext<FetchTodoListsQuery>, any>) =>
  graphql.query<FetchTodoListsQuery, FetchTodoListsQueryVariables>(
    'fetchTodoLists',
    resolver
  )


export const mockCreateTodoRequestInput = (overrides?: Partial<CreateTodoRequestInput>): CreateTodoRequestInput => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : mockTodoInput(),
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'placeat',
    };
};

export const mockDeleteTodoRequestInput = (overrides?: Partial<DeleteTodoRequestInput>): DeleteTodoRequestInput => {
    return {
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'eligendi',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a009f868-ec27-4f99-8edc-a76d8aa8bd9a',
    };
};

export const mockMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        createTodo: overrides && overrides.hasOwnProperty('createTodo') ? overrides.createTodo! : mockTodo(),
        deleteTodo: overrides && overrides.hasOwnProperty('deleteTodo') ? overrides.deleteTodo! : mockTodo(),
        updateTodo: overrides && overrides.hasOwnProperty('updateTodo') ? overrides.updateTodo! : mockTodo(),
    };
};

export const mockPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
    return {
        endCursor: overrides && overrides.hasOwnProperty('endCursor') ? overrides.endCursor! : 'id',
        hasNextPage: overrides && overrides.hasOwnProperty('hasNextPage') ? overrides.hasNextPage! : true,
        hasPreviousPage: overrides && overrides.hasOwnProperty('hasPreviousPage') ? overrides.hasPreviousPage! : false,
        startCursor: overrides && overrides.hasOwnProperty('startCursor') ? overrides.startCursor! : 'eum',
    };
};

export const mockQuery = (overrides?: Partial<Query>): Query => {
    return {
        todoLists: overrides && overrides.hasOwnProperty('todoLists') ? overrides.todoLists! : mockTodoListConnection(),
    };
};

export const mockTodo = (overrides?: Partial<Todo>): Todo => {
    return {
        completedAt: overrides && overrides.hasOwnProperty('completedAt') ? overrides.completedAt! : '1978-12-29T03:17:48+09:00',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1975-01-24T01:06:32+09:00',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bcbfc1fd-9f84-4ca5-804f-62522ce5ea92',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'Qui amet',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '2001-01-11T10:48:27+09:00',
    };
};

export const mockTodoInput = (overrides?: Partial<TodoInput>): TodoInput => {
    return {
        completedAt: overrides && overrides.hasOwnProperty('completedAt') ? overrides.completedAt! : '2014-12-03T04:29:33+09:00',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'qui',
    };
};

export const mockTodoList = (overrides?: Partial<TodoList>): TodoList => {
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1987-11-03T20:23:55+09:00',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '84df6730-6e26-4870-8e0a-bd02db0f3fcb',
        list: overrides && overrides.hasOwnProperty('list') ? overrides.list! : [mockTodo()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'Est quisquam',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '2008-03-28T12:40:43+09:00',
    };
};

export const mockTodoListConnection = (overrides?: Partial<TodoListConnection>): TodoListConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [mockTodoListEdge()],
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [mockTodoList()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : mockPageInfo(),
    };
};

export const mockTodoListEdge = (overrides?: Partial<TodoListEdge>): TodoListEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'totam',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : mockTodoList(),
    };
};

export const mockUpdateTodoRequestInput = (overrides?: Partial<UpdateTodoRequestInput>): UpdateTodoRequestInput => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : mockTodoInput(),
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'voluptatibus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f23d1df6-1cf5-45eb-8339-465bde182810',
    };
};
