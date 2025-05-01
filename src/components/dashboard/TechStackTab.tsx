
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechStackChart } from "./charts/TechStackChart";

const mockTechStackData = [
  { name: "React", value: 80 },
  { name: "TypeScript", value: 65 },
  { name: "Node.js", value: 50 },
  { name: "Express", value: 40 },
  { name: "MongoDB", value: 30 }
];

export function TechStackTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack Analysis</CardTitle>
          <CardDescription>Breakdown of technologies used in the project</CardDescription>
        </CardHeader>
        <CardContent>
          <TechStackChart data={mockTechStackData} />
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
    </div>
  );
}
