"use client";

import React from "react";
import StatsSection from "./component/stats-section";
import RecentContentSection from "./component/recent-content";
import PerformanceAnalytics from "./component/performance-analytics";
import NotificationsAlerts from "./component/notifications-alerts";

const DashboardPage = () => {
  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <StatsSection />
        <NotificationsAlerts />
      </div>
      <RecentContentSection />
      <PerformanceAnalytics />
    </div>
  );
};

export default DashboardPage;
