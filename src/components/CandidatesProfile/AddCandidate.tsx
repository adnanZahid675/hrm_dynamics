"use client"

import { useState } from "react"
import { Button } from "@components/ui/Button"
import { Input } from "@components/ui/Input"
import { Label } from "@components/ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/Select"
import { Upload } from "lucide-react"
import { RichTextEditor } from "./RichTextEditor"

export function AddCandidate() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <form className="space-y-8 ">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Candidate Information</h2>
        <div className="rounded-lg border border-dashed p-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">drop your file here or upload a file</p>
              <p className="text-xs text-muted-foreground">maximum 10mb, one file at a time</p>
            </div>
            <Button variant="outline">Upload File</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter first name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter last name" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Enter location" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="postcode">Postcode/House Number</Label>
        <Input id="postcode" placeholder="Enter postcode and house number" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sector">Sector</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subSector">Sub Sector</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select sub sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="minSalary">Minimum Monthly Salary (€)</Label>
          <Input id="minSalary" type="number" placeholder="Enter minimum salary" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="maxSalary">Maximum Monthly Salary (€)</Label>
          <Input id="maxSalary" type="number" placeholder="Enter maximum salary" />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Internal Notes</Label>
        <RichTextEditor />
      </div>

      <div className="flex justify-end" >
        <Button size="lg">Next</Button>
      </div>
    </form>
  )
}

