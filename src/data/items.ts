import cameraImg from "@/assets/camera.jpg";
import bikeImg from "@/assets/bike.jpg";
import tentImg from "@/assets/tent.jpg";
import watchImg from "@/assets/watch.jpg";
import sonyA7Img from "@/assets/sony-a7iii.jpg";
import nikonImg from "@/assets/nikon-d850.jpg";
import fujiImg from "@/assets/fuji-xt4.jpg";
import giantImg from "@/assets/giant-road.jpg";
import specializedImg from "@/assets/specialized-hybrid.jpg";
import cannondaleImg from "@/assets/cannondale-mtb.jpg";
import hikingTentImg from "@/assets/hiking-tent.jpg";
import familyDomeImg from "@/assets/family-dome.jpg";
import ultralightImg from "@/assets/ultralight-tent.jpg";
import samsungImg from "@/assets/samsung-watch.jpg";
import garminImg from "@/assets/garmin-fenix.jpg";
import fitbitImg from "@/assets/fitbit-sense.jpg";
import alexandraProfile from "@/assets/alexandra-profile.jpg";

export interface Item {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  rating: number;
  category: 'camera' | 'bike' | 'tent' | 'watch' | 'drone' | 'game' | 'tool';
  reviews: number;
  images: string[];
  description: string;
  features: string[];
  owner: {
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  availability: string;
  deposit: number;
}

export const allItems: Item[] = [
  // Camera items
  {
    id: 1,
    title: "Canon EOS R5 Cameră Profesională",
    price: 89,
    location: "București, Sectorul 1",
    image: cameraImg,
    rating: 4.9,
    category: "camera",
    reviews: 127,
    images: [cameraImg, sonyA7Img, nikonImg],
    description: "Cameră mirrorless full-frame profesională perfectă pentru fotografie și videografie. Include obiectiv 24-70mm, baterii suplimentare, carduri de memorie și geantă de transport.",
    features: ["42.4MP Full Frame", "Înregistrare Video 8K", "Stabilizare în Corp", "WiFi & Bluetooth"],
    owner: {
      name: "Alexandra M.",
      avatar: alexandraProfile,
      rating: 4.8,
      verified: true
    },
    availability: "Disponibil următoarele 3 zile",
    deposit: 1500
  },
  {
    id: 5,
    title: "Sony A7 III Cameră Mirrorless",
    price: 75,
    location: "Cluj-Napoca, Centru",
    image: sonyA7Img,
    rating: 4.8,
    category: "camera",
    reviews: 89,
    images: [sonyA7Img, cameraImg, fujiImg],
    description: "Cameră mirrorless full-frame excelentă pentru fotografii și videografi. Include obiectiv standard și accesorii complete.",
    features: ["24.2MP Full Frame", "Autofocus Hibrid", "Stabilizare 5 axe", "Dual Card Slots"],
    owner: {
      name: "Mihai R.",
      avatar: "M",
      rating: 4.9,
      verified: true
    },
    availability: "Disponibil din mâine",
    deposit: 1200
  },
  {
    id: 6,
    title: "Nikon D850 DSLR Profesional",
    price: 65,
    location: "Timișoara, Centrul Vechi",
    image: nikonImg,
    rating: 4.7,
    category: "camera",
    reviews: 156,
    images: [nikonImg, sonyA7Img, cameraImg],
    description: "DSLR profesional cu rezoluție înaltă, perfect pentru portrete și peisaje. Include obiectiv 24-120mm și toate accesoriile.",
    features: ["45.7MP FX Sensor", "153 Puncte AF", "4K UHD Video", "Dual XQD/SD"],
    owner: {
      name: "Ana P.",
      avatar: "A",
      rating: 4.6,
      verified: true
    },
    availability: "Disponibil weekendul acesta",
    deposit: 1000
  },
  {
    id: 7,
    title: "Fuji X-T4 Cameră Retro",
    price: 55,
    location: "Brașov, Centru Istoric",
    image: fujiImg,
    rating: 4.6,
    category: "camera",
    reviews: 73,
    images: [fujiImg, nikonImg, sonyA7Img],
    description: "Cameră mirrorless cu design vintage și calitate excepțională a imaginii. Perfectă pentru street photography și călătorii.",
    features: ["26.1MP X-Trans", "Stabilizare IBIS", "4K 60fps", "Film Simulations"],
    owner: {
      name: "David L.",
      avatar: "D",
      rating: 4.7,
      verified: false
    },
    availability: "Disponibil săptămâna viitoare",
    deposit: 800
  },

  // Bike items
  {
    id: 2,
    title: "Trek Bicicletă Montană",
    price: 45,
    location: "Cluj-Napoca, Grigorescu",
    image: bikeImg,
    rating: 4.8,
    category: "bike",
    reviews: 92,
    images: [bikeImg, giantImg, specializedImg],
    description: "Bicicletă montană robustă pentru trasee dificile. Include cască, pompă și kit de reparații. Perfectă pentru aventuri în natură.",
    features: ["Cadru Aluminiu", "21 Viteze", "Suspensie Față", "Frâne pe Disc"],
    owner: {
      name: "Răzvan T.",
      avatar: "R",
      rating: 4.9,
      verified: true
    },
    availability: "Disponibil azi",
    deposit: 300
  },
  {
    id: 8,
    title: "Giant Bicicletă Șosea",
    price: 40,
    location: "București, Herastrau",
    image: giantImg,
    rating: 4.7,
    category: "bike",
    reviews: 65,
    images: [giantImg, bikeImg, cannondaleImg],
    description: "Bicicletă de șosea rapidă și ușoară, ideală pentru ciclism urban și antrenamente. Include accesorii de siguranță complete.",
    features: ["Cadru Carbon", "16 Viteze", "Roți Aero", "Ghidon Drop"],
    owner: {
      name: "Maria S.",
      avatar: "M",
      rating: 4.8,
      verified: true
    },
    availability: "Disponibil mâine dimineață",
    deposit: 400
  },
  {
    id: 9,
    title: "Specialized Bicicletă Hibrid",
    price: 35,
    location: "Iași, Copou",
    image: specializedImg,
    rating: 4.6,
    category: "bike",
    reviews: 48,
    images: [specializedImg, giantImg, bikeImg],
    description: "Bicicletă hibrid versatilă pentru oraș și drumeții ușoare. Combină confortul cu performanța pentru utilizare zilnică.",
    features: ["Cadru Aluminiu", "24 Viteze", "Poziție Confortabilă", "Portbagaj"],
    owner: {
      name: "Andrei B.",
      avatar: "A",
      rating: 4.5,
      verified: false
    },
    availability: "Disponibil sfârșitul săptămânii",
    deposit: 250
  },
  {
    id: 10,
    title: "Cannondale MTB Profesional",
    price: 50,
    location: "Constanța, Centru",
    image: cannondaleImg,
    rating: 4.9,
    category: "bike",
    reviews: 134,
    images: [cannondaleImg, specializedImg, giantImg],
    description: "Bicicletă montană de top pentru cei mai experimentați. Echipament complet pentru trasee extreme și competiții.",
    features: ["Cadru Carbon", "30 Viteze", "Suspensie Completă", "Frâne Hidraulice"],
    owner: {
      name: "Cristian V.",
      avatar: "C",
      rating: 5.0,
      verified: true
    },
    availability: "Disponibil cu programare",
    deposit: 500
  },

  // Tent items
  {
    id: 3,
    title: "Cort Camping 4 Persoane",
    price: 35,
    location: "Brașov, Noua",
    image: tentImg,
    rating: 4.7,
    category: "tent",
    reviews: 78,
    images: [tentImg, hikingTentImg, familyDomeImg],
    description: "Cort spațios pentru camping în familie. Rezistent la intemperii, ușor de montat și cu vestibul pentru echipamente.",
    features: ["4 Persoane", "Rezistent la Apă", "Montaj Rapid", "Vestibul Mare"],
    owner: {
      name: "Elena C.",
      avatar: "E",
      rating: 4.7,
      verified: true
    },
    availability: "Disponibil pentru weekend",
    deposit: 200
  },
  {
    id: 11,
    title: "Cort Hiking 2 Persoane",
    price: 25,
    location: "Sibiu, Centru Vechi",
    image: hikingTentImg,
    rating: 4.5,
    category: "tent",
    reviews: 52,
    images: [hikingTentImg, ultralightImg, tentImg],
    description: "Cort compact pentru drumeții montane. Ultraușor și rezistent, perfect pentru backpacking și aventuri în natură.",
    features: ["2 Persoane", "Ultraușor 2kg", "3 Sezoane", "Ventilație Dublă"],
    owner: {
      name: "Paul M.",
      avatar: "P",
      rating: 4.6,
      verified: false
    },
    availability: "Disponibil săptămâna aceasta",
    deposit: 150
  },
  {
    id: 12,
    title: "Cort Familie Dome",
    price: 45,
    location: "Cluj-Napoca, Mănăștur",
    image: familyDomeImg,
    rating: 4.8,
    category: "tent",
    reviews: 96,
    images: [familyDomeImg, tentImg, hikingTentImg],
    description: "Cort mare tip dom pentru vacanțe în familie. Spațiu generos, înălțime confortabilă și rezistență maximă.",
    features: ["6 Persoane", "Înălțime 2m", "2 Camere", "Pardoseală Detașabilă"],
    owner: {
      name: "Monica A.",
      avatar: "M",
      rating: 4.9,
      verified: true
    },
    availability: "Rezervabil pentru vacanțe",
    deposit: 300
  },
  {
    id: 13,
    title: "Cort Ultralight Backpack",
    price: 30,
    location: "Brașov, Tractorul",
    image: ultralightImg,
    rating: 4.6,
    category: "tent",
    reviews: 41,
    images: [ultralightImg, hikingTentImg, familyDomeImg],
    description: "Cort ultraușor pentru trekking extreme. Minimalist dar rezistent, pentru aventurierii care contează fiecare gram.",
    features: ["1 Persoană", "900g Greutate", "4 Sezoane", "Material Premium"],
    owner: {
      name: "Gabriel R.",
      avatar: "G",
      rating: 4.8,
      verified: true
    },
    availability: "Disponibil pentru expediții",
    deposit: 250
  },

  // Watch items
  {
    id: 4,
    title: "Apple Watch Series 9",
    price: 25,
    location: "București, Aviatorilor",
    image: watchImg,
    rating: 4.9,
    category: "watch",
    reviews: 203,
    images: [watchImg, samsungImg, garminImg],
    description: "Smartwatch premium cu toate funcțiile pentru fitness și comunicare. Include încărcător și curea suplimentară.",
    features: ["GPS + Cellular", "Senzor Oxigen", "EKG", "Rezistent la Apă"],
    owner: {
      name: "Ioana D.",
      avatar: "I",
      rating: 5.0,
      verified: true
    },
    availability: "Disponibil oricând",
    deposit: 400
  },
  {
    id: 14,
    title: "Samsung Galaxy Watch",
    price: 20,
    location: "Timișoara, Fabric",
    image: samsungImg,
    rating: 4.7,
    category: "watch",
    reviews: 87,
    images: [samsungImg, fitbitImg, watchImg],
    description: "Smartwatch Android cu design elegant și funcționalitate completă. Perfect pentru sport și activități zilnice.",
    features: ["Wear OS", "GPS Integrat", "Monitor Cardiac", "Baterie 2 Zile"],
    owner: {
      name: "Florin L.",
      avatar: "F",
      rating: 4.6,
      verified: true
    },
    availability: "Disponibil începând de mâine",
    deposit: 300
  },
  {
    id: 15,
    title: "Garmin Fenix 7 Outdoor",
    price: 30,
    location: "Cluj-Napoca, Centru",
    image: garminImg,
    rating: 4.8,
    category: "watch",
    reviews: 145,
    images: [garminImg, watchImg, samsungImg],
    description: "Ceas multisport pentru aventurieri. Rezistență extremă, GPS precis și baterie de lungă durată pentru expediții.",
    features: ["Multi-GNSS", "Baterie 18 zile", "100+ Sporturi", "Hărți TopoActive"],
    owner: {
      name: "Adrian F.",
      avatar: "A",
      rating: 4.9,
      verified: true
    },
    availability: "Disponibil pentru aventuri",
    deposit: 500
  },
  {
    id: 16,
    title: "Fitbit Sense 2 Wellness",
    price: 15,
    location: "Iași, Tatarasi",
    image: fitbitImg,
    rating: 4.5,
    category: "watch",
    reviews: 72,
    images: [fitbitImg, garminImg, samsungImg],
    description: "Tracker de wellness cu focus pe sănătate și stres. Monitorizare completă a activității și somnului.",
    features: ["Senzor Stres", "EKG", "SpO2", "6+ Zile Baterie"],
    owner: {
      name: "Carmen N.",
      avatar: "C",
      rating: 4.4,
      verified: false
    },
    availability: "Disponibil pentru testare",
    deposit: 200
  },

  // Drone items
  {
    id: 17,
    title: "DJI Mini 3 Pro Dronă",
    price: 60,
    location: "București, Centru",
    image: cameraImg, // Using camera image as placeholder
    rating: 4.8,
    category: "drone",
    reviews: 92,
    images: [cameraImg, sonyA7Img, nikonImg],
    description: "Dronă compactă și inteligentă cu cameră 4K. Perfectă pentru filmări aeriene și fotografie. Include toate accesoriile și baterii suplimentare.",
    features: ["Cameră 4K HDR", "Timp zbor 34 min", "Evitare obstacole", "ActiveTrack 4.0"],
    owner: {
      name: "Radu P.",
      avatar: "R",
      rating: 4.9,
      verified: true
    },
    availability: "Disponibil cu instrucțiuni",
    deposit: 800
  },
  {
    id: 18,
    title: "DJI Air 2S Dronă Profesională",
    price: 85,
    location: "Cluj-Napoca, Bună Ziua",
    image: bikeImg, // Using bike image as placeholder
    rating: 4.9,
    category: "drone",
    reviews: 156,
    images: [bikeImg, giantImg, specializedImg],
    description: "Dronă profesională cu senzor 1-inch și video 5.4K. Perfectă pentru proiecte comerciale și fotografie aeriană de înaltă calitate.",
    features: ["Senzor 1-inch", "Video 5.4K", "MasterShots", "FocusTrack"],
    owner: {
      name: "Sergiu M.",
      avatar: "S",
      rating: 5.0,
      verified: true
    },
    availability: "Disponibil cu licența de pilotaj",
    deposit: 1500
  },

  // Board game items
  {
    id: 19,
    title: "Monopoly Deluxe Edition",
    price: 8,
    location: "Timișoara, Centru",
    image: tentImg, // Using tent image as placeholder
    rating: 4.6,
    category: "game",
    reviews: 43,
    images: [tentImg, hikingTentImg, familyDomeImg],
    description: "Jocul clasic Monopoly în ediție deluxe cu piese metalice premium. Perfect pentru seri de familie sau petreceri cu prietenii.",
    features: ["Piese metalice", "Tablă premium", "6-8 jucători", "Instrucțiuni în română"],
    owner: {
      name: "Laura A.",
      avatar: "L",
      rating: 4.7,
      verified: false
    },
    availability: "Disponibil weekenduri",
    deposit: 50
  },
  {
    id: 20,
    title: "Catan + Extensii",
    price: 12,
    location: "Brașov, Centrul Vechi",
    image: watchImg, // Using watch image as placeholder
    rating: 4.8,
    category: "game",
    reviews: 67,
    images: [watchImg, samsungImg, garminImg],
    description: "Jocul strategic Catan cu toate extensiile. Ideal pentru grup de 3-6 jucători. Include extensiile Marinarii și Orașele și Cavalerii.",
    features: ["Joc de bază + 4 extensii", "3-6 jucători", "Traducere română", "Componente complete"],
    owner: {
      name: "Bogdan F.",
      avatar: "B",
      rating: 4.6,
      verified: true
    },
    availability: "Disponibil pentru game nights",
    deposit: 80
  },
  {
    id: 21,
    title: "Azul Board Game Collection",
    price: 10,
    location: "Iași, Copou",
    image: cameraImg, // Using camera image as placeholder
    rating: 4.7,
    category: "game",
    reviews: 52,
    images: [cameraImg, sonyA7Img, fujiImg],
    description: "Colecția completă de jocuri Azul: jocul de bază plus Vitraliile din Sintra și Pavilionul de Vară. Jocuri de strategie frumos ilustrate.",
    features: ["3 jocuri Azul", "2-4 jucători", "Calitate premium", "Artă deosebită"],
    owner: {
      name: "Diana S.",
      avatar: "D",
      rating: 4.8,
      verified: true
    },
    availability: "Disponibil pentru petreceri",
    deposit: 60
  },

  // Tool items
  {
    id: 22,
    title: "Bosch Perceuse Drill Set",
    price: 25,
    location: "București, Militari",
    image: bikeImg, // Using bike image as placeholder
    rating: 4.7,
    category: "tool",
    reviews: 89,
    images: [bikeImg, giantImg, cannondaleImg],
    description: "Set complet de găurit și înșurubat cu baterie. Include toate accesoriile necesare pentru lucrări casnice și renovări.",
    features: ["Baterie 18V", "Set 100 accesorii", "2 viteze", "LED integrat"],
    owner: {
      name: "Marius T.",
      avatar: "M",
      rating: 4.8,
      verified: true
    },
    availability: "Disponibil zilnic",
    deposit: 200
  },
  {
    id: 23,
    title: "Husqvarna Automower Robotică",
    price: 40,
    location: "Cluj-Napoca, Europa",
    image: tentImg, // Using tent image as placeholder
    rating: 4.9,
    category: "tool",
    reviews: 124,
    images: [tentImg, hikingTentImg, ultralightImg],
    description: "Mașină de tuns iarba robotizată pentru grădini până la 1000mp. Programabilă și cu aplicație mobilă. Perfectă pentru grădini mari.",
    features: ["Suprafață 1000mp", "Aplicație mobilă", "Antifurt GPS", "Rezistentă la ploaie"],
    owner: {
      name: "Andrei L.",
      avatar: "A",
      rating: 4.9,
      verified: true
    },
    availability: "Disponibil cu instrucțiuni",
    deposit: 600
  },
  {
    id: 24,
    title: "Makita Polizor Unghiular",
    price: 18,
    location: "Constanța, Tomis",
    image: watchImg, // Using watch image as placeholder
    rating: 4.6,
    category: "tool",
    reviews: 76,
    images: [watchImg, fitbitImg, samsungImg],
    description: "Polizor unghiular profesional 125mm cu toate discurile necesare. Perfect pentru tăiere metal, piatră și șlefuire.",
    features: ["Disc 125mm", "11000 rpm", "Protecție praf", "Set discuri inclus"],
    owner: {
      name: "Cosmin R.",
      avatar: "C",
      rating: 4.5,
      verified: false
    },
    availability: "Disponibil pentru proiecte",
    deposit: 150
  }
];

export const getItemById = (id: number): Item | undefined => {
  return allItems.find(item => item.id === id);
};