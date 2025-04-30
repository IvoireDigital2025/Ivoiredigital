import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || null, // Consistent with storage
        service: contactData.service,
        message: contactData.message,
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully" 
      });
    } catch (error: any) {
      return res.status(400).json({ 
        success: false, 
        message: error.message || "Invalid request data" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
