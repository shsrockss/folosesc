import { useState, useMemo } from "react";
import { ArrowLeft, Calendar, CreditCard, Shield, Info } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getItemById } from "@/data/items";
import { useCart } from "@/hooks/useCart";

type BookingStep = 'dates' | 'payment' | 'confirmed';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  
  const [step, setStep] = useState<BookingStep>('payment');

  const item = getItemById(parseInt(id || '0'));
  const cartItem = cartItems.find(ci => ci.id === parseInt(id || '0'));

  if (!item || !cartItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Produs nu găsit</h2>
          <Link to="/rentals">
            <Button>Înapoi la închirieri</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateDays = () => cartItem.days;
  const days = calculateDays();
  
  // Calculate prices with Romanian taxes and fees
  const dailyPrice = item.price;
  const subtotal = dailyPrice * days;
  const insuranceFee = Math.round(subtotal * 0.05); // 5% insurance
  const vatAmount = Math.round((subtotal + insuranceFee) * 0.19); // 19% VAT Romania
  const total = subtotal + insuranceFee + vatAmount;
  const deposit = item.deposit;

  if (step === 'confirmed') {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
          <div className="max-w-md mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <Link to="/rentals">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-semibold">Rezervare confirmată</h1>
            </div>
          </div>
        </header>

        <main className="max-w-md mx-auto px-4 py-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Rezervare confirmată!</h2>
            <p className="text-muted-foreground mb-6">
              Vei primi un email cu detaliile rezervării în scurt timp.
            </p>
            
            <div className="space-y-3">
              <Link to="/rentals">
                <Button className="w-full">Vezi rezervările mele</Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">Înapoi acasă</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/rentals">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Finalizare rezervare</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-20">
        {/* Item Summary */}
        <Card className="my-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted/30">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{days} {days === 1 ? 'zi' : 'zile'}</Badge>
                  {cartItem.startDate && (
                    <Badge variant="outline">
                      {cartItem.startDate.toLocaleDateString('ro-RO')}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Detalii preț
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>{item.price} lei × {days} {days === 1 ? 'zi' : 'zile'}</span>
              <span>{subtotal} lei</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Asigurare (5%)
              </span>
              <span>{insuranceFee} lei</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>TVA (19%)</span>
              <span>{vatAmount} lei</span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-semibold">
              <span>Total de plată</span>
              <span>{total} lei</span>
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Depozit (blocat temporar)</span>
              <span>{deposit} lei</span>
            </div>
            
            <div className="bg-muted/30 p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Depozitul va fi blocat pe cardul tău și eliberat după returnarea produsului în stare bună.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Metodă de plată
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 border border-border/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">CARD</span>
                </div>
                <div>
                  <p className="font-medium">Card bancar</p>
                  <p className="text-sm text-muted-foreground">Plată securizată prin Stripe</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/30">
        <div className="max-w-md mx-auto p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Total de plată</p>
              <p className="text-lg font-bold">{total} lei</p>
            </div>
            <p className="text-xs text-muted-foreground">+ {deposit} lei depozit</p>
          </div>
          
          <Button 
            onClick={() => {
              removeFromCart(item.id);
              setStep('confirmed');
            }}
            className="w-full"
          >
            Confirmă și plătește
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;