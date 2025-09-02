import { ArrowLeft, Star, MapPin, Calendar, Shield } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cameraImg from "@/assets/camera.jpg";

const ItemDetail = () => {
  const { id } = useParams();
  
  // Mock data - would come from API in real app
  const item = {
    id: 1,
    title: "Canon EOS R5 Professional Camera",
    price: 89,
    location: "Bucharest, Sector 1",
    rating: 4.9,
    reviews: 127,
    images: [cameraImg, cameraImg, cameraImg],
    description: "Professional full-frame mirrorless camera perfect for photography and videography. Includes 24-70mm lens, extra batteries, memory cards, and carrying case.",
    features: ["42.4MP Full Frame", "8K Video Recording", "In-Body Stabilization", "WiFi & Bluetooth"],
    owner: {
      name: "Alexandra M.",
      avatar: "A",
      rating: 4.8,
      verified: true
    },
    availability: "Available next 3 days"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="rounded-full p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">Item Details</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Image Gallery */}
        <div className="aspect-[4/3] bg-muted/30 relative">
          <img 
            src={item.images[0]} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
            1 / {item.images.length}
          </div>
        </div>

        <div className="px-4 pb-8">
          {/* Title and Price */}
          <div className="py-6 border-b border-border/30">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground mb-2">{item.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{item.rating}</span>
                    <span>({item.reviews} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{item.price} lei</div>
                <div className="text-sm text-muted-foreground">per day</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>

          {/* Features */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {item.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="justify-start p-2 rounded-xl">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Owner */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Hosted by</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-medium text-primary">{item.owner.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{item.owner.name}</span>
                  {item.owner.verified && <Shield className="w-4 h-4 text-accent" />}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{item.owner.rating} host rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="py-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm text-accent font-medium">{item.availability}</span>
            </div>
          </div>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 backdrop-glass border-t border-border/30">
          <div className="max-w-md mx-auto px-4 py-4">
            <Link to={`/booking/${item.id}`}>
              <Button className="booking-button w-full text-base">
                Book Now - {item.price} lei/day
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;