import React from 'react';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="logo">KMR</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#hobbies">Interests</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero" id="about">
        <div className="hero-text">
          <h1>Khandker Mahmudur Rahman</h1>
          <h2>Principal Software Engineer</h2>
          <p>Lead Engineer | Full Stack (Mobile + Backend) | Android, iOS, Flutter & Python</p>
          
          <div className="contact-info">
            <a href="mailto:mahmudur85@gmail.com"><i className="fas fa-envelope"></i> mahmudur85@gmail.com</a>
            <a href="https://www.linkedin.com/in/k-m-r" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <span><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="hero-img">
          {/* Note: In Vite, /profile.jpg points to the public folder */}
          <img src="/profile.jpg" alt="Khandker Mahmudur Rahman" />
        </div>
      </div>

      {/* Professional Summary */}
      <section id="summary">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <p>Highly skilled Principal Software Engineer with proven leadership in remote team collaboration. Recognized for outstanding technical and organizational abilities, ensuring seamless communication between global teams. Praised for fostering a high-performing, challenge-driven, and productive work environment. Specialist in native iOS/Android development and modern cross-platform frameworks, consistently delivering high-performance applications that exceed business objectives.</p>
        </div>
      </section>

      {/* Career Highlights */}
      <section id="highlights">
        <h2 className="section-title">Career Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <i className="fas fa-user-md"></i>
            <p>Led development of HIPAA-compliant apps serving 1000+ healthcare professionals.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Achieved 50% improvement in cloud service efficiency through optimized synchronization.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-shield-alt"></i>
            <p>Reduced security vulnerabilities via enhanced SSL Pinning implementation.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-rocket"></i>
            <p>Implemented CI/CD pipelines boosting iOS & QA team productivity by 40%.</p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" style={{backgroundColor: 'var(--white)'}}>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Mobile Development</h3>
            <div className="tags">
              <span className="tag">Kotlin</span>
              <span className="tag">Java</span>
              <span className="tag">Jetpack Compose</span>
              <span className="tag">Swift</span>
              <span className="tag">SwiftUI</span>
              <span className="tag">Objective-C</span>
              <span className="tag">Flutter</span>
              <span className="tag">Kotlin Multiplatform</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend & Cloud</h3>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">AWS</span>
              <span className="tag">GCP</span>
              <span className="tag">Firebase</span>
              <span className="tag">Docker</span>
              <span className="tag">Fastlane</span>
              <span className="tag">Jenkins</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Architecture & Process</h3>
            <div className="tags">
              <span className="tag">MVVM</span>
              <span className="tag">Clean Architecture</span>
              <span className="tag">Modular Design</span>
              <span className="tag">HIPAA Compliance</span>
              <span className="tag">Agile/Scrum</span>
              <span className="tag">Team Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="section-title">Work History</h2>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Principal Software Engineer</div>
              <div className="company">Augmedix</div>
            </div>
            <span className="date">2023 - Present</span>
          </div>
          <ul>
            <li>Led architectural design and development of mission-critical healthcare applications.</li>
            <li>Architected and implemented cross-platform solution using Flutter.</li>
            <li>Established HIPAA-compliant security protocols for sensitive medical data handling on iOS.</li>
            <li>Mentored team of 5 developers, implementing best practices and modern workflows.</li>
            <li>Reduced app crash rate to &lt;0.1% through robust error handling.</li>
            <li>Designed and implemented CI/CD pipelines using GitHub Actions.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Senior Staff Software Engineer</div>
              <div className="company">Augmedix</div>
            </div>
            <span className="date">2021 - 2022</span>
          </div>
          <ul>
            <li>Implemented comprehensive security framework reducing vulnerabilities.</li>
            <li>Developed AI-powered features for Mobile platforms.</li>
            <li>Established automated testing framework achieving 85% code coverage.</li>
            <li>Optimized app performance resulting in 40% faster load times.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Software Architect</div>
              <div className="company">BJIT Limited</div>
            </div>
            <span className="date">2020 - 2021</span>
          </div>
          <ul>
            <li>Led architectural redesign of core text processing engine improving performance by 40%.</li>
            <li>Implemented microservices architecture reducing system coupling by 60%.</li>
            <li>Established coding standards and review processes company-wide.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Assistant Principal Software Engineer</div>
              <div className="company">BroTecs Technologies Limited</div>
            </div>
            <span className="date">2017 - 2020</span>
          </div>
          <ul>
            <li>Architected secure VPN solutions for major streaming platforms.</li>
            <li>Developed custom XMPP communication framework.</li>
            <li>Led development of FireTV Stick VPN client with 100K+ active users.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{backgroundColor: 'var(--white)'}}>
        <h2 className="section-title">Notable Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Augmedix Live & Go</h3>
            <span className="project-tech">Healthcare | HIPAA | AI/ML | WebRTC</span>
            <p>Healthcare communication platform serving 1000+ professionals. Led development of real-time messaging, secure video streaming (99.9% uptime), and latency reduction by 40%. Implemented real-time ASR services using Google STT and Deepgram.</p>
          </div>
          <div className="project-card">
            <h3>Privacy Hero / Streamlocator</h3>
            <span className="project-tech">VPN | Networking | Security</span>
            <p>Enterprise VPN solution with 100K+ active users. Architected secure tunneling protocols and achieved 70% reduction in data costs through automatic server selection reducing connection time by 50%.</p>
          </div>
          <div className="project-card">
            <h3>Skylar & Mobile Apps</h3>
            <span className="project-tech">Android | Custom Hardware | IoT</span>
            <p>Developed various applications including Skylar (Application Designer), GoDirect Voice, Bombardier Cabin Call, and Pocketalk (Handheld translation device). Worked on firmware for aviation-grade hardware.</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div style={{fontWeight: 700, color: 'var(--secondary)'}}>Bachelor of Science in Electrical & Electronic Engineering</div>
          <div style={{color: 'var(--primary)'}}>Stamford University, Dhaka, Bangladesh</div>
        </div>
        <div className="education-card">
          <div style={{fontWeight: 700, color: 'var(--secondary)'}}>Higher Secondary School Certificate</div>
          <div style={{color: 'var(--primary)'}}>Engineering University School, Dhaka</div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" style={{backgroundColor: 'var(--white)'}}>
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="fas fa-utensils"></i>
            <h4>Culinary Explorer</h4>
            <p>A firm believer that great food is one of life's best adventures. I love cooking and discovering new tastes.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-motorcycle"></i>
            <h4>Motorcycle Enthusiast</h4>
            <p>Finds freedom and adventure exploring the open road on two wheels.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-gamepad"></i>
            <h4>Gamer</h4>
            <p>Strategic gamer on PC & Mobile (Call of Duty) sharpening tactical thinking.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-film"></i>
            <h4>Entertainment</h4>
            <p>Avid fan of Anime and Action/Thriller Movies & TV Series.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-plane-departure"></i>
            <h4>Traveler</h4>
            <p>Passion for traveling to new locations and experiencing different cultures.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Khandker Mahmudur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;