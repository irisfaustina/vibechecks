import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { marked } from 'marked';

interface Module {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  content: string;
  duration: string;
}

export default function CourseModule() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "Introduction to Your App Architecture",
      description: "Overview of the app structure and key components",
      completed: true,
      duration: "10 min",
      content: `
## App Architecture Overview

Your application follows a modern React architecture with the following key components:

### Frontend Structure
- **React Components**: Built using functional components with hooks
- **State Management**: Uses React Context API for global state
- **Routing**: Implemented with React Router v6
- **Styling**: Tailwind CSS for responsive design

### Key Directories
- \`src/components\`: Reusable UI components
- \`src/pages\`: Page components mapped to routes
- \`src/hooks\`: Custom React hooks
- \`src/context\`: Context providers for state management
- \`src/utils\`: Utility functions and helpers

### Data Flow
- Component state for local UI state
- Context API for application-wide state
- Custom hooks for reusable logic
      `
    },
    {
      id: 2,
      title: "Understanding the Tech Stack",
      description: "Deep dive into the technologies used in your app",
      completed: false,
      duration: "15 min",
      content: `
## Tech Stack Deep Dive

Your application is built with the following technologies:

### Frontend
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Adds static types to JavaScript to help catch errors
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development

### State Management
- **React Context**: For global state management without additional libraries
- **useReducer**: For more complex state logic

### Development Tools
- **Vite**: Frontend build tool that provides fast HMR
- **ESLint**: For code linting
- **Prettier**: For code formatting

### Recommended Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
      `
    },
    {
      id: 3,
      title: "Authentication & Authorization",
      description: "How user authentication works in your app",
      completed: false,
      duration: "12 min",
      content: `
## Authentication Implementation

Your app implements authentication using:

### Authentication Flow
1. User enters credentials on the login page
2. Credentials are sent to the backend API
3. Backend validates and returns a JWT token
4. Token is stored in localStorage
5. Token is included in API requests via Authorization header

### Protected Routes
- React Router is used to create protected routes
- A custom \`ProtectedRoute\` component checks for authentication
- Unauthenticated users are redirected to the login page

### User Roles
- Basic role-based permission system
- Different UI elements shown based on user role
      `
    },
    {
      id: 4,
      title: "Data Management",
      description: "How data is stored, fetched and manipulated",
      completed: false,
      duration: "18 min",
      content: `
## Data Management Patterns

Your application manages data through these patterns:

### API Integration
- **Fetch API**: Used for making HTTP requests
- **Custom hooks**: Encapsulate data fetching logic
- **Error handling**: Consistent approach to API errors

### Data Caching
- Simple in-memory caching implemented
- TTL (Time-To-Live) based invalidation

### Optimistic Updates
- UI updates immediately upon user action
- Reverts if API request fails
- Provides better user experience

### Offline Support
- Basic offline capabilities
- Queues requests when offline
      `
    },
    {
      id: 5,
      title: "Testing & Debugging",
      description: "How to test and debug your app",
      completed: false,
      duration: "14 min",
      content: `
## Testing & Debugging Guide

### Testing Approach
- **Unit Tests**: For testing individual functions and components
- **Integration Tests**: For testing component interactions
- **End-to-End Tests**: For testing complete workflows

### Testing Tools
- **Jest**: JavaScript testing framework
- **React Testing Library**: For testing React components
- **MSW (Mock Service Worker)**: For mocking API requests

### Debugging Tips
1. Use React DevTools for component inspection
2. Use Chrome DevTools for network and performance issues
3. Check the console for errors and warnings
4. Use breakpoints for step-by-step debugging

### Common Issues
- State management problems
- Prop drilling challenges
- Performance bottlenecks
      `
    },
  ]);

  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [progress, setProgress] = useState<number>(20);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const markComplete = (id: number) => {
    const updatedModules = modules.map(module => 
      module.id === id ? { ...module, completed: true } : module
    );
    setModules(updatedModules);
    
    // Calculate new progress
    const completedCount = updatedModules.filter(m => m.completed).length;
    const newProgress = (completedCount / updatedModules.length) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Course Module</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Overall Progress:</span>
          <div className="w-64">
            <Progress value={progress} className="h-2" />
          </div>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="grid gap-4">
        {modules.map((module) => (
          <Card key={module.id} className={module.completed ? "border-l-4 border-l-green-500" : ""}>
            <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleModule(module.id)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {module.completed && (
                    <div className="rounded-full bg-green-500 p-1">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <CardTitle>{module.title}</CardTitle>
                </div>
                <div className="flex items-center gap-3">
                  <HoverCard>
                    <HoverCardTrigger className="text-sm text-muted-foreground">
                      {module.duration}
                    </HoverCardTrigger>
                    <HoverCardContent side="left">
                      Estimated time to complete this module
                    </HoverCardContent>
                  </HoverCard>
                  {expandedModule === module.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            {expandedModule === module.id && (
              <CardContent>
                <ScrollArea className="h-[300px] mt-2 rounded-md border p-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: marked(module.content) }} />
                  </div>
                </ScrollArea>
                {!module.completed && (
                  <Button 
                    onClick={() => markComplete(module.id)}
                    className="mt-4 bg-gradient-to-r from-vibe-purple to-vibe-orange text-white"
                  >
                    Mark as Completed
                  </Button>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
