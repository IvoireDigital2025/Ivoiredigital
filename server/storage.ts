import { users, type User, type InsertUser, type ContactMessage, type InsertContact, type Appointment, type InsertAppointment } from "@shared/schema";

// Interface with any CRUD methods needed
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private appointments: Map<number, Appointment>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private appointmentCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.appointments = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.appointmentCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const id = this.contactCurrentId++;
    const createdAt = new Date().toISOString();
    // Create contact message with proper typing
    const message: ContactMessage = { 
      name: insertMessage.name,
      email: insertMessage.email,
      phone: insertMessage.phone || null, // Ensure phone is string or null
      service: insertMessage.service,
      message: insertMessage.message,
      id, 
      createdAt
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentCurrentId++;
    const createdAt = new Date().toISOString();
    const appointment: Appointment = {
      id,
      name: insertAppointment.name,
      email: insertAppointment.email,
      phone: insertAppointment.phone || null,
      businessType: insertAppointment.businessType,
      businessName: insertAppointment.businessName,
      location: insertAppointment.location,
      service: insertAppointment.service,
      preferredDate: insertAppointment.preferredDate || null,
      preferredTime: insertAppointment.preferredTime || null,
      timezone: insertAppointment.timezone || null,
      message: insertAppointment.message || null,
      status: "pending",
      createdAt
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      const updatedAppointment = { ...appointment, status };
      this.appointments.set(id, updatedAppointment);
      return updatedAppointment;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
