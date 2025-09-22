# ✨ Godson Igoniwari - Interactive Portfolio

A stunning, immersive portfolio website featuring a 3D starfield background, smooth animations, and modern design principles. Built with cutting-edge web technologies to showcase creative development skills.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3+-blue)

## 🌟 Features

### **Immersive 3D Background**
- **Multi-layered Starfield**: Background, midground, and foreground stars with depth-based parallax
- **Dynamic Nebulae**: Floating cloud formations with pulsing effects
- **Space Dust Particles**: Realistic floating debris with trail effects
- **Interactive Elements**: Stars and particles respond to mouse movement and scrolling
- **Smooth Animations**: 60fps performance with optimized rendering

### **Modern UI/UX**
- **Glass Morphism Design**: Translucent cards with backdrop blur effects
- **Smooth Transitions**: Elegant section transitions with staggered animations
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Minimalist Navigation**: Clean sidebar with hover effects and active indicators
- **Typewriter Effect**: Dynamic text animation in the hero section

### **Performance Optimized**
- **Canvas-based Rendering**: Hardware-accelerated background animations
- **Efficient State Management**: Optimized React hooks and memoization
- **Lazy Loading**: Smart component loading for better performance
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🚀 Live Demo

Visit the live portfolio: **[godson.dev](https://godson.dev)**

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Animations
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Animations**: Canvas API + CSS Keyframes
- **Icons**: Custom SVG icons
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/OmiIam/grey-starry-gallery.git

# Navigate to project directory
cd grey-starry-gallery

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing page with typewriter effect
│   │   ├── AboutSection.tsx     # About me with skill cards
│   │   ├── ProjectsSection.tsx  # Project showcase with cards
│   │   └── ContactSection.tsx   # Contact information grid
│   ├── ui/
│   │   ├── SectionWrapper.tsx   # Consistent section layout
│   │   ├── SectionHeader.tsx    # Reusable header component
│   │   ├── ProjectCard.tsx      # Project card component
│   │   └── ContactLink.tsx      # Contact link component
│   ├── StarryBackground.tsx     # 3D canvas background system
│   ├── Navigation.tsx           # Responsive navigation
│   └── MainContent.tsx          # Main content router
├── hooks/
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # Utility functions
└── pages/
    ├── Index.tsx               # Main page component
    └── NotFound.tsx            # 404 page
```

## 🌌 Background System

The portfolio features a sophisticated 3D background system built with Canvas API:

### **Star Layers**
- **Background Stars**: 200+ small, dim stars with minimal parallax
- **Midground Stars**: 100+ medium stars with moderate parallax
- **Foreground Stars**: 50+ large, bright stars with strong parallax

### **Dynamic Elements**
- **Nebulae**: 5 floating cloud formations with pulsing effects
- **Dust Particles**: 50+ floating space debris with trail effects
- **Energy Particles**: 30+ bright particles with glowing trails

### **Interactive Features**
- **Mouse Parallax**: Elements respond to cursor movement
- **Scroll Parallax**: Background moves with page scrolling
- **Proximity Effects**: Stars brighten when mouse approaches
- **Smooth Animations**: All movements are fluid and natural

## 🎯 Key Components

### **HeroSection**
- Dynamic typewriter effect with rotating titles
- Floating particle animations
- Gradient text effects
- Call-to-action buttons with hover animations
- Statistics display with animated counters

### **AboutSection**
- Glass morphism skill cards
- Staggered entrance animations
- Responsive grid layout
- Hover lift effects

### **ProjectsSection**
- Project cards with tech stack tags
- GitHub and live demo links
- Hover animations and shadows
- Responsive grid system

### **ContactSection**
- Streamlined contact grid
- Social media links
- Hover effects and transitions
- Mobile-optimized layout

## 🎨 Design Principles

- **Minimalism**: Clean, uncluttered design with purposeful elements
- **Motion Design**: Smooth animations that enhance user experience
- **Glass Morphism**: Modern translucent design language
- **Responsive**: Mobile-first approach with progressive enhancement
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
# Deploy to Vercel
```

### **Netlify**
```bash
npm run build
# Deploy to Netlify
```

### **Custom Domain**
Configure your custom domain in your hosting provider's settings.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Godson Igoniwari**
- Email: hello@godson.dev
- LinkedIn: [godson-igoniwari](https://linkedin.com/in/godson-igoniwari)
- GitHub: [OmiIam](https://github.com/OmiIam)

---

⭐ **Star this repository if you found it helpful!**