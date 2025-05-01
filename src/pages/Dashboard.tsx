
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockTechStackData = [
  { name: "React", value: 80 },
  { name: "TypeScript", value: 65 },
  { name: "Node.js", value: 50 },
  { name: "Express", value: 40 },
  { name: "MongoDB", value: 30 }
];

const mockVulnerabilityData = [
  { name: "Security Vulnerabilities", low: 3, medium: 8, high: 2 },
  { name: "Code Quality Issues", low: 12, medium: 6, high: 1 },
  { name: "Performance Issues", low: 8, medium: 4, high: 0 }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Project Analysis Dashboard</h1>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Repository Size</CardTitle>
                <CardDescription>Total size of the codebase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2 MB</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Files Count</CardTitle>
                <CardDescription>Total number of files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Dependencies</CardTitle>
                <CardDescription>Number of dependencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Project Structure Analysis</CardTitle>
              <CardDescription>Key components and architecture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Frontend Components</h4>
                  <p className="text-sm text-muted-foreground">React components with Tailwind styling, well-structured but missing proper TypeScript types in some places.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Backend Structure</h4>
                  <p className="text-sm text-muted-foreground">Express server with MongoDB connection, lacks proper error handling and input validation.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">State Management</h4>
                  <p className="text-sm text-muted-foreground">Mixed approach using React Context and prop drilling, could benefit from more consistent patterns.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech-stack" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack Analysis</CardTitle>
              <CardDescription>Breakdown of technologies used in the project</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="aspect-auto h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockTechStackData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
                <ChartLegend>
                  <ChartLegendContent />
                </ChartLegend>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Technology Summary</CardTitle>
              <CardDescription>Analysis of the project's tech stack</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="font-medium">Frontend Stack</div>
                  <div className="text-sm text-muted-foreground">React 18.0, TypeScript 4.9, Tailwind CSS, React Router</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Backend Stack</div>
                  <div className="text-sm text-muted-foreground">Node.js 16.14, Express 4.18, MongoDB 5.0</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Testing & Tools</div>
                  <div className="text-sm text-muted-foreground">Jest, Cypress, ESLint, Prettier</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Build & Deployment</div>
                  <div className="text-sm text-muted-foreground">Webpack 5.0, Babel 7.0, Netlify / Vercel</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Vulnerabilities</CardTitle>
              <CardDescription>Analysis of potential security issues</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                low: { color: "#9b87f5" },
                medium: { color: "#7E69AB" },
                high: { color: "#FF5252" }
              }} className="aspect-auto h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockVulnerabilityData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="low" stackId="a" fill="#9b87f5" name="Low" />
                    <Bar dataKey="medium" stackId="a" fill="#7E69AB" name="Medium" />
                    <Bar dataKey="high" stackId="a" fill="#FF5252" name="High" />
                  </BarChart>
                </ResponsiveContainer>
                <ChartLegend>
                  <ChartLegendContent />
                </ChartLegend>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security Recommendations</CardTitle>
              <CardDescription>Action items to improve security</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 text-red-800 rounded px-1.5 py-0.5 text-xs font-medium">High</span>
                  <span>Update dependency X to version Y to patch known vulnerability CVE-2023-12345</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-100 text-amber-800 rounded px-1.5 py-0.5 text-xs font-medium">Medium</span>
                  <span>Implement proper input validation on user authentication endpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-100 text-amber-800 rounded px-1.5 py-0.5 text-xs font-medium">Medium</span>
                  <span>Add rate limiting to API endpoints to prevent abuse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 rounded px-1.5 py-0.5 text-xs font-medium">Low</span>
                  <span>Use environment variables for configuration instead of hard-coded values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 rounded px-1.5 py-0.5 text-xs font-medium">Low</span>
                  <span>Implement Content Security Policy headers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
