import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js'; 
import { eq } from 'drizzle-orm';
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '../../../../.env') })

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql, schema });
export type DBClient = typeof db

export { schema };
export const { 
  users,
  categories,
  boards,
  transactions,
} = schema;

export { eq };
