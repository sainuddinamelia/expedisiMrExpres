import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from mrexpresgmbar directory
  app.use('/mrexpresgmbar', express.static(path.join(process.cwd(), 'mrexpresgmbar')));
  
  // Simple API endpoint for testing
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
