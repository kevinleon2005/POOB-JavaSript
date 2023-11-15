import { createPool } from "mysql2";

export const connection = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "platziDB",
  port: 3306
});