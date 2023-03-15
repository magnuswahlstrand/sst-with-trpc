// @filename: server.ts
import {initTRPC} from '@trpc/server';
import {awsLambdaRequestHandler} from '@trpc/server/adapters/aws-lambda';

import {z} from 'zod';

interface User {
    id: string;
    name: string;
}

export const t = initTRPC.create();
const appRouter = t.router({
    getUser: t.procedure.input(z.string()).query((req) => {
        req.input; // string
        return {id: req.input, name: 'Bilbo'};
    }),
    userCreate: t.procedure
        .input(z.object({name: z.string()}))
        .mutation((req) => {
            console.log("YEAH")
            const user: User = {
                id: `${Math.random()}`,
                name: req.input.name,
            };

            return user;
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({router: appRouter})