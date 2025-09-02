import { useState } from "react";
import { ArrowLeft, Calendar, CreditCard, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import cameraImg from "@/assets/camera.jpg";

type BookingStep = 'dates' | 'payment' | 'confirmed';

const Booking = () => {
  const { id } = useParams();
  const [step, setStep] = useState<BookingStep>('dates');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  // Mock data
  const item = {
    id: 1,
    title: "Canon EOS R5",
    price: 89,
    image: cameraImg,
    owner: "Alexandra M."
  };

  const calculateDays = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 1;
  };

  const days = calculateDays();
  const subtotal = item.price * days;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  if (step === 'confirmed') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
            <p className="text-muted-foreground">Your rental request has been sent to {item.owner}. You'll receive a confirmation within 24 hours.</p>
          </div>
          <div className="space-y-3">
            <Link to="/profile">
              <Button className="booking-button w-full">View My Bookings</Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to={`/item/${id}`}>
              <Button variant="ghost" size="sm" className="rounded-full p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">
              {step === 'dates' ? 'Select Dates' : 'Payment'}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-24">
        {/* Item Summary */}
        <div className="py-6 border-b border-border/30">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-muted/30 rounded-xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Hosted by {item.owner}</p>
              <p className="text-lg font-bold text-primary">{item.price} lei/day</p>
            </div>
          </div>
        </div>

        {step === 'dates' && (
          <div className="py-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">When do you need it?</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Start Date */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">From</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "MMM dd") : "Select"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        disabled={(date) => date < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">To</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "MMM dd") : "Select"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => date < (startDate || new Date())}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <Card className="p-4 space-y-3 rounded-2xl border-border/30">
              <h3 className="font-semibold text-foreground">Price breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{item.price} lei × {days} day{days > 1 ? 's' : ''}</span>
                  <span className="text-foreground">{subtotal} lei</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="text-foreground">{serviceFee} lei</span>
                </div>
                <hr className="border-border/30" />
                <div className="flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">{total} lei</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {step === 'payment' && (
          <div className="py-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Payment Method</h2>
              <Card className="p-4 rounded-2xl border-border/30 cursor-pointer hover:shadow-card transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Credit Card</p>
                    <p className="text-sm text-muted-foreground">**** 1234</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Final Price */}
            <Card className="p-4 space-y-3 rounded-2xl border-border/30">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">{total} lei</span>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 backdrop-glass border-t border-border/30">
        <div className="max-w-md mx-auto px-4 py-4">
          {step === 'dates' && (
            <Button 
              className="booking-button w-full text-base"
              onClick={() => setStep('payment')}
              disabled={!startDate || !endDate}
            >
              Continue to Payment
            </Button>
          )}
          {step === 'payment' && (
            <Button 
              className="booking-button w-full text-base"
              onClick={() => setStep('confirmed')}
            >
              Confirm Booking - {total} lei
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;