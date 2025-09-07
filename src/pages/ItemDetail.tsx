import { ArrowLeft, Star, MapPin, Calendar, Shield, ShoppingCart } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getItemById } from "@/data/items";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { toast } from "sonner";

const ItemDetail = () => {
  const { id } = useParams();
  const itemId = id ? parseInt(id) : null;
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [days, setDays] = useState(1);
  
  if (!itemId) {
    return <Navigate to="/404" replace />;
  }
  
  const item = getItemById(itemId);
  
  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const calculateWeeklyPrice = (dailyPrice: number, numberOfDays: number) => {
    if (numberOfDays >= 7) {
      const weeks = Math.floor(numberOfDays / 7);
      const remainingDays = numberOfDays % 7;
      const weeklyPrice = dailyPrice * 6.5; // 7.5% discount for weekly rentals
      return weeks * weeklyPrice + remainingDays * dailyPrice;
    }
    return numberOfDays * dailyPrice;
  };

  const weeklyPrice = item.price * 6.5; // Weekly price with discount
  const totalPrice = calculateWeeklyPrice(item.price, days);

  const handleAddToCart = () => {
    addToCart(item, days);
    toast.success(`${item.title} adăugat în coș pentru ${days} ${days === 1 ? 'zi' : 'zile'}!`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
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
            <h1 className="text-lg font-semibold text-foreground">Detalii Produs</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Image Gallery */}
        <div className="aspect-[4/3] bg-muted/30 relative">
          <img 
            src={item.images[currentImageIndex]} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {item.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ›
              </button>
            </>
          )}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
            {currentImageIndex + 1} / {item.images.length}
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
                    <span>({item.reviews} recenzii)</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{item.price} lei</div>
                <div className="text-sm text-muted-foreground">pe zi</div>
                <div className="text-lg font-semibold text-success mt-1">{weeklyPrice} lei</div>
                <div className="text-xs text-muted-foreground">pe săptămână (economie 7.5%)</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Descriere</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>

          {/* Features */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Caracteristici Principale</h3>
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
            <h3 className="font-semibold text-foreground mb-3">Oferit de</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                {typeof item.owner.avatar === 'string' && item.owner.avatar.length === 1 ? (
                  <span className="text-lg font-medium text-primary">{item.owner.avatar}</span>
                ) : (
                  <img src={item.owner.avatar} alt={item.owner.name} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{item.owner.name}</span>
                  {item.owner.verified && <Shield className="w-4 h-4 text-accent" />}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{item.owner.rating} rating gazdă</span>
                </div>
              </div>
            </div>
          </div>

          {/* Days Selector */}
          <div className="py-6 border-b border-border/30">
            <h3 className="font-semibold text-foreground mb-3">Durata închirierii</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDays(Math.max(1, days - 1))}
                  disabled={days <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{days}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDays(days + 1)}
                >
                  +
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                {days === 1 ? 'zi' : 'zile'}
              </div>
            </div>
            <div className="mt-3 p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span>Total pentru {days} {days === 1 ? 'zi' : 'zile'}:</span>
                <span className="font-semibold text-primary">{totalPrice.toFixed(0)} lei</span>
              </div>
              {days >= 7 && (
                <div className="text-xs text-success mt-1">
                  Economie de {(days * item.price - totalPrice).toFixed(0)} lei cu reducerea săptămânală!
                </div>
              )}
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
            <div className="flex gap-3">
              <Button 
                onClick={handleAddToCart}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Adaugă în Coș
              </Button>
              <Link to={`/booking/${item.id}`} className="flex-1">
                <Button className="booking-button w-full text-base">
                  Rezervă Acum - {totalPrice.toFixed(0)} lei
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;