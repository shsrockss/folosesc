import { useState } from "react";
import { ArrowLeft, Camera, Upload, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ListItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    availability: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.price) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate successful listing
    toast.success("Item listed successfully!");
    navigate("/profile");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-glass border-b border-border/30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">List an Item</h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6 py-6">
          {/* Photo Upload */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Photos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-muted/30 rounded-xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center">
                <Camera className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Add photos of your item
                </p>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Basic Info */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Canon EOS R5 Camera"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camera">Camera</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                    <SelectItem value="tent">Tent</SelectItem>
                    <SelectItem value="watch">Watch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item, its condition, and what's included..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="rounded-xl resize-none"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Location */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Pricing & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price per day *</Label>
                  <div className="relative">
                    <Input
                      id="price"
                      type="number"
                      placeholder="50"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="rounded-xl pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                      lei
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Bucharest"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  placeholder="Available weekends, or specific dates..."
                  value={formData.availability}
                  onChange={(e) => handleInputChange("availability", e.target.value)}
                  className="rounded-xl"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" className="booking-button w-full" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              List Item
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ListItem;