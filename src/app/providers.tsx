/** @format */

"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
}
