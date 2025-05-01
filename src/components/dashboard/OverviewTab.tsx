
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function OverviewTab() {
  return (
    <div className="space-y-4">
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
    </div>
  );
}
