
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VulnerabilityChart } from "./charts/VulnerabilityChart";

const mockVulnerabilityData = [
  { name: "Security Vulnerabilities", low: 3, medium: 8, high: 2 },
  { name: "Code Quality Issues", low: 12, medium: 6, high: 1 },
  { name: "Performance Issues", low: 8, medium: 4, high: 0 }
];

export function SecurityTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Security Vulnerabilities</CardTitle>
          <CardDescription>Analysis of potential security issues</CardDescription>
        </CardHeader>
        <CardContent>
          <VulnerabilityChart data={mockVulnerabilityData} />
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
    </div>
  );
}
