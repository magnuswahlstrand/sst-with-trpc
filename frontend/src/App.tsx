import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/client';
import React, {useState} from 'react';
import {trpc} from './utils/trpc';
import IndexPage from "./pages/Index";

const url = "https://avve8hfkqj.execute-api.eu-west-1.amazonaws.com/api"

export default function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({url}),
            ],
        }),
    );
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <IndexPage/>
            </QueryClientProvider>
        </trpc.Provider>
    );
}