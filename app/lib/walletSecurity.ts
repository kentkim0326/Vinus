// Wallet security utilities for Vinus

/**
 * Validate an Ethereum address format (0x + 40 hex chars).
 * Prevents injection of malformed referral addresses.
 */
export function isValidAddress(address: string | null | undefined): boolean {
  if (!address) return false;
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Safely shorten an address for display (0x1234...abcd).
 * Returns empty string for invalid input.
 */
export function shortenAddress(address: string | null | undefined): string {
  if (!isValidAddress(address)) return "";
  return `${address!.slice(0, 6)}...${address!.slice(-4)}`;
}

/**
 * Sanitize a referral address from URL params.
 * Only returns the address if it passes strict validation.
 * Prevents self-referral and malformed input.
 */
export function sanitizeReferrer(
  ref: string | null,
  ownAddress?: string | null
): string | null {
  if (!isValidAddress(ref)) return null;
  // Prevent self-referral
  if (ownAddress && ref!.toLowerCase() === ownAddress.toLowerCase()) {
    return null;
  }
  return ref!.toLowerCase();
}

/**
 * Validate a USD price is within safe bounds.
 * Prevents overflow / negative / absurd values before on-chain tx.
 */
export function isValidPrice(price: number): boolean {
  return (
    typeof price === "number" &&
    Number.isFinite(price) &&
    price >= 0 &&
    price <= 1_000_000
  );
}

/**
 * The canonical Base Network chain ID (mainnet).
 * Used to verify the user is on the correct network before any tx.
 */
export const BASE_CHAIN_ID = 8453;
export const BASE_SEPOLIA_CHAIN_ID = 84532;

/**
 * Check whether a chainId is a supported Vinus network.
 */
export function isSupportedChain(chainId: number | undefined): boolean {
  return chainId === BASE_CHAIN_ID || chainId === BASE_SEPOLIA_CHAIN_ID;
}
