// Load ENV
import { SERVER_PORT, NODE_ENV } from "./config/env";

// Express App
import app from "./app";
// GraphQL Server
import server from "./graphql";


// Add GraphQL into routes
server.applyMiddleware({ app, path: '/graphql' });


// Start Server on specified env port
app.listen({ port: SERVER_PORT }, () =>
  console.log(`Server running on PORT ${SERVER_PORT} in ${NODE_ENV} mode :)`)
);
