
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";

interface TechStackChartProps {
  data: { name: string; value: number }[];
}

export function TechStackChart({ data }: TechStackChartProps) {
  return (
    <ChartContainer config={{}} className="aspect-auto h-72">
      <ResponsiveContainer>
        <BarChart data={data}>
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
  );
}
