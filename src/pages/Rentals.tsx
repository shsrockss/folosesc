import { ArrowLeft, Clock, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const mockRentals = {
  upcoming: [
    {
      id: 1,
      title: "Canon EOS R5",
      startDate: "2024-02-15",
      endDate: "2024-02-17",
      status: "confirmed",
      price: 178,
      location: "București"
    }
  ],
  active: [
    {
      id: 2,
      title: "Trek Mountain Bike",
      startDate: "2024-02-10",
      endDate: "2024-02-14",
      status: "active",
      price: 180,
      location: "Cluj-Napoca"
    }
  ],
  history: [
    {
      id: 3,
      title: "4-Person Camping Tent",
      startDate: "2024-01-20",
      endDate: "2024-01-22",
      status: "completed",
      price: 70,
      location: "Brașov"
    }
  ]
};

const Rentals = () => {
  const renderRentalCard = (rental: any) => (
    <Link key={rental.id} to={`/rental/${rental.id}`}>
      <div className="item-card p-4 mb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-foreground">{rental.title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              {rental.location}
            </div>
          </div>
          <Badge variant={rental.status === 'active' ? 'default' : 'secondary'}>
            {rental.status === 'upcoming' && 'Confirmată'}
            {rental.status === 'active' && 'Activă'}
            {rental.status === 'completed' && 'Finalizată'}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {rental.startDate} - {rental.endDate}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-semibold text-primary">{rental.price} lei total</span>
          <Button variant="outline" size="sm">
            Vezi detalii
          </Button>
        </div>
      </div>
    </Link>
  );

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
            <h1 className="text-xl font-semibold">Închirierile mele</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">Viitoare</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="history">Istoric</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {mockRentals.upcoming.length > 0 ? (
              mockRentals.upcoming.map(renderRentalCard)
            ) : (
              <div className="text-center py-12">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Nu ai închirieri viitoare</p>
                <Link to="/">
                  <Button className="mt-4">Găsește ceva de închiriat</Button>
                </Link>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="active" className="space-y-4">
            {mockRentals.active.length > 0 ? (
              mockRentals.active.map(renderRentalCard)
            ) : (
              <div className="text-center py-12">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Nu ai închirieri active</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            {mockRentals.history.length > 0 ? (
              mockRentals.history.map(renderRentalCard)
            ) : (
              <div className="text-center py-12">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Nu ai istoric de închirieri</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Rentals;