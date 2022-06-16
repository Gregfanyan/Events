import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import ContextProvider from "../contexts/ContextWrapper";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>{children}</ContextProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
