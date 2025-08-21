'use client'
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";
import { SnackbarProvider } from 'notistack';
import { customStyles } from '../src/shared/styles/notistackStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <SnackbarProvider Components={customStyles}>
          {children}
        </SnackbarProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  );
}