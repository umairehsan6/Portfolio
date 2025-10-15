# 🚀 Mian Umair Ehsan - Portfolio Website

A modern, animated portfolio website showcasing my work as a Django & React Developer. Built with React, Framer Motion, and designed with a focus on performance and user experience.

## ✨ Features

### 🎨 **Design & Animation**
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Particle Background** - Interactive particle system
- **Custom Cursor** - Unique cursor effect for desktop
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Auto Section Detection** - Smart navigation that highlights current section

### 📱 **Sections**
- **Hero Section** - Dynamic role rotation with animated introduction
- **About** - Personal introduction with animated statistics
- **Skills** - Interactive skill visualization
- **Experience** - Professional timeline
- **Projects** - Filterable project showcase with live demos
- **Contact** - Working contact form powered by Formspree

### 🛠 **Tech Stack**
- **Frontend**: React 18, Framer Motion
- **Styling**: CSS3 with custom properties
- **Icons**: React Icons
- **Form**: Formspree integration
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/umairehsan6/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Contact Form Setup
The contact form uses Formspree. To set up:
1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Get your form endpoint
4. Update the form ID in `src/components/Contact.jsx`

### Personal Information
Update your information in:
- `src/components/Hero.jsx` - Name and roles
- `src/components/About.jsx` - About section
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact details
- `src/components/Header.jsx` - Social links
- `src/assets/` - Add your CV as PDF

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # CV and images
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
└── package.json
```

## 🎨 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary: #ff6b35;
  --primary-light: #ff8c60;
  --gradient-primary: linear-gradient(45deg, #ff6b35, #ff8c60);
}
```

### Fonts
Fonts are loaded from Google Fonts in `index.html`:
- **Inter** - Main font
- **JetBrains Mono** - Code snippets

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Portfolio**: [Your Deployed URL]
- **GitHub**: [@umairehsan6](https://github.com/umairehsan6)
- **LinkedIn**: [umair-ehsan-dev](https://www.linkedin.com/in/umair-ehsan-dev/)
- **Instagram**: [@umairehsan6](https://www.instagram.com/umairehsan6/)
- **Email**: umairehsan59@gmail.com

## 🙏 Acknowledgments

Built with ❤️ using React and Framer Motion.

---

**Mian Umair Ehsan** - Django & React Developer
