import { Search, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import cameraImg from "@/assets/camera.jpg";
import bikeImg from "@/assets/bike.jpg";
import tentImg from "@/assets/tent.jpg";
import watchImg from "@/assets/watch.jpg";

const allItems = [
  // Camera items
  { id: 1, title: "Canon EOS R5", price: 89, location: "Bucharest", image: cameraImg, rating: 4.9, category: "camera" },
  { id: 5, title: "Sony A7 III", price: 75, location: "Cluj-Napoca", image: cameraImg, rating: 4.8, category: "camera" },
  { id: 6, title: "Nikon D850", price: 65, location: "Timisoara", image: cameraImg, rating: 4.7, category: "camera" },
  { id: 7, title: "Fuji X-T4", price: 55, location: "Brasov", image: cameraImg, rating: 4.6, category: "camera" },
  
  // Bike items
  { id: 2, title: "Trek Mountain Bike", price: 45, location: "Cluj-Napoca", image: bikeImg, rating: 4.8, category: "bike" },
  { id: 8, title: "Giant Road Bike", price: 40, location: "Bucharest", image: bikeImg, rating: 4.7, category: "bike" },
  { id: 9, title: "Specialized Hybrid", price: 35, location: "Iasi", image: bikeImg, rating: 4.6, category: "bike" },
  { id: 10, title: "Cannondale MTB", price: 50, location: "Constanta", image: bikeImg, rating: 4.9, category: "bike" },
  
  // Tent items
  { id: 3, title: "4-Person Camping Tent", price: 35, location: "Brasov", image: tentImg, rating: 4.7, category: "tent" },
  { id: 11, title: "2-Person Hiking Tent", price: 25, location: "Sibiu", image: tentImg, rating: 4.5, category: "tent" },
  { id: 12, title: "Family Dome Tent", price: 45, location: "Cluj-Napoca", image: tentImg, rating: 4.8, category: "tent" },
  { id: 13, title: "Ultralight Backpack Tent", price: 30, location: "Brasov", image: tentImg, rating: 4.6, category: "tent" },
  
  // Watch items
  { id: 4, title: "Apple Watch Series 9", price: 25, location: "Bucharest", image: watchImg, rating: 4.9, category: "watch" },
  { id: 14, title: "Samsung Galaxy Watch", price: 20, location: "Timisoara", image: watchImg, rating: 4.7, category: "watch" },
  { id: 15, title: "Garmin Fenix 7", price: 30, location: "Cluj-Napoca", image: watchImg, rating: 4.8, category: "watch" },
  { id: 16, title: "Fitbit Sense 2", price: 15, location: "Iasi", image: watchImg, rating: 4.5, category: "watch" },
];

const Items = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  const filteredItems = category 
    ? allItems.filter(item => item.category === category)
    : allItems;

  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) + 's'
    : 'All Items';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">{categoryTitle}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-8">
        {/* Search Section */}
        <section className="py-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search items..."
              className="pl-12 pr-4 py-3 rounded-2xl border-border/50 bg-muted/30 text-base"
            />
          </div>
        </section>

        {/* Items Grid */}
        <section>
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}>
                <div className="item-card">
                  <div className="aspect-[4/3] bg-muted/30">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{item.price} lei/day</p>
                        <p className="text-sm text-muted-foreground">★ {item.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Items;