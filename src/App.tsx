// Folosesc.ro - Romanian rental platform
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import ListItem from "./pages/ListItem";
import Rentals from "./pages/Rentals";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list-item" element={<ListItem />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Navigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
