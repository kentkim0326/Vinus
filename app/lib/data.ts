export const creators = [
  {
    id: 1,
    name: "Aria Nova",
    category: "Art & Illustration",
    subscribers: 2840,
    preview: "✦",
    tier: "from $5/mo",
    bio: "Digital artist exploring the boundaries between light and shadow. Exclusive prints, process videos, and early access to new collections.",
    tiers: [
      { name: "Supporter", price: 5, perks: ["Monthly wallpaper pack", "Early access to new art"] },
      { name: "Collector", price: 15, perks: ["Everything in Supporter", "Monthly print (digital)", "Behind the scenes content"] },
      { name: "Patron", price: 30, perks: ["Everything in Collector", "1:1 monthly feedback session", "Name in credits"] }
    ],
    twitter: "@arianovo",
    instagram: "@aria.nova",
  },
  {
    id: 2,
    name: "Echo Veil",
    category: "Music & Audio",
    subscribers: 1520,
    preview: "♪",
    tier: "from $3/mo",
    bio: "Ambient soundscapes and electronic compositions. New tracks every week, stems for download, and live listening sessions.",
    tiers: [
      { name: "Listener", price: 3, perks: ["Monthly exclusive track", "Early releases"] },
      { name: "Fan", price: 10, perks: ["Everything in Listener", "Stems & samples pack", "Monthly Q&A"] },
      { name: "Producer", price: 25, perks: ["Everything in Fan", "Full project files", "Collaboration opportunity"] }
    ],
    twitter: "@echoveil",
    instagram: "@echo.veil",
  },
  {
    id: 3,
    name: "Luna Craft",
    category: "Photography",
    subscribers: 4210,
    preview: "◈",
    tier: "from $8/mo",
    bio: "Fine art photography from remote landscapes. Limited edition prints, location guides, and photography workshops.",
    tiers: [
      { name: "Explorer", price: 8, perks: ["Monthly photo essay", "Location notes"] },
      { name: "Adventurer", price: 20, perks: ["Everything in Explorer", "Full resolution downloads", "Editing presets"] },
      { name: "Expedition", price: 50, perks: ["Everything in Adventurer", "Monthly 1:1 mentorship", "Private workshop access"] }
    ],
    twitter: "@lunacraft",
    instagram: "@luna.craft",
  },
  {
    id: 4,
    name: "Nyx Studio",
    category: "Digital Art",
    subscribers: 3100,
    preview: "⬡",
    tier: "from $5/mo",
    bio: "Concept art and world-building for games and films. Process breakdowns, asset packs, and design critiques.",
    tiers: [
      { name: "Viewer", price: 5, perks: ["Monthly asset pack", "Process videos"] },
      { name: "Student", price: 15, perks: ["Everything in Viewer", "Tutorial library access", "Brush packs"] },
      { name: "Artist", price: 35, perks: ["Everything in Student", "Monthly critique session", "Commission priority"] }
    ],
    twitter: "@nyxstudio",
    instagram: "@nyx.studio",
  },
  {
    id: 5,
    name: "Vex Origins",
    category: "Writing",
    subscribers: 980,
    preview: "✒",
    tier: "from $2/mo",
    bio: "Dark fiction and world-building essays. Serialized stories, writing guides, and early manuscript access.",
    tiers: [
      { name: "Reader", price: 2, perks: ["Monthly short story", "Newsletter"] },
      { name: "Subscriber", price: 8, perks: ["Everything in Reader", "Full serialized novel access", "Writing notes"] },
      { name: "Collaborator", price: 20, perks: ["Everything in Subscriber", "Manuscript feedback", "Character naming rights"] }
    ],
    twitter: "@vexorigins",
    instagram: "@vex.origins",
  },
  {
    id: 6,
    name: "Sol Cipher",
    category: "Video & Film",
    subscribers: 2250,
    preview: "▶",
    tier: "from $10/mo",
    bio: "Independent filmmaker and visual storyteller. Short films, director commentary, and filmmaking masterclasses.",
    tiers: [
      { name: "Watcher", price: 10, perks: ["Monthly short film", "Director commentary"] },
      { name: "Cinephile", price: 25, perks: ["Everything in Watcher", "Extended cuts", "Script access"] },
      { name: "Producer", price: 60, perks: ["Everything in Cinephile", "Set visit (virtual)", "Executive producer credit"] }
    ],
    twitter: "@solcipher",
    instagram: "@sol.cipher",
  },
  {
    id: 7,
    name: "Dusk Atelier",
    category: "Art & Illustration",
    subscribers: 1890,
    preview: "◐",
    tier: "from $6/mo",
    bio: "Surrealist illustrations and limited edition prints.",
    tiers: [
      { name: "Admirer", price: 6, perks: ["Monthly illustration", "Early access"] },
      { name: "Collector", price: 18, perks: ["Everything in Admirer", "Print downloads", "Process videos"] },
      { name: "Patron", price: 40, perks: ["Everything in Collector", "Signed prints", "Studio visits"] }
    ],
    twitter: "@duskatelier",
    instagram: "@dusk.atelier",
  },
  {
    id: 8,
    name: "Vera Sine",
    category: "Music & Audio",
    subscribers: 3400,
    preview: "♫",
    tier: "from $4/mo",
    bio: "Classical piano meets modern electronic production.",
    tiers: [
      { name: "Listener", price: 4, perks: ["Monthly track", "Sheet music"] },
      { name: "Student", price: 12, perks: ["Everything in Listener", "Tutorial videos", "MIDI files"] },
      { name: "Collaborator", price: 30, perks: ["Everything in Student", "1:1 lessons", "Remix rights"] }
    ],
    twitter: "@verasine",
    instagram: "@vera.sine",
  },
  {
    id: 9,
    name: "Frost Frame",
    category: "Photography",
    subscribers: 2100,
    preview: "❄",
    tier: "from $7/mo",
    bio: "Arctic and wilderness photography.",
    tiers: [
      { name: "Explorer", price: 7, perks: ["Monthly photo series", "Location guides"] },
      { name: "Adventurer", price: 20, perks: ["Everything in Explorer", "Raw files", "Editing presets"] },
      { name: "Expedition", price: 45, perks: ["Everything in Adventurer", "Workshop access", "Print collection"] }
    ],
    twitter: "@frostframe",
    instagram: "@frost.frame",
  },
];

