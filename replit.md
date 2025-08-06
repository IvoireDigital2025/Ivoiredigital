# Replit.md - Ivoire Digital Business Website

## Overview

This is a modern full-stack web application for Ivoire Digital, a Dallas-based AI and digital marketing agency. The application features a React frontend with a Node.js/Express backend, using PostgreSQL for data storage and modern UI components for an engaging user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Storage**: In-memory storage with fallback to database
- **API Design**: RESTful endpoints with proper error handling
- **Development**: tsx for TypeScript execution in development

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contact Messages Table**: Stores contact form submissions with name, email, phone, service, and message fields
- **Migration System**: Drizzle migrations stored in `/migrations` directory

## Key Components

### Frontend Components
- **Landing Page**: Multi-section homepage with hero, services, portfolio, testimonials, and contact sections
- **Contact Form**: Validated form with real-time submission and toast notifications
- **Service Showcase**: Interactive cards displaying AI and digital marketing services
- **Portfolio Display**: Project showcases with case studies and results
- **Testimonials**: Customer reviews with ratings and company information
- **Blog/Resources**: Content sections for guides, case studies, and blog posts
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Services
- **Contact API**: Handles form submissions with validation and storage
- **Storage Layer**: Abstracted storage interface with in-memory and database implementations
- **Middleware**: Request logging, JSON parsing, and error handling
- **Static Serving**: Development and production asset serving

### Shared Schema
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime validation
- **Database Models**: Drizzle schema definitions with TypeScript inference

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact forms use React Hook Form with Zod validation
3. **API Communication**: TanStack Query manages API calls to Express backend
4. **Data Validation**: Backend validates requests using shared Zod schemas
5. **Database Storage**: Drizzle ORM handles database operations with PostgreSQL
6. **Response Handling**: Frontend displays success/error states with toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Validation**: Zod for schema validation
- **HTTP Client**: Native fetch with TanStack Query wrapper

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for request validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict configuration with path mapping
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm with lockfile

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Database**: Drizzle push for schema updates during development

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles Node.js server to `dist/index.js`
- **Database**: Drizzle migrations for production schema management

### Replit Configuration
- **Modules**: Node.js 20, web server, PostgreSQL 16
- **Ports**: Local port 5000 mapped to external port 80
- **Deployment**: Autoscale deployment target with build and run commands
- **Environment**: DATABASE_URL required for PostgreSQL connection

## Changelog

Changelog:
- June 17, 2025. Initial setup
- June 17, 2025. Updated Coffee Pro (Astoria Blvd, New York) from testimonial to business partnership mention in About Us and Business Target sections
- June 17, 2025. Comprehensive mobile optimization completed:
  * Enhanced responsive design across all components
  * Improved mobile navigation with better touch targets
  * Added mobile-specific CSS optimizations
  * Optimized forms for mobile input (16px font size to prevent zoom)
  * Enhanced SEO meta tags and viewport configuration
  * Improved accessibility with better focus states
  * Optimized image sizing and loading for mobile devices
  * Added performance improvements for touch interactions
- August 6, 2025. Major lead generation and design enhancement:
  * Added 4 lead generation features: Website Audit Tool, ROI Calculator, Live Chat Widget, Enhanced Consultation Scheduler
  * Applied Coffee Pro transformation design principles with authentic storytelling
  * Enhanced hero section with Dallas-based SaaS branding and real metrics
  * Replaced generic testimonials with focused client showcase section
  * Streamlined case studies to 2 key clients: Toyota Dealership and Coffee Pro
  * Implemented professional presentation following successful client transformation examples

## User Preferences

Preferred communication style: Simple, everyday language.