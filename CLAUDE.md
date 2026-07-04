# Vinus — AI-Powered Web3 Creator Platform

## Stack
- Next.js 16.2.9 (Turbopack) + TypeScript + Tailwind v4
- wagmi + viem (MetaMask only, Base Network)
- Deployed on Netlify

## Architecture
- `app/lib/data.ts` — Creator mock data with avatars
- `app/lib/content.ts` — Content items per creator
- `app/lib/i18n.ts` — 20-language translations
- `app/lib/useCountUp.ts` — Animated counter hook
- `app/components/` — All UI components
- CSS Variables for dark/light theming in `globals.css`

## Key Features (Frontend Complete)
- 18+ age gate (sessionStorage)
- Dark/Light theme toggle (localStorage + CSS vars)
- 20-language i18n (localStorage + browser auto-detect)
- MetaMask wallet connect (wagmi, Base Network)
- Referral link capture (?ref=0x...)
- Creator profiles with real avatar images
- Content gallery with type filters + lock/unlock
- Purchase modal with coin selector (ETH/USDT/USDC)
- Toast notifications
- Skeleton loading components
- Mobile bottom navigation
- Responsive design

## Pages
- `/` — Home with AI Manager section, animated stats
- `/explore` — Creator discovery with search/filter/sort
- `/feed` — Post feed with blur-locked content
- `/creator/[id]` — Creator profile + content + subscription tiers
- `/dashboard` — Creator dashboard with upload form
- `/my` — Fan account (subscriptions, purchases, history, settings)
- `/profile/edit` — Creator profile editor
- `/subscribe/success` — Subscription confirmation
- `/about` — About + How It Works + Terms + Q&A (ko/en)
- `/become-a-creator` — Creator onboarding with FAQ
- `/roadmap` — 5-phase development roadmap
- `/sitemap.xml` — Auto-generated
- `/robots.txt` — Auto-generated

## Revenue Model
- Creator: 80%
- Vinus: 20% (of which 10% = 2% of total goes to 3-level referrers)
- Referral: L1 1% / L2 0.6% / L3 0.4% of total transaction

## Next Steps (Requires Supabase)
1. Supabase Auth (wallet-based)
2. Real data persistence (creators, posts, subscriptions)
3. AI translation on post upload (Claude API)
4. AI comment/DM translation
5. Smart contract deployment (referral + payments)
