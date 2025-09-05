"use client";

import { useSession } from "next-auth/react";
import React from "react";
import StatsSection from "./component/stats-section";
import ContentOverviewSection from "./component/content-overview-section";
import RecentContentSection from "./component/recent-content";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <div className="space-y-9">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back, {session?.user?.name}
        </h1>
        <p className="mt-2">AI-Powered Content Platform</p>
      </div>
      <StatsSection />
      <ContentOverviewSection />
      <RecentContentSection />
    </div>
  );
};

export default DashboardPage;
