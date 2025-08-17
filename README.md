# CS Student Portfolio

A modern, responsive React portfolio website designed specifically for Computer Science students seeking internship opportunities. This portfolio showcases your skills, projects, and experience in a clean, professional manner.

## Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with React and modern web technologies
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- 🔧 **Easy Customization** - Simple to modify content and styling
- 📧 **Contact Form** - Functional contact form for potential employers
- 🌟 **Smooth Animations** - Engaging animations using Framer Motion

## Sections Included

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Background, education, and interests
3. **Skills Section** - Programming languages and technologies with progress bars
4. **Projects Section** - Portfolio of technical projects with filtering
5. **Experience Section** - Professional experience and achievements
6. **Contact Section** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio.

## Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Hero Section (`src/components/Hero.js`)
```javascript
// Update these lines
Hi, I'm <span className="highlight">Your Name</span>
Computer Science Student
// Update social media links
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
```

#### 2. About Section (`src/components/About.js`)
```javascript
// Update education information
<h5>Bachelor of Science in Computer Science</h5>
<p>Your University Name</p>
<p>Expected Graduation: 2025</p>
<p>GPA: 3.8/4.0</p>
```

#### 3. Skills Section (`src/components/Skills.js`)
```javascript
// Update skill levels and add/remove skills as needed
{ name: "JavaScript", icon: <FaJs />, level: 85, color: "#f7df1e" }
```

#### 4. Projects Section (`src/components/Projects.js`)
```javascript
// Replace with your actual projects
{
  id: 1,
  title: "Your Project Name",
  description: "Your project description",
  image: "your-project-image-url",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  live: "https://your-project-url.com"
}
```

#### 5. Experience Section (`src/components/Experience.js`)
```javascript
// Update with your actual experience
{
  id: 1,
  type: "internship",
  title: "Your Internship Title",
  company: "Company Name",
  duration: "Duration",
  description: "Your role description"
}
```

#### 6. Contact Section (`src/components/Contact.js`)
```javascript
// Update contact information
{
  icon: <FaEnvelope />,
  title: "Email",
  value: "your.email@example.com",
  link: "mailto:your.email@example.com"
}
```

### Styling Customization

#### Colors
The main color scheme can be customized by updating CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #0056b3;
  --text-color: #333;
  --background-color: #ffffff;
}
```

#### Fonts
Update the Google Fonts link in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Add the component to `src/App.js`
3. Add navigation link in `src/components/Navbar.js`
4. Style the component with CSS

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure your domain

### Deploy to GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## SEO Optimization

### Meta Tags
Update `public/index.html`:
```html
<title>Your Name - CS Student Portfolio</title>
<meta name="description" content="CS Student Portfolio - Showcasing projects and skills for internship opportunities">
```

### Social Media Cards
Add Open Graph tags for better social media sharing:
```html
<meta property="og:title" content="Your Name - CS Student Portfolio">
<meta property="og:description" content="CS Student Portfolio - Showcasing projects and skills">
<meta property="og:image" content="%PUBLIC_URL%/og-image.jpg">
```

## Performance Tips

1. **Optimize Images** - Use compressed images and consider WebP format
2. **Lazy Loading** - Images are already set up for lazy loading
3. **Code Splitting** - React automatically handles code splitting
4. **Minification** - Build process automatically minifies code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Good luck with your internship applications! 🚀**
