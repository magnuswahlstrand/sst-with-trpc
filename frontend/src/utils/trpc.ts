// utils/trpc.ts
import {createTRPCReact} from '@trpc/react-query';
import type {AppRouter} from '../../../packages/functions/src/server';

export const trpc = createTRPCReact<AppRouter>();