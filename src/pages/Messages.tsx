import { ArrowLeft, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockConversations = [
  {
    id: 1,
    userName: "Maria Popescu",
    userAvatar: "/placeholder-user.jpg",
    itemTitle: "Canon EOS R5",
    lastMessage: "Mulțumesc! Când putem să ne întâlnim pentru predare?",
    timestamp: "2 min",
    unread: true
  },
  {
    id: 2,
    userName: "Alexandru Ion",
    userAvatar: "/placeholder-user.jpg",
    itemTitle: "Trek Mountain Bike",
    lastMessage: "Perfect, ne vedem mâine la 14:00",
    timestamp: "1h",
    unread: false
  }
];

const Messages = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Mesaje</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {mockConversations.length > 0 ? (
          <div className="divide-y divide-border/30">
            {mockConversations.map((conversation) => (
              <Link key={conversation.id} to={`/messages/${conversation.id}`}>
                <div className="flex items-center gap-3 p-4 hover:bg-muted/20 transition-colors">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conversation.userAvatar} />
                    <AvatarFallback>
                      {conversation.userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground truncate">
                        {conversation.userName}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {conversation.timestamp}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-1">
                      {conversation.itemTitle}
                    </p>
                    
                    <p className={`text-sm truncate ${
                      conversation.unread ? 'font-medium text-foreground' : 'text-muted-foreground'
                    }`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                  
                  {conversation.unread && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Nu ai mesaje încă</h3>
            <p className="text-muted-foreground mb-6">
              Mesajele vor apărea aici când începi să comunici cu alți utilizatori
            </p>
            <Link to="/">
              <Button>Explorează produse</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Messages;