# 🚀 Quick Start Guide

Get Zentryx Pro up and running in 5 minutes!

---

## 📦 What You'll Need

- ✅ GitHub account (free)
- ✅ Web browser
- ✅ 5 minutes of your time

**Optional (for AI features):**
- OpenAI API key ([Get one free](https://platform.openai.com/api-keys))

---

## 🎯 Quick Deploy (GitHub Pages)

### Step 1: Fork or Download

**Option A: Fork (Recommended)**
1. Go to the repository on GitHub
2. Click `Fork` button (top right)
3. Wait for fork to complete

**Option B: Download**
1. Click `Code` → `Download ZIP`
2. Extract the ZIP file
3. Proceed to Step 2

### Step 2: Upload to GitHub

If you downloaded:

1. Create new repository on GitHub
2. Upload all files
3. Commit changes

### Step 3: Enable GitHub Pages

1. Go to `Settings` → `Pages`
2. Source: Select `main` branch
3. Folder: Select `/ (root)`
4. Click `Save`
5. Wait 1-2 minutes
6. Visit your site: `https://YOUR_USERNAME.github.io/REPO_NAME/`

🎉 **Done!** Your site is live!

---

## 🤖 Enable AI Features (Optional)

### 1. Get API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or sign in
3. Click `Create new secret key`
4. **Copy and save** the key (you won't see it again!)

### 2. Add API Key

**Method A: Edit in GitHub (Easy)**
1. Open `index.html` in GitHub
2. Click edit (pencil icon)
3. Find line ~4589 (Ctrl/Cmd + F: `AI_CONFIG`)
4. Replace `YOUR_OPENAI_API_KEY_HERE` with your actual key
5. Commit changes

**Method B: Edit Locally (Advanced)**
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME

# Edit index.html
# Find AI_CONFIG section (line ~4589)
# Replace YOUR_OPENAI_API_KEY_HERE with your key

# Commit and push
git add index.html
git commit -m "config: add OpenAI API key"
git push
```

### 3. Test

1. Visit your site
2. Click "💬 Smart assistant"
3. Ask: "What's my portfolio allocation?"
4. Get intelligent AI response!

---

## 🎨 Customize

### Change Language

Click the language toggle (🌐) in top-right corner:
- English
- 简体中文 (Chinese Simplified)

### Change Theme

Click theme button in top-right:
- ☀️ Light (default)
- 🌙 Dark
- 🏖️ Sand

### Enable Colorblind Mode

1. Click accessibility icon
2. Select "Colorblind Mode"
3. Colors adjust automatically

---

## 📱 Features Overview

### Dashboard
- **Portfolio Summary** - See total value, today's change
- **Holdings** - View all your crypto assets
- **Quick Stats** - Key metrics at a glance

### Strategies
- **15+ Strategies** - Pre-built investment strategies
- **Comparison Tool** - Compare strategies side-by-side
- **Sentiment Overlay** - AI highlights best strategies for current market

### Analytics
- **Deep Dive** - Correlation matrix, Sharpe ratio, drawdown
- **Market Intel** - Fear & Greed Index, news, capital flows
- **Charts** - Beautiful interactive visualizations

### AI Assistant
- **Portfolio Analysis** - Get AI insights on your holdings
- **Strategy Advice** - Recommendations based on market conditions
- **Risk Assessment** - AI-powered risk evaluation

---

## 🔧 Troubleshooting

### Site Not Loading?
- Wait 2-3 minutes after enabling GitHub Pages
- Check if `index.html` is in root directory
- Try incognito/private browsing mode

### Charts Not Showing?
- Check browser console (F12) for errors
- Disable ad blockers
- Try different browser

### AI Not Working?
- Verify API key is correct
- Check if key has credits
- Look at console errors

### Need Help?
- Check [Full Documentation](README.md)
- View [Deployment Guide](DEPLOYMENT.md)
- [Open an Issue](https://github.com/YOUR_USERNAME/REPO_NAME/issues)

---

## 📚 Next Steps

### Learn More
- Read the [Full README](README.md)
- Explore [Contributing Guide](CONTRIBUTING.md)
- Check [Changelog](CHANGELOG.md)

### Customize
- Add your own strategies
- Modify color schemes
- Add custom charts

### Share
- Share your deployed site
- Get feedback from users
- Contribute improvements

---

## 💡 Pro Tips

### Performance
- Use Chrome Lighthouse for audits
- Optimize images if adding custom content
- Monitor page load times

### Security
- **Never commit API keys** to public repos
- Use environment variables for production
- Enable HTTPS (automatic on GitHub Pages)

### Maintenance
- Keep OpenAI API usage in check
- Monitor API credits
- Update dependencies periodically

---

## 🎓 Resources

### Documentation
- [README](README.md) - Full documentation
- [DEPLOYMENT](DEPLOYMENT.md) - Deployment guide
- [CONTRIBUTING](CONTRIBUTING.md) - Contribution guide

### External Links
- [OpenAI API Docs](https://platform.openai.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [Chart.js Docs](https://www.chartjs.org/)

---

## ✨ Example Sites

See Zentryx Pro in action:

- **Demo**: https://zentryx-pro.github.io/demo
- **Sandbox**: https://zentryx-pro.github.io/sandbox

---

## 🎉 You're All Set!

Congratulations! You now have:

- ✅ Live cryptocurrency portfolio tracker
- ✅ AI-powered investment assistant
- ✅ Beautiful, responsive interface
- ✅ Bilingual support (English/Chinese)
- ✅ Advanced analytics tools

**What's Next?**
- Explore all features
- Customize to your needs
- Share with friends
- Contribute to the project

---

<div align="center">

**Happy Trading!** 💎📈

Need help? [Open an Issue](https://github.com/YOUR_USERNAME/REPO_NAME/issues)

[⬆ Back to Top](#-quick-start-guide)

</div>
