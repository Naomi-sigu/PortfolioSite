# Overview

This is a full-stack web application built as a personal portfolio website for showcasing projects, skills, and blog content. The project uses a modern TypeScript-based stack with React frontend and Express backend, featuring a clean, responsive design with dark theme styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: wouter for client-side routing with a simple single-page application structure
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: express-session with PostgreSQL session store
- **Development**: Hot reload with tsx and Vite integration

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with automatic type inference and schema validation
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema migrations
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in separate directories
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Component Organization**: Feature-based component structure with reusable UI components

## Development Workflow
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: Strict TypeScript configuration across all packages
- **Development Server**: Concurrent frontend and backend development with proxy setup
- **Asset Management**: Static asset serving with Vite in development, Express in production

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: PostgreSQL connection via `@neondatabase/serverless` driver

## UI and Styling
- **Radix UI**: Headless UI component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web fonts (Inter, DM Sans, Fira Code, Geist Mono)

## Development Tools
- **Vite**: Frontend build tool and development server
- **Replit Integration**: Development environment integration with error overlay
- **TypeScript**: Type checking and development tooling
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema parsing
- **Drizzle Zod**: Integration between Drizzle ORM and Zod schemas

## State Management
- **TanStack React Query**: Server state management and caching
- **React Context**: Local state management for UI components