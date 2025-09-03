import { Search, Camera, Bike, MapPin, Watch } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import cameraImg from "@/assets/camera.jpg";
import bikeImg from "@/assets/bike.jpg";
import tentImg from "@/assets/tent.jpg";
import watchImg from "@/assets/watch.jpg";
import sonyA7Img from "@/assets/sony-a7iii.jpg";
import giantImg from "@/assets/giant-road.jpg";

const categories = [
  { id: 'camera', name: 'Camera', icon: Camera, image: cameraImg },
  { id: 'bike', name: 'Bike', icon: Bike, image: bikeImg },
  { id: 'tent', name: 'Tent', icon: MapPin, image: tentImg },
  { id: 'watch', name: 'Watch', icon: Watch, image: watchImg },
];

const featuredItems = [
  {
    id: 1,
    title: "Canon EOS R5",
    price: 89,
    location: "Bucharest",
    image: cameraImg,
    rating: 4.9
  },
  {
    id: 2,
    title: "Trek Mountain Bike",
    price: 45,
    location: "Cluj-Napoca",
    image: bikeImg,
    rating: 4.8
  },
  {
    id: 3,
    title: "4-Person Camping Tent",
    price: 35,
    location: "Brasov",
    image: tentImg,
    rating: 4.7
  },
  {
    id: 4,
    title: "Apple Watch Series 9",
    price: 25,
    location: "Bucharest",
    image: watchImg,
    rating: 4.9
  },
  {
    id: 5,
    title: "Sony A7 III",
    price: 75,
    location: "Cluj-Napoca",
    image: cameraImg,
    rating: 4.8
  },
  {
    id: 6,
    title: "Giant Road Bike",
    price: 40,
    location: "Iasi",
    image: bikeImg,
    rating: 4.7
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-primary">Folosesc.ro</h1>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="rounded-full">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">A</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-8">
        {/* Search Section */}
        <section className="py-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="What do you need?"
              className="pl-12 pr-4 py-3 rounded-2xl border-border/50 bg-muted/30 text-base"
            />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Browse categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to={`/items?category=${category.id}`}>
                <div className="category-tile">
                  <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-muted/30">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{category.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Items */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Featured near you</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
            </Button>
          </div>
          
          <div className="space-y-4">
            {featuredItems.map((item) => (
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

export default Home;