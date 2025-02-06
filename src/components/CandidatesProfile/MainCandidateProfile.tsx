import { Button } from "@components/ui/Button"
import { Card } from "@components/ui/Card"
import { Badge } from "@components/ui/Badge"
import { Tabs, TabsList, TabsTrigger } from "@components/ui/Tabs"
import { X } from "lucide-react"

export default function MainCandidateProfile() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Maria Henderson</h1>
        <Button variant="outline" className="text-pink-600 border-pink-600 hover:bg-pink-50">
          Set Meeting
        </Button>
      </div>

      <Tabs defaultValue="general" className="mb-4">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="cv"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            CV & Profile
          </TabsTrigger>
          <TabsTrigger
            value="search"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            Search Vacancies
          </TabsTrigger>
          <TabsTrigger
            value="matches"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            Matches
          </TabsTrigger>
          <TabsTrigger
            value="mails"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            Mails
          </TabsTrigger>
          <TabsTrigger
            value="files"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 px-4 py-2"
          >
            Files
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="bg-pink-50 text-pink-600 p-4 rounded-md mb-6 flex justify-between items-center">
        <span>This candidate is new! Send them a welcoming email.</span>
        <Button variant="ghost" size="icon" className="hover:bg-pink-100">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <Card className="p-6 mb-6">
            <h2 className="font-medium mb-4">Candidate Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">First Name</div>
                <div>Maria</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Last Name</div>
                <div>Henderson</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Status</div>
                <div>Available</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Gender</div>
                <div>Female</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Date of birth</div>
                <div>29-06-1995</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Job Preference</div>
                <div>Project Manager</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Phone number</div>
                <div>0123 456 789</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Email</div>
                <div>mhenderson@mail.com</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Location</div>
                <div>Amsterdam</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Owner</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200" />
                  John Doe
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h2 className="font-medium mb-4">Location</h2>
            <div className="space-y-4">
              <div>
                <div className="text-gray-500 mb-1">Address</div>
                <div>Amstel 1</div>
                <div>1011 PN Amsterdam</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-medium mb-4">CV</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="mb-2">Full CV</div>
                <Button variant="link" className="text-pink-600 p-0 h-auto">
                  CV_Maria_123.pdf
                </Button>
              </div>
              <div className="flex justify-between">
                <div className="mb-2">Sales CV</div>
                <Button variant="link" className="text-pink-600 p-0 h-auto">
                  CV_Maria_123.pdf
                </Button>
              </div>
              <Button variant="outline" className="w-full text-pink-600 border-pink-600 mt-4">
                Automatically Generate Resume
              </Button>
            </div>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="p-6 mb-6">
            <h2 className="font-medium mb-4">Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Sector</div>
                <div>Manufacturing</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Sub Sector</div>
                <div>Installation Otomotive</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Work Level</div>
                <div>HBO</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Notice Period</div>
                <div>Not Applicable</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Available from</div>
                <div>01-01-2025</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Minimum Hour</div>
                <div>32</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Maximum Hour</div>
                <div>40</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-medium mb-4">Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">General Skills</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 1
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 2
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 3
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Software Skills</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 1
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 2
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 3
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Technical Skills</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 1
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 2
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 3
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Developer Skills</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 1
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 2
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600 bg-pink-200">
                    Skill 3
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-4">
          <Card className="p-6 mb-6">
            <h2 className="font-medium mb-4">Recent Activity</h2>
            <div className="text-sm">
              <div className="font-medium">Today</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-gray-200" />
                <div>
                  <span className="font-medium">John Doe</span> created the company
                  <div className="text-gray-500">12:48</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-medium">Salary Details</h2>
              <Button variant="ghost" size="sm" className="text-pink-600">
                Edit
              </Button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Minimum Monthly Salary</div>
                <div>-</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Maximum Monthly Salary</div>
                <div>-</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Minimum Hourly Salary</div>
                <div>-</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-500">Maximum Hourly Salary</div>
                <div>-</div>
              </div>
            </div>
          </Card>

          
        </div>
        <div className="col-span-12">
        <Card className="p-6">
            <div className="flex justify-between items-center mb-4 border-b-[1px] border-solid border-[#D8DCE8]">
              <h2 className="font-medium">Internal Notes</h2>
              <Button variant="ghost" size="sm" className="text-pink-600">
                Edit
              </Button>
            </div>
            <div className="space-y-4 text-sm">
              <p>
                Senior Project Manager with 10+ years of experience in IT and infrastructure projects. Strong in Agile
                and stakeholder management. He's managed large budgets (€5M+) and teams (up to 25 people). Looking for
                roles in Amsterdam or remote.
              </p>
              <p className="font-medium">Key Points:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Immediate availability (great for urgent roles).</li>
                <li>Prefers permanent positions but open to contracts of 12+ months.</li>
                <li>Salary expectation €85-95K per year—flexible for the right fit.</li>
                <li>Very strong in CRM implementations—highlight this for clients in tech or finance.</li>
                <li>Might need some coaching on interview skills (he tends to undersell himself).</li>
              </ul>
              <p className="font-medium">Next Steps:</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}