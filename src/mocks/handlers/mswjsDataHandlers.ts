import { factory, primaryKey } from "@mswjs/data";

const db = factory({
  todoList: {
    id: primaryKey(String),
    name: String,
    createdAt: Date,
    updatedAt: Date,
  },
  todo: {
    id: primaryKey(String),
    name: String,
    createdAt: Date,
    updatedAt: Date,
    completedAt: Date,
  },
});

export const handlers = [...db.todo.toHandlers("graphql")];
