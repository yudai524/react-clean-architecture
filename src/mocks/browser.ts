import { setupWorker } from "msw";
import { handlers } from "./handlers/codegenDataHandlers";

export const worker = setupWorker(...handlers);
