(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const n={name:"Richly Harald Januar",title:"Informatics | Developer",bio:"Informatics student with strong academic performance, hands-on experience in mobile app development, and proven leadership. Skilled in software development and collaboration, eager to grow through real-world projects.",skills:["HTML","CSS","Flutter/Dart","Node.js","PHP","Basic Figma","Python","Basic Docker","Java"],projects:[{title:"Autonomous Monitoring Control System - Electromagnetic Field Monitoring",description:"Collaborating with BRIN, developed a mobile application to monitor GNSS data",tech:["Flutter","Node.js","PostgreSQL"]},{title:"Simple Note App",description:"Docker-based application for user to crate, edit and delete notes",tech:["Python","Docker"]},{title:"Student Enrollment App",description:"Simple application for students to enroll courses",tech:["Java"]},{title:"SUBROTO",description:"Developed an autonomous mobile robot (AMR), capable to extinguish small fire",tech:["Arduino"]}],contact:{email:"richlyjanuar@gmail.com",github:"Richjan2801",linkedin:"richly-harald-j",instagram:"richlyjan"}};let l=!1;function r(o){const t=encodeURIComponent("Portfolio Inquiry"),a=encodeURIComponent(`Hi ${n.name},

I found your portfolio and would like to discuss...`),s=`mailto:${o}?subject=${t}&body=${a}`,e=document.createElement("a");e.href=s,e.click(),setTimeout(()=>{navigator.clipboard?navigator.clipboard.writeText(o).then(()=>{alert(`Email address copied to clipboard: ${o}

Since no email client opened, you can paste this into your preferred email app.`)}).catch(()=>{prompt("Copy this email address:",o)}):prompt("Copy this email address:",o)},100)}function d(){l=!l;const o=document.querySelector(".nav-menu"),t=document.querySelector(".hamburger");o&&t&&(o.classList.toggle("active",l),t.classList.toggle("active",l))}function p(o){const t=document.getElementById(o);t&&(t.scrollIntoView({behavior:"smooth"}),l&&d())}function u(){const o=document.querySelector("#app");o.innerHTML=`
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand">
          <span class="brand-name">${n.name}</span>
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
              <span class="highlight">Hi, I'm</span> ${n.name}
            </h1>
            <div class="hero-profile-image">
              <img src="/richly-harald-j-portofolio/images/profile.jpg" alt="${n.name}" class="profile-image">
            </div>
            <h2 class="hero-subtitle">${n.title}</h2>
            <p class="hero-description">${n.bio}</p>
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
            ${n.skills.map(s=>`
              <div class="skill-card">
                <span class="skill-name">${s}</span>
              </div>
            `).join("")}
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
            ${n.projects.map(s=>`
              <div class="project-card">
                <div class="project-content">
                  <h3 class="project-title">${s.title}</h3>
                  <p class="project-description">${s.description}</p>
                  <div class="project-tech">
                    ${s.tech.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                  </div>
                </div>
              </div>
            `).join("")}
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
              <button class="contact-link" onclick="handleEmailClick('${n.contact.email}')">
                <span class="contact-icon">✉</span>
                Email
              </button>
              <a href="https://github.com/${n.contact.github}" class="contact-link" target="_blank">
                <span class="contact-icon">⚡</span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/${n.contact.linkedin}" class="contact-link" target="_blank">
                <span class="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://instagram.com/${n.contact.instagram}" class="contact-link" target="_blank">
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
        <p>&copy; 2025 ${n.name}. All rights reserved.</p>
      </div>
    </footer>
  `;const t=document.querySelector(".hamburger"),a=document.querySelectorAll(".nav-link");t&&t.addEventListener("click",d),a.forEach(s=>{s.addEventListener("click",e=>{e.preventDefault();const i=s.getAttribute("href");if(i){const c=i.substring(1);p(c)}})})}u();window.scrollToSection=p;window.handleEmailClick=r;window.handleEmailClick=r;
