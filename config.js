/**
 * Application Configuration
 * Contains all static data and configuration settings
 */

export const CONFIG = {
  // API Configuration
  GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent',
  // Note: API key should be stored securely (e.g., environment variable)
  // For production, use a backend proxy to hide the API key
  GEMINI_API_KEY: '', // Set this in environment or backend
  
  // Update intervals
  PRICE_UPDATE_INTERVAL: 3000, // 3 seconds
  MARKET_DATA_REFRESH: 60000, // 1 minute
  
  // User holdings
  userHoldingsSymbols: [
    "BTC", "ETH", "SOL", "DOGE", "MATIC", "KAS",
    "LDO", "UNI", "AAVE", "MKR", "BNB", "TAO",
    "ADA", "PEPE", "BONK"
  ],
  
  // All available assets
  assetSymbols: [
    "BTC", "ETH", "SOL", "DOGE", "MATIC", "KAS",
    "LDO", "UNI", "AAVE", "MKR", "BNB", "TAO",
    "ADA", "PEPE", "BONK", "XRP", "USDC", "SUI",
    "LTC", "ENA", "SHIB", "TRX", "LINK", "ATOM", "FIL"
  ],
  
  // Strategy type colors
  typeColors: {
    Defensive: "tag-blue",
    Balanced: "tag-green",
    Aggressive: "tag-orange",
    Momentum: "tag-purple",
    Dynamic: "tag-red"
  }
};

