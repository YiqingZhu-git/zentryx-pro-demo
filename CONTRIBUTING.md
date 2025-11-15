# Contributing to Zentryx Pro

Thank you for your interest in contributing to Zentryx Pro! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

---

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to a positive environment:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior:**

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Text editor or IDE (VS Code, WebStorm, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- Git for version control

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/zentryx-pro.git
   cd zentryx-pro
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/zentryx-pro.git
   ```

### Set Up Development Environment

1. Open `index.html` in your browser
2. Open browser DevTools (F12) for debugging
3. Make changes to files
4. Refresh browser to see changes

---

## 🔄 Development Process

### Workflow

1. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our coding standards

3. **Test thoroughly** in multiple browsers

4. **Commit your changes** with clear messages

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/ai-recommendations`)
- `fix/` - Bug fixes (e.g., `fix/chart-rendering`)
- `docs/` - Documentation updates (e.g., `docs/api-guide`)
- `style/` - Code style improvements (e.g., `style/css-refactor`)
- `refactor/` - Code refactoring (e.g., `refactor/portfolio-calc`)
- `test/` - Adding tests (e.g., `test/unit-tests`)
- `chore/` - Maintenance tasks (e.g., `chore/update-deps`)

---

## 💻 Coding Standards

### HTML

- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Maintain consistent indentation (2 spaces)
- Use lowercase for element names and attributes
- Quote all attribute values

**Example:**
```html
<section class="dashboard-grid" aria-label="Portfolio overview">
  <div class="glass-card p-6" role="region" aria-labelledby="portfolioTitle">
    <h2 id="portfolioTitle">Portfolio Summary</h2>
    <!-- content -->
  </div>
</section>
```

### CSS

- Use CSS variables for theming
- Follow BEM-like naming convention
- Group related properties
- Add comments for complex sections
- Maintain responsive design

**Example:**
```css
/* Portfolio Card Styles */
.portfolio-card {
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-2px);
}

.portfolio-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}
```

### JavaScript

- Use ES6+ features (const, let, arrow functions, template literals)
- Add JSDoc comments for functions
- Use meaningful variable names
- Keep functions small and focused
- Handle errors gracefully

**Example:**
```javascript
/**
 * Calculate portfolio total value
 * @param {Array} holdings - Array of portfolio holdings
 * @returns {number} Total portfolio value in USD
 */
function calculatePortfolioValue(holdings) {
  if (!Array.isArray(holdings)) {
    console.error('Invalid holdings data');
    return 0;
  }

  return holdings.reduce((total, holding) => {
    const value = holding.quantity * holding.price;
    return total + value;
  }, 0);
}
```

### File Organization

- Keep related code together
- Use meaningful file names
- Add comments to explain complex logic
- Separate concerns (HTML, CSS, JS)

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, no code change)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### Examples

```bash
# Good commit messages
git commit -m "feat(ai): add GPT-4o-mini integration for portfolio analysis"
git commit -m "fix(charts): resolve donut chart gap issue on Safari"
git commit -m "docs(readme): add AI configuration instructions"
git commit -m "style(css): improve dark theme contrast ratios"
git commit -m "refactor(portfolio): simplify value calculation logic"

# Bad commit messages
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "changes"
```

### Detailed Commit Message

For significant changes, include a detailed body:

```
feat(theme): add dark theme support

- Add dark theme CSS variables
- Implement theme switcher in navigation
- Update all components to respect theme
- Add localStorage persistence for theme preference

Closes #123
```

---

## 🔍 Pull Request Process

### Before Submitting

1. **Update your branch** with latest upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all tests** (if available)

3. **Test in multiple browsers**:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

4. **Check for console errors**

5. **Verify responsive design**

### Pull Request Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe the tests you ran and how to reproduce

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] No new warnings generated
- [ ] Tested in multiple browsers
- [ ] Responsive design verified
- [ ] Accessibility checked
```

### Review Process

1. At least one maintainer must review the PR
2. All comments must be addressed
3. CI/CD checks must pass (if implemented)
4. No merge conflicts

---

## 🧪 Testing

### Manual Testing Checklist

**Functionality:**
- [ ] Portfolio calculations are correct
- [ ] Charts render properly
- [ ] Theme switching works
- [ ] Language toggle works
- [ ] AI assistant responds correctly
- [ ] Navigation works smoothly

**Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Responsive Testing:**
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast
- [ ] Focus indicators visible

### Browser DevTools

Use these tools for testing:
- **Console** - Check for errors
- **Network** - Monitor API calls
- **Performance** - Check loading times
- **Lighthouse** - Run audits

---

## 📚 Documentation

### Code Comments

- Add JSDoc comments for all functions
- Explain complex algorithms
- Document magic numbers
- Include examples for tricky code

### README Updates

When adding new features:
1. Update the Features section
2. Add configuration instructions if needed
3. Update screenshots if UI changed
4. Add to the Roadmap section

### API Documentation

If adding new APIs or integrations:
1. Document endpoints
2. Show request/response examples
3. Explain error handling
4. Provide setup instructions

---

## 🎯 Areas for Contribution

### High Priority

- [ ] Unit tests for utility functions
- [ ] Integration tests for UI components
- [ ] Performance optimizations
- [ ] Accessibility improvements
- [ ] Mobile app development

### Medium Priority

- [ ] Additional language support
- [ ] More chart types
- [ ] Export functionality (PDF/CSV)
- [ ] Custom strategy builder
- [ ] Price alerts

### Good First Issues

- [ ] Fix typos in documentation
- [ ] Improve error messages
- [ ] Add more sample data
- [ ] Enhance tooltips
- [ ] Improve color schemes

---

## 🆘 Getting Help

### Resources

- [GitHub Issues](https://github.com/yourusername/zentryx-pro/issues)
- [Documentation](#)
- [Discord Community](#)

### Questions?

- Check existing issues first
- Use GitHub Discussions for questions
- Join our Discord for real-time help

---

## 🏆 Recognition

Contributors will be recognized in:
- README.md Contributors section
- Release notes
- Project website (if applicable)

---

Thank you for contributing to Zentryx Pro! 🚀

**Happy Coding!** 💙
