import { Bell, Plus, Search } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar"

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6 w-fill-available">
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Last Sync</span>
          <span>Wed, Nov 2, 10:57</span>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search anything..." className="pl-8" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button size="icon" className="bg-pink-600 hover:bg-pink-700">
          <Plus className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </Button>
      </div>
    </header>
  )
}

