import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

let _pool: Pool | undefined;
let _db: NodePgDatabase | undefined;

function getPool(): Pool {
  if (_pool) return _pool;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  _pool =
    globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({ connectionString: databaseUrl });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = _pool;
  }

  return _pool;
}

function getDb(): NodePgDatabase {
  if (!_db) {
    _db = drizzle(getPool());
  }
  return _db;
}

function lazy<T extends object>(getter: () => T): T {
  return new Proxy({} as T, {
    get(_target, prop) {
      const real = getter();
      const value = Reflect.get(real, prop, real);
      return typeof value === "function" ? value.bind(real) : value;
    },
  });
}

export const pool = lazy(getPool);
export const db = lazy(getDb);