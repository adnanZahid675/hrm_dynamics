import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"
import { Upload } from "lucide-react"

export function ResumeParser() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Parser</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">drop your file here or upload a file</p>
          <p className="text-center text-xs text-muted-foreground">maximum 10mb, one file at a time</p>
          <Button variant="outline" className="mt-2">
            Upload File
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

