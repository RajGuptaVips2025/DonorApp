"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProvidersProps = { children: React.ReactNode };

export default function Providers({ children }: ProvidersProps) {
  const [client] = React.useState(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
