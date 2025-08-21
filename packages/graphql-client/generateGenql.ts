const { execSync } = require("child_process");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../apps/web/.env") });

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql";

console.log("GraphQL endpoint:", endpoint);

// let token = process.env.NEXT_PRIVATE_GRAPHQL_AUTH_TOKEN || "";

const command = `genql --endpoint ${endpoint} --output src/generated`;

console.log("Ejecutando:", command);
execSync(command, { stdio: "inherit" });
