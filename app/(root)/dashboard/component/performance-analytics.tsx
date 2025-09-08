import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Star, TrendingUp } from "lucide-react";
import React from "react";
import {
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const engagementData = [
  { platform: "Instagram", engagement: 1200 },
  { platform: "Facebook", engagement: 800 },
  { platform: "Twitter", engagement: 450 },
  { platform: "TikTok", engagement: 1600 },
];

const COLORS = ["#2563eb", "#facc15", "#22c55e", "#ec4899"];

const trendData = [
  { week: "Week 1", reach: 400, engagement: 240 },
  { week: "Week 2", reach: 500, engagement: 300 },
  { week: "Week 3", reach: 800, engagement: 450 },
  { week: "Week 4", reach: 900, engagement: 600 },
];

const topPosts = [
  { title: "Summer Campaign", reach: "12.3k", engagement: "2.1k" },
  { title: "New Product Launch", reach: "9.8k", engagement: "1.5k" },
  { title: "Behind the Scenes", reach: "7.4k", engagement: "1.2k" },
];

const PerformanceAnalytics = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Performance & Analytics</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Engagement per platform */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-1">
              <BarChart3 className="h-4 w-4 text-purple-500" /> Engagement per
              Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    dataKey="engagement"
                    nameKey="platform"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {engagementData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top-performing posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Top-Performing Posts
            </CardTitle>
            <Star className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent className="space-y-3">
            {topPosts.map((post, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-semibold text-sm">{post.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Reach: {post.reach} · Engagement: {post.engagement}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Trend lines */}
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Growth Trend</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="reach"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="#f43f5e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default PerformanceAnalytics;
