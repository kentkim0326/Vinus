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

// ── Content posts (mock data — will be replaced by Supabase) ──

export type ContentType = "image" | "video" | "audio" | "text";
export type AccessType = "free" | "subscription" | "purchase";

export interface CreatorPost {
  id: number;
  creatorId: number;
  type: ContentType;
  access: AccessType;
  title: string;
  description: string;
  thumbnail: string;   // emoji placeholder until real media
  date: string;
  likes: number;
  priceUSD?: number;   // for purchase-gated content
  price?: string;      // ETH price string e.g. "0.005"
  duration?: string;   // for video/audio e.g. "12:34"
}

export const creatorPosts: CreatorPost[] = [
  // ── Aria Nova (id:1) Art & Illustration ──
  { id: 101, creatorId: 1, type: "image", access: "free",         title: "Spring light study", description: "Exploring soft gradients in natural morning light. Watercolor on digital canvas.", thumbnail: "🌸", date: "Jun 15, 2026", likes: 284 },
  { id: 102, creatorId: 1, type: "image", access: "subscription", title: "Exclusive print pack vol.12", description: "12 high-resolution prints from the Shadow Series — available to subscribers only.", thumbnail: "🖼", date: "Jun 10, 2026", likes: 198 },
  { id: 103, creatorId: 1, type: "video", access: "subscription", title: "Process video: light study series", description: "Full 45-minute timelapse of the creation process from sketch to final render.", thumbnail: "🎨", date: "Jun 5, 2026", likes: 321, duration: "45:12" },
  { id: 104, creatorId: 1, type: "image", access: "purchase",     title: "Collector edition — Void Series #7", description: "Limited digital artwork. One of ten editions ever released. Full 4K resolution with certificate.", thumbnail: "✦", date: "Jun 1, 2026", likes: 156, priceUSD: 29, price: "0.008" },
  { id: 105, creatorId: 1, type: "text",  access: "free",         title: "My creative process explained", description: "How I moved from traditional media to digital illustration over 5 years.", thumbnail: "📝", date: "May 28, 2026", likes: 412 },
  { id: 106, creatorId: 1, type: "image", access: "purchase",     title: "Behind the canvas — raw sketches", description: "Unfiltered sketchbook pages, concept drafts, and abandoned ideas from the past month.", thumbnail: "✏️", date: "May 20, 2026", likes: 88, priceUSD: 9, price: "0.003" },

  // ── Echo Veil (id:2) Music & Audio ──
  { id: 201, creatorId: 2, type: "audio", access: "free",         title: "Midnight Drift — preview", description: "First 90 seconds of the latest ambient track. Full version for subscribers.", thumbnail: "🎵", date: "Jun 13, 2026", likes: 198, duration: "1:30" },
  { id: 202, creatorId: 2, type: "audio", access: "subscription", title: "Midnight Drift — full track", description: "18-minute deep ambient soundscape. Mixed in Dolby Atmos. Stems included for Fan tier.", thumbnail: "🎶", date: "Jun 13, 2026", likes: 310, duration: "18:04" },
  { id: 203, creatorId: 2, type: "audio", access: "purchase",     title: "Stems pack — June 2026", description: "All stems and samples from June tracks. 24-bit WAV, royalty-free for personal use.", thumbnail: "🎛", date: "Jun 8, 2026", likes: 74, priceUSD: 19, price: "0.005" },
  { id: 204, creatorId: 2, type: "video", access: "subscription", title: "Live session recording — Cascade EP", description: "Full 1-hour live recording of the Cascade EP performed in studio.", thumbnail: "🎙", date: "Jun 1, 2026", likes: 245, duration: "1:02:33" },
  { id: 205, creatorId: 2, type: "text",  access: "free",         title: "How I design soundscapes", description: "A deep dive into my layering technique, gear, and inspiration sources.", thumbnail: "📄", date: "May 25, 2026", likes: 167 },

  // ── Luna Craft (id:3) Photography ──
  { id: 301, creatorId: 3, type: "image", access: "free",         title: "Iceland — golden hour series", description: "Three weeks chasing light across the Icelandic highlands. 15 select shots.", thumbnail: "🏔", date: "Jun 14, 2026", likes: 512 },
  { id: 302, creatorId: 3, type: "image", access: "subscription", title: "Full Iceland collection (400 shots)", description: "Every shot from the expedition, unedited and edited. With location metadata and EXIF data.", thumbnail: "📷", date: "Jun 14, 2026", likes: 388 },
  { id: 303, creatorId: 3, type: "video", access: "subscription", title: "Editing tutorial — golden hour color grade", description: "Full Lightroom + Capture One walkthrough on matching the warm Icelandic tones.", thumbnail: "🎬", date: "Jun 8, 2026", likes: 290, duration: "38:50" },
  { id: 304, creatorId: 3, type: "image", access: "purchase",     title: "Print-ready file — Aurora #3", description: "Museum-quality TIFF file at 300dpi, 40x60cm. Certificate of authenticity included.", thumbnail: "🌌", date: "Jun 1, 2026", likes: 203, priceUSD: 49, price: "0.014" },
  { id: 305, creatorId: 3, type: "text",  access: "free",         title: "Location guide: Icelandic Highlands", description: "My full scouting notes, GPS coordinates, and best time of day for each location.", thumbnail: "🗺", date: "May 30, 2026", likes: 674 },
  { id: 306, creatorId: 3, type: "image", access: "purchase",     title: "Preset pack — Wilderness Vol.2", description: "12 Lightroom presets calibrated for mountain and tundra landscapes. Instant download.", thumbnail: "🎨", date: "May 22, 2026", likes: 445, priceUSD: 24, price: "0.007" },

  // ── Nyx Studio (id:4) Digital Art ──
  { id: 401, creatorId: 4, type: "image", access: "free",         title: "Project Aether — concept art drop", description: "First look at the world of Project Aether. Early concept exploration.", thumbnail: "⬡", date: "Jun 12, 2026", likes: 376 },
  { id: 402, creatorId: 4, type: "video", access: "subscription", title: "Full concept pipeline walkthrough", description: "How I go from a brief to a fully rendered environment in 6 hours.", thumbnail: "🎥", date: "Jun 6, 2026", likes: 288, duration: "1:14:20" },
  { id: 403, creatorId: 4, type: "image", access: "purchase",     title: "Asset pack — Aether Vol.1", description: "30 production-ready PSD assets from the Aether project. Commercial license included.", thumbnail: "📦", date: "Jun 1, 2026", likes: 155, priceUSD: 39, price: "0.011" },
  { id: 404, creatorId: 4, type: "text",  access: "subscription", title: "World-building document — Aether lore", description: "The complete lore bible: history, factions, environments, and narrative arcs.", thumbnail: "📖", date: "May 28, 2026", likes: 201 },

  // ── Vex Origins (id:5) Writing ──
  { id: 501, creatorId: 5, type: "text",  access: "free",         title: "Chapter 12 — The Hollow City", description: "The city had been silent for three days before anyone noticed...", thumbnail: "✒", date: "Jun 10, 2026", likes: 167 },
  { id: 502, creatorId: 5, type: "text",  access: "subscription", title: "Chapter 13 — The Waiting Room", description: "Subscribers-only chapter. The protagonist enters the unreachable floor.", thumbnail: "📚", date: "Jun 10, 2026", likes: 143 },
  { id: 503, creatorId: 5, type: "audio", access: "subscription", title: "Author reading — chapters 10–12", description: "Narrated by the author. Atmospheric background score included.", thumbnail: "🎧", date: "Jun 5, 2026", likes: 98, duration: "52:10" },
  { id: 504, creatorId: 5, type: "text",  access: "purchase",     title: "Annotated manuscript — The Hollow City", description: "Full annotated draft with author commentary, deleted scenes, and alternate endings.", thumbnail: "📜", date: "May 25, 2026", likes: 62, priceUSD: 14, price: "0.004" },

  // ── Sol Cipher (id:6) Video & Film ──
  { id: 601, creatorId: 6, type: "video", access: "free",         title: "The Waiting Room — trailer", description: "Official 3-minute trailer for the upcoming short film.", thumbnail: "▶", date: "Jun 11, 2026", likes: 445, duration: "3:02" },
  { id: 602, creatorId: 6, type: "video", access: "subscription", title: "Director's cut — The Waiting Room", description: "Full 28-minute director's cut with extended scenes and alternate ending.", thumbnail: "🎞", date: "Jun 11, 2026", likes: 389, duration: "28:44" },
  { id: 603, creatorId: 6, type: "video", access: "subscription", title: "Commentary track — cinematography breakdown", description: "Scene-by-scene breakdown of lighting decisions and camera choices.", thumbnail: "🎬", date: "Jun 7, 2026", likes: 211, duration: "41:05" },
  { id: 604, creatorId: 6, type: "text",  access: "purchase",     title: "Full screenplay — The Waiting Room", description: "Finalized production screenplay. PDF, fountain, and Final Draft formats included.", thumbnail: "📋", date: "Jun 1, 2026", likes: 134, priceUSD: 18, price: "0.005" },

  // ── Dusk Atelier (id:7) Art & Illustration ──
  { id: 701, creatorId: 7, type: "image", access: "free",         title: "Surreal still life — March edition", description: "Melting clocks and half-dissolved flowers. New surrealist collection.", thumbnail: "◐", date: "Jun 9, 2026", likes: 298 },
  { id: 702, creatorId: 7, type: "image", access: "subscription", title: "Print-quality downloads — March set", description: "All 8 images from the March collection at 300dpi, ready for A2 print.", thumbnail: "🖼", date: "Jun 9, 2026", likes: 189 },
  { id: 703, creatorId: 7, type: "purchase", access: "purchase",  title: "Signed limited print — Dissolution #4", description: "Physical A3 giclée print, signed and numbered 1/50. Ships worldwide.", thumbnail: "🎭", date: "Jun 1, 2026", likes: 77, priceUSD: 65, price: "0.018" },

  // ── Vera Sine (id:8) Music & Audio ──
  { id: 801, creatorId: 8, type: "audio", access: "free",         title: "Nocturne No.3 — piano sketch", description: "Raw studio recording of a new nocturne in D minor. Unedited.", thumbnail: "♫", date: "Jun 8, 2026", likes: 534, duration: "4:22" },
  { id: 802, creatorId: 8, type: "audio", access: "subscription", title: "Nocturne No.3 — final mix + sheet music", description: "Mastered recording with full sheet music PDF (piano + orchestral arrangement).", thumbnail: "🎹", date: "Jun 8, 2026", likes: 421, duration: "4:55" },
  { id: 803, creatorId: 8, type: "video", access: "subscription", title: "Piano lesson — advanced chord voicing", description: "30-minute tutorial on jazz-influenced chord voicings for classical pianists.", thumbnail: "🎓", date: "Jun 3, 2026", likes: 312, duration: "30:18" },
  { id: 804, creatorId: 8, type: "audio", access: "purchase",     title: "MIDI pack — Vera Sine Vol.3", description: "All original MIDI files from the past 3 months. Fully editable, royalty-free.", thumbnail: "🎛", date: "May 28, 2026", likes: 145, priceUSD: 22, price: "0.006" },

  // ── Frost Frame (id:9) Photography ──
  { id: 901, creatorId: 9, type: "image", access: "free",         title: "Arctic winter — January dispatch", description: "Selected shots from 3 weeks on the Svalbard ice shelf.", thumbnail: "❄", date: "Jun 7, 2026", likes: 389 },
  { id: 902, creatorId: 9, type: "image", access: "subscription", title: "Full Svalbard archive (280 shots)", description: "Complete raw + edited archive with GPS data and shooting notes.", thumbnail: "📷", date: "Jun 7, 2026", likes: 244 },
  { id: 903, creatorId: 9, type: "video", access: "subscription", title: "Cold weather photography masterclass", description: "Gear protection, exposure in snow, and composing white-on-white scenes.", thumbnail: "🎬", date: "Jun 2, 2026", likes: 178, duration: "55:30" },
  { id: 904, creatorId: 9, type: "image", access: "purchase",     title: "Print-ready — Polar Bear #2 (4K TIFF)", description: "Award-winning shot at 300dpi. Includes certificate of originality.", thumbnail: "🐻‍❄️", date: "May 25, 2026", likes: 311, priceUSD: 55, price: "0.015" },
];
