import * as dotenv from "dotenv";
import path from "path";

// Load ENV file based on runtime mode
const env_file = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
const config = dotenv.config({path: env_file});

// Handle errors
if (config.error) throw config.error;

// Extract env variable
const env = process.env;

// Expose env with default values
export const {
    NODE_ENV = 'development',
    SERVER_PORT = 4000,
} = env;


