// Content types
export type ContentType = "image" | "video" | "audio" | "text";
export type AccessType = "free" | "subscription" | "paid";

export interface Content {
  id: number;
  creatorId: number;
  title: string;
  description: string;
  type: ContentType;
  access: AccessType;
  price?: number;        // USD — paid single purchase
  priceEth?: string;     // ETH equivalent (mock)
  thumbnail: string;     // emoji placeholder until real images
  date: string;
  likes: number;
  views: number;
  duration?: string;     // for video/audio
  tags?: string[];
}

// Mock content per creator
export const contents: Content[] = [
  // Aria Nova (id: 1) — Art & Illustration
  { id: 101, creatorId: 1, title: "Light Study Series Vol.3", description: "Full process breakdown of my latest collection — 47 steps from sketch to final.", type: "image", access: "paid", price: 12, priceEth: "0.004", thumbnail: "🖼", date: "Jun 15, 2026", likes: 284, views: 1840, tags: ["art", "process"] },
  { id: 102, creatorId: 1, title: "June Wallpaper Pack", description: "8 exclusive wallpapers for desktop and mobile, 4K resolution.", type: "image", access: "subscription", thumbnail: "🖼", date: "Jun 10, 2026", likes: 512, views: 3200 },
  { id: 103, creatorId: 1, title: "Behind the Scenes — New Collection", description: "Raw studio footage and commentary while creating this month's pieces.", type: "video", access: "free", thumbnail: "🎬", date: "Jun 5, 2026", likes: 198, views: 5400, duration: "12:34" },
  { id: 104, creatorId: 1, title: "Shadow & Light: Exclusive Print", description: "High-resolution digital print, limited to 50 collectors.", type: "image", access: "paid", price: 25, priceEth: "0.008", thumbnail: "🖼", date: "May 28, 2026", likes: 377, views: 2100 },

  // Echo Veil (id: 2) — Music & Audio
  { id: 201, creatorId: 2, title: "Midnight Drift (Full Track)", description: "48-minute ambient soundscape recorded live.", type: "audio", access: "paid", price: 5, priceEth: "0.0016", thumbnail: "🎵", date: "Jun 13, 2026", likes: 198, views: 980, duration: "48:02" },
  { id: 202, creatorId: 2, title: "Stems Pack — Volume 7", description: "Individual stems for Midnight Drift. Use in your own projects.", type: "audio", access: "subscription", thumbnail: "🎵", date: "Jun 8, 2026", likes: 145, views: 640, duration: "—" },
  { id: 203, creatorId: 2, title: "Early Release: Tidal Frequency", description: "Unmastered early preview of the upcoming album.", type: "audio", access: "free", thumbnail: "🎵", date: "Jun 1, 2026", likes: 302, views: 2100, duration: "6:18" },

  // Luna Craft (id: 3) — Photography
  { id: 301, creatorId: 3, title: "Iceland — Golden Hour Series", description: "400 hours of waiting for these 32 shots. Full resolution download included.", type: "image", access: "paid", price: 18, priceEth: "0.006", thumbnail: "📷", date: "Jun 14, 2026", likes: 512, views: 4200 },
  { id: 302, creatorId: 3, title: "Editing Presets — Arctic Pack", description: "12 Lightroom presets tuned for cold, high-contrast landscapes.", type: "image", access: "subscription", thumbnail: "📷", date: "Jun 7, 2026", likes: 340, views: 2800 },
  { id: 303, creatorId: 3, title: "How I Shot It — Behind the Frame", description: "Camera settings, location notes, and timing for every shot in the series.", type: "text", access: "free", thumbnail: "📝", date: "Jun 2, 2026", likes: 220, views: 3100 },

  // Nyx Studio (id: 4) — Digital Art
  { id: 401, creatorId: 4, title: "Project Aether — Concept Pack", description: "60 concept art pieces from the world of Project Aether. PSD files included.", type: "image", access: "paid", price: 30, priceEth: "0.01", thumbnail: "🖼", date: "Jun 12, 2026", likes: 376, views: 2900 },
  { id: 402, creatorId: 4, title: "Brush Pack Vol.4", description: "42 custom Procreate brushes for concept artists.", type: "image", access: "subscription", thumbnail: "🖼", date: "Jun 5, 2026", likes: 289, views: 1900 },
  { id: 403, creatorId: 4, title: "Speedpaint: Character Design", description: "1-hour speedpaint condensed to 8 minutes with commentary.", type: "video", access: "free", thumbnail: "🎬", date: "May 30, 2026", likes: 445, views: 6700, duration: "8:22" },

  // Vex Origins (id: 5) — Writing
  { id: 501, creatorId: 5, title: "The Hollow City — Chapter 12", description: "The latest chapter of the serialized dark fiction novel.", type: "text", access: "subscription", thumbnail: "📝", date: "Jun 10, 2026", likes: 167, views: 890 },
  { id: 502, creatorId: 5, title: "World-Building Bible: Hollow City", description: "The complete lore document — maps, history, factions.", type: "text", access: "paid", price: 8, priceEth: "0.0026", thumbnail: "📝", date: "Jun 3, 2026", likes: 201, views: 1100 },
  { id: 503, creatorId: 5, title: "Short Story: The Cartographer", description: "A standalone short story set in the same universe.", type: "text", access: "free", thumbnail: "📝", date: "May 25, 2026", likes: 312, views: 2400 },

  // Sol Cipher (id: 6) — Video & Film
  { id: 601, creatorId: 6, title: "The Waiting Room — Director's Cut", description: "Extended cut with 18 minutes of additional footage and director commentary.", type: "video", access: "paid", price: 15, priceEth: "0.005", thumbnail: "🎬", date: "Jun 11, 2026", likes: 445, views: 3300, duration: "34:12" },
  { id: 602, creatorId: 6, title: "Cinematography Masterclass Ep.4", description: "Deep dive into low-light shooting techniques.", type: "video", access: "subscription", thumbnail: "🎬", date: "Jun 4, 2026", likes: 298, views: 2100, duration: "22:45" },
  { id: 603, creatorId: 6, title: "Making Of: The Waiting Room", description: "15-minute behind-the-scenes documentary.", type: "video", access: "free", thumbnail: "🎬", date: "May 28, 2026", likes: 389, views: 5600, duration: "15:08" },

  // Dusk Atelier (id: 7) — Art
  { id: 701, creatorId: 7, title: "Surreal Garden Series", description: "8 large-format surrealist illustrations, print-ready.", type: "image", access: "paid", price: 20, priceEth: "0.0066", thumbnail: "🖼", date: "Jun 9, 2026", likes: 223, views: 1600 },
  { id: 702, creatorId: 7, title: "Monthly Print — June", description: "Exclusive signed digital print for subscribers.", type: "image", access: "subscription", thumbnail: "🖼", date: "Jun 1, 2026", likes: 180, views: 1200 },

  // Vera Sine (id: 8) — Music
  { id: 801, creatorId: 8, title: "Nocturne in D Minor", description: "Original composition blending classical piano with electronic production.", type: "audio", access: "paid", price: 6, priceEth: "0.002", thumbnail: "🎵", date: "Jun 8, 2026", likes: 412, views: 2800, duration: "5:44" },
  { id: 802, creatorId: 8, title: "Sheet Music + MIDI Pack", description: "Full notation and MIDI files for Nocturne in D Minor.", type: "audio", access: "subscription", thumbnail: "🎵", date: "Jun 3, 2026", likes: 267, views: 1500 },

  // Frost Frame (id: 9) — Photography
  { id: 901, creatorId: 9, title: "Arctic Expedition — Full Series", description: "Complete 80-image series from the 2026 Arctic expedition.", type: "image", access: "paid", price: 22, priceEth: "0.0073", thumbnail: "📷", date: "Jun 6, 2026", likes: 334, views: 2400 },
  { id: 902, creatorId: 9, title: "Raw Files — Svalbard Shoot", description: "Unedited RAW files from the Svalbard trip for subscribers.", type: "image", access: "subscription", thumbnail: "📷", date: "May 30, 2026", likes: 198, views: 980 },
];

export function getContentsByCreator(creatorId: number): Content[] {
  return contents.filter((c) => c.creatorId === creatorId);
}

export function getFreeContents(): Content[] {
  return contents.filter((c) => c.access === "free");
}
