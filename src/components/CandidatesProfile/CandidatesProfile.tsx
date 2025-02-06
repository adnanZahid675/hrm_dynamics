"use client"
import { AddCandidate } from "@components/CandidatesProfile/AddCandidate"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/Tabs"
import CVProfile from "./CvProfile"
import MainCandidateProfile from "@components/CandidatesProfile/MainCandidateProfile"

export default function CandidatesProfile() {
  return (
    <div className="min-h-screen bg-gray-100 pl-16">
   
        <main className="flex-1 px-4 py-8 md:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="cv">CV & Profile</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <AddCandidate />
            </TabsContent>
            <TabsContent value="cv">
                <CVProfile />
            </TabsContent>
            <TabsContent value="files">
                <MainCandidateProfile />
            </TabsContent>
          </Tabs>
        </main>
     
    </div>
  )
}

