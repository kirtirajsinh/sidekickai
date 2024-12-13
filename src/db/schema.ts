import { pgTable, varchar, timestamp, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    fid: varchar('fid', { length: 255 }).primaryKey().notNull(),
    address: varchar('address', { length: 255 }),
    name: varchar('name', { length: 255 }),
    image: varchar('image', { length: 255 }),
    signer_uuid: text('signer_uuid').notNull(),
    createdAt: timestamp('createdAt', { precision: 6 }).defaultNow(),
    expiresAt: timestamp('expiresAt', { precision: 6 }),
});

