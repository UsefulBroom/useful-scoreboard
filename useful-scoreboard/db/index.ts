import { PrismaClient } from '@prisma/client';

// add prisma to the global type
declare global {
  /* eslint-disable no-var */
  var prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
export const prisma = global.prisma || new PrismaClient({ rejectOnNotFound: true });

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
