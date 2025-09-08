import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle2, Clock } from "lucide-react";
import React from "react";

const REMINDERS = [
  {
    id: 1,
    title: "New Product Launch",
    time: "Today, 3:00 PM",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Weekly Blog Post",
    time: "Tomorrow, 9:00 AM",
    status: "scheduled",
  },
  {
    id: 3,
    title: "Instagram Reel",
    time: "Yesterday, 7:30 PM",
    status: "published",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "upcoming":
      return <Badge variant="default">Upcoming</Badge>;
    case "scheduled":
      return <Badge variant="secondary">Scheduled</Badge>;
    case "published":
      return (
        <Badge className="bg-green-500 hover:bg-green-600 text-white">
          Published
        </Badge>
      );
    default:
      return null;
  }
};

const NotificationsAlerts = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold mb-4">Notifications & Alerts</h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Bell className="h-4 w-4 text-amber-500" />
            Scheduled Post Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {REMINDERS.map((reminder) => (
              <div
                key={reminder.id}
                className={`flex items-center justify-between rounded-lg border p-3 ${
                  reminder.status === "published"
                    ? "border-green-500"
                    : "border-blue-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  {reminder.status === "published" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-500" />
                  )}
                  <div>
                    <p className="font-semibold text-sm">{reminder.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {reminder.time}
                    </p>
                  </div>
                </div>
                {getStatusBadge(reminder.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default NotificationsAlerts;
