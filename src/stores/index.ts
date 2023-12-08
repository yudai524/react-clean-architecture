import React from "react";
import { container } from "@/inversify.config";
import symbols from "@core/symbols";
import { IStores, ITodoStore } from "@core/types/stores";

// Composition Root
const stores: IStores = {
  todo: container.get<ITodoStore>(symbols.ITodoStore),
};

export const StoreContext = React.createContext<IStores>(stores);

export default stores;
