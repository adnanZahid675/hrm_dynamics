import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { MoreVertical } from "lucide-react"
import { Button } from "../ui/Button"

const tasks = [
  {
    id: 1,
    title: "Task 1. Descriptive task can be long and multiple line",
    date: "31 Jan 2025",
  },
  { id: 2, title: "Task 2", date: "1 Feb 2025" },
  { id: 3, title: "Task 3", date: "1 Feb 2025" },
  { id: 4, title: "Task 4", date: "1 Feb 2025" },
  { id: 5, title: "Task 5", date: "1 Feb 2025" },
  { id: 6, title: "Task 6", date: "1 Feb 2025" },
  { id: 7, title: "Task 7", date: "1 Feb 2025" },
  { id: 8, title: "Task 8", date: "1 Feb 2025" },
]

export function FollowUpTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Follow Up</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-4">
              <input type="checkbox" className="h-4 w-4 rounded-full border-gray-300" />
              <div className="flex-1">
                <p className="text-sm font-medium">{task.title}</p>
                <p className="text-xs text-muted-foreground">{task.date}</p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

