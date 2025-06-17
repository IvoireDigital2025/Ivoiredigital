import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAppointmentSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint - simple storage without email
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || null,
        service: contactData.service,
        message: contactData.message,
      });

      console.log('New contact form submission:', {
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        service: contactData.service,
        message: contactData.message
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully" 
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      return res.status(400).json({ 
        success: false, 
        message: error.message || "Invalid request data" 
      });
    }
  });

  // Admin endpoint to view contact messages
  app.get("/api/admin/contacts", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error: any) {
      console.error('Admin contacts error:', error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
