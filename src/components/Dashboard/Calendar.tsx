"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { format } from "date-fns";

interface Task {
  title: string;
  time: string;
  color: string;
}

export function Calendar() {
  const today: Date = new Date();
  const tasks: Task[] = [
    {
      title: "Task A",
      time: "10:00 - 11:00",
      color: "bg-pink-100 border-pink-600",
    },
    {
      title: "Task B",
      time: "13:00 - 14:30",
      color: "bg-pink-100 border-pink-600",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{format(today, "dd MMMM yyyy")}</h2>
            <p className="text-sm text-muted-foreground">{format(today, "EEEE")}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={index} className={`rounded-lg border-l-4 p-4 ${task.color}`}>
              <h3 className="font-medium">{task.title}</h3>
              <p className="text-sm text-muted-foreground">{task.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
