import { Calendar } from "./Calendar"
import { Charts } from "./Charts"
import { Header } from "./Header"
import { ResumeParser } from "./Resume-parser"
import { Sidebar } from "./Sidebar"
import { CandidatesTable } from "./CandidatesTable"
import { FollowUpTasks } from "./FollowUpTasks"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Sidebar /> */}
     
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-2 grid gap-6 lg:col-span-2">
              <Charts />
              <div className="grid gap-6 md:grid-cols-2">
                <ResumeParser />
                <CandidatesTable />
              </div>
            </div>
            <div className="space-y-6">
              <Calendar />
              <FollowUpTasks />
            </div>
          </div>
        </main>
      </div>
   
  )
}

