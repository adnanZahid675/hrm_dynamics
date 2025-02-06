"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@components/ui/Button"
import { Input } from "@components/ui/Input"
import { Textarea } from "@components/ui/Textarea"
import { Label } from "@components/ui/Label"
import { Checkbox } from "@components/ui/Checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/Select"
import { Link } from "react-router-dom"
// import Link from "next/link"

export default function CVProfile() {
  return (
    <div className=" mx-auto py-6">
      <div className="flex items-center gap-2 mb-8">
        {/* <Button variant="ghost" size="icon" asChild>
          <Link to="/candidates/add">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button> */}
        {/* <h1 className="text-xl font-semibold">CV & Profile</h1> */}
      </div>

      <form className="space-y-8">
        {/* Profile Section */}
        <div className="space-y-4">
          <h2 className="font-medium text-gray-900">Profile</h2>
          <div className="space-y-2">
            <Label>Candidate Profile</Label>
            <Textarea placeholder="describe candidate profile.." className="min-h-[120px]" />
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-4">
          <h2 className="font-medium text-gray-900">Work Experience</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company</Label>
                <Input placeholder="enter company name.." />
              </div>
              <div className="space-y-2">
                <Label>Job Title</Label>
                <Input placeholder="enter job title.." />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea placeholder="enter description.." className="min-h-[100px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Starting Date</Label>
                <Input type="month" placeholder="MM/YYYY" />
              </div>
              <div className="space-y-2">
                <Label>Completion Date</Label>
                <Input type="month" placeholder="MM/YYYY" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="stillWorking" />
              <label
                htmlFor="stillWorking"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Still working here
              </label>
            </div>
          </div>
          <Button type="button" variant="ghost" className="text-[#E31B54] hover:text-[#E31B54] hover:bg-pink-50 pl-0">
            + Add other Work Experience
          </Button>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="font-medium text-gray-900">Education</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Study</Label>
                <Input placeholder="enter name of study.." />
              </div>
              <div className="space-y-2">
                <Label>Institution</Label>
                <Input placeholder="enter institution name.." />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Starting Date</Label>
                <Input type="month" placeholder="MM/YYYY" />
              </div>
              <div className="space-y-2">
                <Label>Completion Date</Label>
                <Input type="month" placeholder="MM/YYYY" />
              </div>
            </div>
          </div>
          <Button type="button" variant="ghost" className="text-[#E31B54] hover:text-[#E31B54] hover:bg-pink-50 pl-0">
            + Add other Education
          </Button>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-900">Skills</h2>
            <Button type="button" variant="ghost" className="text-[#E31B54] hover:text-[#E31B54] hover:bg-pink-50">
              ✧ Automatically Select Skills
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>General Skills</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Add Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="communication">Communication</SelectItem>
                    <SelectItem value="leadership">Leadership</SelectItem>
                    <SelectItem value="teamwork">Teamwork</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="icon" className="bg-[#E31B54] hover:bg-[#E31B54]/90">
                  +
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Software Skills</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Add Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="microsoft">Microsoft Office</SelectItem>
                    <SelectItem value="adobe">Adobe Suite</SelectItem>
                    <SelectItem value="figma">Figma</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="icon" className="bg-[#E31B54] hover:bg-[#E31B54]/90">
                  +
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Technical Skills</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Add Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="icon" className="bg-[#E31B54] hover:bg-[#E31B54]/90">
                  +
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Developer Skills</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Add Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="node">Node.js</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="icon" className="bg-[#E31B54] hover:bg-[#E31B54]/90">
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <Button className="bg-[#E31B54] hover:bg-[#E31B54]/90">Next</Button>
        </div>
      </form>
    </div>
  )
}

