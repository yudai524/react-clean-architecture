import { injectable } from "inversify";
import { GraphQLClient } from "graphql-request";
import {
  CreateTodoRequestInput,
  DeleteTodoRequestInput,
  Todo,
  UpdateTodoRequestInput,
  FetchTodoListsRequestInput,
  FetchTodoListsRequestOutput,
  ITodoListService,
} from "@core/types";
import { getSdk } from "./lib/__generated__/sdk";

@injectable()
export default class AppGraphQLAPIGateway implements ITodoListService {
  private sdk: ReturnType<typeof getSdk> = null;

  private _fetchTodoListsCursors: Record<string, string> = {};

  constructor() {
    // const url = `${YOUR_BACKEND_BASE_URL}/graphql`
    const url = "http://localhost:3000/graphql";
    const client = new GraphQLClient(url);
    this.sdk = getSdk(client);
  }

  private _headers(): HeadersInit {
    return {
      // TODO: Set Credentials and other headers.
    };
  }

  async fetchTodoLists(
    input: FetchTodoListsRequestInput,
  ): Promise<FetchTodoListsRequestOutput> {
    const variables = {
      after: "", // TODO: Pagination
      before: "",
      first: input.limit,
    };

    const response = await this.sdk.fetchTodoLists(variables, this._headers());

    return {
      todoLists: response.todoLists.nodes,
      hasNextPage: response.todoLists.pageInfo.hasNextPage,
    };
  }

  async createTodo(input: CreateTodoRequestInput): Promise<Todo> {
    const response = await this.sdk.createTodo(
      {
        input: {
          attributes: input.attributes,
        },
      },
      this._headers(),
    );

    return response.createTodo;
  }

  async updateTodo(input: UpdateTodoRequestInput): Promise<Todo> {
    const response = await this.sdk.updateTodo(
      {
        input: {
          id: input.id,
          attributes: input.attributes,
        },
      },
      this._headers(),
    );

    return response.updateTodo;
  }

  async deleteTodo(input: DeleteTodoRequestInput): Promise<Todo> {
    const response = await this.sdk.deleteTodo(
      {
        input: {
          id: input.id,
        },
      },
      this._headers(),
    );

    return response.deleteTodo;
  }
}
