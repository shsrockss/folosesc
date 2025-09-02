import { ArrowLeft, Plus, Calendar, Camera, Settings, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cameraImg from "@/assets/camera.jpg";
import bikeImg from "@/assets/bike.jpg";

const Profile = () => {
  const user = {
    name: "Alexandra M.",
    avatar: "A",
    rating: 4.8,
    reviews: 23,
    verified: true,
    joinDate: "Member since 2023"
  };

  const activeRentals = [
    {
      id: 1,
      title: "Trek Mountain Bike",
      dates: "Dec 15-17, 2024",
      status: "confirmed",
      image: bikeImg,
      owner: "Mihai R."
    }
  ];

  const myListings = [
    {
      id: 1,
      title: "Canon EOS R5",
      price: 89,
      status: "available",
      bookings: 3,
      image: cameraImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="rounded-full p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">Profile</h1>
            <Button variant="ghost" size="sm" className="rounded-full p-2">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-8">
        {/* Profile Header */}
        <div className="py-6 text-center border-b border-border/30">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-medium text-primary">{user.avatar}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{user.name}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{user.rating}</span>
              <span>({user.reviews} reviews)</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{user.joinDate}</p>
        </div>

        {/* Tabs */}
        <div className="py-6">
          <Tabs defaultValue="rentals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-muted/30 p-1">
              <TabsTrigger value="rentals" className="rounded-xl">My Rentals</TabsTrigger>
              <TabsTrigger value="listings" className="rounded-xl">My Items</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rentals" className="mt-6 space-y-4">
              {activeRentals.length > 0 ? (
                activeRentals.map((rental) => (
                  <div key={rental.id} className="item-card">
                    <div className="flex gap-4 p-4">
                      <div className="w-20 h-20 bg-muted/30 rounded-xl overflow-hidden">
                        <img src={rental.image} alt={rental.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{rental.title}</h3>
                            <p className="text-sm text-muted-foreground">From {rental.owner}</p>
                          </div>
                          <Badge variant="secondary" className="bg-accent/20 text-accent rounded-lg">
                            {rental.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{rental.dates}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No active rentals</h3>
                  <p className="text-muted-foreground mb-6">Start exploring items to rent</p>
                  <Link to="/">
                    <Button className="booking-button">Browse Items</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="listings" className="mt-6 space-y-4">
              {myListings.length > 0 ? (
                myListings.map((item) => (
                  <div key={item.id} className="item-card">
                    <div className="flex gap-4 p-4">
                      <div className="w-20 h-20 bg-muted/30 rounded-xl overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.price} lei/day</p>
                          </div>
                          <Badge variant="secondary" className="bg-accent/20 text-accent rounded-lg">
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.bookings} booking{item.bookings !== 1 ? 's' : ''} this month</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No items listed</h3>
                  <p className="text-muted-foreground mb-6">Share your items and start earning</p>
                </div>
              )}
              
              <Button className="booking-button w-full" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                List an Item
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;