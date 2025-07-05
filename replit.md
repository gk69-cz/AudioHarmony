# Zero dB - Premium Audio Engineering Platform

## Overview

Zero dB is a premium audio equipment manufacturer's web platform showcasing high-end speakers and audio technology. The application is built as a full-stack web application featuring a React frontend with modern UI components, an Express.js backend, and PostgreSQL database integration through Drizzle ORM. The platform emphasizes luxury design, technical excellence, and immersive user experience with audio demonstrations and interactive elements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive effects
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Design System
- **Theme**: Light/Dark mode support with custom CSS variables
- **Typography**: Inter font family for modern, clean aesthetics
- **Color Palette**: Premium gold accent (#DAA520) with neutral grays and blacks
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### User Interface Components
- **Navigation**: Fixed header with smooth animations and theme switching
- **Hero Section**: Full-screen video backgrounds with parallax effects
- **Product Gallery**: Interactive product showcases with hover effects
- **Audio Demos**: Integrated audio player for product demonstrations
- **Contact Forms**: Validated forms with real-time feedback
- **Loading Screens**: Smooth loading transitions with brand animations

### Interactive Features
- **Custom Cursor**: Magnetic cursor effects for enhanced user interaction
- **Frequency Visualizer**: Real-time audio frequency visualization
- **3D Effects**: Hover animations with magnetic button interactions
- **Scroll Animations**: Progressive reveal animations on scroll
- **Theme Switching**: Seamless light/dark mode transitions

### Content Management
- **Product Catalog**: Structured product information with specifications
- **Media Gallery**: High-resolution image galleries with lightbox functionality
- **Blog System**: Article management with categorization
- **Global Presence**: Interactive company location and statistics display

## Data Flow

### Client-Side Data Flow
1. **Route Navigation**: Wouter handles client-side routing without page refreshes
2. **State Management**: TanStack Query manages server state with caching and background updates
3. **Form Handling**: React Hook Form processes user input with Zod schema validation
4. **Theme Management**: Custom theme provider synchronizes light/dark mode across components
5. **Audio Management**: Custom hooks handle audio playback state and progress tracking

### Server-Side Data Flow
1. **Request Processing**: Express middleware handles incoming HTTP requests
2. **Database Operations**: Drizzle ORM translates queries to PostgreSQL
3. **Session Management**: PostgreSQL sessions store user authentication state
4. **Response Formatting**: Standardized JSON responses with error handling
5. **Static Assets**: Vite serves optimized static files in production

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Extensible Design**: Schema structure supports future expansion for products, orders, and content management

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI transitions
- **react-hook-form**: Form state management and validation
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **wouter**: Lightweight React router
- **zod**: Runtime type validation and schema definition

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **next-themes**: Theme management system
- **class-variance-authority**: Type-safe variant generation
- **lucide-react**: Modern icon library

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration and introspection tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application with optimizations
2. **Backend Build**: ESBuild bundles server code for Node.js runtime
3. **Asset Optimization**: Automatic image optimization and code splitting
4. **Type Checking**: TypeScript compilation ensures type safety

### Production Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Static Serving**: Express serves Vite-built static assets
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Session Storage**: PostgreSQL-backed session management

### Development Workflow
- **Hot Reload**: Vite HMR for instant frontend updates
- **API Development**: Express server with automatic TypeScript compilation
- **Database Development**: Push schema changes directly to development database
- **Code Quality**: TypeScript strict mode ensures code reliability

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```