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
        <a
          href="https://github.com/k-m-r-dev/k-m-r-dev.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="View source on GitHub"
        >
          <i className="fab fa-github"></i> View Source
        </a>
      </nav>

      {/* Hero Section */}
      <div className="hero" id="about">
        <div className="hero-text">
          <h1>Khandker Mahmudur Rahman</h1>
          <h2>Staff Platform Engineer</h2>
          <p>Full Stack (Mobile + Backend + AI Tooling) | Android · iOS · React Native · Flutter · Node.js · Python</p>

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
          <p>Software Engineer with 15+ years of experience leading full-stack development across native mobile (iOS/Android), cross-platform (React Native, Flutter), and backend (Node.js/TypeScript, Python) platforms. Proven track record of architecting mission-critical healthcare and enterprise systems, driving CI/CD automation, building AI-powered tooling, and mentoring distributed engineering teams across multiple time zones.</p>
          <ul style={{ marginTop: '1.25rem', marginLeft: '1.2rem', listStyleType: 'disc' }}>
            <li>Successfully led and coordinated cross-office collaboration between teams in Bangladesh and San Francisco.</li>
            <li>Recognized as a key point of contact for remote teams, enabling smooth distributed operations.</li>
            <li>Successfully trained and guided junior engineers.</li>
          </ul>
        </div>
      </section>

      {/* Career Highlights */}
      <section id="highlights">
        <h2 className="section-title">Career Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <i className="fas fa-user-md"></i>
            <p>Spearheaded 4 flagship healthcare applications serving 1000+ medical professionals with full HIPAA compliance.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Improved cloud service efficiency by 50% through optimized file synchronization.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-rocket"></i>
            <p>Drove 40% increase in iOS &amp; QA team productivity via CI/CD automation; reduced app crash rate to &lt;0.1%.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-mobile-alt"></i>
            <p>Led React Native → Expo migration and MVVM + Clean Architecture overhaul at Field Nation.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-robot"></i>
            <p>Designed and built an AI-powered platform engineering assistant (Slack bot + Python AI service + RAG) that autonomously triages infrastructure requests.</p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" style={{ backgroundColor: 'var(--white)' }}>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Mobile — Native</h3>
            <div className="tags">
              <span className="tag">Kotlin</span>
              <span className="tag">Java</span>
              <span className="tag">Jetpack Compose</span>
              <span className="tag">Swift</span>
              <span className="tag">SwiftUI</span>
              <span className="tag">Objective-C</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Mobile — Cross-Platform</h3>
            <div className="tags">
              <span className="tag">React Native (Expo)</span>
              <span className="tag">Expo Router</span>
              <span className="tag">Flutter</span>
              <span className="tag">Kotlin Multiplatform</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend &amp; APIs</h3>
            <div className="tags">
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">Python</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">Microservices</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Bolt SDK</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="tags">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MySQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Cassandra</span>
              <span className="tag">pgvector</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>AI / ML Tooling</h3>
            <div className="tags">
              <span className="tag">Anthropic Claude API</span>
              <span className="tag">LangChain</span>
              <span className="tag">RAG Pipelines</span>
              <span className="tag">Google STT</span>
              <span className="tag">Deepgram</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Architecture</h3>
            <div className="tags">
              <span className="tag">MVVM</span>
              <span className="tag">Clean Architecture</span>
              <span className="tag">Modular Design</span>
              <span className="tag">Microservices</span>
              <span className="tag">Expo Router</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Security</h3>
            <div className="tags">
              <span className="tag">HIPAA</span>
              <span className="tag">OAuth2</span>
              <span className="tag">JWT</span>
              <span className="tag">SSL Pinning</span>
              <span className="tag">OWASP</span>
              <span className="tag">Secure Storage</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>DevOps / CI/CD &amp; Cloud</h3>
            <div className="tags">
              <span className="tag">GitHub Actions</span>
              <span className="tag">Fastlane</span>
              <span className="tag">Jenkins</span>
              <span className="tag">Firebase App Distribution</span>
              <span className="tag">FCM</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS</span>
              <span className="tag">GCP</span>
              <span className="tag">Firebase</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Leadership</h3>
            <div className="tags">
              <span className="tag">Cross-office Collaboration</span>
              <span className="tag">Technical Mentorship</span>
              <span className="tag">Architecture Planning</span>
              <span className="tag">Code Review</span>
              <span className="tag">Scrum</span>
              <span className="tag">Sprint Planning</span>
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
              <div className="job-title">Staff Platform Engineer — Mobile Enablement &amp; Backend</div>
              <div className="company">Field Nation</div>
            </div>
            <span className="date">2025 – Present</span>
          </div>
          <p style={{ color: '#64748b', marginBottom: '0.75rem' }}>
            Building and maintaining the platform APIs and React Native mobile app powering a marketplace connecting businesses with field technicians worldwide.
          </p>
          <ul>
            <li>Design, develop, and maintain clean, scalable RESTful APIs using TypeScript and Node.js within a microservices architecture.</li>
            <li>Architect and manage complex database systems across relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Cassandra) platforms.</li>
            <li>Build and maintain high-performance CI/CD pipelines for mobile and backend services.</li>
            <li>Maintain the React Native app for Android &amp; iOS; own crash rate, performance, and store ratings.</li>
            <li>Led Expo migration and team-approved plan to adopt Expo Router with MVVM + Clean Architecture.</li>
            <li>Designed and implemented FCM Rich Push Notifications in a dedicated Notification microservice.</li>
            <li>Built an AI-powered platform engineering assistant (Slack bot · Bolt SDK + Python FastAPI · Claude API) with RAG knowledge engine, feature flags, and React ticket dashboard.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Principal Software Engineer</div>
              <div className="company">Augmedix</div>
            </div>
            <span className="date">2023 – 2025</span>
          </div>
          <ul>
            <li>Led architectural design and development of mission-critical healthcare applications serving 1000+ medical professionals.</li>
            <li>Architected and implemented a cross-platform mobile solution using Flutter across iOS, Android, and Web.</li>
            <li>Established HIPAA-compliant security protocols for sensitive medical data, reducing vulnerabilities by 90%.</li>
            <li>Mentored developers in best practices and modern workflows, improving team productivity by 60%.</li>
            <li>Designed CI/CD pipelines using GitHub Actions and Fastlane, reducing iOS deployment time by 60+ minutes per release.</li>
            <li>Standardized cross-office task handoff between San Francisco and Dhaka, increasing overall team efficiency by 95%.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Senior Staff Software Engineer</div>
              <div className="company">Augmedix</div>
            </div>
            <span className="date">2021 – 2022</span>
          </div>
          <ul>
            <li>Fortified security framework addressing MitM, jailbreak, and insecure data storage vulnerabilities aligned with OWASP standards, reducing vulnerabilities by 90%.</li>
            <li>Developed AI-powered features for mobile platforms, increasing user engagement and productivity.</li>
            <li>Established automated testing framework achieving 85% code coverage.</li>
            <li>Optimized app performance resulting in 40% faster load times.</li>
            <li>Managed App Store &amp; Play Store submissions and releases.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Software Architect</div>
              <div className="company">BJIT Limited</div>
            </div>
            <span className="date">2020 – 2021</span>
          </div>
          <ul>
            <li>Led architectural redesign of core text processing engine improving performance by 40%.</li>
            <li>Implemented microservices architecture reducing system coupling by 60%.</li>
            <li>Established coding standards and review processes adopted company-wide.</li>
            <li>Mentored junior architects in system design principles and best practices.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Assistant Principal Software Engineer</div>
              <div className="company">BroTecs Technologies Limited</div>
            </div>
            <span className="date">2017 – 2020</span>
          </div>
          <ul>
            <li>Architected secure VPN solutions for major streaming platforms.</li>
            <li>Developed custom XMPP communication framework.</li>
            <li>Led development of FireTV Stick VPN client with 100K+ active users.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Senior Software Engineer</div>
              <div className="company">BroTecs Technologies Limited</div>
            </div>
            <span className="date">2014 – 2017</span>
          </div>
          <ul>
            <li>Developed VOIP SDK used by 5+ enterprise clients.</li>
            <li>Integrated push notification systems handling 1M+ daily messages.</li>
            <li>Optimized battery consumption in VOIP applications by 30%.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">Software Engineer</div>
              <div className="company">BroTecs Technologies Limited</div>
            </div>
            <span className="date">2012 – 2013</span>
          </div>
          <ul>
            <li>Developed firmware for aviation-grade custom hardware.</li>
            <li>Developed client-server applications using TCP/UDP protocols.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="job-header">
            <div>
              <div className="job-title">System Design Engineer</div>
              <div className="company">Embedded Engineering and Robotics Technology Ltd</div>
            </div>
            <span className="date">2010 – 2012</span>
          </div>
          <ul>
            <li>Designed circuit boards and firmware for various embedded systems.</li>
            <li>Developed GSM-based monitoring systems and microclimate devices.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ backgroundColor: 'var(--white)' }}>
        <h2 className="section-title">Notable Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI-Powered Platform Engineering Assistant</h3>
            <span className="project-tech">AI / ML | Slack | FastAPI | RAG | 2026</span>
            <p>AI-powered Slack bot + Python AI service (FastAPI · Claude API) that autonomously triages infrastructure support requests. Automated round-robin ticket assignment with Slack &amp; email notifications. React dashboard with configurable feature flags. RAG knowledge engine on LangChain and pgvector.</p>
          </div>
          <div className="project-card">
            <h3>Field Nation Mobile Platform — React Native Overhaul</h3>
            <span className="project-tech">React Native | Expo | FCM | 2026</span>
            <p>Migrated app from raw React Native to Expo RN. Leading architectural overhaul with Expo Router + MVVM + Clean Architecture. Introduced FCM Rich Push Notifications as a standalone microservice, decoupled from monolithic core.</p>
          </div>
          <div className="project-card">
            <h3>Augmedix Live</h3>
            <span className="project-tech">Healthcare | HIPAA | WebRTC | 2022 – 2024</span>
            <p>Healthcare communication platform serving 1000+ medical professionals with 99.9% uptime. Led HIPAA-compliant real-time messaging and secure video streaming. Reduced latency by 40% through WebRTC optimization. Implemented visit-recording mode and note generation for Android &amp; iOS.</p>
          </div>
          <div className="project-card">
            <h3>Augmedix Go / Augmedix Go ED</h3>
            <span className="project-tech">Healthcare | HIPAA | AI/ML | ASR | 2022 – 2023</span>
            <p>AI/ML driven HIPAA-compliant healthcare mobile solution serving 500+ medical professionals. Led architecture and development of HIPAA-compliant iOS app with secure mobile data storage. Implemented real-time ASR based on Google STT and Deepgram.</p>
          </div>
          <div className="project-card">
            <h3>Privacy Hero / Streamlocator</h3>
            <span className="project-tech">VPN | Networking | Security | 2019</span>
            <p>Enterprise VPN solution with 100K+ active users. Architected secure tunneling protocols achieving 70% reduction in data costs. Implemented automatic server selection reducing connection time by 50%.</p>
          </div>
          <div className="project-card">
            <h3>Other Notable Work</h3>
            <span className="project-tech">Android | IoT | Aviation | Hardware</span>
            <p>Skylar · SkylarLite · GoDirect Voice · Bombardier Cabin Call · SAP212 · Pocketalk — applications spanning custom hardware, aviation-grade firmware, and handheld translation devices.</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div style={{ fontWeight: 700, color: 'var(--secondary)' }}>Bachelor of Science in Electrical &amp; Electronic Engineering</div>
          <div style={{ color: 'var(--primary)' }}>Stamford University, Dhaka, Bangladesh</div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" style={{ backgroundColor: 'var(--white)' }}>
        <h2 className="section-title">Interests &amp; Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="fas fa-utensils"></i>
            <h4>Culinary Explorer</h4>
            <p>A firm believer that great food is one of life&apos;s best adventures. I love cooking and discovering new tastes.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-motorcycle"></i>
            <h4>Motorcycle Enthusiast</h4>
            <p>Finds freedom and adventure exploring the open road on two wheels.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-gamepad"></i>
            <h4>Strategic Gamer</h4>
            <p>Call of Duty on PS5 — sharpening tactical thinking and competitive focus.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-fish"></i>
            <h4>Angler</h4>
            <p>Finds calm and focus on the water — patience, precision, and a good catch.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Khandker Mahmudur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