export type Creator = typeof creators[0];

// Content types: image | video | audio | text
export type ContentType = "image" | "video" | "audio" | "text";
export type AccessType = "free" | "subscription" | "purchase";

export interface CreatorPost {
  id: number;
  creatorId: number;
  title: string;
  description: string;
  type: ContentType;
  access: AccessType;
  price?: number;          // ETH price for one-time purchase
  priceUSD?: number;       // USD equivalent
  minTier?: number;        // 0=Supporter, 1=mid, 2=top (for subscription access)
  date: string;
  likes: number;
  thumbnail: string;       // emoji placeholder until real images
  duration?: string;       // for video/audio
  tags: string[];
}

export const creatorPosts: CreatorPost[] = [
  // Aria Nova (id:1) — Art & Illustration
  { id: 101, creatorId: 1, title: "Shadow Series Vol.3 — Full Process Video", description: "3-hour timelapse of my latest digital painting from sketch to final render. Includes commentary and brush settings.", type: "video", access: "subscription", minTier: 1, date: "Jun 15, 2026", likes: 284, thumbnail: "🎨", duration: "3h 12m", tags: ["process", "digital art", "timelapse"] },
  { id: 102, creatorId: 1, title: "June Wallpaper Pack (8 sizes)", description: "This month's exclusive wallpaper set in 8 resolutions for desktop and mobile.", type: "image", access: "subscription", minTier: 0, date: "Jun 10, 2026", likes: 512, thumbnail: "🖼", tags: ["wallpaper", "exclusive"] },
  { id: 103, creatorId: 1, title: "Limited Print — 'Between Light & Dark'", description: "High-res digital print, 4K resolution, ready for printing. Limited to 50 downloads.", type: "image", access: "purchase", price: 0.008, priceUSD: 22, date: "Jun 5, 2026", likes: 198, thumbnail: "🌒", tags: ["print", "limited edition"] },
  { id: 104, creatorId: 1, title: "Behind the Scenes — New Collection", description: "A sneak peek into my upcoming Shadow Series. Sketches and early concepts.", type: "image", access: "free", date: "Jun 1, 2026", likes: 890, thumbnail: "✨", tags: ["preview", "free"] },
  { id: 105, creatorId: 1, title: "Patron Q&A — June Session Recording", description: "Full recording of last month's live feedback session with Patron tier members.", type: "video", access: "subscription", minTier: 2, date: "May 28, 2026", likes: 143, thumbnail: "📹", duration: "58m", tags: ["Q&A", "patrons only"] },

  // Echo Veil (id:2) — Music & Audio
  { id: 201, creatorId: 2, title: "Midnight Drift — Full Track", description: "45-minute ambient journey. Layered synths, field recordings from Tokyo streets at 3am.", type: "audio", access: "subscription", minTier: 0, date: "Jun 13, 2026", likes: 340, thumbnail: "🌌", duration: "45m", tags: ["ambient", "exclusive"] },
  { id: 202, creatorId: 2, title: "Stems Pack — Midnight Drift", description: "Individual stems for every layer in Midnight Drift. 24 tracks, 48kHz WAV.", type: "audio", access: "subscription", minTier: 1, date: "Jun 13, 2026", likes: 167, thumbnail: "🎛", tags: ["stems", "production"] },
  { id: 203, creatorId: 2, title: "Neon Rain (Free Preview)", description: "Free 2-minute preview of my latest track. Full version for subscribers.", type: "audio", access: "free", date: "Jun 8, 2026", likes: 621, thumbnail: "🎵", duration: "2m", tags: ["preview", "free"] },
  { id: 204, creatorId: 2, title: "Full Project File — Void Sessions EP", description: "Ableton Live project file for the complete Void Sessions EP. Learn my full production chain.", type: "audio", access: "purchase", price: 0.015, priceUSD: 42, date: "Jun 1, 2026", likes: 289, thumbnail: "🎹", tags: ["project file", "tutorial"] },

  // Luna Craft (id:3) — Photography
  { id: 301, creatorId: 3, title: "Iceland Series — Golden Hour (30 photos)", description: "Full 30-photo series from 3 weeks in Iceland. Full resolution 42MP RAW+JPEG.", type: "image", access: "subscription", minTier: 1, date: "Jun 14, 2026", likes: 892, thumbnail: "🌅", tags: ["Iceland", "landscape", "golden hour"] },
  { id: 302, creatorId: 3, title: "Location Guide — Vestrahorn", description: "GPS coordinates, best times of day, gear recommendations, and weather tips for Vestrahorn.", type: "text", access: "subscription", minTier: 0, date: "Jun 10, 2026", likes: 445, thumbnail: "🗺", tags: ["guide", "location"] },
  { id: 303, creatorId: 3, title: "Editing Presets Pack — Iceland Moods", description: "12 Lightroom presets tuned for Arctic and dramatic landscape photography.", type: "image", access: "purchase", price: 0.012, priceUSD: 34, date: "Jun 5, 2026", likes: 678, thumbnail: "🎞", tags: ["presets", "Lightroom"] },
  { id: 304, creatorId: 3, title: "Jökulsárlón — Free Photo Essay", description: "5 photos and the story behind shooting the glacier lagoon at midnight.", type: "image", access: "free", date: "Jun 1, 2026", likes: 1240, thumbnail: "🧊", tags: ["free", "essay"] },

  // Sol Cipher (id:6) — Video & Film
  { id: 601, creatorId: 6, title: "The Waiting Room — Director's Cut", description: "Extended 24-minute version of my award-winning short film with director commentary track.", type: "video", access: "subscription", minTier: 1, date: "Jun 11, 2026", likes: 445, thumbnail: "🎬", duration: "24m", tags: ["short film", "director's cut"] },
  { id: 602, creatorId: 6, title: "Cinematography Masterclass — Episode 4", description: "Deep dive into handheld camera techniques for emotional storytelling.", type: "video", access: "subscription", minTier: 0, date: "Jun 7, 2026", likes: 312, thumbnail: "🎥", duration: "1h 8m", tags: ["masterclass", "cinematography"] },
  { id: 603, creatorId: 6, title: "Script — The Waiting Room", description: "Full annotated screenplay with director notes and shot list.", type: "text", access: "purchase", price: 0.006, priceUSD: 17, date: "Jun 3, 2026", likes: 198, thumbnail: "📝", tags: ["script", "screenplay"] },
  { id: 604, creatorId: 6, title: "Free: Trailer — Broken Signal", description: "Official trailer for my upcoming short film. Dropping this summer.", type: "video", access: "free", date: "May 30, 2026", likes: 2100, thumbnail: "▶", duration: "2m 30s", tags: ["trailer", "free"] },
];
