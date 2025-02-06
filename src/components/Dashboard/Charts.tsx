"use client"


import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const candidatesData = [
  { month: "Oct 2024", candidates: 250 },
  { month: "Nov 2024", candidates: 350 },
  { month: "Dec 2024", candidates: 450 },
  { month: "Jan 2025", candidates: 728 },
]

const clientsData = [
  { month: "Oct 2024", clients: 20 },
  { month: "Nov 2024", clients: 25 },
  { month: "Dec 2024", clients: 35 },
  { month: "Jan 2025", clients: 40 },
]

export function Charts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full bg-pink-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-pink-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold">728</CardTitle>
            <p className="text-sm text-muted-foreground">Current Candidates</p>
          </div>
          <div className="ml-auto">
            <span className="text-sm text-red-600">↓ 4.5%</span>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={candidatesData}>
              <XAxis dataKey="month" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="candidates" stroke="#e11d48" fill="#fce7f3" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full bg-pink-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-pink-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold">40</CardTitle>
            <p className="text-sm text-muted-foreground">My Clients</p>
          </div>
          <div className="ml-auto">
            <span className="text-sm text-green-600">↑ 10.5%</span>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={clientsData}>
              <XAxis dataKey="month" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="clients" stroke="#e11d48" fill="#fce7f3" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

