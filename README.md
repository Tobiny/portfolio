# Luis Fernando Chavez - Portfolio Website

A modern, responsive portfolio website showcasing my expertise as a Python Developer and Machine Learning Engineer.

## 🚀 Overview

This portfolio website demonstrates my professional experience, technical skills, and projects in the fields of AI/ML, data science, and software development. Built with modern web technologies and optimized for performance and user experience.

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Inter)
- **Animation**: CSS animations and JavaScript Intersection Observer API
- **Architecture**: Modular structure with separated CSS and JavaScript files

## 📁 Project Structure

```
portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   └── main.js             # JavaScript functionality
│   └── images/                 # Image assets (to be added)
├── index.html                  # Main HTML file
├── CNAME                       # Custom domain configuration
├── CLAUDE.md                   # Claude Code guidance file
└── README.md                   # Project documentation
```

## ✨ Features

### Design & UI/UX
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Animations**: Smooth transitions and scroll animations
- **Interactive Elements**: Hover effects, ripple animations, and dynamic content
- **Loading Screen**: Elegant loading overlay with spinner
- **Smooth Scrolling**: Enhanced navigation experience

### Content Sections
- **Hero Section**: Dynamic rotating text with professional introduction
- **About Section**: Personal background with photo placeholder
- **Experience Timeline**: Interactive work experience with tech stacks
- **Skills Matrix**: Categorized technical skills with proficiency levels
- **Projects Showcase**: Featured projects with links and descriptions
- **Contact Information**: Multiple contact methods and social links

### Technical Features
- **Performance Optimized**: Throttled scroll events and efficient animations
- **Cross-browser Compatible**: Modern CSS with fallbacks
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: ARIA labels and keyboard navigation support

## 🎯 Professional Profile

**Luis Fernando Chavez**  
Python Developer & Machine Learning Engineer

- 📧 Email: contact@lfchavez.com
- 📞 Phone: +52 341 111 0005
- 📍 Location: Ciudad Guzmán, Jalisco, Mexico
- 💼 LinkedIn: [luis-fernando-chavez-jimenez-ba850317a](https://linkedin.com/in/luis-fernando-chavez-jimenez-ba850317a)

### Key Expertise
- **AI/ML Development**: Python, TensorFlow, PyTorch, Scikit-learn
- **Cloud Platforms**: AWS (EC2, S3, SageMaker, Lambda), GCP
- **Backend Development**: Django, Flask, FastAPI
- **Databases**: PostgreSQL, MySQL, MongoDB
- **DevOps**: Docker, Git, Linux, CI/CD
- **Data Science**: Pandas, NumPy, Data Engineering, ETL Pipelines

### Notable Achievements
- Increased real-time classification accuracy by 60% using AWS Lambda and OpenAI integration
- 4+ years of experience in AI/ML model development and LLM implementation
- Expert-level proficiency in AWS ecosystem and PostgreSQL
- Specialized in advanced NLP tasks and predictive modeling

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Local Development**
   
   **Option 1: Python HTTP Server**
   ```bash
   python -m http.server 8000
   ```
   
   **Option 2: Node.js HTTP Server**
   ```bash
   npx http-server
   ```
   
   **Option 3: Live Server (VS Code Extension)**
   - Install Live Server extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in Browser**
   Navigate to `http://localhost:8000` (or the port specified by your server)

### Customization

#### Adding Your Photo
Replace the placeholder in the About section:
1. Add your photo to `assets/images/`
2. Update the image source in `index.html`:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Luis Fernando Chavez" id="profilePhoto">
   ```
3. Show the image by removing the `style="display: none;"` attribute

#### Adding Your CV
To enable CV downloads:
1. **Add your CV file**: Place your PDF CV in the `assets/cv/` directory
2. **Name the file**: `Luis_Fernando_Chavez_CV.pdf` (or update the filename in `assets/js/main.js`)
3. **The download is automatic**: When users click "Download CV", it will download your PDF file

**CV File Location**: `assets/cv/Luis_Fernando_Chavez_CV.pdf`

#### Updating Content
- **Personal Information**: Edit the contact details in `index.html`
- **Work Experience**: Modify the timeline items in the Experience section
- **Skills**: Update the skills categories and proficiency levels
- **Projects**: Add your own projects with descriptions and links

#### Styling Changes
- **Colors**: Modify CSS custom properties in `assets/css/styles.css`:
  ```css
  :root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... other variables */
  }
  ```
- **Fonts**: Change the Google Fonts import in `index.html`
- **Animations**: Adjust timing and effects in the CSS file

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Lazy Loading**: Intersection Observer for scroll animations
- **Optimized Images**: Placeholder system for efficient loading
- **Minification Ready**: Clean, organized code structure
- **CDN Assets**: External resources loaded from CDNs
- **Smooth Scrolling**: Hardware-accelerated animations

## 🔧 Development

### Code Structure
- **HTML**: Semantic structure with proper accessibility
- **CSS**: BEM-inspired naming with CSS custom properties
- **JavaScript**: Modern ES6+ with modular functions

### Key JavaScript Features
- Intersection Observer for scroll animations
- Dynamic text rotation with typewriter effect
- Smooth scrolling navigation
- Interactive skill tooltips
- Responsive navigation handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📞 Contact

For any questions or collaboration opportunities:

- **Email**: contact@lfchavez.com
- **LinkedIn**: [Connect with me](https://linkedin.com/in/luis-fernando-chavez-jimenez-ba850317a)
- **Location**: Ciudad Guzmán, Jalisco, Mexico

---

*Built with passion and lots of coffee ☕ by Luis Fernando Chavez*