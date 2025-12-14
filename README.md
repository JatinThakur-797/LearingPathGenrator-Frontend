# LearningPathGenerator – Frontend

A **React-based frontend application** that dynamically generates **personalized learning paths** for users, with secure authentication, protected routes, and seamless integration with a backend API.

## Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Authentication Flow](#authentication-flow)
- [API Integration](#api-integration)
- [How to Run](#how-to-run)
- [Learning Objectives](#learning-objectives)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## About

This project is the **frontend layer** of the Learning Path Generator system.  
Its primary responsibility is to:

- Provide a clean and intuitive user interface
- Handle user authentication and authorization
- Interact with backend services to generate learning paths
- Manage application state and route protection

The application is designed with **real-world frontend engineering practices**, focusing on scalability, maintainability, and security.

## Key Features

- User authentication (Login / Signup)
- Protected routes based on authentication state
- Token-based session handling
- Dynamic learning path generation UI
- Modular component structure
- API-driven data flow
- Toast-based user feedback and error handling

## Architecture Overview

The frontend follows a **component-based architecture**:

- **UI Layer** – Pages and reusable components
- **State Layer** – Global auth state management
- **Routing Layer** – Public and protected routes
- **Service Layer** – API communication with backend

This separation ensures clean responsibilities and easier future expansion.

## Technology Stack

- **React.js**
- **React Router**
- **Axios / Fetch API**
- **State Management (custom store / context)**
- **Vite**
- **HTML / CSS**
- **JWT-based Authentication (via backend)**



## Authentication Flow

1. User logs in or signs up
2. Backend returns JWT access token
3. Token is stored securely on the client
4. Auth state is updated globally
5. Protected routes validate authentication before rendering
6. Unauthorized users are redirected to login

This mirrors **industry-standard frontend authentication handling**.

## API Integration

The frontend communicates with backend services using REST APIs:

- Authentication APIs (login, signup, refresh)
- Learning path generation APIs
- User profile APIs

API base URLs are managed via environment variables to support different environments (local, staging, production).

## How to Run

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/JatinThakur-797/LearingPathGenrator-Frontend.git
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

env
Copy code
VITE_API_BASE_URL=http://localhost:8080
Start development server:

bash
Copy code
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173
Learning Objectives
This project demonstrates:

Real-world React project structuring

Secure frontend authentication patterns

Protected routing

API-driven UI development

Scalable frontend architecture

Integration with microservices-based backend

Future Enhancements
Role-based authorization

Better UI/UX with animations

Error boundary handling

Token refresh automation

Performance optimization

Deployment with CI/CD

TypeScript migration

Contact
Maintained by Jatin Thakur
GitHub: https://github.com/JatinThakur-797
