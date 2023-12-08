import { setupServer } from "msw/node";
import { handlers } from "./handlers/codegenDataHandlers";

export const server = setupServer(...handlers);
