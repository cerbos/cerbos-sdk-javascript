/**
 * Driver used to load policies from a database.
 *
 * @public
 */
export enum DatabaseDriver {
  /**
   * MySQL.
   */
  MYSQL = "MYSQL",

  /**
   * PostgreSQL.
   */
  POSTGRES = "POSTGRES",

  /**
   * SQLite3.
   */
  SQLITE3 = "SQLITE3",
}
