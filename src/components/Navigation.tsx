import { Home, Search, MessageCircle, Calendar, User, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Acasă", path: "/", id: "home" },
    { icon: Search, label: "Caută", path: "/items", id: "search" },
    { icon: Plus, label: "Adaugă", path: "/list-item", id: "add" },
    { icon: Calendar, label: "Închirieri", path: "/rentals", id: "rentals" },
    { icon: MessageCircle, label: "Mesaje", path: "/messages", id: "messages" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-glass border-t border-border/30">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center gap-1 h-auto py-2 px-3 rounded-2xl ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;