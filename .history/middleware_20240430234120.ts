import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// please esit this to allow other routes to be public as needed.
// see https://clerk.com/docs/references/nextjs/auth-middleware for more infor