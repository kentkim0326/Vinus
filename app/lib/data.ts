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