import { Config } from "drizzle-kit";
import { loadEnvConfig} from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());


export default defineConfig({
    dialect : "postgresql",
    schema: "./src/schema",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL!,
    },
}); 

