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

  // Appointment booking endpoint
  app.post("/api/appointments", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const appointmentData = insertAppointmentSchema.parse(req.body);
      
      // Store appointment
      const appointment = await storage.createAppointment({
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone || null,
        service: appointmentData.service,
        preferredDate: appointmentData.preferredDate,
        preferredTime: appointmentData.preferredTime,
        timezone: appointmentData.timezone,
        message: appointmentData.message || null,
      });

      console.log('New appointment booking:', {
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone,
        service: appointmentData.service,
        preferredDate: appointmentData.preferredDate,
        preferredTime: appointmentData.preferredTime,
        timezone: appointmentData.timezone
      });
      
      return res.json({ 
        success: true, 
        message: "Appointment booked successfully! We'll contact you soon to confirm your consultation.",
        appointment: appointment
      });
    } catch (error: any) {
      console.error('Appointment booking error:', error);
      return res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to book appointment" 
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

  // Admin endpoint to view appointments
  app.get("/api/admin/appointments", async (req: Request, res: Response) => {
    try {
      const appointments = await storage.getAppointments();
      return res.json(appointments);
    } catch (error: any) {
      console.error('Admin appointments error:', error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve appointments" 
      });
    }
  });

  // Admin endpoint to update appointment status
  app.patch("/api/admin/appointments/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || !['pending', 'confirmed', 'cancelled'].includes(status)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid status. Must be 'pending', 'confirmed', or 'cancelled'" 
        });
      }
      
      const updatedAppointment = await storage.updateAppointmentStatus(id, status);
      
      if (!updatedAppointment) {
        return res.status(404).json({ 
          success: false, 
          message: "Appointment not found" 
        });
      }
      
      return res.json({ 
        success: true, 
        appointment: updatedAppointment 
      });
    } catch (error: any) {
      console.error('Update appointment status error:', error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to update appointment status" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
