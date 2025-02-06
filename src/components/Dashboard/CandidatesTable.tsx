import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"

const candidates = [
  {
    name: "Maria Henderson",
    position: "Project Manager",
    company: "Company A",
    status: "Proposed",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Maria Henderson",
    position: "Project Manager",
    company: "Company A",
    status: "1st Interview",
    statusColor: "bg-purple-100 text-purple-700",
  },
  {
    name: "Maria Henderson",
    position: "Project Manager",
    company: "Company A",
    status: "2nd Interview",
    statusColor: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Maria Henderson",
    position: "Project Manager",
    company: "Company A",
    status: "Placed",
    statusColor: "bg-green-100 text-green-700",
  },
]

export function CandidatesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Recently Proposed Candidates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidates.map((candidate, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">{candidate.name}</p>
                <p className="text-sm text-muted-foreground">
                  {candidate.position} at {candidate.company}
                </p>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${candidate.statusColor}`}>
                {candidate.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

