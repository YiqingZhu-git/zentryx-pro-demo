/**
 * Utility Functions
 * Common helper functions used throughout the application
 */

/**
 * Format price with appropriate decimal places
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
export function formatPrice(price) {
  if (!price || isNaN(price)) return "$0.00";
  if (price < 1) return `$${price.toPrecision(4)}`;
  return `$${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)}`;
}

/**
 * Format time since timestamp
 * @param {number} timestamp - Unix timestamp in milliseconds
 * @returns {string} Human-readable time string
 */
export function timeSince(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
}

/**
 * Format wallet address (truncate middle)
 * @param {string} address - Wallet address
 * @returns {string} Formatted address
 */
export function formatWallet(address) {
  if (!address) return "Unknown";
  if (address.startsWith("0x")) {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }
  return address;
}

/**
 * Get sentiment from news title
 * @param {string} title - News title
 * @returns {Object} Sentiment object with text and class
 */
export function getSentiment(title) {
  const positiveWords = [
    "soar",
    "boost",
    "explode",
    "embrace",
    "surge",
    "rebound",
    "rallies",
  ];
  const negativeWords = [
    "warning",
    "pressure",
    "loss",
    "crushed",
    "fails",
  ];
  const lowerTitle = title.toLowerCase();
  if (positiveWords.some((word) => lowerTitle.includes(word)))
    return { text: "Bullish", class: "tag-green" };
  if (negativeWords.some((word) => lowerTitle.includes(word)))
    return { text: "Bearish", class: "tag-red" };
  return { text: "Neutral", class: "tag-blue" };
}

/**
 * Handle image loading errors with fallback
 * @param {HTMLElement} img - Image element
 * @param {string} symbol - Asset symbol for fallback
 */
export function handleImageError(img, symbol) {
  img.onerror = null;
  img.src = `https://placehold.co/40x40/161b22/c9d1d9?text=${symbol.substring(
    0,
    2
  )}`;
}

/**
 * Show error message to user
 * @param {string} message - Error message
 * @param {HTMLElement} container - Container element
 */
export function showError(message, container) {
  if (!container) return;
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.setAttribute("role", "alert");
  errorDiv.textContent = message;
  container.insertBefore(errorDiv, container.firstChild);
  setTimeout(() => errorDiv.remove(), 5000);
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Safe localStorage getter with fallback
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Stored value or default
 */
export function getStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return defaultValue;
  }
}

/**
 * Safe localStorage setter
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
}

/**
 * Check if element is visible in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if visible
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Lazy load images
 * @param {NodeList} images - Image elements to lazy load
 */
export function lazyLoadImages(images) {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
}

