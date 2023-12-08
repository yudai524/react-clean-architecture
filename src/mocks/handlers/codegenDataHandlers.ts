import {
  mockCreateTodoMutation,
  mockDeleteTodoMutation,
  mockFetchTodoListsQuery,
  mockTodo,
  mockTodoListConnection,
  mockUpdateTodoMutation,
} from "@/mocks/__generated__/mockHandlers";

export const handlers = [
  mockFetchTodoListsQuery((req, res, ctx) => {
    const { after, before, first, last } = req.variables;
    return res(
      ctx.data({
        todoLists: mockTodoListConnection(),
      }),
    );
  }),
  mockCreateTodoMutation((req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        createTodo: mockTodo({
          name: input.attributes.name,
        }),
      }),
    );
  }),
  mockDeleteTodoMutation((req, res, ctx) => {
    return res(
      ctx.data({
        deleteTodo: mockTodo(),
      }),
    );
  }),
  mockUpdateTodoMutation((req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        updateTodo: mockTodo({
          name: input.attributes.name,
          completedAt: input.attributes.completedAt,
        }),
      }),
    );
  }),
];
