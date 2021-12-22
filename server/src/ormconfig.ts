import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
export const sqliteConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  entities: ['dist/**/*.entity{.js,.ts}'],
};
