
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function JobPosting() {
  const [projectTitle, setProjectTitle] = useState('VibeTodo App');
  const [projectDescription, setProjectDescription] = useState('A simple todo application built with React and TypeScript.');
  const [generatedPosting, setGeneratedPosting] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate API call to generate job posting
    setTimeout(() => {
      const mockGeneratedPosting = `
# React TypeScript Developer Needed for Todo Application

## Project Overview
We're looking for a React developer to help complete our VibeTodo App. This is a simple todo application built with React and TypeScript that needs some polishing and additional features.

## Tech Stack
- React 18
- TypeScript 4.9
- Tailwind CSS
- React Router
- Local Storage for data persistence

## Required Skills
- Strong experience with React and TypeScript
- Proficiency with modern JavaScript
- Experience with Tailwind CSS
- Familiarity with form handling and validation
- Ability to write clean, maintainable code

## Project Scope
- Complete the existing todo CRUD functionality
- Add filtering and sorting capabilities
- Implement dark/light mode toggle
- Add user authentication (mock)
- Improve responsive design
- Write basic tests for components

## Timeline
Estimated 2-3 weeks of work, part-time (10-15 hours per week)

## Budget
$30-50/hour depending on experience

## How to Apply
Please send your resume, portfolio, and a brief explanation of your experience with similar projects.
      `;
      
      setGeneratedPosting(mockGeneratedPosting);
      setIsGenerating(false);
      
      toast({
        title: "Job posting generated!",
        description: "Your job posting has been generated based on the project analysis.",
      });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPosting);
    toast({
      title: "Copied to clipboard!",
      description: "Job posting copied to clipboard."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Job Posting Generator</h1>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generate">Generate Job Posting</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Provide information about your project to generate a relevant job posting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-title">Project Title</Label>
                <Input 
                  id="project-title"
                  placeholder="Enter project title" 
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-description">Project Description</Label>
                <Textarea 
                  id="project-description"
                  placeholder="Describe your project and what you need help with"
                  rows={4}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleGenerate} 
                className="bg-gradient-to-r from-vibe-purple to-vibe-orange text-white"
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Job Posting"}
              </Button>
            </CardContent>
          </Card>

          {generatedPosting && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Job Posting</CardTitle>
                <CardDescription>
                  Ready to post on freelancer platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <pre className="text-sm bg-muted p-4 rounded-md whitespace-pre-wrap">{generatedPosting}</pre>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCopy}>
                  Copy to Clipboard
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Templates</CardTitle>
              <CardDescription>
                Choose a template as a starting point for your job posting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="cursor-pointer hover:border-vibe-purple transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Frontend Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Template for hiring frontend developers specializing in React, Vue, or Angular.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:border-vibe-purple transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Backend Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Template for hiring backend developers for Node.js, Python, or Ruby projects.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:border-vibe-purple transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Full Stack Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive template for full stack developers who can work across the entire application.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:border-vibe-purple transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">UI/UX Designer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Template for designers who can improve the user interface and experience of your application.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
