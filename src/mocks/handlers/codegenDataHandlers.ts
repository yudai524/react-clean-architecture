import { v4 as uuidv4 } from 'uuid'
import {
  mockCreateTodoMutation,
  mockDeleteTodoMutation,
  mockFetchTodoListsQuery,
  mockTodo,
  mockTodoListConnection,
  mockUpdateTodoMutation,
} from '@/mocks/__generated__/mockHandlers'

export const handlers = [
  mockFetchTodoListsQuery((req, res, ctx) => {
    return res(
      ctx.data({
        todoLists: mockTodoListConnection(),
      })
    )
  }),
  mockCreateTodoMutation((req, res, ctx) => {
    const { input } = req.variables
    return res(
      ctx.data({
        createTodo: mockTodo({
          id: uuidv4(),
          title: input.attributes.title,
          summary: input.attributes.summary,
        }),
      })
    )
  }),
  mockDeleteTodoMutation((req, res, ctx) => {
    return res(
      ctx.data({
        deleteTodo: mockTodo(),
      })
    )
  }),
  mockUpdateTodoMutation((req, res, ctx) => {
    const { input } = req.variables
    return res(
      ctx.data({
        updateTodo: mockTodo({
          id: uuidv4(),
          title: input.attributes.title,
          summary: input.attributes.summary,
          completedAt: input.attributes.completedAt,
        }),
      })
    )
  }),
]
