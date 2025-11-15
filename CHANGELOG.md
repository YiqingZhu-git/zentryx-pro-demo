# Changelog

All notable changes to Zentryx Pro will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-11-15

### 🎉 Major Release - AI Integration & Bilingual Support

This is a major update bringing AI-powered insights and full bilingual support to Zentryx Pro.

### Added

#### AI Features
- **Smart AI Assistant** - Integrated OpenAI GPT-4o-mini for intelligent portfolio analysis
  - Context-aware responses based on entire portfolio
  - Natural language interface in English and Chinese
  - Portfolio recommendations and risk assessment
  - Market sentiment-based insights
- **AI Configuration System** - Easy setup for OpenAI API integration
- **Portfolio Context Gathering** - Automated data collection for AI analysis
- **Error Handling** - Comprehensive error messages for AI API issues

#### Internationalization
- **Full Bilingual Support** - Complete English and Chinese (Simplified) interface
- **Translation System** - Object-based i18n with 100+ translated strings
- **Dynamic Translation** - Real-time language switching without page reload
- **Chart Localization** - Translated chart labels and tooltips
- **Data Attributes** - `data-translate` attributes for automatic translation

#### UI/UX Enhancements
- **Sentiment Overlay Feature** - Market sentiment-based strategy highlighting
  - Purple glow effect for favored strategies
  - Dual toggle switches (header card + strategy list)
  - Market context integration with Fear & Greed Index
- **Strategy Card Improvements** - Enhanced clickability and discoverability
  - Click hint banner with visual indicators
  - Enhanced hover effects (lift, shadow, border)
  - Active state feedback
- **Dark Theme Optimization** - Complete dark mode adaptation
  - Fixed white backgrounds in dark theme
  - Glass morphism effects for dark mode
  - Proper contrast ratios throughout
- **Theme System Enhancements** - Better theme switching
  - Smooth transitions between themes
  - Persistent theme selection
  - Colorblind-friendly mode

#### Visual Improvements
- **Asset Allocation Chart** - Fixed donut chart rendering
  - Closed gap issues resolved
  - Enhanced tooltip styling
  - Smooth animations (1000ms easeInOutQuart)
- **Purple Glow Effects** - Sentiment-favored strategy highlighting
  - CSS-based glow effects
  - Hover state enhancements
  - Class-based state management
- **Typography Scaling** - Responsive font sizes
  - Base: 15px
  - Desktop (1024px+): 16px
  - Large screens (1440px+): 17px
- **Spacing Refinements** - More comfortable layout
  - Reduced excessive whitespace
  - Consistent gap sizes
  - Better visual hierarchy

#### Developer Experience
- **Code Organization** - Better file structure
- **Documentation** - Comprehensive README and guides
- **Git Integration** - .gitignore and contribution guidelines
- **Security Guidelines** - API key protection best practices

### Fixed

#### Critical Fixes
- **Sentiment Overlay Glow Persistence** - Purple glow now persists when overlay is enabled
  - Changed from fixed values to empty strings for reset
  - Enhanced glow with double-layer shadow
  - Added sentiment-favored class for state management
- **Element Selector Issues** - Fixed incorrect strategy card selectors
  - Changed from `.strategy-card` to `.glass-card[data-strategy-id]`
  - Updated CSS selectors to match
  - Proper attribute usage throughout

#### UI Fixes
- **Dark Theme Background** - Fixed white backgrounds in dark mode
  - Top navigation bar now uses dark colors
  - Hero section uses dark gradients
  - All cards properly themed
- **Chart Rendering** - Fixed asset allocation donut chart
  - Removed border gaps (borderWidth: 0)
  - Set spacing to 0
  - Transparent border colors
- **Text Visibility** - Fixed Smart Assistant text colors
  - White text on dark background
  - Proper placeholder colors
  - Improved contrast ratios

#### Data Fixes
- **Market Sentiment Source** - Fixed Fear & Greed Index data retrieval
  - Changed from non-existent `fng-image` element
  - Now uses `marketSentimentCard` with `data-sentiment-value`
  - Proper fallback values

### Changed

#### Performance
- **CSS Specificity** - Improved selector efficiency
- **Animation Timing** - Optimized transition durations
- **Asset Loading** - Better resource management

#### Architecture
- **Translation System** - More maintainable structure
- **Theme Management** - Cleaner theme switching logic
- **Component Organization** - Better separation of concerns

### Security
- **API Key Warnings** - Clear security notices for production
- **Best Practices** - Documentation for secure deployment
- **Environment Variables** - Guidelines for key management

---

## [1.0.0] - 2024-11-14

### Initial Release

#### Core Features
- **Portfolio Dashboard** - Real-time portfolio tracking
- **Strategy Library** - 15+ pre-built investment strategies
- **Market Intelligence** - Fear & Greed Index integration
- **Deep Analytics** - Correlation matrix, Sharpe ratio, drawdown analysis
- **Smart Allocation** - AI-generated portfolio allocation
- **Chart Visualizations** - Interactive Chart.js charts
- **Responsive Design** - Mobile-first approach
- **Glass Morphism UI** - Modern design aesthetic

#### Technical Implementation
- **Vanilla JavaScript** - No framework dependencies
- **CSS Variables** - Theme system foundation
- **Chart.js Integration** - Beautiful data visualizations
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized rendering and updates

---

## Unreleased

### Planned Features

#### Version 2.1.0
- [ ] Portfolio backtesting engine
- [ ] Custom strategy builder
- [ ] Export functionality (PDF/CSV)
- [ ] Price alerts system
- [ ] Web3 wallet integration

#### Version 2.2.0
- [ ] Mobile app (React Native)
- [ ] DeFi yield tracking
- [ ] Multi-currency support
- [ ] Advanced charting tools
- [ ] Social trading features

#### Version 3.0.0
- [ ] Backend API
- [ ] User authentication
- [ ] Cloud portfolio sync
- [ ] Historical data storage
- [ ] Advanced AI features

---

## Version History

### Semantic Versioning

We use [SemVer](https://semver.org/) for versioning:
- **MAJOR** version: Incompatible API changes
- **MINOR** version: New functionality (backwards compatible)
- **PATCH** version: Bug fixes (backwards compatible)

### Release Schedule

- **Major releases**: Quarterly
- **Minor releases**: Monthly
- **Patch releases**: As needed

---

## Migration Guides

### Upgrading to 2.0.0

#### Breaking Changes
None. This is a feature release with full backwards compatibility.

#### New Features
1. **AI Assistant** - Requires OpenAI API key configuration
2. **Chinese Language** - Automatic detection or manual toggle
3. **Sentiment Overlay** - Optional feature, disabled by default

#### Configuration Updates
Add OpenAI API key to `index.html`:
```javascript
const AI_CONFIG = {
  apiKey: 'your-api-key-here',
  model: 'gpt-4o-mini',
  endpoint: 'https://api.openai.com/v1/chat/completions'
};
```

---

## Contributors

### Version 2.0.0
- **Lead Developer** - Core features and AI integration
- **UI/UX Designer** - Theme system and visual improvements
- **Translator** - Chinese localization
- **QA Team** - Testing and bug fixes

### Version 1.0.0
- **Core Team** - Initial release

---

## Support

For questions about specific versions:
- Check the [README](README.md)
- Review [Contributing Guidelines](CONTRIBUTING.md)
- Open an [Issue](https://github.com/yourusername/zentryx-pro/issues)

---

**Last Updated**: November 15, 2024
