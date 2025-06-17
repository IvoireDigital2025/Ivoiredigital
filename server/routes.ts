import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create reusable transporter using SMTP
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'koneyassine49@gmail.com', // Your email
      pass: process.env.EMAIL_APP_PASSWORD || '' // App-specific password
    }
  });

  // Contact form submission endpoint
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

      // Send email notification
      try {
        const mailOptions = {
          from: 'koneyassine49@gmail.com',
          to: 'Koneyassine49@gmail.com',
          subject: `New Contact Form - ${contactData.service}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #14532d;">New Contact Form Submission</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${contactData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${contactData.phone || ''}">${contactData.phone || 'Not provided'}</a></p>
                <p><strong>Service Interested In:</strong> ${contactData.service}</p>
              </div>
              <div style="margin: 20px 0;">
                <strong>Message:</strong>
                <div style="background: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px;">
                  ${contactData.message}
                </div>
              </div>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This message was sent from the Ivoire Digital website contact form.
              </p>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue without failing the request
      }
      
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

  const httpServer = createServer(app);

  return httpServer;
}
