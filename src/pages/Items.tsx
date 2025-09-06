import { Search, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { allItems } from "@/data/items";

const Items = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = useMemo(() => {
    let items = category 
      ? allItems.filter(item => item.category === category)
      : allItems;
    
    if (searchQuery.trim()) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return items;
  }, [category, searchQuery]);

  const getCategoryTitle = (cat: string | null) => {
    switch(cat) {
      case 'camera': return 'Camere Foto';
      case 'bike': return 'Biciclete';
      case 'tent': return 'Corturi';
      case 'watch': return 'Ceasuri';
      default: return 'Toate Produsele';
    }
  };
  
  const categoryTitle = getCategoryTitle(category);

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
              placeholder="Caută produse..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-2xl border-border/50 bg-muted/30 text-base"
            />
          </div>
        </section>

        {/* Items Grid */}
        <section>
          {filteredItems.length > 0 ? (
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
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Nu s-au găsit produse</h3>
              <p className="text-muted-foreground">Încearcă să modifici termenii de căutare</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Items;