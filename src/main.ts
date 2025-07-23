import './style.css'

// Portfolio data
const portfolioData = {
  name: "Richly Harald Januar",
  title: "Informatics | Developer",
  bio: "Informatics student with strong academic performance, hands-on experience in mobile app development, and proven leadership. Skilled in software development and collaboration, eager to grow through real-world projects.",
  skills: ["HTML", "CSS", "Flutter/Dart", "Node.js", "PHP", "Basic Figma", "Python", "Basic Docker", "Java"],
  projects: [
    {
      title: "Autonomous Monitoring Control System - Electromagnetic Field Monitoring",
      description: "Collaborating with BRIN, developed a mobile application to monitor GNSS data",
      tech: ["Flutter", "Node.js", "PostgreSQL"]
    },
    {
      title: "Simple Note App",
      description: "Docker-based application for user to crate, edit and delete notes",
      tech: ["Python", "Docker"]
    },
    {
      title: "Student Enrollment App",
      description: "Simple application for students to enroll courses",
      tech: ["Java"]
    },
    {
      title: "SUBROTO",
      description: "Developed an autonomous mobile robot (AMR), capable to extinguish small fire",
      tech: ["Arduino"]
    }
  ],
  contact: {
    email: "richlyjanuar@gmail.com",
    github: "Richjan2801",
    linkedin: "richly-harald-j",
    instagram: "richlyjan"
  }
}

// Mobile menu toggle
let isMenuOpen = false;

// Email functionality with fallback
function handleEmailClick(email: string) {
  const subject = encodeURIComponent("Portfolio Inquiry");
  const body = encodeURIComponent(`Hi ${portfolioData.name},\n\nI found your portfolio and would like to discuss...`);
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  
  // Try to open mailto
  const link = document.createElement('a');
  link.href = mailtoUrl;
  link.click();
  
  // Fallback: Copy email to clipboard after a short delay
  setTimeout(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address copied to clipboard: ${email}\n\nSince no email client opened, you can paste this into your preferred email app.`);
      }).catch(() => {
        // Fallback for older browsers
        prompt("Copy this email address:", email);
      });
    } else {
      // Fallback for older browsers
      prompt("Copy this email address:", email);
    }
  }, 100);
}

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  
  if (menu && hamburger) {
    menu.classList.toggle('active', isMenuOpen);
    hamburger.classList.toggle('active', isMenuOpen);
  }
}

// Smooth scrolling for navigation
function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    if (isMenuOpen) {
      toggleMobileMenu();
    }
  }
}

// Render the portfolio
function renderPortfolio() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand">
          <span class="brand-name">${portfolioData.name}</span>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="highlight">Hi, I'm</span> ${portfolioData.name}
            </h1>
            <div class="hero-profile-image">
              <img src="/richly-harald-j-portofolio/images/profile.jpg" alt="${portfolioData.name}" class="profile-image">
            </div>
            <h2 class="hero-subtitle">${portfolioData.title}</h2>
            <p class="hero-description">${portfolioData.bio}</p>
            <div class="hero-actions">
              <button class="btn btn-primary" onclick="scrollToSection('projects')">View Projects</button>
              <button class="btn btn-secondary" onclick="scrollToSection('contact')">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">About Me</h2>
            <div class="section-divider"></div>
          </div>
          <div class="about-content">
            <p>I am an Informatics student at President University with a strong academic record and experience in mobile application development and project leadership. I have skills in software development and teamwork. I am ready to contribute professionally and grow through an internship opportunity.</p>
          </div>
        </div>
      </section>

      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Skills & Technologies</h2>
            <div class="section-divider"></div>
          </div>
          <div class="skills-grid">
            ${portfolioData.skills.map(skill => `
              <div class="skill-card">
                <span class="skill-name">${skill}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Featured Projects</h2>
            <div class="section-divider"></div>
          </div>
          <div class="projects-grid">
            ${portfolioData.projects.map(project => `
              <div class="project-card">
                <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Let's Connect</h2>
            <div class="section-divider"></div>
          </div>
          <div class="contact-content">
            <p class="contact-description">I'm always open to discussing new opportunities and interesting projects.</p>
            <div class="contact-links">
              <button class="contact-link" onclick="handleEmailClick('${portfolioData.contact.email}')">
                <span class="contact-icon">✉</span>
                Email
              </button>
              <a href="https://github.com/${portfolioData.contact.github}" class="contact-link" target="_blank">
                <span class="contact-icon">⚡</span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/${portfolioData.contact.linkedin}" class="contact-link" target="_blank">
                <span class="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://instagram.com/${portfolioData.contact.instagram}" class="contact-link" target="_blank">
                <span class="contact-icon">📷</span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 ${portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  `;

  // Add event listeners
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
      }
    });
  });
}

// Initialize the portfolio
renderPortfolio();

// Make functions globally available for onclick handlers
(window as any).scrollToSection = scrollToSection;
(window as any).handleEmailClick = handleEmailClick;
(window as any).handleEmailClick = handleEmailClick;