import { BarChart, Building2, FileText, Home, Mail, Settings, Users } from "lucide-react"
import { Button } from "../ui/Button"
import APP_PATHS from "@shared/routes/app-paths";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Home", href: APP_PATHS.addCandidate.get(), icon: Home },
  { name: "Analytics", href: APP_PATHS.dashboard.get(), icon: BarChart },
  { name: "Candidates", href: APP_PATHS.dashboard.get(), icon: Users },
  { name: "Companies", href: APP_PATHS.dashboard.get(), icon: Building2 },
  { name: "Documents", href:APP_PATHS.dashboard.get(), icon: FileText },
  { name: "Messages", href: APP_PATHS.dashboard.get(), icon: Mail },
  { name: "Settings", href: APP_PATHS.dashboard.get(), icon: Settings },
]

export function Sidebar() {
  const navigate= useNavigate();
  return (
    <div className="fixed inset-y-0 left-0 z-50 flex w-16 flex-col bg-[#1a1f36]">
      <div className="flex h-16 shrink-0 items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white">R</div>
      </div>
      <nav className="flex flex-1 flex-col gap-2 p-2">
        {navigation.map((item) => (
          <Button
          key={item.name}
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:bg-gray-800 hover:text-white"
          onClick={() => navigate(item.href)}
        >
          <item.icon className="h-5 w-5" />
          <span className="sr-only">{item.name}</span>
        </Button>
        ))}
      </nav>
    </div>
  )
}

