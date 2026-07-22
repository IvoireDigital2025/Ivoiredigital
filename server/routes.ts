import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAppointmentSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

const NOTIFY_TO = "contact@ivoiredigital.com";

const mailer = process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  : null;

if (mailer) {
  mailer.verify((err) => {
    if (err) {
      console.error("[mail] Gmail SMTP verification failed:", err.message);
    } else {
      console.log(`[mail] Gmail SMTP ready (sending from ${process.env.GMAIL_USER} → ${NOTIFY_TO})`);
    }
  });
} else {
  console.warn("[mail] GMAIL_USER or GMAIL_APP_PASSWORD missing — emails will not be sent.");
}

async function sendNotification(subject: string, html: string, replyTo?: string) {
  if (!mailer) return;
  try {
    await mailer.sendMail({
      from: `"Ivoire Digital Website" <${process.env.GMAIL_USER}>`,
      to: NOTIFY_TO,
      replyTo: replyTo || undefined,
      subject,
      html,
    });
    console.log(`[mail] Sent: ${subject}`);
  } catch (err: any) {
    console.error("[mail] Send failed:", err.message);
  }
}

function escapeHtml(value: string | null | undefined): string {
  if (!value) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildContactEmail(d: {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #14532d; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
        <p style="margin: 4px 0 0; opacity: 0.85; font-size: 14px;">From ivoiredigital.com</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td><td>${escapeHtml(d.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td>${escapeHtml(d.phone) || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Service:</strong></td><td>${escapeHtml(d.service)}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-left: 4px solid #b07d2a; border-radius: 4px;">
          <strong style="color: #6b7280; display: block; margin-bottom: 6px;">Message:</strong>
          <div style="white-space: pre-wrap;">${escapeHtml(d.message)}</div>
        </div>
      </div>
    </div>
  `;
}

function buildAppointmentEmail(d: {
  name: string;
  email: string;
  phone?: string | null;
  businessType: string;
  businessName: string;
  location: string;
  service: string;
  preferredDate?: string | null;
  preferredTime?: string | null;
  timezone?: string | null;
  message?: string | null;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #14532d; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">📅 New Consultation Booking</h2>
        <p style="margin: 4px 0 0; opacity: 0.85; font-size: 14px;">From ivoiredigital.com</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;"><strong>Name:</strong></td><td>${escapeHtml(d.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td>${escapeHtml(d.phone) || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Business Name:</strong></td><td>${escapeHtml(d.businessName)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Business Type:</strong></td><td>${escapeHtml(d.businessType)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Location:</strong></td><td>${escapeHtml(d.location)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Service:</strong></td><td>${escapeHtml(d.service)}</td></tr>
          ${
            d.preferredDate
              ? `<tr><td style="padding: 8px 0; color: #6b7280;"><strong>Preferred Date:</strong></td><td>${escapeHtml(d.preferredDate)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Preferred Time:</strong></td><td>${escapeHtml(d.preferredTime || "")} ${escapeHtml(d.timezone || "")}</td></tr>`
              : ""
          }
        </table>
        ${
          d.message
            ? `<div style="margin-top: 16px; padding: 16px; background: white; border-left: 4px solid #b07d2a; border-radius: 4px;">
                <strong style="color: #6b7280; display: block; margin-bottom: 6px;">Additional Info:</strong>
                <div style="white-space: pre-wrap;">${escapeHtml(d.message)}</div>
              </div>`
            : ""
        }
        <p style="margin-top: 20px; padding: 12px; background: #fef3c7; border-radius: 6px; color: #92400e; font-size: 14px;">
          ⏰ Please contact them within 24 hours to confirm the appointment.
        </p>
      </div>
    </div>
  `;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);

      const message = await storage.createContactMessage({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || null,
        service: contactData.service,
        message: contactData.message,
      });

      console.log("New contact form submission:", {
        name: contactData.name,
        email: contactData.email,
        service: contactData.service,
      });

      // Fire-and-forget email notification
      sendNotification(
        `New Contact: ${contactData.name} — ${contactData.service}`,
        buildContactEmail(contactData),
        contactData.email
      );

      return res.status(201).json({
        success: true,
        message: "Contact message received successfully",
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid request data",
      });
    }
  });

  // Appointment booking endpoint
  app.post("/api/appointments", async (req: Request, res: Response) => {
    try {
      const appointmentData = insertAppointmentSchema
        .extend({
          name: z.string().min(2, "Name is required"),
          email: z.string().email("A valid email is required"),
          businessType: z.string().min(2, "Type of business is required"),
          businessName: z.string().min(2, "Business name is required"),
          location: z.string().min(2, "Location is required"),
          service: z.string().min(1, "Service is required"),
        })
        .parse(req.body);

      const appointment = await storage.createAppointment({
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone || null,
        businessType: appointmentData.businessType,
        businessName: appointmentData.businessName,
        location: appointmentData.location,
        service: appointmentData.service,
        preferredDate: appointmentData.preferredDate || null,
        preferredTime: appointmentData.preferredTime || null,
        timezone: appointmentData.timezone || null,
        message: appointmentData.message || null,
      });

      console.log("New appointment booking:", {
        name: appointmentData.name,
        email: appointmentData.email,
        service: appointmentData.service,
        preferredDate: appointmentData.preferredDate,
        preferredTime: appointmentData.preferredTime,
      });

      // Fire-and-forget email notification
      sendNotification(
        appointmentData.preferredDate
          ? `New Booking: ${appointmentData.name} — ${appointmentData.preferredDate} ${appointmentData.preferredTime}`
          : `New Lead: ${appointmentData.name} — ${appointmentData.businessName} (${appointmentData.location})`,
        buildAppointmentEmail(appointmentData),
        appointmentData.email
      );

      return res.json({
        success: true,
        message: "Appointment booked successfully! We'll contact you soon to confirm your consultation.",
        appointment,
      });
    } catch (error: any) {
      console.error("Appointment booking error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to book appointment",
      });
    }
  });

  // Admin endpoint to view contact messages
  app.get("/api/admin/contacts", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error: any) {
      console.error("Admin contacts error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve contact messages",
      });
    }
  });

  // Admin endpoint to view appointments
  app.get("/api/admin/appointments", async (_req: Request, res: Response) => {
    try {
      const appointments = await storage.getAppointments();
      return res.json(appointments);
    } catch (error: any) {
      console.error("Admin appointments error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve appointments",
      });
    }
  });

  // Admin endpoint to update appointment status
  app.patch("/api/admin/appointments/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;

      if (!status || !["pending", "confirmed", "cancelled"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status. Must be 'pending', 'confirmed', or 'cancelled'",
        });
      }

      const updatedAppointment = await storage.updateAppointmentStatus(id, status);

      if (!updatedAppointment) {
        return res.status(404).json({
          success: false,
          message: "Appointment not found",
        });
      }

      return res.json({
        success: true,
        appointment: updatedAppointment,
      });
    } catch (error: any) {
      console.error("Update appointment status error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to update appointment status",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
