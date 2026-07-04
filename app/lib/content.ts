export type ContentItem = {
  id: number;
  creatorId: number;
  type: "image" | "video" | "audio" | "text";
  title: string;
  description: string;
  price: number | null; // null = subscription only, number = buy price in USD
  isFree: boolean;
  thumbnail: string;
  image?: string; // emoji placeholder until real uploads
  date: string;
  duration?: string; // video/audio
  resolution?: string; // image
};

export const contentItems: ContentItem[] = [
  // Aria Nova (id:1) - Art & Illustration
  { id: 101, creatorId: 1, type: "image", title: "Shadow Series #12", description: "Limited edition digital print exploring the interplay of light and dark.", price: 15, isFree: false, image: "/content/thumb_1.jpg",
    thumbnail: "🖼", date: "Jun 15, 2026", resolution: "4K" },
  { id: 102, creatorId: 1, type: "video", title: "Process video: light study", description: "Full 2-hour timelapse of the latest collection creation.", price: 8, isFree: false, image: "/content/thumb_2.jpg",
    thumbnail: "🎬", date: "Jun 10, 2026", duration: "2h 04m" },
  { id: 103, creatorId: 1, type: "image", title: "Wallpaper Pack — June", description: "6 exclusive wallpapers for desktop and mobile.", price: null, isFree: false, image: "/content/thumb_3.jpg",
    thumbnail: "🖼", date: "Jun 1, 2026", resolution: "4K" },
  { id: 104, creatorId: 1, type: "text", title: "Behind the scenes — new collection", description: "Notes and sketches from the studio this month.", price: null, isFree: true, image: "/content/thumb_19.jpg",
    thumbnail: "✦", date: "May 28, 2026" },
  { id: 105, creatorId: 1, type: "image", title: "Shadow Series #11", description: "Previous edition — still available.", price: 12, isFree: false, image: "/content/thumb_4.jpg",
    thumbnail: "🖼", date: "May 15, 2026", resolution: "4K" },
  { id: 106, creatorId: 1, type: "video", title: "Studio tour 2026", description: "A look inside the workspace.", price: null, isFree: true, image: "/content/thumb_5.jpg",
    thumbnail: "🎬", date: "May 1, 2026", duration: "18m" },

  // Echo Veil (id:2) - Music & Audio
  { id: 201, creatorId: 2, type: "audio", title: "Midnight Drift", description: "Exclusive ambient track. 8-minute journey through dark electronica.", price: 5, isFree: false, thumbnail: "🎵", date: "Jun 13, 2026", duration: "8m 12s" },
  { id: 202, creatorId: 2, type: "audio", title: "Stems Pack vol.4", description: "Full stems and samples from last month's release.", price: 20, isFree: false, thumbnail: "🎛", date: "Jun 5, 2026" },
  { id: 203, creatorId: 2, type: "audio", title: "Live session — May", description: "Recorded live listening session with subscribers.", price: null, isFree: false, thumbnail: "🎙", date: "May 30, 2026", duration: "1h 12m" },
  { id: 204, creatorId: 2, type: "text", title: "Track notes: Midnight Drift", description: "How I built the soundscape, gear list, and process notes.", price: null, isFree: true, thumbnail: "♪", date: "May 20, 2026" },

  // Luna Craft (id:3) - Photography
  { id: 301, creatorId: 3, type: "image", title: "Iceland — Golden Hour Series", description: "20-photo essay from 3 weeks shooting in Iceland.", price: 25, isFree: false, image: "/content/thumb_6.jpg",
    thumbnail: "📷", date: "Jun 14, 2026", resolution: "6K RAW" },
  { id: 302, creatorId: 3, type: "video", title: "Lightroom Preset Pack", description: "12 custom presets used across the Iceland series.", price: 18, isFree: false, image: "/content/thumb_7.jpg",
    thumbnail: "🎬", date: "Jun 8, 2026" },
  { id: 303, creatorId: 3, type: "image", title: "Location Guide — Jökulsárlón", description: "GPS coordinates, timing, and settings for the glacier lagoon.", price: null, isFree: false, image: "/content/thumb_8.jpg",
    thumbnail: "📷", date: "Jun 2, 2026" },
  { id: 304, creatorId: 3, type: "text", title: "Trip report: Iceland", description: "What I learned from 400+ hours of waiting for the perfect light.", price: null, isFree: true, thumbnail: "◈", date: "May 25, 2026" },

  // Nyx Studio (id:4) - Digital Art
  { id: 401, creatorId: 4, type: "image", title: "Project Aether — Concept Drop", description: "12 concept pieces for an upcoming game world.", price: 20, isFree: false, image: "/content/thumb_9.jpg",
    thumbnail: "⬡", date: "Jun 12, 2026", resolution: "4K" },
  { id: 402, creatorId: 4, type: "video", title: "Character Design Breakdown", description: "3-hour deep dive into designing the Aether protagonist.", price: 15, isFree: false, image: "/content/thumb_10.jpg",
    thumbnail: "🎬", date: "Jun 6, 2026", duration: "3h 10m" },
  { id: 403, creatorId: 4, type: "text", title: "World-building notes", description: "Lore, factions, and visual language for Project Aether.", price: null, isFree: false, thumbnail: "⬡", date: "May 28, 2026" },

  // Vex Origins (id:5) - Writing
  { id: 501, creatorId: 5, type: "text", title: "Chapter 12 — The Hollow City", description: "Latest chapter of the serialized dark fiction novel.", price: null, isFree: false, thumbnail: "✒", date: "Jun 10, 2026" },
  { id: 502, creatorId: 5, type: "text", title: "Short story: The Cartographer", description: "Standalone dark fiction short. Free to read.", price: null, isFree: true, thumbnail: "✒", date: "Jun 3, 2026" },
  { id: 503, creatorId: 5, type: "text", title: "Writing guide: building dread", description: "Techniques for pacing and atmosphere in dark fiction.", price: 6, isFree: false, thumbnail: "✒", date: "May 20, 2026" },

  // Sol Cipher (id:6) - Video & Film
  { id: 601, creatorId: 6, type: "video", title: "The Waiting Room — Director's Cut", description: "Extended 28-minute version with director commentary track.", price: 12, isFree: false, image: "/content/thumb_11.jpg",
    thumbnail: "▶", date: "Jun 11, 2026", duration: "28m" },
  { id: 602, creatorId: 6, type: "text", title: "Script: The Waiting Room", description: "Full shooting script with annotations.", price: null, isFree: false, thumbnail: "▶", date: "Jun 4, 2026" },
  { id: 603, creatorId: 6, type: "video", title: "Filmmaking masterclass — lighting", description: "45-minute practical guide to low-budget lighting.", price: 20, isFree: false, image: "/content/thumb_12.jpg",
    thumbnail: "🎬", date: "May 18, 2026", duration: "45m" },
  { id: 604, creatorId: 6, type: "video", title: "Behind the shoot", description: "BTS footage from The Waiting Room production.", price: null, isFree: true, image: "/content/thumb_13.jpg",
    thumbnail: "▶", date: "May 10, 2026", duration: "12m" },

  // Dusk Atelier (id:7)
  { id: 701, creatorId: 7, type: "image", title: "Surrealist Print #08", description: "Limited run digital print — only 50 editions.", price: 18, isFree: false, image: "/content/thumb_14.jpg",
    thumbnail: "◐", date: "Jun 9, 2026", resolution: "5K" },
  { id: 702, creatorId: 7, type: "video", title: "Process: surrealism in layers", description: "Watch the creation of print #08 from sketch to final.", price: null, isFree: false, image: "/content/thumb_15.jpg",
    thumbnail: "🎬", date: "Jun 3, 2026", duration: "55m" },

  // Vera Sine (id:8)
  { id: 801, creatorId: 8, type: "audio", title: "Nocturne No.3 in D minor", description: "Original composition blending classical piano and electronic production.", price: 6, isFree: false, thumbnail: "♫", date: "Jun 8, 2026", duration: "6m 30s" },
  { id: 802, creatorId: 8, type: "video", title: "Tutorial: hybrid production", description: "How to layer classical piano with modern synths.", price: null, isFree: false, image: "/content/thumb_16.jpg",
    thumbnail: "🎬", date: "May 25, 2026", duration: "1h 20m" },
  { id: 803, creatorId: 8, type: "audio", title: "MIDI pack — May", description: "All MIDI files from May releases.", price: null, isFree: false, thumbnail: "🎛", date: "May 15, 2026" },

  // Frost Frame (id:9)
  { id: 901, creatorId: 9, type: "image", title: "Arctic Light Series", description: "15-photo collection from Svalbard in winter.", price: 22, isFree: false, image: "/content/thumb_17.jpg",
    thumbnail: "❄", date: "Jun 7, 2026", resolution: "6K" },
  { id: 902, creatorId: 9, type: "video", title: "Survival guide — Arctic photography", description: "Gear, cold weather prep, and safety for extreme environments.", price: 15, isFree: false, image: "/content/thumb_18.jpg",
    thumbnail: "🎬", date: "May 30, 2026", duration: "38m" },
  { id: 903, creatorId: 9, type: "text", title: "Location guide — Svalbard", description: "Detailed guide to shooting in the Norwegian Arctic.", price: null, isFree: false, thumbnail: "❄", date: "May 20, 2026" },
];

export function getCreatorContent(creatorId: number): ContentItem[] {
  return contentItems.filter((c) => c.creatorId === creatorId);
}