import React from "react";
import ReactDOM from "react-dom/client";
import stores, { StoreContext } from "@/stores";
import reportWebVitals from "@/utils/reportWebVitals";
import App from "@/App";
import { enableMocking } from "@/mocks/helpers";

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={stores}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
